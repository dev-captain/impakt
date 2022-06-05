import axios from 'axios';

// TODO will change with stage api

const activeMemberApiAxiosInstance = axios.create({
  baseURL: 'https://impakt-api-dahaka-cu-2e-whazbm.herokuapp.com/api/v1/stats',
});

export default activeMemberApiAxiosInstance;
