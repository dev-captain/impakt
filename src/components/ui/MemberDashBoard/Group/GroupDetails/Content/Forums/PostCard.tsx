import {
  Box,
  LayoutProps,
  Text,
  Avatar,
  HStack,
  VStack,
  BoxProps,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import * as yup from 'yup';
import { I } from '@/components';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import GroupTextAreaInput from '../../../GroupsTextAreaField';
import { useForm } from '../../../../../../../hooks';
import {
  useCommentControllerV1DeleteOne,
  useCommentControllerV1PatchOne,
} from '../../../../../../../lib/impakt-dev-api-client/react-query/posts/posts';
import {
  usePersistedAuthStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../../../../../lib/zustand';
import { renderToast } from '../../../../../../../utils';
import ConformationModal from '../../Banner/Panel/GroupSettings/Tabs/GeneralSettings/ConfirmationModal';

interface PostCardPropsI {
  id: number;
  postId?: number;
  postTitle?: string;
  postCreatorName?: string;
  postCreatedAt?: string;
  replyCount?: number;
  messageCreatorId?: number;
  messageCreatorName: string;
  message: string;
  messageCreatedAt: string;
  onClick?: () => void;
  w?: LayoutProps['w'];
  isEditable?: boolean;
}
const PostCard: React.FC<PostCardPropsI & Omit<BoxProps, 'id'>> = ({
  postTitle,
  postCreatedAt,
  postCreatorName,
  messageCreatorName,
  messageCreatorId,
  replyCount,
  message,
  id,
  messageCreatedAt,
  onClick,
  isEditable,
  postId,
  ...props
}) => {
  const { member } = usePersistedAuthStore();
  const { role } = usePersistedGroupStore();
  const isCreator = role === 'Creator';
  const isCommentCreator = member?.id === messageCreatorId;
  const confirmationModalDisclousere = useDisclosure();
  const commentInputRef = React.useRef<HTMLDivElement>(null);
  const patchComment = useCommentControllerV1PatchOne();
  const deleteComment = useCommentControllerV1DeleteOne();
  const { posts, setPosts, setActivePost } = usePersistedForumStore();
  const { setValue, getValues, errors } = useForm({
    defaultValues: { 'comment-update': '' },
    resolver: yupResolver(
      yup.object().shape({
        'comment-update': yup
          .string()
          .max(280, `You can't use more than 280 characters.`)
          .required('Comment content is required field...'),
      }),
    ),
  });

  const onInput = (e: any) => {
    setValue('comment-update', e.currentTarget.innerHTML, { shouldValidate: true });
  };
  const [isEditMode, setIsEditMode] = React.useState(false);

  const handleOnCommentUpdate = async () => {
    if (!commentInputRef.current) return null;

    if (errors['comment-update']?.message) {
      return null;
    }
    const value = getValues('comment-update');
    if (!value) return null;

    if (!isEditable || !postId) return null;
    patchComment.mutate(
      { commentId: id, data: { content: value }, postId },
      {
        onSuccess: () => {
          const shallowOfPosts = [...posts];
          const a = shallowOfPosts.findIndex((post) => post.id === postId);
          const b = shallowOfPosts[a].Comment.findIndex((comment) => comment.id === id);
          const shallowOfComments = shallowOfPosts[a].Comment;
          shallowOfComments[b] = { ...shallowOfComments[b], content: value };
          if (a !== -1) {
            shallowOfPosts[a] = {
              ...shallowOfPosts[a],
              Comment: shallowOfComments,
            };
            setPosts(shallowOfPosts);
            const activePost = posts.find((postsd) => postsd.id === postId);
            if (activePost) {
              setActivePost({
                ...activePost,
                Comment: shallowOfComments,
              });
            }
            setIsEditMode(false);
            if (commentInputRef.current) {
              commentInputRef.current.innerHTML = value;
            }
          }
        },
      },
    );

    return null;
  };

  const deleteCommentFromDb = async () => {
    if (!postId) return;

    deleteComment.mutate(
      {
        postId,
        commentId: id,
      },
      {
        onSuccess: () => {
          // TODO remove from related post comment array on zustand
          const shallowOfPosts = [...posts];
          const indexOfPost = shallowOfPosts.findIndex((post) => post.id === postId);
          shallowOfPosts[indexOfPost].Comment = shallowOfPosts[indexOfPost].Comment.filter(
            (comment) => comment.id !== id,
          );
          setActivePost({
            ...shallowOfPosts[indexOfPost],
            Comment: shallowOfPosts[indexOfPost].Comment.filter((comment) => comment.id !== id),
          });
          setPosts(shallowOfPosts);

          renderToast('success', 'Comment deleted successfully.');
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  return (
    <>
      <Box
        id={id.toString()}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (onClick) {
            onClick();
          }
        }}
        cursor={onClick ? 'pointer' : 'unset'}
        border="1px solid #D3E2F0"
        p="16px"
        borderRadius="12px"
        marginTop="12px"
        {...props}
      >
        {postCreatorName && (
          <Box
            w="full"
            display="flex"
            justifyContent="space-between"
            flexWrap={{ base: 'wrap', md: 'unset' }}
          >
            <Text color="#728BA3" fontWeight="400" fontSize="12px" lineHeight="100%;">
              {postCreatorName} • {postCreatedAt}
            </Text>
            {replyCount !== undefined && (
              <Box display="flex" alignItems="center" gap="10px">
                <HStack>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Text color="#91A8BD" fontSize="12px" fontWeight="500" marginLeft="3px">
                      {replyCount}
                    </Text>
                    <I.CommentIcon marginLeft="4px" color="#91A8BD" width="12px" height="12px" />
                  </Box>
                </HStack>
              </Box>
            )}
          </Box>
        )}
        <VStack
          wordBreak="break-word"
          w="full"
          mt="5px"
          rowGap="0.5em"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {postTitle && (
            <Box>
              <Text color="#29323B" fontWeight="500" fontSize="16px" lineHeight="100%">
                {postTitle}
              </Text>
            </Box>
          )}
          <HStack
            flexDir={isEditable && !isEditMode ? 'row' : 'column'}
            rowGap="12px"
            wordBreak="break-word"
            w="full"
            mt="2px"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <HStack w="full">
              <Avatar name={messageCreatorName.replace(' ', '')} width="36px" height="36px" />
              <VStack w="full" justifyContent="flex-end" alignItems="flex-start">
                <HStack>
                  <Text color="#4E6070" fontWeight="500" fontSize="12px" lineHeight="100%">
                    {messageCreatorName} •{' '}
                    <Text as="span" fontWeight="400" color="#728BA3">
                      {messageCreatedAt}
                    </Text>
                  </Text>
                </HStack>
                {!isEditMode && (
                  <HStack w="full" ml="2px !important" mt="8px !important">
                    <Text
                      dangerouslySetInnerHTML={{ __html: message }}
                      color="#4E6070"
                      fontSize="14px"
                      fontWeight="400"
                      lineHeight="100%"
                    />
                  </HStack>
                )}
                <HStack display={isEditMode ? '' : 'none'} w="full">
                  <GroupTextAreaInput
                    errMessage={errors['comment-update']?.message}
                    ref={commentInputRef}
                    w="full"
                    minHeight="54px"
                    value={message}
                    name="comment-update"
                    onInput={onInput}
                  />
                </HStack>
              </VStack>
            </HStack>
            {isEditable && !isEditMode && (isCreator || isCommentCreator) && (
              <HStack id="action-buttons-post" mr="5px !important">
                {isCommentCreator && (
                  <Button
                    color="#29323B"
                    bg="transparent"
                    id="edit-post-button"
                    leftIcon={<I.PenIcon width="16px" height="16px" />}
                    _hover={{
                      bg: '#F5F8FA',
                      color: '#CC4C33',
                    }}
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                  >
                    <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                      Edit
                    </Text>
                  </Button>
                )}
                <Button
                  color="#BD0F21"
                  bg="transparent"
                  id="edit-post-button"
                  leftIcon={<I.TrashIcon width="16px" height="16px" />}
                  _hover={{
                    bg: '#F04153',
                    color: '#fff',
                  }}
                  onClick={confirmationModalDisclousere.onOpen}
                  isLoading={deleteComment.isLoading}
                  isDisabled={deleteComment.isLoading}
                >
                  <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                    Delete
                  </Text>
                </Button>
                {/* <Button id="delete-post-button"></Button> */}
              </HStack>
            )}

            {isEditable && isEditMode && (
              <HStack id="action-buttons-post" w="full" justifyContent="flex-end" pr="10px">
                <Button
                  width="126px"
                  h="38px"
                  color="#29323B"
                  bg="transparent"
                  id="cancel-post-button"
                  leftIcon={<CloseIcon boxSize="8px" />}
                  _hover={{
                    bg: '#F5F8FA',
                    color: '#CC4C33',
                  }}
                  onClick={() => setIsEditMode(false)}
                >
                  <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                    Cancel
                  </Text>
                </Button>
                <Button
                  width="110px"
                  h="38px"
                  color="#FFFFFF"
                  bg="#29323B"
                  id="save-post-button"
                  isLoading={patchComment.isLoading}
                  isDisabled={patchComment.isLoading}
                  leftIcon={<CheckIcon boxSize="12px" />}
                  _hover={{
                    bg: '#F27961',
                    color: '#FFFFFF',
                  }}
                  onClick={handleOnCommentUpdate}
                >
                  <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                    Save
                  </Text>
                </Button>
                {/* <Button id="delete-post-button"></Button> */}
              </HStack>
            )}
          </HStack>
        </VStack>
      </Box>

      <ConformationModal
        buttonIcon={<I.TrashIcon />}
        buttonTitle="Delete"
        close={confirmationModalDisclousere.onClose}
        open={confirmationModalDisclousere.isOpen}
        onClick={deleteCommentFromDb}
        title="Are you sure you want to delete comment?"
        isLoading={deleteComment.isLoading}
      />
    </>
  );
};
export default PostCard;
