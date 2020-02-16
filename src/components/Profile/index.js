import React from 'react'
import { arrayOf, any } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from "react-router-dom";
import { isEmpty } from 'lodash';

import { pokemonState } from '../../redux/Pokemon/selectors';
import PokemonCard from '../PokemonCard';
import { PokemonListWrapper, PokemonContainer } from '../styled';

// TODO: Need to have pagination

const Profile = ({
  myPokemonList
}) => {
  return (
    <div>
      <h2> My Pokemon List </h2>
      <PokemonContainer>
        <PokemonListWrapper>
          {!isEmpty(myPokemonList) ? (
            myPokemonList.map((data) => {
              const { id, key, name, sprites: { front_default } } = data;
              return (
                <PokemonCard
                  name={name}
                  key={key}
                  indexKey={key}
                  pokeId={id}
                  imageSrc={front_default}
                  withDeleteBtn
                />
              );
            })
          ) : (
            <h2> Sorry, You still have no Pokemon, <Link to='/'> Go find now!</Link> </h2>
          )}
        </PokemonListWrapper>
      </PokemonContainer>
    </div>
  );
};

export const mapStateToProps = createStructuredSelector({
  myPokemonList: pokemonState('myPokemon'),
});

Profile.propTypes = {
  myPokemonList: arrayOf(any).isRequired,
};

export default connect(mapStateToProps)(Profile);
