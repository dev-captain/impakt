import { ThemeOverride, extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import buttons from './buttons';
import colors from './colors';

import shadows from './shadows';
import textStyles from './textStyles';

const breakpoints = createBreakpoints({
  sm: '0',
  md: '992px',
  lg: '1280px',
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
        // bg: mode('glass.900', 'glass.200')(props),
        bg: '#0D0B10',
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
