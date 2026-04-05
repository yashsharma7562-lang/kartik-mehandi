import { Metadata } from 'next';
import { MasonryGallery } from '@/components/sections/MasonryGallery';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Gallery | Kartik Mehndi Artist - Premium Henna Collection',
  description: 'A curated journey of henna masterpieces. Explore our bridal, Arabic fusion, and sangeet collections.',
};

export default function GalleryPage() {
  return (
    <div className="bg-ivory-gradient min-h-screen pt-40 pb-24 text-[#1a1a1a]">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 mb-16">
        <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-emerald-800">
          The Portfolio
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 mb-8 leading-[1.2]">
          Bridal <span className="font-script text-emerald-600 block sm:inline">Masterpieces</span>
        </h1>
        <div className="w-24 h-px bg-emerald-300 mx-auto mb-10" />
        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
          Each design is a bespoke creation, meticulously hand-crafted for modern celebrations while honoring timeless traditions. Explore our curated collections.
        </p>
      </section>

      {/* Masonry Gallery Component */}
      <MasonryGallery />
    </div>
  );
}
