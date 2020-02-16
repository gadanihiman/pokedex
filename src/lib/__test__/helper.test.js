import { getDataFromUrl, capitalizeFirstLetter } from '../helper';

// TODO: Need to add more test in every components

describe('Helper function', () => {
  it('getDataFromUrl function should return the expected string', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20';
    expect(getDataFromUrl(url, 1)).toBe('pokemon?offset=40&limit=20');
  });
  
  it('capitalizeFirstLetter function should return first capitalize string', () => {
    const string = 'gadani';
    expect(capitalizeFirstLetter(string)).toBe('Gadani');
  });
})
