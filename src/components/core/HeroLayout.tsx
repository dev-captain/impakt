import { Box, Spacer, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer/FooterV1';
import Navbar from './Navbar';

// eslint-disable-next-line import/prefer-default-export
export const HeroLayout: React.FC<{
  bgImage?: string;
  bgColor?: string;
  spacing?: number;
  showNavbar?: boolean;
  showDarkOrLightModeButton?: boolean;
  addSpacer?: boolean;
  pos?: string;
  minH?: string;

  showFooter?: boolean;
  customPadding?: string | any;
  removeBottomPadding?: boolean;
  removeTopPadding?: boolean;
  children: React.ReactNode;
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}> = ({
  bgImage,
  children,
  showFooter,
  customPadding,
  removeBottomPadding = false,
  spacing = 4,
  minH = '100vh',
  align = 'center',
  bgColor,
  justify = 'center',
  showNavbar = false,
  addSpacer = false,

  removeTopPadding = false,
  showDarkOrLightModeButton = true,
  pos,
}) => {
  const backgroundColor = useColorModeValue('glass.900', 'glass.200');

  return (
    <>
      {showNavbar && <Navbar showDarkOrLightModeButton={showDarkOrLightModeButton} />}
      <Box
        minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
        overflowY="visible"
        // @ts-ignore
        pos={pos}
        w="full"
        bgColor="transparent"
      >
        <VStack
          overflow="visible"
          minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
          minW="full"
          align={align}
          justify={justify}
          backgroundSize="cover"
          backgroundImage={bgImage}
          backgroundColor={bgColor || backgroundColor}
          backgroundPosition={{ base: 'top', md: 'bottom' }}
          paddingTop={removeTopPadding ? 0 : '100px'}
          paddingBottom={
            customPadding || {
              base: removeBottomPadding ? 0 : '60px',
              md: removeBottomPadding ? '32px' : '40px',
              xl: removeBottomPadding ? 0 : '40px',
            }
          }
        >
          {children}
          {addSpacer && <Spacer h={spacing} />}
        </VStack>
      </Box>
      {showFooter && <Footer />}
    </>
  );
};
