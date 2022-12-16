import { Box, useToast, Text, useClipboard } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import { I } from 'components';

const ReferralCopyClipboard: React.FC<{
  userId?: number;
  isBadge?: boolean;
}> = ({ userId, isBadge }) => {
  const { t } = useTranslation().i18n;
  const toast = useToast();
  const referralLink = `${window.location.origin}/register/${userId}`;
  const { hasCopied, onCopy } = useClipboard(referralLink, { timeout: 3000 });

  const copyClipBoardReferralLink = () => {
    onCopy();
    toast({
      title: 'Success',
      description: 'Referral link copied successfully!',
      isClosable: true,
      duration: 3000,
      status: 'success',
    });
  };

  return (
    <>
      <Box>
        {!isBadge && (
          <Text color="#4E6070" textStyle="regular3">
            {t(keys.memberDashboard.yourReferralLink)}
          </Text>
        )}
      </Box>
      <Box
        ml={isBadge ? '0.8em' : '0px !important'}
        display="flex"
        justifyContent="space-between"
        bgColor="#F5F8FA"
        p="17px 24px"
        borderRadius="16px"
        alignItems="center"
        minH="64px"
        mt="8px"
      >
        <Box>
          <Text textStyle={{ base: 'regular2', sm: 'regular3' }} color="#4E6070">
            {referralLink}
          </Text>
        </Box>
        <Box onClick={copyClipBoardReferralLink}>
          {hasCopied ? null : (
            <I.CopyClipBoardIcon cursor="pointer" width="25" color="#4E6070" height="28" />
          )}
        </Box>
      </Box>
    </>
  );
};
export default ReferralCopyClipboard;
