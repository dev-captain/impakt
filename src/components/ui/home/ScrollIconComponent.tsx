import styled, { keyframes } from 'styled-components';
import * as React from 'react';
import { I } from 'components';

const rotate = keyframes`
  0%{
    transform: translateY(-20px);
  }

  25%{
    transform: translateY(-25px);
  }

  75%{
    transform: translateY(-30px);
  }

  100%{
    transform: translateY(-20px);
  }
`;

const Box = styled.div<{
  isVisible: boolean;
  position: string;
  left: string;
  zIndex: string;
  bottom?: string;
}>`
  animation: ${rotate} 1.5s linear infinite;
  opacity: ${(p) => (p.isVisible ? '1' : '0')};
  transition: opacity 0.2s ease-in;
  display: flex;
  z-index: ${(p) => p.zIndex};
  left: ${(p) => p.left};
  position: ${(p) => p.position};
  bottom: ${(p) => p.bottom ?? 0};
`;
const ScrollIconComponent: React.FC<{
  isVisible: boolean;
  left: string;
  position: string;
  zIndex: string;
  width?: string;
  height?: string;
  fillIcon?: string;
  bottom?: string;
}> = ({ isVisible, left, position, zIndex, width, height, fillIcon, bottom }) => {
  const viewBox = `0 0 ${Number(width) ? Number(width) + 90 : 80} ${
    Number(height) ? Number(height) + 20 : 80
  }`;

  return (
    <Box bottom={bottom} isVisible={isVisible} left={left} zIndex={zIndex} position={position}>
      <I.ScrollIcon viewBox={viewBox} fillIcon={fillIcon} width={width} height={height} />
    </Box>
  );
};

export default ScrollIconComponent;
