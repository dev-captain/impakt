import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, Text, Image } from '@chakra-ui/react';

import { fetchPostDetail } from '../../../../../../../../lib/redux/slices/forum/post_actions/fetchPostDetail';
import Images from '../../../../../../../../assets/images';

const ForumDetail: React.FC = () => {
  const { postId } = useParams();
  const postDetails = useAppSelector((state) => state.postsReducer.postDetails);
  console.log(postDetails);
  const activePostDetails = postDetails.find((post) => post.id === Number(postId));
  const group = useAppSelector((state) => state.groupsReducer.activeGroup);
  const dispatch = useAppDispatch();

  const getPostDetails = async () => {
    if (postId && group) {
      if (!postDetails.find((post) => post.id === Number(postId))) {
        await dispatch(
          fetchPostDetail({
            referenceType: 'Group',
            referenceId: group.id,
            postId: Number(postId),
          }),
        ).unwrap();
      }
    }
  };

  React.useEffect(() => {
    getPostDetails();
  }, []);

  if (!activePostDetails) return null;

  return (
    <Box>
      <div>{JSON.stringify(activePostDetails)}</div>
    </Box>
  );
};
export default ForumDetail;
