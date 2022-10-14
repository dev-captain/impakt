import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box } from '@chakra-ui/react';
import { Common } from 'components';
import { DeleteIcon } from '@chakra-ui/icons';

import { fetchPostDetail } from '../../../../../../../../lib/redux/slices/forum/post_actions/fetchPostDetail';
import { deletePost } from '../../../../../../../../lib/redux/slices/forum/post_actions/deletePost';

const ForumDetail: React.FC = () => {
  const { postId } = useParams();
  const postDetails = useAppSelector((state) => state.postsReducer.postDetails);
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
  const deletePostFromDb = async () => {
    if (!group || !activePostDetails) return;

    await dispatch(
      deletePost({ referenceType: 'Group', referenceId: group.id, postId: activePostDetails.id }),
    ).unwrap();
  };

  React.useEffect(() => {
    getPostDetails();
  }, []);

  if (!activePostDetails) return null;

  return (
    <Box>
      <Common.ImpaktButton
        mt={{ md: 0, base: '10px' }}
        variant="primary"
        color="#F84153"
        onClick={deletePostFromDb}
        w={{ md: '222px', base: '100%' }}
        ml={{ md: '16px', base: '0' }}
        h="60px"
        bg="#FEE1E3"
        _hover={{ bg: '#C41F30', color: '#fff' }}
        _active={{ bg: '#910917', color: '#fff' }}
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '20px' }}
        leftIcon={<DeleteIcon width="24px" height="24px" marginRight="20px" />}
        fontWeight="600"
      >
        Delete Post
      </Common.ImpaktButton>
    </Box>
  );
};
export default ForumDetail;
