import { createSelector } from 'reselect';

const selectPokemon = state => state.pokemon;

export const pokemonState = (state = 'pokemonList') =>
  createSelector(
    selectPokemon,
    pokemon => pokemon[state],
  );
