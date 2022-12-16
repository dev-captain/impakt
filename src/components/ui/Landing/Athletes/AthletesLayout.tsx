import * as React from 'react';
import { C } from 'components';
import { useColorModeValue, VStack } from '@chakra-ui/react';

const AthletesLayout: React.FC = ({ children }) => {
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      bgColor="#F5F8FA"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      // minH="70vh"
    >
      <VStack spacing="0px" px="16px" maxW="100%" w="full" color={textColor}>
        <VStack width="100%">
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxW="100%"
            pb="16px"
          >
            <VStack
              w="full"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              {children}{' '}
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default AthletesLayout;
