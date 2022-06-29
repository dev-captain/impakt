import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: scale(1);
    left: 0;
  }

  50% {
    transform: scale(1);
    left: 0;
  }

  100% {
  transform: scale(0.5);
  left: 20%;
  }
`;

const Video = styled.video<{ isScrolling: boolean }>`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation:${(p) =>
    p.isScrolling &&
    css`
      ${rotate} 5s linear;
    `}
  animation-fill-mode: forwards;
  top: 0;
  left: 0;
`;

const Source = styled.source``;

const ScreenAndVideo = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  return (
    <Video
      onWheel={() => {
        setIsScrolling(true);
      }}
      isScrolling={isScrolling}
      autoPlay
      loop
      muted
    >
      <Source src=".../asd.mp4" />
    </Video>
  );
};

export default memo(ScreenAndVideo);
