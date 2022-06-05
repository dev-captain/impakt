import axios from 'axios';

const apiAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default apiAxiosInstance;
