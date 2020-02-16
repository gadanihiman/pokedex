import React, { useState } from 'react';
import { Skeleton, Card, Icon } from 'antd';
import { Link } from "react-router-dom";
import { PokemonCardWrapper, CustomCard, CardTitle, Sprite } from '../styled';

const { Meta } = Card;

const PokemonCard = ({ name, loading, pokeId, imageSrc }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const imageUrl =
    !imageSrc 
      ? `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeId}.png?raw=true`
      : imageSrc;
  const detailLink = `/pokemon/${pokeId}`
  return (
    <PokemonCardWrapper>
      <Link to={detailLink}>
        <CustomCard hoverable>
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <>
                  {imageLoading && <Icon type="loading" />}
                  <Sprite
                    src={imageUrl}
                    onLoad={() => setImageLoading(false)}  
                  />
                </>
              }
              title={<CardTitle>{name}</CardTitle>}
            />
          </Skeleton>
        </CustomCard>
      </Link>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
