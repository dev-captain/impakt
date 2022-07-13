import { Box, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../assets/images';
import ScrollIconComponent from '../ScrollIconComponent';
import YourBody from '../YourBody';
import HeroVideo from './HeroVideo';
import SocialFitnessGamified from './SocialFitnessGamified';

const HeroMobile: React.FC = () => {
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
          <Box position="relative">
            <Box display="flex" w="100%" maxW="800px" zIndex="0" position="relative">
              <img width="100%" src={Images.Common.Window} alt="_" />

              <HeroVideo
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '20px',
                  left: '0',
                  zIndex: '9',
                }}
              />
            </Box>
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
          <Box height="72.962962962963vh" />
        </HStack>
      </YourBody>
    </>
  );
};

export default HeroMobile;
