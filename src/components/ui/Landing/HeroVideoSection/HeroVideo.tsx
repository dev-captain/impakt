import { Box } from '@chakra-ui/react';
import React, { memo, useRef, useState } from 'react';

import { Videos } from '../../../../data';
import SoundsButton from './SoundsButton';
import HeroVideoText from './HeroVideoText';
// import HeroVideoEnterButton from './HeroVideoEnterButton';

const HeroVideo: React.FC = () => {
  const [isVideoEnded, setIsVideoEnded] = React.useState(false);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<null | (HTMLVideoElement & HTMLDivElement)>(null);
  const [sound, setSound] = useState(true);

  const handleMute = () => {
    setSound(!sound);
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };

  const endVideo = () => {
    if (!videoBoxRef.current) return;
    setIsVideoEnded(true);
    videoBoxRef.current.style.maxHeight = '0';
  };

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
        muted
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
        {!isVideoEnded && (
          <>
            <HeroVideoText />
            <SoundsButton
              variant="transparent"
              _focus={{}}
              _hover={{}}
              onClick={handleMute}
              isOn={!sound}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default memo(HeroVideo);
