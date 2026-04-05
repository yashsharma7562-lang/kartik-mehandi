'use client';

import { Metadata } from 'next';
import { Star, Quote, Heart } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';



const testimonials = [
  {
    id: 1,
    name: 'Ananya Sharma',
    date: 'February 2025',
    text: "Kartik is transformed my vision into reality. The detail in my bridal mehendi was unparalleled, and the stain lasted brilliantly for my entire wedding week. His calm presence was a blessing on a hectic day.",
    rating: 5,
    image: '/images/mehandi_artist.jpg',
    tag: 'Bridal Client'
  },
  {
    id: 2,
    name: 'Priyanka Patel',
    date: 'December 2024',
    text: "I chose the signature bridal package and it was the best decision. The organic paste felt so gentle on my skin and the mahogany stain was exactly what I wanted. Truly a premium experience from start to finish.",
    rating: 5,
    image: '/images/gallery_mandala_palms.png',
    tag: 'Bridal Client'
  },
  {
    id: 3,
    name: 'Meera Deshmukh',
    date: 'January 2025',
    text: "The sangeet guest mehendi was so organized. Kartik and his team managed 50+ guests efficiently without compromising on design quality. Every guest was delighted with their unique patterns.",
    rating: 5,
    image: '/images/gallery_arabic_design.png',
    tag: 'Event Client'
  },
  {
    id: 4,
    name: 'Sneha Rao',
    date: 'March 2025',
    text: "Minimalist but sophisticated - that's how I'd describe his style. My Arabic bridal design was light but impact-heavy. Thank you, Kartik, for being so patient and artistic!",
    rating: 5,
    image: '/images/gallery_henna_detail.png',
    tag: 'Intimate Bridal'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-ivory-gradient min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-emerald-800">
            Client Love
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 mb-8">
            Stories <span className="font-script text-emerald-600 italic">of Beauty</span>
          </h1>
          <div className="w-24 h-[1px] bg-emerald-300 mx-auto mb-10" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
            It is an honor to be part of your most cherished celebrations. Here are some words from our lovely brides.
          </p>
        </div>

        {/* Testimonials Grid - Offset Design */}
        <div className="grid gap-12 lg:grid-cols-2 relative">
          {/* Decorative Quote Icon in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <Quote size={500} className="text-emerald-900" />
          </div>

          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-12 relative overflow-hidden group ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Profile Image & Meta */}
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-emerald-100 group-hover:border-emerald-300 transition-colors">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-emerald-950">{t.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-emerald-600">{t.tag} • {t.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 text-emerald-600">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <div className="relative">
                <Quote size={24} className="absolute -top-4 -left-4 text-emerald-100 opacity-50" />
                <p className="text-slate-600 leading-relaxed italic text-lg relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-2 -right-2 text-emerald-500/10 transform rotate-12">
                <Heart size={120} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats/Trust Bar */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-emerald-100 pt-20">
          <div>
            <p className="font-serif text-4xl text-emerald-900 mb-2">500+</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Brides Adorned</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-emerald-900 mb-2">12+</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Years Experience</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-emerald-900 mb-2">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Organic Henna</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-emerald-900 mb-2">50+</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Destinations Served</p>
          </div>
        </div>
      </div>
    </div>
  );
}
