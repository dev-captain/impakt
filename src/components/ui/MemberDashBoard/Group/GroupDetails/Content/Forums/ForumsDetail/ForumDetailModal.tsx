import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Common, I } from '../../../../../../..';
import { usePersistedAuthStore, usePersistedForumStore } from '../../../../../../../../lib/zustand';
import { getCreatedBefore } from '../../../../../../../../utils';
import ForumCreateCommentForm from '../../../../../../../forms/forums/ForumCreateCommentForm';
import GroupTextAreaInput from '../../../../GroupsTextAreaField';
import ForumDetail from './ForumDetail';

interface ForumDetailModalProps {
  open: boolean;
  close: () => void;
}

const ForumDetailModal: React.FC<ForumDetailModalProps> = ({ open, close }) => {
  const { activePost, posts, setActivePost } = usePersistedForumStore();
  const { postId } = useParams();
  React.useEffect(() => {
    const postDetail = posts.find((post) => post.id === Number(postId));
    if (!postDetail) return;
    setActivePost(postDetail);
  }, [postId]);

  const creatorCommentSortedByCreatedDate = activePost?.Comment.sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate(),
  );
  const firstPostComment = creatorCommentSortedByCreatedDate
    ? creatorCommentSortedByCreatedDate[creatorCommentSortedByCreatedDate.length - 1]
    : undefined;

  return (
    <Modal onClose={close} scrollBehavior="inside" isOpen={open} isCentered>
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
            <Box mt="0 !important" id="post-title-box">
              <Text
                fontWeight="500"
                fontSize="24px"
                lineHeight="100%"
                letterSpacing="-0.5px"
                color="#29323B"
              >
                {activePost?.content ?? 'The Post'}
              </Text>
            </Box>

            <Box mt="0 !important" id="post-description-box">
              <Text color="#4E6070" fontWeight="400" fontSize="14px" lineHeight="22px">
                {firstPostComment?.content ?? 'The Post'}
              </Text>
            </Box>
          </VStack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody mt="32px" p="0 !important">
          <ForumCreateCommentForm postId={activePost?.id} />
          <ForumDetail />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ForumDetailModal;
