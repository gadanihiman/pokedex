import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_SUCCESS,
} from './constant';

export const getPokemonList = payload => ({
  type: LOAD_POKEMON_LIST,
  path: payload,
});

export const getPokemonListLoaded = payload => ({
  type: LOAD_POKEMON_LIST_SUCCESS,
  pokemonList: payload,
});

export const getPokemonDetail = payload => ({
  type: LOAD_POKEMON_DETAIL,
  id: payload,
});

export const getPokemonDetailLoaded = payload => ({
  type: LOAD_POKEMON_DETAIL_SUCCESS,
  pokemonDetail: payload,
});