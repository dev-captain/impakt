import { Box, useToast, Text } from '@chakra-ui/react';
import * as React from 'react';
import CopyClipBoardIcon from '../../icons/CopyClipBoardIcon';

const ReferralCopyClipboard: React.FC<{
  userId?: number;
  isBadge?: boolean;
  animate?: boolean;
}> = ({ userId, isBadge, animate }) => {
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
        {!isBadge && <Text textStyle="semiBold16">Your referral link:</Text>}
        <Text textStyle={isBadge ? 'bold4' : 'bold4'}>{referralLink}</Text>
      </Box>
      <Box
        ml={isBadge ? '0.8em' : '0px !important'}
        onClick={copyClipBoardReferralLink}
        cursor="pointer"
      >
        {isCopied ? null : <CopyClipBoardIcon width="25" height="28" />}
      </Box>
    </>
  );
};
export default ReferralCopyClipboard;
