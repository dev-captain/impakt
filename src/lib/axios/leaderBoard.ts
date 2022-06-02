import axios from 'axios';

const leaderBoardAxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API
      : process.env.REACT_APP_LEADERBOARD_STAGE_API,
});

export default leaderBoardAxiosInstance;
