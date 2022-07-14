import { Box, HStack, useMediaQuery, VStack } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../assets/images';
import ScrollIconComponent from '../ScrollIconComponent';
import YourBody from '../YourBody';
import HeroVideo from './HeroVideo';
import SocialFitnessGamified from './SocialFitnessGamified';

const HeroMobile: React.FC = () => {
  const [isSmall] = useMediaQuery('(max-width: 1036px)');
  const windowRef = React.useRef<HTMLDivElement>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <>
      <SocialFitnessGamified>
        <VStack
          id="right"
          w="full"
          position="relative"
          margin="0 !important"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxW="800px" minW="343px" minH="207px" id="screen-video-box" position="relative">
            <Box display="flex" w="100%" h="100%" zIndex="0" position="relative">
              <img width="100%" src={Images.Common.Window} alt="_" />
            </Box>
            <HeroVideo
              ref={heroVideoRef}
              style={{
                width: '100%',
                position: 'absolute',
                height: '100%',
                top: isSmall ? '3.6vw' : '2.813vw',
                left: '0',
                zIndex: '9',
              }}
            />
          </Box>
          <Box
            mt="5em !important"
            h="80px"
            w="full"
            justifyContent="center"
            alignItems="center"
            display="flex"
            position="relative"
          >
            <ScrollIconComponent
              isVisible
              position="relative"
              zIndex="1"
              width="50"
              height="50"
              left="0"
            />
          </Box>
        </VStack>
      </SocialFitnessGamified>
      <YourBody>
        <HStack id="right" flex="1" w="full" margin="0 !important">
          <Box />
        </HStack>
      </YourBody>
    </>
  );
};

export default HeroMobile;
