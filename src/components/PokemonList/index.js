import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { objectOf, bool, any, func } from 'prop-types';

import { pokemonState } from '../../redux/Pokemon/selectors';
import { getPokemonList } from '../../redux/Pokemon/action';
import { getDataFromUrl } from '../../lib/helper';
import { PokemonListWrapper, PokemonContainer } from './styled';
import PokemonCard from '../PokemonList/PokemonCard';
import Pagination from './components/Pagination';

const Content = ({
  setPokemonList, isLoading, pokemonList,
}) => {
  const { next, previous } = pokemonList;
  const nextPath = !isEmpty(next) && `/${getDataFromUrl(next, 1)}`
  const previousPath = !isEmpty(previous) && `/${getDataFromUrl(previous, 1)}`

  useEffect(() => {
    setPokemonList()
  }, [setPokemonList]);

  const onClickNext = () => setPokemonList(nextPath);
  const onClickPrev = () => setPokemonList(previousPath);

  return (
    <>
      <h2> Pokemon List </h2>
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
});

const mapDispatchToProps = {
  setPokemonList: getPokemonList,
};

Content.propTypes = {
  isLoading: bool.isRequired,
  pokemonList: objectOf(any).isRequired,
  setPokemonList: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
