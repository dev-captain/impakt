import { Box } from '@chakra-ui/react';
import React, { memo, useRef, useState } from 'react';

// import { useAppSelector } from 'hooks';
import { Videos } from '../../../../data';
import SoundsButton from './SoundsButton';
import HeroVideoText from './HeroVideoText';
import HeroVideoEnterButton from './HeroVideoEnterButton';

const HeroVideo: React.FC = () => {
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<null | (HTMLVideoElement & HTMLDivElement)>(null);
  const [sound, setSound] = useState(true);
  const [opacityText, setOpacityText] = useState(1);

  const play = () => {
    setOpacityText(0);
    videoRef?.current?.play();
  };

  const handleMute = () => {
    setSound(!sound);
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };

  const endVideo = () => {
    setTimeout(() => {
      if (!videoBoxRef.current) return;
      window.scrollTo(0, videoBoxRef.current.offsetHeight);
      videoBoxRef.current.style.opacity = '0';
    }, 500);

    setTimeout(() => {
      if (!videoBoxRef.current) return;
      videoBoxRef.current.style.display = 'none';
    }, 1500);
  };

  return (
    <Box
      bgColor="#F4F7F9 !important"
      id="hero-video-box"
      transition="all .2s linear"
      ref={videoBoxRef}
      maxH="100vh"
      position="relative"
    >
      <Box
        id="hero-video"
        as="video"
        minH="100vh"
        minW="100%"
        objectFit="cover"
        ref={videoRef}
        playsInline
        onEnded={() => endVideo()}
      >
        <Box as="source" src={Videos.newVideo} type="video/mp4" />
      </Box>
      <Box
        id="hero-video-content-box"
        zIndex="20"
        position="absolute"
        top={{ base: '36%', md: '50%' }}
        left="50%"
        px="1em"
        w="full"
        transform="translate(-50%,-50%)"
      >
        {opacityText === 1 && (
          <>
            <HeroVideoText />
            <HeroVideoEnterButton onClick={play} />
          </>
        )}
      </Box>
      <SoundsButton onClick={handleMute} isOn={sound} />
    </Box>
  );
};

export default memo(HeroVideo);
