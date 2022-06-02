import * as React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

interface MemberDashboardSummarizePointPropsI {
  pointValue: string;
  isNeedMore: boolean;
}
const MemberDashboardSummarizePoint: React.FC<MemberDashboardSummarizePointPropsI> = ({
  isNeedMore,
  pointValue,
}) => {
  return (
    <VStack
      border="1.82573px solid #F5F6FF;"
      alignSelf="flex-start"
      w="302px"
      padding="30px"
      bgColor={isNeedMore ? '#778FAD' : '#609C6E'}
      h="189px"
      filter="drop-shadow(0px 2.00758px 4.01516px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2.00758px 7.02653px rgba(0, 0, 0, 0.1));"
      margin="0 !important"
      borderRadius="14px"
      alignItems="center"
      justifyContent="center"
      textAlign="right"
    >
      <Box id="point-value" w="100%">
        <Text fontSize="65px" fontWeight="900" lineHeight="66px" color="#F5F6FF">
          {isNeedMore ? `+${pointValue}` : pointValue}
        </Text>
        <Text fontSize="29px" fontWeight="400" lineHeight="32px" color="#fff">
          {isNeedMore ? 'Points you need to get to rank 200' : 'Points more than rank 200'}
        </Text>
      </Box>
    </VStack>
  );
};

export default MemberDashboardSummarizePoint;
