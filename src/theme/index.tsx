import {
  ThemeOverride,
  extendTheme,
  theme as base,
  UseToastOptions,
  ThemeConfig,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import buttons from './buttons';
import colors from './colors';

import shadows from './shadows';
import textStyles from './textStyles';

const breakpoints = createBreakpoints({
  base: '0',
  sm: '500px',
  md: '992px',
  lg: '1281px',
  lgx: '1560px',
  xl: '1920px',
});

const colorPalette: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme: ThemeOverride = {
  ...colorPalette,
  breakpoints,
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

export const toastLayout = {
  background: 'rgba(255, 255, 255, 0.5)',
  border: '1px solid #fff',
  boxShadow: '0px 5px 40px -10px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(15px)',
  color: '#000',
  fill: 'Background',
  borderRadius: '16px',
  width: '360px',
} as UseToastOptions['containerStyle'];

export const toastDarkLayout = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0px 5px 40px -5px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(40px)',
  color: '#fff',
  borderRadius: '16px',
  width: '360px',
} as UseToastOptions['containerStyle'];

export default extendTheme(theme);
