import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Videos } from '../../../../data';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { setIsAnimated, setIsScrolling } from '../../../../lib/redux/slices/state/stateSlice';

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
  left: 100vh;
  position:absolute
  }
`;

const Video = styled.video<{ isAnimated: boolean; isScrolling: boolean; x: number; y: number }>`
  object-fit: cover;
  width: ${(p) => (p.isAnimated ? '640px' : '100vw')};
  height: ${(p) => (p.isAnimated ? '360px' : '100vh')};
  z-index: 1;
  position: ${(p) => (p.isAnimated ? 'absolute' : 'fixed')};
  animation: ${(p) =>
    p.isScrolling &&
    !p.isAnimated &&
    css`
      ${rotate({ x: p.x ?? 0, y: p.y ?? 0 })} 1s linear forwards;
    `};
  top: ${(p) => (p.isAnimated ? `${p.y}px` : '0')};
  left: ${(p) => (p.isAnimated ? `100vh` : '0')};
  margin: 0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const Source = styled.source``;

const HeroVideo = React.forwardRef<HTMLVideoElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const borderX = useAppSelector((state) => state.stateReducer.heroVideo.borderX);
  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);

  return (
    <Video
      ref={ref}
      x={borderX}
      y={borderY + 260}
      isAnimated={isAnimated}
      onWheel={() => {
        if (!isScrolling) {
          dispatch(setIsScrolling());
          setTimeout(() => {
            dispatch(setIsAnimated());
          }, 1000);
        }
      }}
      isScrolling={isScrolling && !isAnimated}
      autoPlay
      loop
      muted
    >
      <Source src={Videos.heroVideo} type="video/mp4" />
    </Video>
  );
});

export default HeroVideo;
