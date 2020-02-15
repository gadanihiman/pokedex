import React, { useState } from 'react';
import { Skeleton, Card, Icon } from 'antd';
import { PokemonCardWrapper, CustomCard, CardTitle, Sprite } from './styled';

const { Meta } = Card;

const PokemonCard = ({ name, loading, pokeId }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const imageUrl =
    `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeId}.png?raw=true`;
  return (
    <PokemonCardWrapper>
      <CustomCard
        actions={[
          <Icon type="user-add" />
        ]}
      >
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
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
