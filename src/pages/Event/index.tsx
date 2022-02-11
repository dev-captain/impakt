import { useEffect } from 'react';
import { GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import CounterItem from 'components/ui/home/CountdownHero/CounterItem';
import useEventStore from 'hooks/store/useEventStore';
import useCountdown from 'hooks/useCountdown';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { slug } = useParams();
  const eventStore = useEventStore((state) => state);

  useEffect(() => {
    eventStore.fetchEvent(slug!);
  }, [slug]);

  return (
    <HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh">
        <Text fontSize="54px" fontWeight="semibold" paddingBottom={1} color="white">
          {eventStore.event?.title}
        </Text>
        {eventStore.event && <CountDown date={eventStore.date!} />}
      </VStack>
    </HeroLayout>
  );
};

const CountDown = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);
  const items = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <SimpleGrid rowGap={0} zIndex={2} columns={4} columnGap={16} color="white">
      <GridItem colSpan={4} />
      {items.map((item) => (
        // @ts-ignore
        <CounterItem value={countdown?.[item]} title={item} key={item} />
      ))}
    </SimpleGrid>
  );
};

export default EventPage;
