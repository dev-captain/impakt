import { memo } from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import useCountdown from 'hooks/useCountdown';
import HeroLayout from 'components/layouts/HeroLayout';
import SocialMediasArea from './SocialMediasArea';
import SubscribeArea from './SubscribeArea';
import CounterItem from './CounterItem';

const CountdownHero = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);
  const items = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <HeroLayout hideBlur pos="absolute">
      <VStack pos="absolute" top={{ base: 4, md: 16 }} zIndex={100}>
        <SocialMediasArea />
      </VStack>
      <SimpleGrid columns={4} columnGap={16} rowGap={4} zIndex={2} paddingTop={24}>
        {items.map((item) => (
          // @ts-ignore
          <CounterItem value={countdown?.[item]} title={item} key={item} />
        ))}
      </SimpleGrid>
      <SubscribeArea />
    </HeroLayout>
  );
};

export default memo(CountdownHero);
