'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInVariants } from '@/lib/animations';

interface FadeInProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  ...motionProps
}: FadeInProps) {
  const directionVariants = {
    none: fadeInVariants,
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: d, duration, ease: 'easeOut' },
      }),
    },
    left: {
      hidden: { opacity: 0, x: -30 },
      visible: (d = 0) => ({
        opacity: 1,
        x: 0,
        transition: { delay: d, duration, ease: 'easeOut' },
      }),
    },
    right: {
      hidden: { opacity: 0, x: 30 },
      visible: (d = 0) => ({
        opacity: 1,
        x: 0,
        transition: { delay: d, duration, ease: 'easeOut' },
      }),
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={directionVariants[direction]}
      custom={delay}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
