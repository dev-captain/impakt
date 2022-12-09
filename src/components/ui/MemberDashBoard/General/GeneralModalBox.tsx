import React from 'react';
import { StackProps, VStack } from '@chakra-ui/react';

const GeneralModalBox: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <VStack
      maxW={{ base: '100%', sm: '588px' }}
      w="100%"
      mt={{ sm: '24px', lg: '0' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      rowGap="24px"
      {...props}
    >
      {children}
      {/* <WhiteList /> */}
    </VStack>
  );
};
export default GeneralModalBox;
