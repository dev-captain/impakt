/* eslint-disable no-param-reassign */
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';

type UseParallaxOptionsType = {
  range: number;
};

const useParallax = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  elementsRef: React.MutableRefObject<any>[],
  { range }: UseParallaxOptionsType,
) => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const calcValue = (a: any, b: any) => ((a / b) * range - range / 2).toFixed(1);

  React.useEffect(() => {
    if (isLessThan1280) return;
    let timeout: any;
    document.addEventListener(
      'mousemove',
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const yValue = calcValue(y, window.innerHeight);
          const xValue = calcValue(x, window.innerWidth);

          containerRef.current.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

          elementsRef.forEach((el) => {
            if (!el.current) return;
            el.current.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
          });

          // textRef.current.style.backgroundPosition = `${Number(xValue) * 0.45}px ${
          //   -yValue * 0.45
          // }px`;
        });
      },
      false,
    );
  }, [isLessThan1280]);
};

export default useParallax;
