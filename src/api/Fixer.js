import axios from 'axios';

const API_KEY = '17c8089277d05944027d3fc58ef26419'

export default axios.create({
  baseURL: 'http://data.fixer.io/api/',
  params: {
    access_key: API_KEY
  }
});