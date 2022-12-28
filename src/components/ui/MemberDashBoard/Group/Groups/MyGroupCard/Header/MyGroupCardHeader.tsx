import { HStack } from '@chakra-ui/react';
import React from 'react';

import GroupCardWrapperHeader from '../../GroupCardHeader';
import CreateGroupButton from '../CreateGroupButton';
import ExploreGroupButton from '../ExploreGroupButton';

const MyGroupCardHeader: React.FC = () => {
  return (
    <GroupCardWrapperHeader justify="space-between" title="My Groups">
      <HStack mb="20px">
        <ExploreGroupButton />
        <CreateGroupButton />
      </HStack>
    </GroupCardWrapperHeader>
  );
};

export default MyGroupCardHeader;
