import { GridItemProps, SimpleGridProps, StackProps } from '@chakra-ui/react';
import { layoutPadding } from '@/theme';

const mVStack: StackProps = {
  w: 'full',
  minH: '70vh',
  color: 'white',
  align: 'flex-start',
  px: layoutPadding,
  pt: { base: '16px', md: '0px' },
};

const mHStack: StackProps = {
  w: 'full',
  spacing: { base: '8px', md: '16px' },
  justify: 'center',
  flexDir: 'row',
};

const sGrid: SimpleGridProps = {
  w: 'full',
  columns: 2,
  columnGap: '32px',
  rowGap: '32px',
  alignItems: 'center',
  justifyContent: 'center',
};

const sGridItem: GridItemProps = {
  colSpan: {
    base: 2,
    md: 1,
  },
  display: { base: 'none', md: 'flex' },
  justifyContent: 'center',
};

const messageVStack: StackProps = {
  w: 'full',
  overflow: 'hidden',
  borderRadius: '28px',
  position: 'relative',
  px: '48px',
  py: '40px',
  maxW: '600px',
  align: 'flex-start',
  spacing: '32px',
  filter:
    'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1))',
};

export const gradients: any = {
  first: {
    zIndex: 0,
    top: '-136px',
    width: '252px',
    left: '-109px',
    height: '224px',
    pos: 'absolute',
    opacity: '0.79',
    filter: 'blur(94px)',
    bg: 'radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)',
  },
  second: {
    zIndex: 0,
    top: '-196px',
    width: '380px',
    left: '347px',
    height: '338px',
    pos: 'absolute',
    opacity: '0.69',
    filter: 'blur(94px)',
    bg: 'radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)',
  },
};

export const ContactProps = {
  mVStack,
  gradients,
  messageVStack,
  mHStack,
  sGrid,
  sGridItem,
};
