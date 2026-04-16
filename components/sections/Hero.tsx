'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center bg-[#1A2F2F] overflow-hidden"
    >
      {/* Background depth and lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,227,198,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-maroon/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Decorative SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F2E3C6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-10 relative h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full mt-24 lg:mt-0">

          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center z-20"
            style={{ y: y1, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-maroon" />
                <span className="text-maroon-light tracking-[0.2em] text-xs uppercase font-sans">Artisan Mehendi</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#FDF5E6] leading-[1.1] mb-8 font-light tracking-wide">
                Exquisite <br />
                <span className="italic font-serif text-maroon-light/90 mr-2">Bridal</span>
                Mehendi
              </h1>

              <p className="text-lg md:text-xl text-[#FDF5E6]/60 mb-12 max-w-md font-sans font-light leading-relaxed tracking-wide">
                Turning traditions into contemporary art. Celebrate your special day with unique, deeply stained henna designs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  href="/contact-us"
                  className="px-8 py-4 bg-transparent border border-maroon text-maroon-light hover:bg-maroon hover:text-white transition-all duration-300 uppercase tracking-[0.15em] font-sans font-medium text-xs rounded-none w-max"
                >
                  Book Your Date
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7 relative h-[60vh] md:h-[75vh] lg:h-[85vh] w-full">
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[110%] h-full flex items-center justify-end"
              style={{ y: y2 }}
            >
              <motion.div 
                className="relative w-full h-[90%] overflow-hidden shadow-2xl shadow-black/50 frame-wrapper"
                initial={{ opacity: 0, clipPath: 'inset(10% 0% 10% 0%)' }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                {/* Thin inner border */}
                <div className="absolute inset-4 border border-maroon/20 z-20 pointer-events-none transition-all duration-500 hover:inset-6" />
                
                <Image
                  src="/images/hero_bridal_mehendi.png"
                  alt="High-end intricate bridal mehendi on hands resting elegantly"
                  fill
                  className="object-cover object-center scale-[1.02] transition-transform duration-[20s] hover:scale-110"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-[#1A2F2F]/10 mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F2F]/80 via-transparent to-transparent z-10" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-maroon-light/60 [writing-mode:vertical-lr]">Scroll Layout</span>
        <div className="w-[1px] h-12 bg-maroon/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-maroon"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}