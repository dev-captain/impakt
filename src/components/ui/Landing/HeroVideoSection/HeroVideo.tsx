import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useRef, useState } from 'react';

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
    if (!videoBoxRef.current) return;
    videoBoxRef.current.style.maxHeight = '0';
  };
  useEffect(() => {
    if (videoRef.current) {
      // pollyfill fix for ios require auto play true with playsInline but we don't want to play auto : hacky solution
      videoRef.current.pause();
    }
  }, []);

  return (
    <Box
      bgColor="#F4F7F9 !important"
      id="hero-video-box"
      transition="all 0.4s ease-out"
      ref={videoBoxRef}
      maxH="100vh"
      position="relative"
      backgroundColor="#000"
    >
      <Box
        id="hero-video"
        as="video"
        minH="100vh"
        minW="100%"
        objectFit="cover"
        ref={videoRef}
        src={Videos.newVideo}
        controls={false}
        autoPlay
        onEnded={() => endVideo()}
        playsInline
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
        <SoundsButton onClick={handleMute} isOn={sound} />
      </Box>
    </Box>
  );
};

export default memo(HeroVideo);
