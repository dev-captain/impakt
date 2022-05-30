import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardHeadlineText from '../MemberDashBoardHeadlineText';
import InvestMentTab from './InvestMentTab';

const Investment: React.FC = () => {
  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1280px"
      w="full"
      rowGap="97px"
      mt="48.5px"
    >
      <MemberDashBoardHeadlineText>Be an early investor</MemberDashBoardHeadlineText>
      <VStack w="100%" id="investment-tabs">
        <InvestMentTab />
      </VStack>
    </VStack>
  );
};
export default Investment;
