import React, { memo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useBreakpointValue } from '@chakra-ui/react';

type Props = {
  isLeft?: boolean;
  children: React.ReactNode;
  animationType: 'move' | 'fade';
};

const AnimationInWhenVisible = ({ children, isLeft, animationType }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const disabled = useBreakpointValue({ base: true, md: false });

  const variants = {
    move: {
      visible: { opacity: 1, x: isLeft ? 0 : 0, duration: 0.5 },
      hidden: { opacity: 0, x: isLeft ? -200 : 200, duration: 0.5 },
    },
    fade: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.8 },
    },
  };

  const transition = {
    move: {
      delay: 0.2,
      type: 'spring',
      stiffness: 100,
    },
    fade: {
      delay: 0.2,
      duration: 0.2,
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animationType]}
      transition={transition[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default memo(AnimationInWhenVisible);
