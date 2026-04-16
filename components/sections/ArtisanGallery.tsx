'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    src: '/images/gallery_henna_detail.png',
    alt: 'Fine henna detail',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/gallery_arabic_design.png',
    alt: 'Modern Arabic Mehendi',
    aspect: 'aspect-[4/5]',
    marginTop: 'md:mt-16'
  },
  {
    src: '/images/gallery_mandala_palms.png',
    alt: 'Traditional Mandala Mehendi',
    aspect: 'aspect-square',
    marginTop: 'md:mt-32'
  }
];

export function ArtisanGallery() {
  return (
    <section className="py-32 bg-[#1A2F2F] w-full relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-maroon mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FDF5E6] font-light mb-6">Artisan Portfolio</h2>
            <p className="text-[#FDF5E6]/60 font-sans tracking-wide text-sm md:text-base max-w-lg text-center font-light">
              A curated collection of bespoke designs, meticulously tailored for the modern bride.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${item.aspect} w-full group overflow-hidden bg-[#132424] shadow-2xl ${item.marginTop || ''}`}
            >
              <Image 
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A2F2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F2F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <div className="absolute inset-5 border border-maroon/0 group-hover:border-maroon/40 transition-all duration-700 pointer-events-none z-20 scale-105 group-hover:scale-100" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-32 flex justify-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="/gallery" className="text-maroon-light uppercase tracking-[0.2em] text-xs font-sans hover:text-[#FDF5E6] transition-colors duration-300 pb-2 border-b border-maroon-light/30 hover:border-[#FDF5E6]">
            View Complete Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
