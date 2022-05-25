import * as React from 'react';
import { Box, Image } from '@chakra-ui/react';
import DefaultImpaktProfileIcon from '../../../icons/DefaultImpaktProfileIcon';

interface MemberDashBoardUserImagePropsI {
  imageSrc?: string;
}
const MemberDashBoardUserImage: React.FC<MemberDashBoardUserImagePropsI> = ({ imageSrc }) => {
  return (
    <Box borderRadius="37px" w="283px" h="283px">
      {imageSrc ? (
        <Image w="100%" height="100%" objectFit="contain" src={imageSrc} />
      ) : (
        <DefaultImpaktProfileIcon />
      )}
    </Box>
  );
};

export default MemberDashBoardUserImage;
