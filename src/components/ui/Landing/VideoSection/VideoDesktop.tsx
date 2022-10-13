/* eslint-disable no-nested-ternary */
import { Box, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import React, { memo } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Common, S } from 'components';
import SocialFitnessGamified from 'components/ui/home/HeroSection/SocialFitnessGamified';

import { Videos } from '../../../../data';
import {
  // setIsAnimated,
  setIsLoaded,
  // setIsScrolling,
} from '../../../../lib/redux/slices/state/stateSlice';
import { ImpaktFooter } from '../../../ui';

const DesktopVideo = styled.video<{
  // isAnimated: boolean;
  isScrolling: boolean;
  x: number;
  y: number;
  isMobile: boolean;
}>`
  object-fit: cover;
  margin: 0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const MobileVideo = styled.video`
  z-index: 9999;
  object-fit: cover;
  width: 100%;
  height: auto;
  margin: 0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const Source = styled.source``;

const VideoDesktop = React.forwardRef<HTMLVideoElement, React.ComponentPropsWithoutRef<'video'>>(
  (props, ref) => {
    const dispatch = useAppDispatch();
    const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);
    const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
    const borderX = useAppSelector((state) => state.stateReducer.heroVideo.borderX);
    const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);
    const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

    return isLessThan1280 ? (
      <>
        <Box position="relative">
          <MobileVideo
            onLoadedData={() => {
              dispatch(setIsLoaded(true));
            }}
            ref={ref}
            autoPlay
            loop
            muted
            {...props}
            playsInline
          >
            <Source src={Videos.newVideo} type="video/mp4" />
          </MobileVideo>
          <Box
            zIndex="20"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
          >
            <Text
              fontSize={{ base: '26px', md: '50px', lg: '80px' }}
              fontWeight="700"
              letterSpacing="-2px"
              color="white"
              textAlign="center"
            >
              Impakt Fitness World
            </Text>
            <Common.ImpaktButton
              variant="secondary"
              w={{ base: '130px', md: '348px' }}
              h={{ base: '44px', md: '75px' }}
              backgroundColor="transparent"
              borderRadius="10px"
              type="submit"
              border="3px solid white"
              fontSize={{ base: '14px', md: '21.7856px' }}
              fontWeight="600"
              margin="auto"
              display="flex"
              gap="5px"
            >
              Enter
              <ArrowForwardIcon />
            </Common.ImpaktButton>
          </Box>
        </Box>
        <Box>
          <SocialFitnessGamified>
            <HStack id="hero-right" maxH="788px" h="80vh" w="full" margin="0 !important">
              <Box height="100%" />
            </HStack>
          </SocialFitnessGamified>
          <S.FitnessJourney />
          <S.Privacy />
          <S.Evolving />
          <S.HumanNeed />
          <S.Athletes />
          <S.ImpaktTeam />
          <ImpaktFooter />
        </Box>
      </>
    ) : (
      <>
        <Box position="relative">
          <DesktopVideo
            x={borderX}
            ref={ref}
            y={borderY}
            isMobile
            isScrolling={(isScrolling && !isAnimated) || isLessThan1280}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => {
              dispatch(setIsLoaded(true));
            }}
          >
            <Source src={Videos.newVideo} type="video/mp4" />
          </DesktopVideo>
          <Box
            zIndex="20"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
          >
            <Text
              fontSize="80px"
              fontWeight="700"
              letterSpacing="-2px"
              color="white"
              textAlign="center"
            >
              Impakt Fitness World
            </Text>
            <Common.ImpaktButton
              variant="secondary"
              w={{ base: '130px', md: '348px' }}
              h={{ base: '44px', md: '75px' }}
              backgroundColor="transparent"
              borderRadius="10px"
              type="submit"
              border="3px solid white"
              fontSize={{ base: '14px', md: '21.7856px' }}
              fontWeight="600"
              margin="auto"
              display="flex"
              gap="5px"
              onClick={() => window.scrollTo(0, 1050)}
            >
              Enter
              <ArrowForwardIcon />
            </Common.ImpaktButton>
          </Box>
        </Box>
        <Box>
          <SocialFitnessGamified>
            <HStack id="hero-right" maxH="788px" h="80vh" w="full" margin="0 !important">
              <Box height="100%" />
            </HStack>
          </SocialFitnessGamified>
          <S.FitnessJourney />
          <S.Privacy />
          <S.Evolving />
          <S.HumanNeed />
          <S.Athletes />
          <S.ImpaktTeam />
          <ImpaktFooter />
        </Box>
      </>
    );
  },
);

export default memo(VideoDesktop);
