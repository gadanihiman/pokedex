import { all } from 'redux-saga/effects';

import {
  getPokemonListWatcher,
  getPokemonDetailWatcher,
} from './Pokemon/saga';

export default function* rootSaga() {
  yield all([
    getPokemonListWatcher(),
    getPokemonDetailWatcher(),
  ]);
}
