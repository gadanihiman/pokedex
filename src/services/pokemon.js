import request from '../lib/request';
import { isEmpty } from 'lodash';

export const getPokemonListApi = (path = '/pokemon') => {
  if (isEmpty(path)) {
    return;
  }
  return request(path);
};

export const getPokemonDetailApi = id => {
  if (isEmpty(id)) {
    console.error('ID is empty');
    return;
  }
  return request(`/pokemon/${id}`);
};
