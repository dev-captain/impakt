import { memo } from 'react';
import { GridItem, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import useCountdown from 'hooks/useCountdown';
import HeroLayout from 'components/layouts/HeroLayout';
import Logo from 'components/core/Logo';
import SocialMediasArea from './SocialMediasArea';
import SubscribeArea from './SubscribeArea';
import CounterItem from './CounterItem';

const CountdownHero = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);
  const items = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <HeroLayout pos="absolute">
      <VStack pos="absolute" top={{ base: 4, md: 16 }} zIndex={100}>
        <SocialMediasArea />
      </VStack>
      <SimpleGrid
        rowGap={0}
        zIndex={2}
        columns={4}
        columnGap={16}
        paddingTop={{
          base: '180px',
        }}
      >
        <GridItem colSpan={4}>
          <HStack zIndex={2} alignItems="center" justifyContent="center">
            <Logo />
            <Text fontSize="54px" fontWeight="semibold" paddingLeft={2} paddingBottom={1}>
              in:
            </Text>
          </HStack>
        </GridItem>
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
