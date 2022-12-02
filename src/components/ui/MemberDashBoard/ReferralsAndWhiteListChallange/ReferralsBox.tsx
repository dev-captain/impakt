import {
  Box,
  Text,
  GridItem,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import * as React from 'react';
import ReferralCopyClipboard from '../ReferralCopyClipBoard';
import MemberDashboardCard from '../MemberDashBoardCard';
import { usePersistedAuthStore, usePersistedReferralsStore } from '../../../../lib/zustand';

const ReferralsBox: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const referralStore = usePersistedReferralsStore();
  const { referralsChallengesHaveDone } = referralStore;
  const referralsRegisteredNumber = referralStore.referrals?.totalCount;
  const godlRewardedByReferrals = referralStore.referrals?.confirmedCount
    ? referralStore.referrals.confirmedCount * 1000
    : referralStore.godlRewardedByReferrals;
  const koinRewardedByReferrals = referralStore.referrals?.confirmedCount
    ? 0
    : referralStore.koinRewardedByReferrals;

  return (
    <MemberDashboardCard color="#4E6070" flexDir="column" rowGap={{ base: '18px', lg: '32px' }}>
      <Box
        display="flex"
        letterSpacing="-0.04em !important"
        justifyContent="space-between"
        marginTop="0 !important"
        w="100%"
        id="whitelist-challange-description-box-2"
        position="relative"
      >
        {/* <Text textStyle={{ base: 'bold4', lg: 'bold5' }} color="#000">
          Referrals
        </Text> */}
        {/* <Tooltip
          hasArrow
          label={
            <Text
              dangerouslySetInnerHTML={{
                __html: t(keys.memberDashboard.referrals.description),
              }}
            />
          }
          mt="3"
          placement="auto"
          closeOnClick={false}
        >
          <Box
            position="absolute"
            right={{ base: '-14px', md: '-16px' }}
            bottom={{ base: '22px', md: '20px' }}
            width={{ base: '24px', md: '32px' }}
          >
            <a href="https://knowledgebase.impakt.com/referral-rewards?category=all-resources">
              <img src={TooltopIcon} alt="TooltopIcon" sizes="10px" />
            </a>
          </Box>
        </Tooltip> */}
      </Box>
      <Box w="100%" id="whitelist-challange-description-box-2" sx={{ marginTop: '0px !important' }}>
        <ReferralCopyClipboard userId={member?.id} />
      </Box>

      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        width={{ base: '100%' }}
        gap={4}
        sx={{ marginTop: '0px !important' }}
      >
        <GridItem
          w="100%"
          h="auto"
          borderRadius="20px"
          bg="softOrange"
          padding={{ base: '12px 0px', sm: '12px 10px', md: '12px 20px', lg: '12px 24px' }}
        >
          <Box color="darkOrange" mt="0 !important" id="whitelist-challange-description-box-2">
            <Text textStyle="bold5" textAlign="center">
              {koinRewardedByReferrals || '0'}
            </Text>
            <Text textAlign="center" mt="6px" textStyle="regular3">
              Koins earned
              <br /> from referrals
            </Text>
          </Box>
        </GridItem>
        {godlRewardedByReferrals > 0 && (
          <GridItem
            w="100%"
            h="auto"
            borderRadius="20px"
            bg="rgba(9, 9, 11, 0.4)"
            padding={{ base: '12px 0px', sm: '12px 10px', md: '12px 20px', lg: '12px 24px' }}
          >
            <Box mt="0 !important" id="whitelist-challange-description-box-2">
              <Text textStyle="bold5" textAlign="center">
                {godlRewardedByReferrals}
              </Text>
              <Text
                color="rgba(255, 255, 255, 0.4)"
                textAlign="center"
                mt="6px"
                textStyle="regular3"
              >
                GODL earned
                <br /> from referrals
              </Text>
            </Box>
          </GridItem>
        )}
        <GridItem
          w="100%"
          borderRadius="20px"
          padding={{ base: '12px 0px', sm: '12px 10px', md: '12px 20px', lg: '12px 24px' }}
          h="auto"
          bg="#F5F8FA"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text color="#29323B" textAlign="center" textStyle="bold5">
              {referralsRegisteredNumber ?? 0}
            </Text>
            <Text color="#728BA3" textAlign="center" mt="6px" textStyle="regular3">
              registered <br />
              with your link
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" colorScheme="gray">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#4E6070">
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
              >
                Challenges completed
              </Th>
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                textTransform="capitalize"
                whiteSpace="normal"
              >
                Number of referrals
              </Th>
            </Tr>
          </Thead>
          <Tbody display="block" maxHeight="260px" sx={{ overflowY: 'overlay' }}>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#4E6070" borderBottom={0}>
                1
              </Td>

              <Td borderBottom={0} textStyle="regular4">
                {referralsChallengesHaveDone.numberOfReferreesWhoHaveDoneOneChallenge}
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#4E6070" borderBottom={0}>
                2
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                {referralsChallengesHaveDone.numberOfReferreesWhoHaveDoneTwoChallenges}
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#4E6070" borderBottom={0}>
                3
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                {referralsChallengesHaveDone.numberOfReferreesWhoHaveDoneThreeChallenges}
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#4E6070" borderBottom={0}>
                4
              </Td>
              <Td textStyle="regular4" borderBottom={0}>
                {referralsChallengesHaveDone.numberOfReferreesWhoHaveDoneFourChallenges}
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#4E6070" textStyle="bold4" borderBottom={0}>
                5+
              </Td>
              <Td textStyle="bold4" borderBottom={0}>
                <Text>
                  {referralsChallengesHaveDone.numberOfReferreesWhoHaveDoneFiveChallenges}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </MemberDashboardCard>
  );
};
export default ReferralsBox;
