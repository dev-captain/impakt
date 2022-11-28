import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import AddGroupCard from './AddGroupCard';
import MyGroupCardWrapper from './MyGroupCardWrapper';

const MyGroupCard: React.FC = () => {
  return (
    <HStack
      columnGap={{ md: '24px' }}
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      margin="30px 0"
      flexWrap={{ sm: 'wrap' }}
      display={{ sm: 'flex' }}
    >
      <MyGroupCardWrapper />
      <AddGroupCard />
    </HStack>
  );
};
export default MyGroupCard;
