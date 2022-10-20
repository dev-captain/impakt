import * as React from 'react';
import { Box, Text, Image, useDisclosure, HStack, Button } from '@chakra-ui/react';
import { I } from 'components';
import Images from 'assets/images';
import { useAppDispatch, useAppSelector } from 'hooks';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';

import { deletePost } from '../../../../../../../lib/redux/slices/forum/post_actions/deletePost';
import CommentBox from './CommentBox';
import ForumDetailModal from './ForumsDetail/ForumDetailModal';
import PostCard from './PostCard';

interface UserForumsPropsI {
  id: number;
  name: string;
  msg: string;
  title: string;
  msgNo: number;
  // view: string;
  time: string;
}
const UserForumsCard: React.FC<UserForumsPropsI> = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const postParam = useParams();
  const role = useAppSelector((state) => state.groupsReducer.role);
  const dispatch = useAppDispatch();
  const group = useAppSelector((state) => state.groupsReducer.activeGroup);
  const isStandalone = postParam.postId ? parseInt(postParam.postId, 10) === props.id : false;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isStandalone) {
      onOpen();
    }
  }, [postParam]);

  const deletePostFromDb = async () => {
    if (!group) return;
    await dispatch(
      deletePost({ referenceType: 'Group', referenceId: group.id, postId: props.id }),
    ).unwrap();
  };

  const navigateToPost = () => {
    navigate(`post/${props.id}`);
  };

  return (
    <>
      <PostCard onClick={navigateToPost} {...props}>
        <CommentBox postId={props.id}>
          <Button background="transparent" _hover={{ backgroundColor: 'transparent' }} padding="0">
            <I.CommentIcon color="#728BA3" width="25px" height="25px" />
          </Button>
        </CommentBox>
      </PostCard>
      <ForumDetailModal open={isOpen} close={onClose} />
    </>
  );
};
export default UserForumsCard;
