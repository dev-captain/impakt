import { useEffect } from 'react';
import { Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Keys from '@/i18n/types';

import { S, C } from '@/components';
import useEventStore from '@/hooks/store/useEventStore';

const EventPage = () => {
  const { slug } = useParams();
  const eventStore = useEventStore((state) => state);
  const text = useColorModeValue('glass.100', 'glass.800');
  const bg = useColorModeValue('glass.700', 'glass.300');

  useEffect(() => {
    eventStore.fetchActiveEvent();
  }, [slug]);

  return (
    <C.HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px', md: '80px' }} color={text}>
        <Text textStyle="bold7" fontWeight="700" mb="52px" pl="16px" align="center">
          {eventStore.event?.title || Keys.events.noEventsForNow}
        </Text>
        <S.CountDown
          bgColor={bg}
          date={eventStore.date!}
          isLoading={eventStore.isLoading}
          noEventTitle={Keys.events.waitForUpdates}
        />
        <S.MotionCaptureHero />
        <S.BurnToEarnHero />
      </VStack>
    </C.HeroLayout>
  );
};

export default EventPage;
