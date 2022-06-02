import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardHeadlineText from '../MemberDashBoardHeadlineText';
import TokenPriceDown from '../TokenPriceDown/TokenPriceDown';
import InvestMentTab from './InvestMentTab';

const Investment: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const handleTabIndexChanges = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1200px"
      w="full"
      rowGap="97px"
      px="2em"
    >
      <MemberDashBoardHeadlineText>Be an early investor</MemberDashBoardHeadlineText>
      <VStack w="100%" id="investment-tabs">
        <InvestMentTab
          activeTabIndex={activeTabIndex}
          handleTabIndexChanges={handleTabIndexChanges}
        />
        {activeTabIndex === 0 && <TokenPriceDown />}
      </VStack>
    </VStack>
  );
};
export default Investment;
