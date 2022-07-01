import { Box, Spacer, useColorModeValue, VStack } from '@chakra-ui/react';
import Footer from 'components/core/Footer';
import Navbar from 'components/core/Navbar';
import React from 'react';

type HeroLayoutProps = {
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
  children: React.ReactNode;
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

const HeroLayout = ({
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
  showDarkOrLightModeButton = true,
  pos,
}: HeroLayoutProps) => {
  const backgroundColor = useColorModeValue('glass.900', 'glass.200');

  return (
    <>
      <Box
        minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
        overflowY="hidden"
        // @ts-ignore
        pos={pos}
        w="full"
        bgColor="transparent"
      >
        <Navbar showDarkOrLightModeButton={showDarkOrLightModeButton} />
        <VStack
          overflow="hidden"
          minH={{ base: 'auto', md: minH || 'auto', xl: minH || '100vh' }}
          minW="full"
          align={align}
          justify={justify}
          backgroundSize="cover"
          backgroundImage={bgImage}
          backgroundColor={bgColor || backgroundColor}
          backgroundPosition={{ base: 'top', md: 'bottom' }}
          paddingTop={showNavbar ? '100px' : '0px'}
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
      {showFooter && <Footer />}
    </>
  );
};

export default HeroLayout;
