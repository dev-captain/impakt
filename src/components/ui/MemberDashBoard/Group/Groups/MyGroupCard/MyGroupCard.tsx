import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import MyGroupCardWrapper from './MyGroupCardWrapper';

const MyGroupCard: React.FC = () => {
  return (
    <HStack
      columnGap="24px !important"
      rowGap="24px !important"
      w="full"
      spacing="0"
      flexWrap={{ sm: 'wrap' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <MyGroupCardWrapper />
    </HStack>
  );
};
export default MyGroupCard;
