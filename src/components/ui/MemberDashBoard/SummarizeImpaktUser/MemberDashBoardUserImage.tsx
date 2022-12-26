import * as React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { I } from '@/components';

interface MemberDashBoardUserImagePropsI {
  imageSrc?: string;
}
const MemberDashBoardUserImage: React.FC<MemberDashBoardUserImagePropsI> = ({ imageSrc }) => {
  return (
    <Box borderRadius="37px" w="283px" h="283px">
      {imageSrc ? (
        <Image w="100%" height="100%" objectFit="contain" src={imageSrc} />
      ) : (
        <I.DefaultImpaktProfileIcon />
      )}
    </Box>
  );
};

export default MemberDashBoardUserImage;
