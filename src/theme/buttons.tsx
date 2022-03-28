import type { SystemStyleObject } from '@chakra-ui/theme-tools';

export default {
  variants: {
    discord: {
      borderRadius: '20px',
      minH: '64px',
      px: '74px',
      bg: 'linear-gradient(143.78deg, #7783F0 18.94%, #5361D6 78.86%)',
      boxShadow: 'dark',
      _hover: {
        background: 'linear-gradient(143.78deg, #7783F0 18.94%, #5361D6 78.86%)',
        boxShadow: 'dark',
      },
      _disabled: {
        opacity: 0.4,
        boxShadow: 'dark',
        backgroundColor: 'accentRed',
      },
    },
    accent: {
      borderRadius: '20px',
      minH: '64px',
      px: '74px',
      bg: 'accentRed',
      boxShadow: 'dark',
      _hover: {
        background: 'linear-gradient(274.13deg, #CC1338 0%, #821E1E 98.64%)',
        boxShadow: 'dark',
      },
      _disabled: {
        opacity: 0.4,
        boxShadow: 'dark',
        backgroundColor: 'accentRed',
      },
    },
    dark: {
      minH: '60px',
      px: '41px',
      borderRadius: '20px',
      bg: 'accentBlackGradient',
      boxShadow: 'dark',
      _hover: {
        background: 'linear-gradient(283.61deg, #363639 16.94%, #222226 95.35%)',
        boxShadow: 'dark',
      },
      _disabled: {
        opacity: 0.4,
        boxShadow: 'dark',
        backgroundColor: 'accentBlackGradient',
      },
    },
    underline: {
      bg: 'transparent',
      textDecor: 'underline',
      textDecorationColor: 'rgba(178, 34, 34, 1)',
      _hover: {
        textDecorationColor: 'rgba(102, 14, 31, 1)',
      },
      _disabled: {},
    },
    buttonHover: {
      _hover: {
        background: 'linear-gradient(283.61deg, #0B1725 16.94%, #0B1725 95.35%)',
        boxShadow: 'dark',
      },
    },
  },
} as SystemStyleObject;
