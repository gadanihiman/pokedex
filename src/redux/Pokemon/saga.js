import { takeLatest, put, call } from 'redux-saga/effects';
import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_ERROR,
} from './constant';
import { getPokemonListLoaded } from './action';
import { getPokemonListApi } from '../../services/pokemon';

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
 * GET POKEMON LIST DATA
 *
 * @export
 */
export function* getPokemonListWatcher() {
  yield takeLatest(LOAD_POKEMON_LIST, getPokemonList);
};
