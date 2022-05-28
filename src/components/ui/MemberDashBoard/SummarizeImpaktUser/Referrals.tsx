import * as React from 'react';
import { VStack, Box, Text, useToast } from '@chakra-ui/react';
import CopyClibBoardIcon from '../../../icons/CopyClibBoardIcon';
import { useUserContext } from '../../../../context/UserContext';

const Referrals: React.FC = () => {
  const toast = useToast();
  const [isCopied, setIsCopied] = React.useState(false);
  const { user } = useUserContext();
  const referralLink = `impakt.com/register/${user?.id}`;

  const copyClipBoardReferralLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
    toast({
      title: 'Success',
      description: 'Referral link copied successfully!',
      isClosable: true,
      duration: 5000,
      status: 'success',
    });
  };

  return (
    <VStack
      w="100%"
      alignItems="flex-start"
      padding="86px 39px 71px 50px"
      maxH="500px"
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
          For each member who joins through your referral link and completes at least 5 challenges
          with Impakt, you receive +1000 GODL and they receive +5000 GODL.
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
        <Box onClick={copyClipBoardReferralLink} cursor="pointer">
          {isCopied ? null : <CopyClibBoardIcon />}
        </Box>
      </Box>
    </VStack>
  );
};
export default Referrals;
