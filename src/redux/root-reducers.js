import { combineReducers } from 'redux';
import pokemon from './Pokemon/reducer';

const rootReducer = {
  pokemon,
};

export default combineReducers(rootReducer);
