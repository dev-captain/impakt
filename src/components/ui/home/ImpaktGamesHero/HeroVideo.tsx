import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Videos } from '../../../../data';

const rotate = keyframes`
  0% {
    transform: scale(1);
    top:0;
    left: 0;
    max-width:unset;
    max-height:unset;
  }

  50% {
    transform: scale(1);
    top:0;
    left: 0;
    max-width:unset;
    max-height:unset;
  }

  100% {
  transform: scale(0.3);
  top:5%;
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
      ${rotate} 3s linear;
    `}
  animation-fill-mode: forwards;
  top: 0;
  left: 0;
  margin:0 !important;
  border-radius:0px 0px 10px 10px;
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
