/* eslint-disable no-nested-ternary */
import { useMediaQuery } from '@chakra-ui/react';
import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Videos } from '../../../../data';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import {
  setIsAnimated,
  setIsLoaded,
  setIsScrolling,
} from '../../../../lib/redux/slices/state/stateSlice';

const rotate = ({ x, y }: { x: number; y: number }) => keyframes`
  0% {
    top:0;
    left: 0;
    position:fixed;
  }

  100% {
  width:640px;
  height:360px;
  top: ${y}px;
  left: ${x}px;
  position:absolute
  }
`;

const DesktopVideo = styled.video<{
  isAnimated: boolean;
  isScrolling: boolean;
  x: number;
  y: number;
  isMobile: boolean;
}>`
  object-fit: cover;
  width: ${(p) => (p.isAnimated ? '640px' : '100vw')};
  height: ${(p) => (p.isAnimated ? '360px' : '100vh')};
  z-index: 7;
  position: ${(p) => (p.isAnimated ? 'absolute' : 'fixed')};
  animation: ${(p) =>
    p.isScrolling &&
    !p.isAnimated &&
    css`
      ${rotate({ x: p.x ?? 0, y: p.y ?? 0 })} 1s linear forwards;
    `};
  top: ${(p) => (p.isAnimated ? `${p.y}px` : '0')};
  left: ${(p) => (p.isAnimated ? `${p.x}px` : '0')};
  margin: 0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const MobileVideo = styled.video`
  object-fit: cover;
  width: 640px;
  height: 360px;
  margin: 0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const Source = styled.source``;

const HeroVideo = React.forwardRef<HTMLVideoElement, React.ComponentPropsWithoutRef<'video'>>(
  (props, ref) => {
    const dispatch = useAppDispatch();
    const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);
    const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
    const borderX = useAppSelector((state) => state.stateReducer.heroVideo.borderX);
    const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);
    const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

    return isLessThan1280 ? (
      <MobileVideo ref={ref} autoPlay loop muted {...props}>
        <Source src={Videos.heroVideo} type="video/mp4" />
      </MobileVideo>
    ) : (
      <DesktopVideo
        x={borderX}
        ref={ref}
        y={borderY}
        isMobile
        isAnimated={isLessThan1280 || isAnimated}
        onWheel={() => {
          if (!isScrolling) {
            dispatch(setIsScrolling());
            setTimeout(() => {
              dispatch(setIsAnimated());
            }, 1000);
          }
        }}
        isScrolling={(isScrolling && !isAnimated) || isLessThan1280}
        autoPlay
        loop
        muted
        onLoadedData={() => {
          dispatch(setIsLoaded(true));
        }}
      >
        <Source src={Videos.heroVideo} type="video/mp4" />
      </DesktopVideo>
    );
  },
);

export default memo(HeroVideo);
