import { Box, LayoutProps, Text, Avatar, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import { Day } from 'dayspan';
import { GetCommentRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getCommentRes';

interface PostCardPropsI {
  id: number;
  name?: string;
  msg: string;
  title: string;
  // view: string;
  comments: GetCommentRes[];
  time: string;
  onClick?: () => void;
  w?: LayoutProps['w'];
}
const PostCard: React.FC<PostCardPropsI> = ({
  title,
  time,
  name,
  msg,
  comments,
  id,
  children,
  onClick,
  w,
}) => {
  const getCreatedBefore = () => {
    if (Day.now().yearsBetween(Day.fromString(time)) === 0) {
      if (Day.now().weeksBetween(Day.fromString(time)) === 0) {
        if (Day.now().daysBetween(Day.fromString(time)) === 0) {
          if (Day.now().hoursBetween(Day.fromString(time)) === 0) {
            if (Day.now().minutesBetween(Day.fromString(time)) === 0) {
              return 'just now';
            }

            return `${Day.now().minutesBetween(Day.fromString(time))} minutes ago`;
          }

          return `${Day.now().hoursBetween(Day.fromString(time))} hours ago`;
        }

        return `${Day.now().daysBetween(Day.fromString(time))} days ago`;
      }

      return `${Day.now().weeksBetween(Day.fromString(time))} weeks ago`;
    }

    return `${Day.now().yearsBetween(Day.fromString(time))} years ago`;
  };

  return (
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
      w={w}
      borderRadius="12px"
      marginTop="12px"
    >
      <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
        <Text color="#728BA3" fontWeight="400" fontSize="12px" lineHeight="100%;">
          {comments.length > 0
            ? comments[0].Creator.firstName?.replace(' ', '') ??
              comments[0].Creator.username.replace(' ', '')
            : name?.replace(' ', '')}
          • {getCreatedBefore()}
        </Text>
        <Box display="flex" alignItems="center" gap="10px">
          <HStack>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Text color="#91A8BD" fontSize="12px" fontWeight="500" marginLeft="3px">
                {comments.length}
              </Text>
              <I.CommentIcon marginLeft="4px" color="#91A8BD" width="12px" height="12px" />
            </Box>
          </HStack>
          {/* <Box display="flex" alignItems="center">
          <I.Eye color="#B0C3D6" width="20px" />
          <Text
            color="#B0C3D6"
            fontSize={{ lgx: '16px', base: '14px' }}
            fontWeight="500"
            marginLeft="3px"
          >
            {view}
          </Text>
        </Box> */}
        </Box>
      </Box>
      <VStack mt="8px" rowGap="0.5em" justifyContent="flex-start" alignItems="flex-start">
        <Box>
          <Text color="#29323B" fontWeight="500" fontSize="16px" lineHeight="100%">
            Create your first post
          </Text>
        </Box>
        <HStack>
          <Box>
            <Avatar name={name?.replace(' ', '')} width="36px" height="36px" />
          </Box>
          <VStack justifyContent="flex-start" alignItems="flex-start">
            <Box>
              <Text color="#4E6070" fontWeight="500" fontSize="12px" lineHeight="100%">
                {comments.length > 0
                  ? comments[0].Creator.firstName?.replace(' ', '') ??
                    comments[0].Creator.username.replace(' ', '')
                  : name?.replace(' ', '')}
                •
              </Text>
            </Box>
            <Box>
              <Text
                color="#4E6070"
                fontSize={{ lgx: '16px', sm: '14px', base: '11px' }}
                fontWeight="500"
              >
                {comments.length > 0 ? comments[0].content : msg}
              </Text>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
export default PostCard;
