import axios from 'axios';

const $http = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// Add a request interceptor
$http.interceptors.request.use((config) => {
  config.headers = {
    'X-Custom-Header': 'foobar',
  };
  return config;
},
error => Promise.reject(error));

// Add a response interceptor
$http.interceptors.response.use(response => response,
  error => Promise.reject(error));


export default $http;
