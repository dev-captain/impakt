import React, { useRef, useState } from 'react';
import { horizontalScrollBy } from '@/utils';
import useWindowSize from './useWindowSize';

const useHorizontalScroll = () => {
  const [scrollStatus, setScrollStatus] = useState<'left' | 'right' | 'mid'>('right');
  const windowSize = useWindowSize();
  const width = windowSize.width > 300 ? 320 : windowSize.width;
  const widthRef = useRef(0);

  const moveLeft = (ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    horizontalScrollBy(ref, -width);
    if (widthRef.current - width > 0) {
      widthRef.current -= width;
      setScrollStatus('mid');
    } else {
      widthRef.current = 0;
      setScrollStatus('right');
    }
    if (widthRef.current < width - width / 3) {
      setScrollStatus('right');
    }
  };

  const moveRight = (ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    horizontalScrollBy(ref, width);
    if (widthRef.current + width < 1200) {
      widthRef.current += width;
      setScrollStatus('mid');
    } else {
      widthRef.current = 1200;
      setScrollStatus('left');
    }
    if (1400 - widthRef.current < width) {
      widthRef.current = 1200;
      setScrollStatus('left');
    }
  };

  return {
    scrollStatus,
    moveLeft,
    moveRight,
  };
};

export default useHorizontalScroll;
