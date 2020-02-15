import { all } from 'redux-saga/effects';

import { getPokemonListWatcher } from './Pokemon/saga';

export default function* rootSaga() {
  yield all([
    getPokemonListWatcher(),
  ]);
}
