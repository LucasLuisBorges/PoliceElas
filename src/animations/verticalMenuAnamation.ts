import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const animatedBox = {
  hidden: { scale: 1 },
  visible: {
    rotate: 180,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 35,
    },
  },
};

export const MotionBox = motion<BoxProps>(Box);
