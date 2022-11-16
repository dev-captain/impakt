import * as React from 'react';
import { useDisclosure, LayoutProps } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';

import ForumDetailModal from './ForumsDetail/ForumDetailModal';
import PostCard from './PostCard';

interface UserForumsPropsI {
  id: number;
  postTitle?: string;
  postCreatorName?: string;
  postCreatedAt?: string;
  replyCount?: number;
  messageCreatorName: string;
  message: string;
  messageCreatedAt: string;
  w?: LayoutProps['w'];
}

const UserForumsCard: React.FC<UserForumsPropsI> = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const postParam = useParams();
  // const dispatch = useAppDispatch();
  const isStandalone = postParam.postId ? parseInt(postParam.postId, 10) === props.id : false;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isStandalone) {
      onOpen();
    }
  }, [postParam]);

  // const deletePostFromDb = async () => {
  //   if (!group) return;
  //   await dispatch(
  //     deletePost({ referenceType: 'Group', referenceId: group.id, postId: props.id }),
  //   ).unwrap();
  // };

  const navigateToPost = () => {
    navigate(`post/${props.id}`);
  };

  return (
    <>
      <PostCard onClick={navigateToPost} {...props} />
      <ForumDetailModal
        open={isOpen}
        close={() => {
          onClose();
          navigate(-1);
        }}
      />
    </>
  );
};
export default UserForumsCard;
