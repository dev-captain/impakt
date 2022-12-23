import { Box } from '@chakra-ui/react';
import { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import SoundsButton from '../../HeroVideoSection/SoundsButton';

const Source = styled.source``;

const MyBodyVideo = () => {
  const [volume, setVolume] = useState<string>('1');
  const videoRef = useRef<null | (HTMLVideoElement & HTMLDivElement)>(null);
  const [showButton, setShowButton] = useState(false);
  const [sound, setSound] = useState(true);
  const handleMute = () => {
    setSound(!sound);
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };
  const onVolumeChanges = (currentVolume: string) => {
    if (!videoRef.current) return;
    videoRef.current.volume = Number(currentVolume);
    setVolume(currentVolume);
  };

  return (
    <Box
      position="relative"
      onClick={handleMute}
      onMouseLeave={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
    >
      <Box
        objectFit="cover"
        as="video"
        ref={videoRef}
        top="0"
        left="0"
        w="100%"
        maxHeight="500px"
        maxWidth="1000px"
        height="100%"
        borderRadius="20px"
        autoPlay
        loop
        muted
        playsInline
        boxShadow="dark"
      >
        <Source
          src="https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Vsport+Website+Video.mp4"
          type="video/mp4"
        />
      </Box>

      {showButton && (
        <Box
          id="hero-video-content-box"
          zIndex="0"
          position="absolute"
          top={{ base: '36%', md: '50%' }}
          left="50%"
          px="1em"
          w="full"
          transform="translate(-50%,-50%)"
        >
          <SoundsButton variant="black-orange" onClick={() => null} isOn={!sound} />
        </Box>
      )}

      {showButton && (
        <Box
          onClick={(e) => e.stopPropagation()}
          id="hero-video-content-box"
          zIndex="0"
          position="absolute"
          bottom="0"
          left="50%"
          px="1em"
          w="full"
          transform="translate(-50%,-50%)"
        >
          <Box
            bg="fg-1"
            p={{ base: '0.3em', md: '1em' }}
            borderRadius={{ base: '0.8em', md: '1em' }}
            w="min-content"
            display="flex"
            _hover={{ bg: 'orangeGradient' }}
            transition="all .4s linear"
          >
            <input
              value={volume}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                e.stopPropagation();
                onVolumeChanges(e.currentTarget.value);
              }}
              min="0"
              max="1"
              type="range"
              step="0.01"
            />
          </Box>
        </Box>
      )}
    </Box>
    // </Box>
  );
};

export default memo(MyBodyVideo);
