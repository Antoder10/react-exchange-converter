import axios from 'axios';

export default axios.create({
  baseURL: 'https://openexchangerates.org/api/'
});