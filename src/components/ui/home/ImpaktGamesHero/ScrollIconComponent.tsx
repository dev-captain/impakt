import styled, { keyframes } from 'styled-components';
import * as React from 'react';
import ScrollIcon from '../../../icons/Scroll';

const rotate = keyframes`
  0%{
    transform: translateY(0);
  }

  25%{
    transform: translateY(-5px);
  }

  75%{
    transform: translateY(-10px);
  }

  100%{
    transform: translateY(0);
  }
`;

const Box = styled.div<{ isVisible: boolean; position: string; left: string; zIndex: string }>`
  animation: ${rotate} 2s linear infinite;
  opacity: ${(p) => (p.isVisible ? '1' : '0')};
  transition: opacity 0.2s ease-in;
  display: flex;
  z-index: ${(p) => p.zIndex};
  left: ${(p) => p.left};
  position: ${(p) => p.position};
  bottom: 0;
`;
const ScrollIconComponent: React.FC<{
  isVisible: boolean;
  left: string;
  position: string;
  zIndex: string;
}> = ({ isVisible, left, position, zIndex }) => {
  return (
    <Box isVisible={isVisible} left={left} zIndex={zIndex} position={position}>
      <ScrollIcon />
    </Box>
  );
};

export default ScrollIconComponent;
