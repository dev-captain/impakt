import * as React from 'react';

import { VStack, Text, Box } from '@chakra-ui/react';

interface MemberDashBoardSummarizeRankPropsI {
  nameOfUser?: string;
  // statusOfUser: 'Talent' | 'Beginner';
  rankValue: string;
}

const MemberDashBoardSummarizeRank: React.FC<MemberDashBoardSummarizeRankPropsI> = ({
  nameOfUser,
  rankValue,
  // statusOfUser,
}) => {
  return (
    <VStack id="yo" h="100%" justifyContent="space-between" alignItems="flex-start">
      <Box>
        <Text textStyle="bold6">{nameOfUser}</Text>
        {/* <Text color="#587393" fontWeight="400px" textStyle="bold5">
          {statusOfUser}
        </Text> */}
      </Box>
      <Box mt="1.6875em !important" id="current-rank-value-box">
        <Box
          w="126px"
          h="30px"
          borderRadius="12px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          bgColor="#B22221"
          id="current-rank-label-box"
        >
          <Text textStyle="semiBold3">Current Rank</Text>
        </Box>
        <Text textStyle="light7">#{rankValue}</Text>
      </Box>
    </VStack>
  );
};
export default MemberDashBoardSummarizeRank;
