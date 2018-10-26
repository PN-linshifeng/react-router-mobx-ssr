import axios from 'axios';

const baseURL = process.env.API_BASE || ''; // eslint-disable-line
const parameURL = (url, parame) => {
  const str = Object.keys(parame).reduce((result, key) => {
    result += `${key}=${parame[key]}&`;
    return result;
  }, '');
  return `${url}?${str.substr(0,str.length-1)}`;
}
export const get = (url, parame) => {
  return new Promise((resolve, reject) => {
    axios.get(parameURL(url, parame)).then((resp) => {
      resolve(resp)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default axios;
