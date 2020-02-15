import request from '../lib/request';
import { isEmpty } from 'lodash';

export const getPokemonListApi = (path = '/pokemon') => {
  if (isEmpty(path)) {
    return;
  }
  return request(path);
};
