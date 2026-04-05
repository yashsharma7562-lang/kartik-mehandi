'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: 1, title: 'Royal Bridal Baraat', category: 'Bridal', image: '/images/hero_bridal_mehendi.png' },
  { id: 2, title: 'Arabic Floral Fusion', category: 'Arabic', image: '/images/gallery_arabic_design.png' },
  { id: 3, title: 'Minimalist Peacock', category: 'Minimalist', image: '/images/gallery_henna_detail.png' },
  { id: 4, title: 'Traditional Mandala', category: 'Traditional', image: '/images/gallery_mandala_palms.png' },
  { id: 5, title: 'Contemporary Vines', category: 'Arabic', image: '/images/gallery_arabic_design.png' },
  { id: 6, title: 'Classic Bridal Palms', category: 'Bridal', image: '/images/mehandi_artist.jpg' },
  { id: 7, title: 'Symmetrical Joy', category: 'Traditional', image: '/images/gallery_mandala_palms.png' },
  { id: 8, title: 'Delicate Wrist Work', category: 'Minimalist', image: '/images/gallery_henna_detail.png' },
];

export function MasonryGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Bridal', 'Arabic', 'Minimalist', 'Traditional'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Category Filters */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 font-serif text-sm tracking-widest transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-emerald-800 text-white shadow-lg'
                  : 'bg-emerald-50 text-emerald-900 border border-emerald-100 hover:border-emerald-300'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-sm bg-emerald-50 ${
                  idx % 3 === 0 ? 'lg:row-span-2 h-[600px]' : 'h-[400px]'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-2 inline-block text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 h-[1px] w-12 bg-emerald-400 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-xl text-slate-400">No masterpieces found in this collection.</p>
          </div>
        )}
      </div>
    </section>
  );
}
