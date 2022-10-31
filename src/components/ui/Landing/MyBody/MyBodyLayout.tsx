import * as React from 'react';
import { useMediaQuery, VStack } from '@chakra-ui/react';
import { C } from 'components';
import NewNavbar from '../../../core/NewNavbar';

const MyBodyLayout: React.FC = ({ children }) => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <C.HeroLayout
      customPadding="0"
      spacing={10}
      pos="relative"
      removeBottomPadding={isLessThan1280}
      bgColor="#F4F7F9"
      align="flex-start"
      justify="flex-start"
      removeTopPadding
    >
      <NewNavbar />
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
