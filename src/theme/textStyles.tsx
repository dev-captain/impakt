import { theme } from '@chakra-ui/react';

export default {
  black120: {
    fontSize: '120px',
    fontWeight: '900',
    lineHeight: '114px',
  },
  black98: {
    fontSize: '98px',
    fontWeight: '900',
    lineHeight: '90px',
  },
  black72: {
    fontSize: '72px',
    fontWeight: '900',
    lineHeight: '72px',
  },
  bold56: {
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '60px',
  },
  bold40: {
    fontSize: '40px',
    fontWeight: '700',
    lineHeight: '40px',
  },
  light56: {
    fontSize: '56px',
    fontWeight: '300',
    lineHeight: '60px',
  },
  light40: {
    fontSize: '40px',
    fontWeight: '300',
    lineHeight: '40px',
  },
  regular20: {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '32px',
  },
  semiBold16: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  regular14: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  },
  regular12: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
  },

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
    fontFamily: `Poppins ,${theme.fonts?.heading}`,
    fontSize: { base: '72px', sm: '120px', md: '98px', xl: '120px' },
    lineHeight: { base: '80px', sm: '120px', md: '98px', xl: '120px' },
  },
  accentGradient: {
    bgClip: 'text',
    bgGradient: 'linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))',
    _hover: {
      bgGradient: 'linear(to-r, rgba(102, 14, 31, 1), rgba(158, 57, 57, 1))',
    },
  },
};
