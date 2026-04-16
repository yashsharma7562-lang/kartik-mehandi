import { Metadata } from 'next';
import { MasonryGallery } from '@/components/sections/MasonryGallery';

export const metadata: Metadata = {
  title: 'Gallery | Kartik Mehndi Artist - Premium Henna Collection',
  description: 'A curated journey of henna masterpieces. Explore our bridal, Arabic fusion, and sangeet collections.',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#FDF5E6] min-h-screen pt-40 pb-24 text-henna">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 mb-16">
        <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-maroon">
          The Portfolio
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-henna mb-8 leading-[1.2]">
          Bridal <span className="font-script text-maroon block sm:inline">Masterpieces</span>
        </h1>
        <div className="w-24 h-px bg-maroon/20 mx-auto mb-10" />
        <p className="mt-8 text-xl text-henna/70 max-w-3xl mx-auto font-sans leading-relaxed">
          Each design is a bespoke creation, meticulously hand-crafted for modern celebrations while honoring timeless traditions. Explore our curated collections.
        </p>
      </section>

      {/* Masonry Gallery Component */}
      <MasonryGallery />
    </div>
  );
}
