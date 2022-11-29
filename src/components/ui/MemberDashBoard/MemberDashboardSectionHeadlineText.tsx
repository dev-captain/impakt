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
      <Text
        as="h1"
        fontWeight="500"
        lineHeight="100%"
        fontSize="48px"
        letterSpacing="-1.5px"
        color="fg-1"
      >
        {title}
      </Text>
    </Box>
  );
};
export default MemberDashboardSectionHeadlineText;
