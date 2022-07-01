import { Box } from '@chakra-ui/react';
import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Images from '../../../../assets/images';

import { Videos } from '../../../../data';

const rotate = ({ x, y }: { x: number; y: number }) => keyframes`
  0% {
    width: 100vw;
    height: 100vh;
    top:0;
    left: 0;
  }

  100% {
  width:640px;
  height:360px;
  top: ${y - 60}px;
  left: ${x - 221}px;
  }
`;

const Video = styled.video<{ isScrolling: boolean; x?: number; y?: number }>`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index:999;
  position: absolute;
  animation:${(p) =>
    p.isScrolling &&
    css`
      ${rotate({ x: p.x ?? 0, y: p.y ?? 0 })} 1s linear;
    `}
  animation-fill-mode: forwards;
  top: 0;
  left: 0;
  margin:0 !important;
  border-radius: 0px 0px 10px 10px;
`;

const Source = styled.source``;

const HeroVideo: React.FC<{ borderX?: number; borderY?: number }> = ({ borderX, borderY }) => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  const currentBorderX = borderX ?? 0;
  const currentBorderY = borderY ?? 0;
  const windowBoxPositionX = currentBorderX - 60;
  const windowBoxPositionY = currentBorderY - 110;

  return (
    <>
      <Video
        x={currentBorderX}
        y={currentBorderY}
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

      <Box
        height="380px"
        display="flex"
        w="715.5px"
        zIndex="0"
        position="absolute"
        left={windowBoxPositionX - 200}
        top={windowBoxPositionY}
      >
        <img width="100%" height="100%" src={Images.Common.window} alt="_" />
      </Box>
    </>
  );
};

export default memo(HeroVideo);
