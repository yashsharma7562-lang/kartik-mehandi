'use client';

import { motion } from 'framer-motion';

export function StainingProcess() {
  return (
    <section className="py-24 bg-[#132424] relative border-y border-henna/20">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/download.jpeg')] bg-cover bg-fixed pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-maroon-light text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FDF5E6] mb-8">
            The Perfect Stain
          </h2>
          <div className="w-12 h-px bg-maroon mx-auto mb-8" />
          <p className="text-lg md:text-xl text-[#FDF5E6]/60 font-sans font-light leading-relaxed">
            We believe that beautiful artistry deserves the finest canvas. Our bespoke mehendi paste is crafted strictly from 100% organic, hand-sifted henna powder from Sojat, blended with premium essential oils. Free from chemicals, our natural formula guarantees a safe application resulting in an intensely rich, deep burgundy stain that darkens beautifully over 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
