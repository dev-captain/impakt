import { useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { Widget } from '@typeform/embed-react';

const EventPage = () => {
  const text = useColorModeValue('glass.100', 'glass.800');

  return (
    <HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px' }} color={text}>
        <Widget
          id="EEnQpuTA"
          style={{
            width: '100%',
            height: '70vh',
            padding: '16px',
          }}
        />
      </VStack>
    </HeroLayout>
  );
};

export default EventPage;
