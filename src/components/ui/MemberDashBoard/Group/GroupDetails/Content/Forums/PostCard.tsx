import { Box, Button, LayoutProps, Text, Image } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import Images from '../../../../../../../assets/images';
import CommentBox from './CommentBox';

interface PostCardPropsI {
  id: number;
  name: string;
  msg: string;
  title: string;
  msgNo: number;
  // view: string;
  time: string;
  onClick?: () => void;
  w?: LayoutProps['w'];
}
const PostCard: React.FC<PostCardPropsI> = ({
  title,
  time,
  name,
  msg,
  msgNo,
  id,
  children,
  onClick,
  w,
}) => {
  return (
    <Box
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) {
          onClick();
        }
      }}
      cursor={onClick ? 'pointer' : 'unset'}
      border="1px solid #D3E2F0"
      padding={{ sm: '16px', base: '10px' }}
      w={w}
      borderRadius="12px"
      marginTop="12px"
    >
      <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
        <Text color="#4E6070" fontSize={{ lgx: '18px', md: '14px' }} fontWeight="500">
          {title}
        </Text>
        <Box display="flex" alignItems="center" gap="10px">
          <Box display="flex" alignItems="center">
            <I.CommentIcon color="#B0C3D6" width="20px" height="20px" />
            <Text
              color="#B0C3D6"
              fontSize={{ lgx: '16px', base: '14px' }}
              fontWeight="500"
              marginLeft="3px"
            >
              {msgNo}
            </Text>
          </Box>
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
          <Box display="flex" alignItems="center">
            <I.ClockIcon color="#B0C3D6" width="20px" />
            <Text
              color="#B0C3D6"
              fontSize={{ lgx: '16px', base: '14px' }}
              fontWeight="500"
              marginLeft="3px"
            >
              {time}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
        <Box
          display="flex"
          alignItems={{ base: 'start', md: 'center' }}
          flexWrap={{ base: 'wrap', md: 'unset' }}
        >
          <Image src={Images.group.ellipse} height="40px" width="40px" />
          <Box marginLeft={{ base: '6px', md: '12px' }}>
            <Text
              color="#728BA3"
              fontSize={{ lgx: '16px', sm: '14px', base: '12px' }}
              fontWeight="600"
            >
              {name}
            </Text>
            <Text
              color="#4E6070"
              fontSize={{ lgx: '16px', sm: '14px', base: '11px' }}
              fontWeight="500"
            >
              {msg}
            </Text>
          </Box>
        </Box>
        <Box onClick={(e) => e.stopPropagation()}>{children}</Box>
      </Box>
    </Box>
  );
};
export default PostCard;
