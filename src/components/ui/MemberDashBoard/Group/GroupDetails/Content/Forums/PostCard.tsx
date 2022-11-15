import { Box, LayoutProps, Text, Avatar, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';

interface PostCardPropsI {
  id: number;
  postTitle?: string;
  postCreatorName?: string;
  postCreatedAt?: string;
  replyCount?: number;
  messageCreatorName: string;
  message: string;
  messageCreatedAt: string;
  onClick?: () => void;
  w?: LayoutProps['w'];
}
const PostCard: React.FC<PostCardPropsI> = ({
  postTitle,
  postCreatedAt,
  postCreatorName,
  messageCreatorName,
  replyCount,
  message,
  id,
  messageCreatedAt,
  onClick,
  w,
}) => {
  return (
    <Box
      maxH="116px"
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
      w={w}
      borderRadius="12px"
      marginTop="12px"
    >
      {postCreatorName && (
        <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
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
      <VStack mt="5px" rowGap="0.5em" justifyContent="flex-start" alignItems="flex-start">
        {postTitle && (
          <Box>
            <Text color="#29323B" fontWeight="500" fontSize="16px" lineHeight="100%">
              {postTitle}
            </Text>
          </Box>
        )}
        <HStack mt="2px !important" justifyContent="flex-start" alignItems="flex-start">
          <Avatar name={messageCreatorName.replace(' ', '')} width="36px" height="36px" />
          <VStack justifyContent="flex-end" alignItems="flex-start">
            <Box>
              <Text color="#4E6070" fontWeight="500" fontSize="12px" lineHeight="100%">
                {messageCreatorName} •{' '}
                <Text as="span" fontWeight="400" color="#728BA3">
                  {messageCreatedAt}
                </Text>
              </Text>
            </Box>
            <Box ml="2px !important" mt="8px !important">
              <Text color="#4E6070" fontSize="14px" fontWeight="400" lineHeight="100%">
                {message}
              </Text>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
export default PostCard;
