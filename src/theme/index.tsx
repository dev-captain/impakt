import { ThemeOverride, extendTheme, theme as base } from '@chakra-ui/react';
import buttons from './buttons';
import colors from './colors';
import shadows from './shadows';
import textStyles from './textStyles';

const theme: ThemeOverride = {
  initialColorMode: 'dark',
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
};

export const layoutPadding = {
  base: '16px',
  md: '48px',
  xl: '120px',
  '2xl': '240px',
};

export default extendTheme(theme);
