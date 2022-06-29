import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Videos } from '../../../../data';

const rotate = keyframes`
  0% {
    transform: scale(1);
    top:0;
    left: 0;
  }

  100% {
  transform: scale(0.297);
  top:30px;
  left: 342px;
  }
`;

const Video = styled.video<{ isScrolling: boolean }>`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index:999;
  position: fixed;
  animation:${(p) =>
    p.isScrolling &&
    css`
      ${rotate} 1s linear;
    `}
  animation-fill-mode: forwards;
  top: 0;
  left: 0;
  margin:0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const Source = styled.source``;

const HeroVideo = () => {
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
      <Source src={Videos.heroVideo} type="video/mp4" />
    </Video>
  );
};

export default memo(HeroVideo);
