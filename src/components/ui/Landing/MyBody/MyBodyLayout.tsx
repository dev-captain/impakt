import * as React from 'react';
import { useMediaQuery, VStack } from '@chakra-ui/react';
import { C } from '@/components';
import LandingPageNavbar from '../LandingPageNavbar';

const MyBodyLayout: React.FC = ({ children }) => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <C.HeroLayout
      customPadding="0"
      spacing={10}
      pos="relative"
      removeBottomPadding={isLessThan1280}
      bgColor="#F5F8FA"
      align="flex-start"
      justify="flex-start"
      removeTopPadding
      minH="auto"
    >
      <LandingPageNavbar />
      <VStack w="full">
        <VStack paddingX={{ base: '1em', lg: '0' }} maxW="100%" w="full">
          <VStack
            w="full"
            rowGap="32px"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
          >
            {children}
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};
export default MyBodyLayout;
