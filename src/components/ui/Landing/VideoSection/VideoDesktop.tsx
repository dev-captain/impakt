/* eslint-disable no-nested-ternary */
import { Box, Text } from '@chakra-ui/react';
import React, { memo, useRef, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { Common, I } from 'components';

import { Videos } from '../../../../data';

const Source = styled.source``;

const VideoDesktop: React.FC = () => {
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
    window.scrollTo(0, videoBoxRef.current.offsetHeight);
  };

  return (
    <Box ref={videoBoxRef} maxH="100vh" position="relative">
      <Box
        as="video"
        minH="100vh"
        minW="100%"
        objectFit="cover"
        ref={videoRef}
        playsInline
        onEnded={() => endVideo()}
      >
        <Source src={Videos.newVideo} type="video/mp4" />
      </Box>
      <Box
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
            <Text
              fontSize={{ base: '50px', lg: '80px' }}
              fontWeight="700"
              letterSpacing="-2px"
              color="white"
              textAlign="center"
            >
              Impakt Fitness World
            </Text>
            <Common.ImpaktButton
              variant="secondary"
              maxW="348px"
              w="70%"
              h={{ base: '60px', md: '75px' }}
              backgroundColor="transparent"
              borderRadius="10px"
              type="submit"
              border="3px solid white"
              fontSize={{ base: '21.7856px' }}
              fontWeight="600"
              margin="auto"
              display="flex"
              gap="5px"
              onClick={() => play()}
            >
              Enter
              <ArrowForwardIcon />
            </Common.ImpaktButton>
          </>
        )}
      </Box>

      <Common.ImpaktButton
        bottom="0"
        position="absolute"
        left="50%"
        transform="translate(-50%, -50%)"
        variant="secondary"
        border="0"
        w="auto"
        display="flex"
        marginTop="25px"
        backgroundColor="transparent"
        _hover={{ backgroundColor: 'transparent' }}
        _focus={{ backgroundColor: 'transparent' }}
        _active={{ backgroundColor: 'transparent' }}
        onClick={() => handleMute()}
      >
        {sound ? (
          <I.SoundOnIcon width={{ base: 'auto' }} />
        ) : (
          <I.SoundOffIcon width={{ base: 'auto' }} />
        )}
      </Common.ImpaktButton>
    </Box>
  );
};

export default memo(VideoDesktop);
