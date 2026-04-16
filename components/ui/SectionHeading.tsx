'use client';

import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  delay?: number;
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  delay = 0,
  dark = false,
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
          className="text-maroon font-semibold text-sm uppercase tracking-wider mb-2"
        >
          {subtitle}
        </motion.p>
      )}

      <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${dark ? 'text-[#FDF5E6]' : 'text-henna'}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-[#FDF5E6]/60' : 'text-henna/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
