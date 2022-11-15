import * as React from 'react';
import { useDisclosure, Button } from '@chakra-ui/react';
import { I } from 'components';
// import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';

// import { deletePost } from '../../../../../../../lib/redux/slices/forum/post_actions/deletePost';
import CommentBox from './CommentBox';
import ForumDetailModal from './ForumsDetail/ForumDetailModal';
import PostCard from './PostCard';
import { GetCommentRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getCommentRes';

interface UserForumsPropsI {
  id: number;
  name?: string;
  msg: string;
  title: string;
  // view: string;
  time: string;
  comments: GetCommentRes[];
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

  return !props.name ? null : (
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
