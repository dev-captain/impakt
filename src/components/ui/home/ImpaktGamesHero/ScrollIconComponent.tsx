import styled, { keyframes } from 'styled-components';
import * as React from 'react';
import ScrollIcon from '../../../icons/Scroll';

const rotate = keyframes`
  0%{
    transform: translateY(0);
    opacity:1;
  }

  25%{
    transform: translateY(-5px);
    opacity:1;
  }

  75%{
    transform: translateY(-10px);
    opacity:1;
  }

  100%{
    transform: translateY(0);
    opacity:1;
  }
`;

const Box = styled.div<{ position: string; left: string; zIndex: string }>`
  animation: ${rotate} 2s linear infinite;
  opacity: 0;
  transition: opacity 5s linear;
  display: flex;
  z-index: ${(p) => p.zIndex};
  left: ${(p) => p.left};
  position: ${(p) => p.position};
  bottom: 0;
`;
const ScrollIconComponent: React.FC<{ left: string; position: string; zIndex: string }> = ({
  left,
  position,
  zIndex,
}) => {
  return (
    <Box left={left} zIndex={zIndex} position={position}>
      <ScrollIcon />
    </Box>
  );
};

export default ScrollIconComponent;
