import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardCard from '../MemberDashBoardCard';
import SummarizeImpaktUserInfo from './SummarizeImpaktUserInfo';

const SummarizeImpaktUser: React.FC = () => {
  console.log('render for summarize impakt user');

  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1200px"
      w="full"
      rowGap="97px"
      mt="48.5px"
    >
      <VStack rowGap="37px" id="member-dasboard-summarize-card" px="2em" w="100%">
        <MemberDashBoardCard isGradient>
          <SummarizeImpaktUserInfo />
        </MemberDashBoardCard>
      </VStack>
    </VStack>
  );
};

export default SummarizeImpaktUser;
