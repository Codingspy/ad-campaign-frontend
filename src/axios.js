import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5129/api', 
});

export default instance;
