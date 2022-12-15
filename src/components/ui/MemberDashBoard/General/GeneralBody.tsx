import React from 'react';
import { HStack } from '@chakra-ui/react';

const GeneralBody: React.FC = ({ children }) => {
  return (
    <HStack
      columnGap="24px"
      rowGap="24px"
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      w="full"
      flexWrap="wrap"
    >
      {children}
    </HStack>
  );
};
export default GeneralBody;
