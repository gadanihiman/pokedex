import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
  LOAD_POKEMON_LIST_ERROR,
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_SUCCESS,
  LOAD_POKEMON_DETAIL_ERROR,
} from './constant';

const initialState = {
  loading: false,
  loadingDetail: false,
  error: false,
  pokemonList: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  pokemonDetail: {
    name: '',
    base_experience: '',
    weight: null,
    height: null,
    abilities: [],
    species: {
      name: '',
    },
    sprites: {
      front_default: '',
    },
    types: [],
    moves: [],
    stats: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POKEMON_LIST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonList: action.pokemonList,
      };
    case LOAD_POKEMON_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
    case LOAD_POKEMON_DETAIL:
      return {
        ...state,
        loadingDetail: true,
      };
    case LOAD_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        pokemonDetail: action.pokemonDetail,
      };
    case LOAD_POKEMON_DETAIL_ERROR:
      return {
        ...state,
        loadingDetail: false,
        error: action.error,
      };
    
    default:
      return state;
  }
};
