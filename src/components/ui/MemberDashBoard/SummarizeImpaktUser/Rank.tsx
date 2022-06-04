import * as React from 'react';

import { VStack, Text, Box, Link } from '@chakra-ui/react';
import ReferralCopyClipboard from '../ReferralCopyClipBoard';

interface MemberDashBoardSummarizeRankPropsI {
  nameOfUser?: string;
  // statusOfUser: 'Talent' | 'Beginner';
  rankValue?: string;
  userId?: number;
}

const MemberDashBoardSummarizeRank: React.FC<MemberDashBoardSummarizeRankPropsI> = ({
  nameOfUser,
  rankValue,
  userId,
  // statusOfUser,
}) => {
  return (
    <VStack h="100%" justifyContent="space-between" rowGap="20px" alignItems="flex-start">
      <Box w="100%" textAlign={{ base: 'center', lg: 'left' }} maxW={{ base: '100%', lg: '400px' }}>
        <Text textStyle="bold6">{nameOfUser}</Text>
        {/* <Text color="#587393" fontWeight="400px" textStyle="bold5">
          {statusOfUser}
        </Text> */}
      </Box>

      <Box
        display="flex"
        flexDir="column"
        alignSelf={{ base: 'center', lg: 'auto' }}
        id="current-rank-value-box"
      >
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

        <Box id="rank-box">
          {rankValue ? (
            <Text textStyle="light7">#{rankValue}</Text>
          ) : (
            <Text mt="5px" fontWeight={400} textStyle="semibold3">
              <i>
                You are not ranked yet.
                <Link fontWeight={700} textStyle="semibold3" href="/download">
                  Download our app now
                </Link>{' '}
                and do a daily, weekly or targeted challenge to get ranked.
              </i>
            </Text>
          )}
        </Box>
      </Box>

      <Box flexDir="column" rowGap="0.3em" alignItems="start" display="flex" w="100%">
        <Box
          borderRadius="12px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          bgColor="#778FAD"
          w="111px"
          h="23px"
          id="current-rank-label-box"
        >
          <Text fontSize="12px" lineHeight="18px" fontWeight="400">
            Your referral link
          </Text>
        </Box>
        <Box display="flex">
          <ReferralCopyClipboard isBadge userId={userId} />
        </Box>
      </Box>
    </VStack>
  );
};
export default MemberDashBoardSummarizeRank;
