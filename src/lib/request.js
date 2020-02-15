import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: process.env.API_URL || 'https://pokeapi.co/api/v2',
  timeout: 5000,
});

/**
 * APIRequest (format header axios)
 * @param {String} url endpoint api
 * @param {String} method method request
 * @param {Object} data
 * @returns {Promise}
 */
const APIRequest = (url, method = 'get', data, headers = {
  'Content-Type': 'application/json',
}) => {
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
  return AxiosInstance.request({
    url,
    method,
    timeout: 60 * 4 * 1000,
    [dataOrParams]: data,
    headers,
  });
};

export default APIRequest;
