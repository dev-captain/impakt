import * as React from 'react';
import { useDisclosure, LayoutProps } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from '@/hooks';
import { useNavigate, useParams } from 'react-router-dom';

import ForumDetailModal from './ForumsDetail/ForumDetailModal';
import PostCard from './PostCard';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import routes from '../../../../../../../data/routes';
import { renderToast } from '../../../../../../../utils';

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
  const group = usePersistedGroupStore();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const postParam = useParams();
  // const dispatch = useAppDispatch();
  const isStandalone = postParam.postId ? parseInt(postParam.postId, 10) === props.id : false;
  const isGuest = group.role === 'Guest';

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
    if (isGuest) {
      navigate(
        `/register/?next=${routes.groupDetail(group.activeGroup?.id ?? 12)}/post/${props.id}`,
        {
          state: { wasGuest: isGuest },
        },
      );

      renderToast('warning', 'You must be logged in to see post details.', 'dark', 2200);

      return;
    }
    navigate(`post/${props.id}`);
  };

  return (
    <>
      <PostCard onClick={navigateToPost} {...props} />
      <ForumDetailModal
        open={isOpen}
        close={() => {
          onClose();
          navigate(routes.groupDetail(group.activeGroup?.id));
        }}
      />
    </>
  );
};
export default UserForumsCard;
