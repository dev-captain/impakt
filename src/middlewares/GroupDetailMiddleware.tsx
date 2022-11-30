import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../lib/axios/api';

const GroupDetailMiddleWare: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [isMemberOfGroup, setIsMemberOfGroup] = React.useState(false);
  const groupParam = useParams();

  const getAmIMemberOfGroup = async () => {
    try {
      const res = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .get(`/api/v1/groups/ami/member/${groupParam.id}`);

      setIsMemberOfGroup(res.data);

      return res.data as boolean;
    } catch (e) {
      setIsMemberOfGroup(false);

      return false;
    }
  };

  React.useEffect(() => {
    getAmIMemberOfGroup().then((res) => {
      if (!res) {
        navigate('/d/g');
      }
    });
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isMemberOfGroup ? <>{children}</> : null;
};

export default GroupDetailMiddleWare;
