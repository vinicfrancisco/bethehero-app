import axios from 'axios'; 

const api = axios.create({
  baseURL: 'http://10.10.0.85:3333/',
});

export default api;