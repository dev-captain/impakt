import { useEffect } from 'react';
import { Text, useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/core/Layouts/HeroLayout';
import useEventStore from 'hooks/store/useEventStore';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { CountDown, BurnToEarnHero, MotionCaptureHero } from 'components/ui/events';

const EventPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation().i18n;
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
          {eventStore.event?.title || t(Keys.events.noEventsForNow)}
        </Text>
        <CountDown
          bgColor={bg}
          date={eventStore.date!}
          isLoading={eventStore.isLoading}
          noEventTitle={t(Keys.events.waitForUpdates)}
        />
        <MotionCaptureHero />
        <BurnToEarnHero />
      </VStack>
    </HeroLayout>
  );
};

export default EventPage;
