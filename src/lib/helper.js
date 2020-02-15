/**
 * get data from url
 * 
 * TODO: function need to handle error from the params
 * 
 * @param {*} url 
 * @param {*} minus 
 */
export const getDataFromUrl = (url = '', minus) => url.split('/')[url.split('/').length - minus]