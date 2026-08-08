'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: { 
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.5, 
        delay: delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
