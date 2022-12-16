import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import * as yup from 'yup';
import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { I } from '../../../../../../..';
import { useForm } from '../../../../../../../../hooks';
import {
  usePersistedAuthStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../../../../../../lib/zustand';
import { getCreatedBefore, renderToast } from '../../../../../../../../utils';
import ForumCreateCommentForm from '../../../../../../../forms/forums/ForumCreateCommentForm';
import GroupInputField from '../../../../GroupInputField';
import GroupTextAreaInput from '../../../../GroupsTextAreaField';
import ForumDetail from './ForumDetail';
import {
  useCommentControllerV1PatchOne,
  usePostControllerV1PatchOne,
  usePostControllerV1DeleteOne,
} from '../../../../../../../../lib/impakt-dev-api-client/react-query/posts/posts';
import ConformationModal from '../../../Banner/Panel/GroupSettings/Tabs/GeneralSettings/ConfirmationModal';

interface ForumDetailModalProps {
  open: boolean;
  close: () => void;
}

const ForumDetailModal: React.FC<ForumDetailModalProps> = ({ open, close }) => {
  const confirmationModalDisclousere = useDisclosure();
  const { activePost, posts, setActivePost, setPosts } = usePersistedForumStore();
  const { activeGroup, role } = usePersistedGroupStore();
  const { member } = usePersistedAuthStore();
  const isCreator = role === 'Creator';
  const updatePost = usePostControllerV1PatchOne();
  const deletePost = usePostControllerV1DeleteOne();
  const patchComment = useCommentControllerV1PatchOne();
  // const deleteOne= usePostControllerV1DeleteOne()

  const textAreaRefUpdate = useRef<HTMLDivElement>(null);
  const { setValue, errors, handleSubmit, reset, isDirty } = useForm({
    resolver: yupResolver(
      yup.object({
        post: yup.string().max(60, 'Post must be at most 60 characters').optional(),
        comment: yup.string().max(280, 'Comment must be at most 280 characters').optional(),
      }),
    ),
    defaultValues: { post: '', comment: '' },
  });
  const [isEditMode, setIsEditMode] = React.useState(false);
  const { postId } = useParams();

  const creatorCommentSortedByCreatedDate = activePost?.Comment.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  const firstPostComment = creatorCommentSortedByCreatedDate
    ? creatorCommentSortedByCreatedDate[creatorCommentSortedByCreatedDate.length - 1]
    : undefined;
  const isPostCreator = firstPostComment?.Creator.id === member?.id;

  React.useEffect(() => {
    const postDetail = posts.find((post) => post.id === Number(postId));
    if (!postDetail) return;
    setActivePost(postDetail);
  }, [postId]);

  const handleOnCreate = async (data: any) => {
    if (!isDirty || !activeGroup || !activePost || !firstPostComment) return null;
    if (data.post.length > 0) {
      updatePost.mutate(
        {
          referenceType: 'Group',
          data: { content: data.post },
          postId: activePost.id,
          referenceId: activeGroup.id,
        },
        {
          onSuccess: () => {
            const shallowOfPosts = [...posts];
            const a = shallowOfPosts.findIndex((post) => post.id === activePost.id);
            shallowOfPosts[a].content = data.post;
            setPosts(shallowOfPosts);
            setActivePost({ ...activePost, content: data.post });
            setIsEditMode(false);
          },
        },
      );

      // Update post
    }

    if (data.comment.length > 0) {
      patchComment.mutate(
        { commentId: firstPostComment.id, data: { content: data.comment }, postId: activePost.id },
        {
          onSuccess: () => {
            const shallowOfPosts = [...posts];
            const a = shallowOfPosts.findIndex((post) => post.id === activePost.id);
            const b = shallowOfPosts[a].Comment.findIndex(
              (comment) => comment.id === firstPostComment.id,
            );
            const shallowOfComments = shallowOfPosts[a].Comment;
            shallowOfComments[b] = { ...shallowOfComments[b], content: data.comment };
            if (a !== -1) {
              shallowOfPosts[a] = {
                ...shallowOfPosts[a],
                Comment: shallowOfComments,
              };
              setPosts(shallowOfPosts);
              if (activePost) {
                setActivePost({
                  ...activePost,
                  Comment: shallowOfComments,
                });
              }
              setIsEditMode(false);
              if (textAreaRefUpdate.current) {
                textAreaRefUpdate.current.innerHTML = data.comment;
              }
            }
          },
        },
      );
      // Update Comment
    }
    if (data.post.length > 0 || data.comment.length > 0) {
      reset({ comment: '', post: '' });
      renderToast('success', 'Post updated successfully', 'white');
    }

    return true;
  };

  const onInput = (e: any) => {
    setValue('comment', e.currentTarget.innerHTML, { shouldValidate: true, shouldDirty: true });
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue('post', e.target.value as any, { shouldValidate: true, shouldDirty: true });
  };

  const deletePostFromDb = () => {
    if (!activePost || !activeGroup) return;
    deletePost.mutateAsync(
      {
        referenceType: 'Group',
        postId: activePost.id,
        referenceId: activeGroup.id,
      },
      {
        onSuccess: () => {
          setPosts(posts.filter((post) => post.id !== activePost.id));
          setActivePost(null);
          close();
        },
      },
    );
  };

  return (
    <>
      <Modal onClose={close} autoFocus={false} scrollBehavior="inside" isOpen={open} isCentered>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          mb="20px"
          p="32px"
          w={{ base: '92%', md: '100%' }}
          minW={{ base: '92%', md: '720px' }}
          borderRadius="24px"
          boxShadow="0px 12px 30px -6px rgba(0, 6, 14, 0.12), 0px 24px 60px -12px rgba(0, 6, 14, 0.2)"
        >
          <ModalHeader p="0 !important">
            <VStack
              rowGap="1em"
              justifyContent="flex-start"
              alignItems="flex-start"
              wordBreak="break-word"
            >
              <HStack>
                <Text color="#91A8BD" fontWeight="400" fontSize="14px" lineHeight="100%">
                  {activePost?.Creator?.username} •{' '}
                  {getCreatedBefore(activePost?.createdAt ?? '08-08-2000')}
                </Text>
              </HStack>
              <Box mt="0 !important" w="full" id="post-title-box">
                {isEditMode && (
                  <GroupInputField
                    maxH="46px"
                    onChange={onChange}
                    name="post"
                    placeholder="Topic you want to update"
                    errMsg={errors.post?.message}
                    defaultValue={activePost?.content ?? 'The post'}
                    fontWeight="500"
                    fontSize="24px"
                    lineHeight="100%"
                    letterSpacing="-0.5px"
                    color="#29323B"
                    _placeholder={{ opacity: 1, color: '#91A8BD', fontSize: '15px' }}
                  />
                )}

                {!isEditMode && (
                  <Text
                    fontWeight="500"
                    fontSize="24px"
                    lineHeight="100%"
                    letterSpacing="-0.5px"
                    color="#29323B"
                  >
                    {activePost?.content ?? 'The Post'}
                  </Text>
                )}
              </Box>

              <Box w="full" mt="0 !important" id="post-description-box">
                {!isEditMode && (
                  <Text
                    dangerouslySetInnerHTML={{ __html: firstPostComment?.content ?? 'The Post' }}
                    color="#4E6070"
                    fontWeight="400"
                    fontSize="14px"
                    lineHeight="22px"
                  />
                )}
                {isEditMode && (
                  <GroupTextAreaInput
                    w="full"
                    minHeight="54px"
                    value={firstPostComment?.content}
                    errMessage={errors.comment?.message}
                    ref={textAreaRefUpdate}
                    name="comment"
                    onInput={onInput}
                  />
                )}
              </Box>

              {!isEditMode && (isCreator || isPostCreator) && (
                <HStack
                  id="action-buttons-post"
                  w="full"
                  justifyContent="flex-end"
                  mr="5px !important"
                >
                  {isPostCreator && (
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
                  >
                    <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                      Delete
                    </Text>
                  </Button>
                  {/* <Button id="delete-post-button"></Button> */}
                </HStack>
              )}

              {isEditMode && (
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
                    isLoading={updatePost.isLoading || patchComment.isLoading}
                    isDisabled={updatePost.isLoading || patchComment.isLoading}
                    leftIcon={<CheckIcon boxSize="12px" />}
                    _hover={{
                      bg: '#F27961',
                      color: '#FFFFFF',
                    }}
                    onClick={handleSubmit(handleOnCreate)}
                  >
                    <Text fontWeight="600" fontSize="16px" lineHeight="18px">
                      Save
                    </Text>
                  </Button>
                </HStack>
              )}
            </VStack>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody mt="32px" p="0 !important">
            <ForumCreateCommentForm postId={activePost?.id} />
            <ForumDetail />
          </ModalBody>
        </ModalContent>
      </Modal>
      <ConformationModal
        buttonIcon={<I.TrashIcon />}
        buttonTitle="Delete"
        close={confirmationModalDisclousere.onClose}
        open={confirmationModalDisclousere.isOpen}
        isLoading={deletePost.isLoading}
        onClick={deletePostFromDb}
        title="Are you sure you want to delete topic?"
      />
    </>
  );
};

export default ForumDetailModal;
