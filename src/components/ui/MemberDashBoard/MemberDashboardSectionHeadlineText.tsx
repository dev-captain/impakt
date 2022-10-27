import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface MemberDashBoardSectionHeadlineTextPropsI {
  title: string;
}
const MemberDashboardSectionHeadlineText: React.FC<MemberDashBoardSectionHeadlineTextPropsI> = ({
  title,
}) => {
  return (
    <Box display={{ sm: 'none', lg: 'block' }} mb="2em">
      <Text as="h1" textStyle="TitleBold64" fontSize="48px" letterSpacing="-1.5px">
        {title}
      </Text>
    </Box>
  );
};
export default MemberDashboardSectionHeadlineText;
