import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_SUCCESS,
  LOAD_POKEMON_LIST_ERROR,
} from './constant';

const initialState = {
  loading: false,
  error: false,
  pokemonList: {
    count: 0,
    next: '',
    previous: '',
    results: [],
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
    
    default:
      return state;
  }
};
