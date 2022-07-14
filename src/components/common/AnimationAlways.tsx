import React, { memo } from 'react';
import { motion } from 'framer-motion';

type Props = {
  isLeft?: boolean;
  xValue?: number;
  children: React.ReactNode;
  animationType: 'move' | 'fade';
};

const AnimationAlways = ({ children, isLeft, animationType, xValue = 200 }: Props) => {
  const variants = {
    move: {
      visible: { opacity: 1, x: isLeft ? 0 : 0, duration: 0.5 },
      hidden: { opacity: 0, x: isLeft ? -xValue : xValue, duration: 0.5 },
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants[animationType]}
      transition={transition[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default memo(AnimationAlways);
