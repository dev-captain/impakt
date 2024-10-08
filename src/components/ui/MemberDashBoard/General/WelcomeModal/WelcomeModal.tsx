import { Box, Text, GridItem, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import NumberFormat from 'react-number-format';

import MemberDashboardCard from '../../MemberDashBoardCard';
import {
  usePersistedAuthStore,
  usePersistedBalanceScoreStore,
  usePersistedFitnessStore,
} from '../../../../../lib/zustand';
import { I } from '../../../..';

const WelcomeModal: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const { activeDays } = usePersistedFitnessStore();
  const { godlBalanceScore, koinBalanceScore } = usePersistedBalanceScoreStore();
  const { isWhitelistedCollection } = usePersistedAuthStore();
  const memberName = member?.username.substring(0, member?.username.indexOf('#'));
  const memberNumber = member?.username?.substring(member?.username.indexOf('#'));

  return (
    <MemberDashboardCard flexDir="column" alignItems="start" rowGap={{ base: '18px', lg: '32px' }}>
      <Box
        display="flex"
        alignItems="center"
        mt="0 !important"
        letterSpacing="-0.04em !important"
        id="whitelist-challange-description-box-2"
      >
        <Text
          textStyle={{ base: 'bold4', md: 'bold5' }}
          lineHeight="100%"
          letterSpacing="-0.5px"
          color="fg-1"
        >
          Hi, <Box as="span">{memberName}</Box>
          <Box as="span" color="fg3">
            {memberNumber}
          </Box>
        </Text>
        {isWhitelistedCollection.isWhitelisted && (
          <Box ms={3}>
            <I.HeartIcon />
          </Box>
        )}
      </Box>
      <Box id="whitelist-challange-description-box-2 " sx={{ marginTop: '0px !important' }}>
        <Text color="fg-1" textStyle="regular4" lineHeight="100%">
          Nice to see you!
        </Text>
        {isWhitelistedCollection.isWhitelisted && (
          <Text mt={{ base: '0px', lg: '8px' }} textStyle="regular3">
            You are whitelisted. Congrats!
          </Text>
        )}
      </Box>

      {/* <Grid templateColumns="repeat(2, 1fr)" gap={4}>

      </Grid> */}
      <SimpleGrid display="flex" flexWrap="wrap" width={{ base: '100%' }} gap={{ base: 3, lg: 4 }}>
        <GridItem
          w={{ base: '100%', md: '48%', lg: '155px', xl: '155px' }}
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="softOrange"
        >
          <Box color="darkOrange" mt="0 !important" id="whitelist-challange-description-box-2">
            <Text textAlign="center" textStyle="bold5">
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={koinBalanceScore ?? 0}
                decimalSeparator="."
                displayType="text"
                thousandSeparator
                allowNegative
              />
            </Text>
            <Text textAlign="center" mt="2px" textStyle="regular3" fontWeight={500}>
              Koin Balance
            </Text>
          </Box>
        </GridItem>
        {godlBalanceScore > 0 && (
          <GridItem
            w={{ base: '100%', md: '48%', lg: 'auto', xl: 'auto' }}
            h="auto"
            borderRadius="20px"
            bg="rgba(9, 9, 11, 0.4)"
            padding="12px 24px"
          >
            <Box
              display="flex"
              flexDir="column"
              mt="0 !important"
              id="whitelist-challange-description-box-2"
            >
              <Text textAlign="center" textStyle="bold5">
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={godlBalanceScore}
                  decimalSeparator="."
                  displayType="text"
                  thousandSeparator
                  allowNegative
                />
              </Text>
              <Text textAlign="center" mt="2px" textStyle="regular3" fontWeight={500}>
                GODL Balance
              </Text>
            </Box>
          </GridItem>
        )}
        {/* <GridItem
          w={{ base: '100%', md: '48%', lg: '155px', xl: '155px' }}
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="rgba(9, 9, 11, 0.4)"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text color="#FFFFFF" textAlign="center" textStyle="bold5">
              0
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.4)"
              textAlign="center"
              mt="2px"
              textStyle="regular3"
              fontWeight={500}
            >
              XP
            </Text>
          </Box>
        </GridItem> */}
        <GridItem
          w={{ base: '100%', md: '48%', lg: '142px', xl: '142px' }}
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="#F5F8FA"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text Text color="fg-1" textAlign="center" textStyle="bold5">
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={activeDays}
                decimalSeparator="."
                displayType="text"
                thousandSeparator
                allowNegative
              />
            </Text>
            <Text color="fg1" textAlign="center" mt="2px" textStyle="regular3" fontWeight={500}>
              Active days
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
    </MemberDashboardCard>
  );
};
export default WelcomeModal;
