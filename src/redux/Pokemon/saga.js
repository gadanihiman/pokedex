import { takeLatest, put, call } from 'redux-saga/effects';
import { notification } from 'antd';
import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_ERROR,
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_ERROR,
  CATCH_POKEMON,
  CATCH_POKEMON_FAILED,
} from './constant';
import {
  getPokemonListLoaded,
  getPokemonDetailLoaded,
  catchPokemonSuccess,
} from './action';
import {
  getPokemonListApi,
  getPokemonDetailApi,
  catchPokemonApi,
} from '../../services/pokemon';

const openNotificationWithIcon = (type, description) => {
  const { title, message } = description;
  notification[type]({
    message: title,
    description: message,
  });
};

/**
 * GET POKEMON LIST
 *
 * @export
 */
export function* getPokemonList({ path }) {
  try {
    const { data } = yield call(getPokemonListApi, path);
    yield put(getPokemonListLoaded(data));
  } catch (error) {
    yield put({ type: LOAD_POKEMON_LIST_ERROR });
  };
};

/**
 * GET POKEMON WATCHER
 *
 * @export
 */
export function* getPokemonListWatcher() {
  yield takeLatest(LOAD_POKEMON_LIST, getPokemonList);
};

/**
 * GET POKEMON DETAIL
 *
 * @export
 */
export function* getPokemonDetail({ id }) {
  try {
    const { data } = yield call(getPokemonDetailApi, id);
    yield put(getPokemonDetailLoaded(data));
  } catch (error) {
    yield put({ type: LOAD_POKEMON_DETAIL_ERROR });
  };
};

/**
 * GET POKEMON WATCHER
 *
 * @export
 */
export function* getPokemonDetailWatcher() {
  yield takeLatest(LOAD_POKEMON_DETAIL, getPokemonDetail);
};

/**
 * CATCH POKEMON
 *
 * @export
 */
export function* catchPokemon({ pokemon }) {
  try {
    const pokemonCatched = yield call(catchPokemonApi, pokemon);
    const { message } = pokemonCatched;
    openNotificationWithIcon('success', { title: 'Congratulation!', message });
    yield put(catchPokemonSuccess(pokemonCatched));
  } catch (error) {
    const { message } = error;
    openNotificationWithIcon('error', { title: 'Failed!', message });
    yield put({ type: CATCH_POKEMON_FAILED, error });
  };
};

/**
 * CATCH POKEMON WATCHER
 *
 * @export
 */
export function* catchPokemonWatcher() {
  yield takeLatest(CATCH_POKEMON, catchPokemon);
};
