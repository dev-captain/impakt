import React, { useRef, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import ForumCreateCommentForm from '../../../../../../forms/forums/ForumCreateCommentForm';

const CommentBox: React.FC<{ postId: number }> = ({ children, postId }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const initialFocusRef = useRef<HTMLInputElement | null>(null);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={initialFocusRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
      closeOnBlur
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent borderRadius="2em" border="0" boxShadow="xl" p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        {isOpen && (
          <ForumCreateCommentForm postId={postId} onClose={onClose} ref={initialFocusRef} />
        )}
      </PopoverContent>
    </Popover>
  );
};
export default CommentBox;
