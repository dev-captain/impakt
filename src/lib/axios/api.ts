import axios from 'axios';

export const API_SERVER_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';
export const RefreshToken = async () => {
  await axios
    .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
    .post('api/v1/iam/auth/refresh');
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Reject promise if usual error
    const originalRequest = error.config;

    const errMsj = JSON.parse(error.response.data);

    if (error.response.status !== 401 || errMsj?.message.includes('Please verify your email')) {
      return Promise.reject(error);
    }

    await RefreshToken();

    return axios(originalRequest);
  },
);

export default axios;
