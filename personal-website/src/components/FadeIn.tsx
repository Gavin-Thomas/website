'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 0.5, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
