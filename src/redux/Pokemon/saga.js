import { takeLatest, put, call } from 'redux-saga/effects';
import {
  LOAD_POKEMON_LIST,
  LOAD_POKEMON_LIST_ERROR,
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_ERROR,
} from './constant';
import {
  getPokemonListLoaded,
  getPokemonDetailLoaded,
} from './action';
import {
  getPokemonListApi,
  getPokemonDetailApi,
} from '../../services/pokemon';

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
 * GET POKEMON LIST DATA
 *
 * @export
 */
export function* getPokemonDetailWatcher() {
  yield takeLatest(LOAD_POKEMON_DETAIL, getPokemonDetail);
};
