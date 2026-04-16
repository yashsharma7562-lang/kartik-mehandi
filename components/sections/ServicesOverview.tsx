'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Traditional Indian',
    description: 'Timeless elegance for your wedding day featuring classic motifs, mandalas, and intricate detailing deeply rooted in heritage.',
    image: '/images/download.jpeg', // Placeholder
    align: 'left'
  },
  {
    title: 'Modern Arabic',
    description: 'Modern, fluid, and bold patterns characterized by flowing floral vines and an elegant, sweeping use of negative space.',
    image: '/images/download.jpeg', // Placeholder
    align: 'right'
  },
  {
    title: 'Contemporary Fusion',
    description: 'Your unique vision, crafted with precision. A beautiful amalgamation of modern geometry and traditional architectural roots.',
    image: '/images/download.jpeg', // Placeholder
    align: 'left'
  }
];

export function ServicesOverview() {
  return (
    <section className="py-40 bg-[#1A2F2F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-maroon/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col flex-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-maroon" />
              <span className="text-maroon-light tracking-[0.2em] text-[10px] uppercase font-sans">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-[#FDF5E6] font-light mb-8 leading-tight">The Artistry</h2>
          </motion.div>
        </div>

        <div className="mt-20 space-y-40">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${service.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
            >
              <div className="w-full lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] w-[90%] md:w-[75%] group mx-auto"
                >
                  <div className={`absolute -inset-6 border border-maroon/20 z-0 transition-transform duration-1000 group-hover:scale-[0.98] ${service.align === 'right' ? '-translate-x-4 translate-y-4' : 'translate-x-4 -translate-y-4'}`} />
                  <div className="relative h-full w-full bg-[#132424] z-10 overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-90 transition-all duration-[15s] group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[#1A2F2F]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, x: service.align === 'right' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-md"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-maroon-light/50" />
                    <span className="text-maroon-light/50 tracking-[0.2em] text-[10px] uppercase font-sans">0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-[#FDF5E6] mb-8 font-light leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#FDF5E6]/60 font-sans font-light leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                  <a href={`/services`} className="mt-12 inline-block text-maroon-light uppercase tracking-[0.15em] text-xs font-sans hover:text-[#FDF5E6] transition-colors duration-300 pb-2 border-b border-maroon-light/30 hover:border-[#FDF5E6]">
                    Discover More
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
