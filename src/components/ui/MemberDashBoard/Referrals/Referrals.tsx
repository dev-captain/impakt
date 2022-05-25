import * as React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import CopyClibBoardIcon from '../../../icons/CopyClibBoardIcon';

interface ReferralsPropsI {
  referralLink: string;
}
const Referrals: React.FC<ReferralsPropsI> = ({ referralLink }) => {
  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding="86px 39px 71px 50px"
      rowGap="1.8em !important"
    >
      <Box mt="0 !important" id="whitelist-challange-headline-box">
        <Text textStyle="bold6">Referrals</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-1">
        <Text textStyle="bold4">Refer friends and earn GODL</Text>
      </Box>
      <Box mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="regular4">
          For each member who joins through your referral link and starts working out with Impakt,
          you recieve +500 GODL and they recieve +5000 GODL.
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        alignItems="flex-end"
        mt="0 !important"
        id="whitelist-challange-description-box-3"
      >
        <Box>
          <Text textStyle="semiBold16">Your referral link:</Text>
          <Text textStyle="bold4">{referralLink}</Text>
        </Box>
        <Box cursor="pointer">
          <CopyClibBoardIcon />
        </Box>
      </Box>
    </VStack>
  );
};
export default Referrals;
