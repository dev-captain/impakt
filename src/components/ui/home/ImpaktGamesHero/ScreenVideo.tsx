import React, { memo, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { VStack, Image } from '@chakra-ui/react';
import { Play } from 'components/core/VideoModal';
import useResize from 'hooks/useResize';

const Video = React.lazy(() => import('./Video'));

const ScreenAndVideo = ({
  onPlay,
  view = 'desktop',
}: {
  onPlay: () => void;
  view?: 'mobile' | 'desktop';
}) => {
  const data = useResize();
  const isDesktop = view === 'desktop';
  const imageRef = useRef<HTMLImageElement>(null);
  const [{ w, h }, setSizes] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [trigger, setTrigger] = useState<number>(0);

  setTimeout(() => {});
  const getCalculatedWidth = useCallback(
    (width: number) => {
      return (width * 533) / 700;
    },
    [w],
  );

  const getCalculatedHeight = useCallback(
    (height: number) => {
      return (height * 333) / 404;
    },
    [h],
  );

  const getImageSize = useCallback(() => {
    if (w === 0 || h === 0) {
      const timeout = setInterval(() => {
        setTrigger(Date.now());
        clearInterval(timeout);
      }, 100);
    }

    setSizes({
      w: imageRef.current?.width || w,
      h: imageRef.current?.height || h,
    });
  }, [data.sizes.width, trigger]);

  useEffect(() => {
    getImageSize();
  }, [data.sizes.width || 0, trigger]);

  return (
    <VStack
      pos="relative"
      onClick={onPlay}
      overflow="hidden"
      w={{ base: 'full', md: 'auto' }}
      display={{
        md: isDesktop ? 'flex' : 'none',
        base: isDesktop ? 'none' : 'flex',
      }}
    >
      <VStack
        w="100%"
        h="100%"
        pos="absolute"
        align="center"
        justify="center"
        cursor="pointer"
        onClick={onPlay}
      >
        <Play onClick={onPlay} />
      </VStack>
      <VStack
        w="100%"
        h="100%"
        bottom="8px"
        pos="absolute"
        align="center"
        justify="center"
        cursor="pointer"
        pt={{ base: '7px', md: '8px', lg: '0px' }}
      >
        <Suspense fallback={<Play onClick={() => {}} />}>
          <Video
            w={`${getCalculatedWidth(w) || '533'}px`}
            h={`${getCalculatedHeight(h) || '404'}px`}
          />
        </Suspense>
      </VStack>
      <Image
        ref={imageRef}
        w="100%"
        h="100%"
        maxH="850px"
        objectFit="contain"
        src="assets/images/laptop.svg"
      />
    </VStack>
  );
};

export default memo(ScreenAndVideo);
