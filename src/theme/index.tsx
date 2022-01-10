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
    },
    counterText: {
      fontFamily: 'Source Sans Pro',
      fontSize: { base: 'xl', md: '4xl' },
      opacity: '0.7',
    },
  },
  components: {},
};

export default extendTheme(theme);
