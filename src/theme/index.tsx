import { ThemeOverride, extendTheme, theme as base } from '@chakra-ui/react';

const theme: ThemeOverride = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    brand: {},
  },
  fonts: {
    heading: `Poppins ,${base.fonts?.heading}`,
    body: `Poppins ,${base.fonts?.body}`,
  },
  textStyles: {
    counterNumber: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '300',
      fontSize: { base: '7xl', md: '9xl' },
      lineHeight: '120px',
    },
    counterText: {
      fontFamily: 'Source Sans Pro',
      fontSize: { base: 'xl', md: '4xl' },
      opacity: '0.7',
    },
    TitleBold72: {
      fontWeight: '900',
      fontFamily: `Poppins ,${base.fonts?.heading}`,
      fontSize: { base: '72px', md: '120px' },
      lineHeight: { base: '80px', md: '120px' },
    },
  },
  components: {},
};

export const layoutPadding = {
  base: '16px',
  md: '48px',
  xl: '120px',
  '2xl': '240px',
};

export default extendTheme(theme);
