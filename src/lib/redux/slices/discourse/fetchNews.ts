import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from '../../store';

const fetchNews = createAsyncThunk('discourse/fetchNews', async (_, { rejectWithValue }) => {
  try {
    const news = await axios.create({ baseURL: 'https://discuss.impakt.com' }).get('/posts.json');
    // const members = UserInstance.userControllerGetUsers(
    //   skip,
    //   take,
    //   communities,
    //   username,
    //   discordHandle,
    //   roles,
    // );
    console.log(news.data);

    return news.data;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { fetchNews };
