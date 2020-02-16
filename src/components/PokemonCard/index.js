import React, { useState } from 'react';
import { Skeleton, Card, Icon } from 'antd';
import { Link } from "react-router-dom";
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { deletePokemon } from '../../redux/Pokemon/action';
import { PokemonCardWrapper, CustomCard, CardTitle, Sprite } from '../styled';

const { Meta } = Card;

const PokemonCard = ({
  indexKey,
  name,
  loading,
  pokeId,
  imageSrc,
  withDeleteBtn,
  onDeletePokemon,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const imageUrl =
    !imageSrc 
      ? `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeId}.png?raw=true`
      : imageSrc;
  const detailLink = `/pokemon/${pokeId}`
  const deletePokemonFunc = (e, pokeId) => {
    e.preventDefault();
    onDeletePokemon(pokeId);
  };

  return (
    <PokemonCardWrapper>
        <CustomCard
          hoverable
          actions={withDeleteBtn ? [
            <Icon type="delete" onClick={e => deletePokemonFunc(e, indexKey)} />
          ] : []}
        >
          <Link to={detailLink}>
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
          </Link>
        </CustomCard>
    </PokemonCardWrapper>
  );
};

export const mapDispatchToProps = {
  onDeletePokemon: deletePokemon,
};

PokemonCard.propTypes = {
  onDeletePokemon: func.isRequired,
};

export default connect(null, mapDispatchToProps)(PokemonCard);
