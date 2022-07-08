import gsap, { Power2 } from 'gsap';
import React from 'react';

const useParallax = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  const handleMouseOver = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rotateX = -(e.clientY - window.innerHeight / 3.6) * 0.09;
    const rotateY = (e.clientX - window.innerWidth / 1.36) * 0.09;
    gsap.to(ref.current, {
      duration: 0.5,
      ease: Power2.easeOut,
      rotationX: rotateX,
      rotationY: rotateY,
    });
  };

  return { handleMouseOver };
};

export default useParallax;
