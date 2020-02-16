import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { objectOf, bool, any, func, arrayOf } from 'prop-types';
import { Link } from "react-router-dom";

import { pokemonState } from '../../redux/Pokemon/selectors';
import { getPokemonList } from '../../redux/Pokemon/action';
import { getDataFromUrl } from '../../lib/helper';
import { PokemonListWrapper, PokemonContainer } from '../styled';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';

const Content = ({
  setPokemonList, isLoading, pokemonList, myPokemonList,
}) => {
  const { next, previous } = pokemonList;
  const nextPath = !isEmpty(next) && `/${getDataFromUrl(next, 1)}`
  const previousPath = !isEmpty(previous) && `/${getDataFromUrl(previous, 1)}`
  const ownedTotal = myPokemonList.length;

  useEffect(() => {
    setPokemonList()
  }, [setPokemonList]);

  const onClickNext = () => setPokemonList(nextPath);
  const onClickPrev = () => setPokemonList(previousPath);

  return (
    <>
      <h2> Pokemon List </h2>
      <h4> You have <Link to="/profile">{ownedTotal} Pokemon</Link> </h4>
      {isLoading ? (
        <PokemonCard loading={isLoading} />
      ) : (
        <PokemonContainer>
          <Pagination onClickNext={onClickNext} onClickPrevious={onClickPrev} />
          <PokemonListWrapper>
            {pokemonList.results.map((data) => {
              const { url, name } = data;
              const pokeIDX = getDataFromUrl(url, 2);
              return (
                <PokemonCard name={name} key={pokeIDX} pokeId={pokeIDX} />
              );
            })}
          </PokemonListWrapper>
        </PokemonContainer>
      )}
    </>
  );
}

export const mapStateToProps = createStructuredSelector({
  isLoading: pokemonState('loading'),
  pokemonList: pokemonState(),
  myPokemonList: pokemonState('myPokemon'),
});

const mapDispatchToProps = {
  setPokemonList: getPokemonList,
};

Content.propTypes = {
  isLoading: bool.isRequired,
  pokemonList: objectOf(any).isRequired,
  setPokemonList: func.isRequired,
  myPokemonList: arrayOf(any).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
