import { Box, useToast, Text, useClipboard } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import { I } from 'components';
import { useHref, useLocation } from 'react-router-dom';

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
        {!isBadge && <Text textStyle="regular3">{t(keys.memberDashboard.yourReferralLink)}</Text>}
      </Box>
      <Box
        ml={isBadge ? '0.8em' : '0px !important'}
        display="flex"
        justifyContent="space-between"
        bgColor="rgba(9, 9, 11, 0.4);"
        p="17px 24px"
        borderRadius="16px"
        alignItems="center"
        minH="64px"
        mt="8px"
      >
        <Box>
          <Text textStyle={{ base: 'regular2', sm: 'regular3' }}>{referralLink}</Text>
        </Box>
        <Box onClick={copyClipBoardReferralLink}>
          {hasCopied ? null : <I.CopyClipBoardIcon cursor="pointer" width="25" height="28" />}
        </Box>
      </Box>
    </>
  );
};
export default ReferralCopyClipboard;
