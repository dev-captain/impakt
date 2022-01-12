import { memo } from 'react';
import { HStack, SimpleGrid, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import useCountdown from 'hooks/useCountdown';
import HeroLayout from 'components/layouts/HeroLayout';
import Logo from 'components/core/Logo';
import SocialMediasArea from './SocialMediasArea';
import SubscribeArea from './SubscribeArea';
import CounterItem from './CounterItem';

const CountdownHero = ({ date }: { date: Date }) => {
  const countdown = useCountdown(date);
  const items = ['days', 'hours', 'minutes', 'seconds'];
  const [isLessThan991] = useMediaQuery('(max-width: 992px)');
  const [isLargerThan767] = useMediaQuery('(min-width: 767px)');

  return (
    <HeroLayout hideBlur pos="absolute">
      <VStack pos="absolute" top={{ base: 4, md: 16 }} zIndex={100}>
        <SocialMediasArea />
        <HStack
          zIndex={2}
          alignItems="center"
          paddingTop={{
            base: '8',
            md: '10',
            xl: '16',
          }}
        >
          <Logo />
          <Text fontSize="54px" fontWeight="semibold" paddingLeft={2} paddingBottom={1}>
            in:
          </Text>
        </HStack>
      </VStack>

      <SimpleGrid
        columns={4}
        columnGap={16}
        rowGap={4}
        zIndex={2}
        paddingTop={{
          base: '200px',
          md: isLargerThan767 && isLessThan991 ? '200px' : '10',
          xl: '24',
        }}
      >
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
