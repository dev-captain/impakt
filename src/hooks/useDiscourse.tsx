import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

export const useDiscourse = () => {
  const [news, setNews] = useState<any>();
  const fetchLatestNews = useQuery(
    ['news'],
    () =>
      axios.get(
        'https://g9ladnzl1k.execute-api.us-east-1.amazonaws.com/discourse-api/latest-feeds',
      ),
    { staleTime: Infinity, cacheTime: Infinity },
  );

  const resAllTopics = async () => {
    console.log('here', fetchLatestNews);
    const res = await Promise.all(
      fetchLatestNews.data?.data.data.map((topicId: number) => {
        return axios.get(
          `https://g9ladnzl1k.execute-api.us-east-1.amazonaws.com/discourse-api/topics?topicId=${topicId}`,
        );
      }),
    );

    const datas = res.map(({ data }) => data.data);
    setNews(datas);
  };

  React.useEffect(() => {
    if (fetchLatestNews.isFetched) {
      console.log('yo');
      resAllTopics();
    }
  }, [fetchLatestNews.isFetched]);

  return { news, isDiscourseFetched: fetchLatestNews.isFetched };
};
