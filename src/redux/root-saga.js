import { all } from 'redux-saga/effects';

import {
  getPokemonListWatcher,
  getPokemonDetailWatcher,
  catchPokemonWatcher,
} from './Pokemon/saga';

export default function* rootSaga() {
  yield all([
    getPokemonListWatcher(),
    getPokemonDetailWatcher(),
    catchPokemonWatcher(),
  ]);
}
