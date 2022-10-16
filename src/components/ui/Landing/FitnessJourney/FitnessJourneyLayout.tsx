import * as React from 'react';
import { C } from 'components';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';

const FitnessJourneyLayout: React.FC = ({ children }) => {
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      bgColor="#F0F7FF"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '146px',
        xl: '127px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack spacing="0px" px="16px" maxW="100%" w="full" color={textColor}>
        <VStack width="100%" p={{ lgx: '0 145px', lg: '0 50px' }}>
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxWidth="100%"
            pb="16px"
            width="100%"
          >
            <VStack
              width="100%"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Box width="100%">{children} </Box>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default FitnessJourneyLayout;
