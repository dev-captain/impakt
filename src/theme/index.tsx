import { ThemeOverride, extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import buttons from './buttons';
import colors from './colors';

import shadows from './shadows';
import textStyles from './textStyles';

const breakpoints = createBreakpoints({
  sm: '0',
  mb: '599px',
  md: '992px',
  lg: '1281px',
  lgx: '1560px',
  xl: '1920px',
});

const theme: ThemeOverride = {
  initialColorMode: 'dark',
  breakpoints,
  useSystemColorMode: false,
  colors,
  shadows,
  textStyles,
  fonts: {
    heading: `Poppins ,${base.fonts?.heading}`,
    body: `Poppins ,${base.fonts?.body}`,
  },
  components: {
    Button: buttons as any,
  },
  styles: {
    global: () => ({
      body: {
        bg: 'glass.900',
      },
    }),
  },
};

export const layoutPadding = {
  base: '16px',
  md: '48px',
  xl: '120px',
  '2xl': '240px',
};

export default extendTheme(theme);
