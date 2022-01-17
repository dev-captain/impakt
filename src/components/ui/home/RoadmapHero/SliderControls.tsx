import { LegacyRef } from 'react';
import { Box } from '@chakra-ui/react';
import useHorizontalScroll from 'hooks/useHorizontalScroll';
import SliderControl from './SliderControl';

type Props = {
  scrollRef: LegacyRef<HTMLDivElement> | undefined;
};

const SliderControls = ({ scrollRef }: Props) => {
  const { moveLeft, moveRight, scrollStatus } = useHorizontalScroll();

  return (
    <>
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
    </>
  );
};

export default SliderControls;
