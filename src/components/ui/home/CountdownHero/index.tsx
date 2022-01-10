import { memo } from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import useCountdown from 'hooks/useCountdown';
import HeroLayout from 'components/layouts/HeroLayout';
import SocialMediasArea from './SocialMediasArea';
import SubscribeArea from './SubscribeArea';
import CounterItem from './CounterItem';

const CountdownHero = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);

  return (
    <HeroLayout hideBlur pos="absolute">
      <VStack pos="absolute" top={{ base: 4, md: 16 }}>
        <SocialMediasArea />
      </VStack>
      <SimpleGrid columns={4} columnGap={16} rowGap={4} zIndex={2} paddingTop={8}>
        <CounterItem value={countdown.days} title="days" />
        <CounterItem value={countdown.hours} title="hours" />
        <CounterItem value={countdown.minutes} title="minutes" />
        <CounterItem value={countdown.seconds} title="seconds" />
      </SimpleGrid>
      <SubscribeArea />
    </HeroLayout>
  );
};

export default memo(CountdownHero);
