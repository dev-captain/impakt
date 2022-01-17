import { Box, Spacer, VStack } from '@chakra-ui/react';
import Navbar from 'components/core/Navbar';
import React from 'react';

type HeroLayoutProps = {
  bgImage?: string;
  bgColor?: string;
  spacing?: number;
  showNavbar?: boolean;
  addSpacer?: boolean;
  hideBlur?: boolean;
  pos?: string;
  children: React.ReactNode;
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

const HeroLayout = ({
  bgImage,
  children,
  spacing = 4,
  align = 'center',
  bgColor = '#282a2d',
  justify = 'center',
  showNavbar = false,
  addSpacer = false,
  hideBlur = false,
  pos,
}: HeroLayoutProps) => {
  return (
    // @ts-ignore
    <Box minH="100vh" filter={hideBlur ? '' : 'blur(20px)'} overflowY="unset" pos={pos} w="full">
      {showNavbar && <Navbar />}
      <VStack
        minH="100vh"
        minW="full"
        align={align}
        justify={justify}
        backgroundSize="cover"
        backgroundImage={bgImage}
        backgroundColor={bgColor}
        paddingTop={showNavbar ? '120px' : '0px'}
      >
        {children}
        {addSpacer && <Spacer h={spacing} />}
      </VStack>
    </Box>
  );
};

export default HeroLayout;
