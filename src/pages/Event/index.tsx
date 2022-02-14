import { useEffect } from 'react';
import { GridItem, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import useEventStore from 'hooks/store/useEventStore';
import useCountdown from 'hooks/useCountdown';
import { useParams } from 'react-router-dom';
import { layoutPadding } from 'theme';
import { GradientEllipse } from 'components/ui/home/RoadmapHero/Gradients';
import { BurnToEarnHero, MotionCaptureHero } from 'components/ui/home';

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
          {eventStore.event?.title}
        </Text>
        {eventStore.event && <CountDown date={eventStore.date!} bgColor={bg} />}
        <MotionCaptureHero />
        <BurnToEarnHero />
      </VStack>
    </HeroLayout>
  );
};

const CountDown = ({ date, bgColor }: { date: Date; bgColor: string }) => {
  const countdown = useCountdown(date);
  const items = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <VStack px={layoutPadding} w="full" pb="80px">
      <SimpleGrid
        zIndex={2}
        columns={4}
        minW="full"
        rowGap="16px"
        pos="relative"
        columnGap="10px"
        overflow="hidden"
        bgColor={bgColor}
        borderRadius="28px"
        py={{ base: '16px', md: '60px', xl: '80px' }}
        px={{ base: '16px', md: '125px', xl: '250px' }}
      >
        <GridItem colSpan={4} />
        {items.map((item) => (
          // @ts-ignore
          <EventCounterItem value={countdown?.[item]} title={item} key={item} />
        ))}
        <GradientEllipse />
      </SimpleGrid>
    </VStack>
  );
};

const EventCounterItem = ({ value, title }: { value: number; title: string }) => {
  const colSpan = {
    base: 4,
    md: 2,
    lg: 1,
  };

  return (
    <GridItem colSpan={colSpan}>
      <VStack>
        <Text textStyle="black10" fontWeight="300">
          {value}
        </Text>
        <Text textStyle="regular5" fontWeight="300">
          {title}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default EventPage;
