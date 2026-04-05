'use client';

import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  delay?: number;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  delay = 0,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={slideUpVariants}
      custom={delay}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.5 }}
          className="text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2"
        >
          {subtitle}
        </motion.p>
      )}

      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
