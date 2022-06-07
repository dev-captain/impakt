import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { apiAxiosInstance, API_BASE_URL };
