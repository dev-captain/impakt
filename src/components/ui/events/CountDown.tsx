import { GridItem, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';
import useCountdown from 'hooks/useCountdown';
import { layoutPadding } from 'theme';
import { GradientEllipse } from 'components/ui/home/RoadmapHero/Gradients';
import EventCounterItem from 'components/ui/events/EventCounterItem';

const CountDown = ({
  date,
  bgColor,
  isLoading,
  noEventTitle,
}: {
  date: Date;
  bgColor: string;
  isLoading?: boolean;
  noEventTitle: string;
}) => {
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
        {!date && (
          <GridItem colSpan={4}>
            <VStack>
              {isLoading && <Spinner size="xl" />}
              {!isLoading && <Text textStyle="regular5">{noEventTitle}</Text>}
            </VStack>
          </GridItem>
        )}
        <GridItem colSpan={4} />
        {date &&
          items.map((item) => (
            // @ts-ignore
            <EventCounterItem value={countdown?.[item]} title={item} key={item} />
          ))}
        <GradientEllipse />
      </SimpleGrid>
    </VStack>
  );
};

export default CountDown;
