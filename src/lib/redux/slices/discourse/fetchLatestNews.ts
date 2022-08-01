import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from '../../store';

const fetchLatestNews = createAsyncThunk('discourse/fetchNews', async (_, { rejectWithValue }) => {
  try {
    const news = await axios.get(
      'https://g9ladnzl1k.execute-api.us-east-1.amazonaws.com/discourse-api/latest-feeds',
    );

    const resAllTopics = await Promise.all(
      news.data.data.map((topicId: number) => {
        return axios.get(
          `https://g9ladnzl1k.execute-api.us-east-1.amazonaws.com/discourse-api/topics?topicId=${topicId}`,
        );
      }),
    );

    const datas = resAllTopics.map(({ data }) => data.data);
    console.log('datas', datas);

    return datas;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { fetchLatestNews };
