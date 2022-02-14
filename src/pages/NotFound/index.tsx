import { Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const NotFound = () => {
  return (
    <HeroLayout align="flex-start" justify="flex-start" showNavbar showFooter>
      <VStack minH="60vh" px={layoutPadding}>
        <Text>This page is not found.</Text>
      </VStack>
    </HeroLayout>
  );
};

export default NotFound;
