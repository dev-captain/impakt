import * as React from 'react';
import { Box, HStack, useMediaQuery, VStack, Text } from '@chakra-ui/react';
import { I } from 'components';
import { useAppSelector } from 'hooks';

import Images from '../../../../assets/images';

import ScrollIconComponent from '../ScrollIconComponent';
import YourBody from '../YourBody';
import HeroVideo from './HeroVideo';
import SocialFitnessGamified from './SocialFitnessGamified';

const HeroMobile: React.FC = () => {
  const [isSmall] = useMediaQuery('(max-width: 1036px)');
  // const isVideoLoaded = useAppSelector((state) => state.stateReducer.heroVideo.isLoaded);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

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
            {/* {!isVideoLoaded && (
              <Box
                bgColor="#000"
                top={isSmall ? '3.6vw' : '2.813vw'}
                left="0"
                zIndex="10"
                position="absolute"
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="0px 0px 10px 10px"
                flexDir="column"
              >
                <I.LoadingIcon />
                <Text top="-20px" color="rgba(255, 255, 255, 0.5)" textStyle="bold5">
                  Loading...
                </Text>
              </Box>
            )} */}
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
        <HStack
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          m="0 !important"
          id="right"
          flex="1"
          w="full"
        >
          <Box maxW="800px" minW="343px" minH="207px" id="screen-video-box" position="relative">
            <Box display="flex" w="100%" h="100%" zIndex="0" position="relative">
              <img width="100%" src={Images.Common.Window} alt="_" />
            </Box>
            {/* {!isVideoLoaded && (
              <Box
                bgColor="#000"
                top={isSmall ? '3.6vw' : '2.813vw'}
                left="0"
                zIndex="10"
                position="absolute"
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="0px 0px 10px 10px"
                flexDir="column"
              >
                <I.LoadingIcon />
                <Text top="-20px" color="rgba(255, 255, 255, 0.5)" textStyle="bold5">
                  Loading...
                </Text>
              </Box>
            )} */}
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
        </HStack>
      </YourBody>
    </>
  );
};

export default HeroMobile;
