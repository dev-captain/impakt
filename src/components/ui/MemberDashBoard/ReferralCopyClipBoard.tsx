import { Box, useToast, Text } from '@chakra-ui/react';
import * as React from 'react';
import CopyClibBoardIcon from '../../icons/CopyClibBoardIcon';

const ReferralCopyClipBoard: React.FC<{
  userId?: number;
  isBadge?: boolean;
  isAnimate?: boolean;
}> = ({ userId, isBadge, isAnimate }) => {
  const toast = useToast();
  const [isCopied, setIsCopied] = React.useState(false);
  const referralLink = `impakt.com/register/${userId}`;
  const copyClipBoardReferralLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    if (isAnimate) {
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
        {isCopied ? null : <CopyClibBoardIcon />}
      </Box>
    </>
  );
};
export default ReferralCopyClipBoard;
