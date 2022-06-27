import { Box, useToast, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import CopyClipBoardIcon from '../../icons/CopyClipBoardIcon';

const ReferralCopyClipboard: React.FC<{
  userId?: number;
  isBadge?: boolean;
  animate?: boolean;
}> = ({ userId, isBadge, animate }) => {
  const { t } = useTranslation().i18n;
  const toast = useToast();
  const [isCopied, setIsCopied] = React.useState(false);
  const referralLink = `impakt.com/register/${userId}`;
  const copyClipBoardReferralLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    if (animate) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    }
    toast({
      title: 'Success',
      description: 'Referral link copied successfully!',
      isClosable: true,
      duration: 5000,
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
        mt="8px"
      >
        <Box>
          <Text textStyle={{ base: 'regular2', sm: 'regular3' }}>{referralLink}</Text>
        </Box>
        <Box onClick={copyClipBoardReferralLink}>
          {isCopied ? null : <CopyClipBoardIcon cursor="pointer" width="25" height="28" />}
        </Box>
      </Box>
    </>
  );
};
export default ReferralCopyClipboard;
