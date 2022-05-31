import axios from 'axios';

const leaderBoardAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_LEADERBOARD_STAGE_API,
});

export default leaderBoardAxiosInstance;
