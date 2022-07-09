import styled, { keyframes } from 'styled-components';
import * as React from 'react';
import ScrollIcon from '../../../icons/Scroll';

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

const Box = styled.div<{ isVisible: boolean; position: string; left: string; zIndex: string }>`
  animation: ${rotate} 1.5s linear infinite;
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
