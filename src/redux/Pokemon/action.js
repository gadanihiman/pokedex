import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
} from './constant';

export const getPokemonList = payload => ({
  type: LOAD_POKEMON_LIST,
  path: payload,
});

export const getPokemonListLoaded = payload => ({
  type: LOAD_POKEMON_LIST_SUCCESS,
  pokemonList: payload,
});