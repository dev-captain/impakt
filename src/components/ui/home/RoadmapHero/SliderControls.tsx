import { LegacyRef } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import useHorizontalScroll from 'hooks/useHorizontalScroll';
import SliderControl from './SliderControl';

type Props = {
  forMobile?: boolean;
  scrollRef: LegacyRef<HTMLDivElement> | undefined;
};

const SliderControls = ({ scrollRef, forMobile }: Props) => {
  const { moveLeft, moveRight, scrollStatus } = useHorizontalScroll();

  if (forMobile) {
    return (
      <HStack justify="space-between" align="space-between" display={{ base: 'flex', md: 'none' }}>
        <VStack onClick={() => moveLeft(scrollRef)}>
          <SliderControl isActive={scrollStatus === 'left' || scrollStatus === 'mid'} />
        </VStack>
        <VStack onClick={() => moveRight(scrollRef)}>
          <SliderControl
            direction="right"
            isActive={scrollStatus === 'right' || scrollStatus === 'mid'}
          />
        </VStack>
      </HStack>
    );
  }

  return (
    <Box d={{ base: 'none', md: 'flex' }}>
      <Box
        pos="absolute"
        left={{ base: -27, md: -27 }}
        top={480 / 2 - 52}
        onClick={() => moveLeft(scrollRef)}
      >
        <SliderControl isActive={scrollStatus === 'left' || scrollStatus === 'mid'} />
      </Box>
      <Box
        pos="absolute"
        right={{ base: -27, md: -27 }}
        top={480 / 2 - 52}
        onClick={() => moveRight(scrollRef)}
      >
        <SliderControl
          direction="right"
          isActive={scrollStatus === 'right' || scrollStatus === 'mid'}
        />
      </Box>
    </Box>
  );
};

export default SliderControls;
