'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/config';

const highlights = [
  {
    id: 1,
    title: 'Royal Bridal',
    image: '/images/hero_bridal_mehendi.png',
    category: 'Traditional'
  },
  {
    id: 2,
    title: 'Modern Arabic',
    image: '/images/gallery_arabic_design.png',
    category: 'Fusion'
  },
  {
    id: 3,
    title: 'Intricate Mandala',
    image: '/images/gallery_mandala_palms.png',
    category: 'Signature'
  },
  {
    id: 4,
    title: 'Minimalist Chic',
    image: '/images/gallery_henna_detail.png',
    category: 'Contemporary'
  }
];

const services = [
  {
    title: 'Signature Bridal',
    desc: 'Bespoke storytelling through intricate henna patterns tailored to your journey.',
    icon: <Star className="text-emerald-600" size={24} />
  },
  {
    title: 'Guest Mehndi',
    desc: 'Elegant and efficient designs for your loved ones during celebration events.',
    icon: <CheckCircle2 className="text-emerald-600" size={24} />
  },
  {
    title: 'Festive Henna',
    desc: 'Celebrate traditions with contemporary touches for Karwa Chauth, Diwali & more.',
    icon: <Instagram className="text-emerald-600" size={24} />
  }
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/hero_bridal_mehendi.png"
            alt="Breathtaking Bridal Mehndi"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
        </div>

        <div className="relative flex h-full items-center justify-center px-6 text-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="mb-6 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400">
              Premium Henna Artistry
            </span>
            <h1 className="mb-8 font-serif text-5xl font-light leading-[1.1] text-white md:text-7xl lg:text-8xl">
              Exquisite Henna Artistry <br /> 
              <span className="font-script text-emerald-400 opacity-90">by Kartik</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl font-sans text-lg text-emerald-100/70 md:text-xl">
              Transforming tradition into timeless art. Specializing in bespoke bridal mehndi that tells your unique story.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact-us"
                className="btn-premium w-full sm:w-auto"
              >
                Book Your Consultation
              </Link>
              <Link
                href="/gallery"
                className="group flex items-center gap-3 font-serif text-lg text-white transition-colors hover:text-emerald-400"
              >
                Explore Gallery <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-[1px] bg-emerald-400/50"
          />
        </div>
      </section>

      {/* About Artist Snippet */}
      <section className="bg-ivory-gradient py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="asymmetrical-frame aspect-[4/5] bg-emerald-100"
            >
              <Image
                src="/images/mehandi_artist.jpg"
                alt="Kartik at work"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-widest text-emerald-700">
                The Artisan
              </span>
              <h2 className="section-title">A Vision of Elegance</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-700">
                With over a decade of experience, Kartik has redefined bridal mehndi as a form of high-end editorial art. His approach merges traditional precision with modern aesthetic sensibilities.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-slate-700">
                Each design is a collaboration, carefully composed to complement the bride&apos;s silhouette, attire, and personal narrative, ensuring a stain that is as deep in meaning as it is in color.
              </p>
              <Link
                href="/atelier"
                className="inline-flex items-center gap-3 border-b border-emerald-800 pb-2 font-serif text-xl text-emerald-900 transition-colors hover:text-emerald-600"
              >
                Discover Our Process <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Gallery */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 text-center">
            <h2 className="section-title">Artistry Highlights</h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              A curated selection of our most intricate and celebrated bridal works.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] overflow-hidden rounded-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-widest text-emerald-400">{item.category}</span>
                  <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="btn-premium"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-emerald-50 py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 text-center"
              >
                <div className="mb-8 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-4 font-serif text-2xl text-emerald-950">{service.title}</h3>
                <p className="mb-8 text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href="/service"
                  className="text-sm font-semibold uppercase tracking-widest text-emerald-800 transition-colors hover:text-emerald-500"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
