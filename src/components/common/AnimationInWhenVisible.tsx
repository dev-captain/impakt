import React, { memo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useBreakpointValue } from '@chakra-ui/react';

type Props = {
  isLeft?: boolean;
  children: React.ReactNode;
  animationType: 'move' | 'fade';
};

function AnimationInWhenVisible({ children, isLeft, animationType }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const disabled = useBreakpointValue({ base: true, md: false });

  const variants = {
    move: {
      visible: { opacity: 1, x: isLeft ? 0 : 0, duration: 0.5 },
      hidden: { opacity: 0, x: isLeft ? -500 : 500, duration: 0.5 },
    },
    fade: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.8 },
    },
  };

  const transition = {
    move: {
      type: 'spring',
      stiffness: 100,
      delay: 0.2,
    },
    fade: {
      duration: 0.2,
      delay: 0.2,
    },
  };

  useEffect(() => {
    if (disabled) {
      return;
    }

    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  if (disabled) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition[animationType]}
      variants={variants[animationType]}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimationInWhenVisible);
