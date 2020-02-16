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

export const catchPokemonApi = async pokemon => {
  const loadingTimer = 2000;
  const result = !!Math.floor(Math.random() * 2);
  const data = {
    pokemon,
    status: result,
    message: result
      ? `You are Lucky, Pokemon ${pokemon.name} is catched!`
      : `Ohh.. You failed, Pokemon ${pokemon.name} is escaped!`,
  }
  return new Promise((resolve, reject) => {
    if (result) {
      setTimeout(() => resolve(data), loadingTimer);
    } else {
      setTimeout(() => reject(data), loadingTimer);
    }
  });
};
