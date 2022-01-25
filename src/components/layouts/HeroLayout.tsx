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
  minH?: string;
  customPadding?: string | any;
  removeBottomPadding?: boolean;
  children: React.ReactNode;
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

const HeroLayout = ({
  bgImage,
  children,
  customPadding,
  removeBottomPadding = false,
  spacing = 4,
  minH = '100vh',
  align = 'center',
  bgColor = '#282a2d',
  justify = 'center',
  showNavbar = false,
  addSpacer = false,
  hideBlur = false,
  pos,
}: HeroLayoutProps) => {
  return (
    <Box
      minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
      filter={hideBlur ? '' : 'blur(20px)'}
      overflowY="unset"
      // @ts-ignore
      pos={pos}
      w="full"
    >
      {showNavbar && <Navbar />}
      <VStack
        minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
        minW="full"
        align={align}
        justify={justify}
        backgroundSize="cover"
        backgroundImage={bgImage}
        backgroundColor={bgColor}
        backgroundPosition="bottom"
        paddingTop={showNavbar ? '120px' : '0px'}
        paddingBottom={
          customPadding || {
            base: removeBottomPadding ? 0 : '60px',
            md: removeBottomPadding ? '32px' : '90px',
            xl: removeBottomPadding ? 0 : 'auto',
          }
        }
      >
        {children}
        {addSpacer && <Spacer h={spacing} />}
      </VStack>
    </Box>
  );
};

export default HeroLayout;
