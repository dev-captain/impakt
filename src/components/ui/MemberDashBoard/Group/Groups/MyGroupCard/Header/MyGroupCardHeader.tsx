import { Box } from '@chakra-ui/react';
import React from 'react';

import GroupCardWrapperHeader from '../../GroupCardHeader';
import CreateGroupButton from '../CreateGroupButton';

const MyGroupCardHeader: React.FC = () => {
  return (
    <GroupCardWrapperHeader justify="space-between" title="My Groups">
      <Box mb="20px">
        <CreateGroupButton />
      </Box>
    </GroupCardWrapperHeader>
  );
};

export default MyGroupCardHeader;
