import { useEffect } from 'react';
import { Text, useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import useEventStore from 'hooks/store/useEventStore';
import { useParams } from 'react-router-dom';
import { BurnToEarnHero, MotionCaptureHero } from 'components/ui/home';
import CountDown from 'components/ui/events/CountDown';

const EventPage = () => {
  const { slug } = useParams();
  const eventStore = useEventStore((state) => state);
  const text = useColorModeValue('glass.100', 'glass.800');
  const bg = useColorModeValue('glass.700', 'glass.300');

  useEffect(() => {
    eventStore.fetchActiveEvent();
  }, [slug]);

  return (
    <HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px', md: '80px' }} color={text}>
        <Text textStyle="bold7" fontWeight="700" mb="52px" pl="16px" align="center">
          {eventStore.event?.title || 'No events for now'}
        </Text>
        <CountDown date={eventStore.date!} bgColor={bg} isLoading={eventStore.isLoading} />
        <MotionCaptureHero />
        <BurnToEarnHero />
      </VStack>
    </HeroLayout>
  );
};

export default EventPage;
