import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, Thermometer, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Atelier | Kartik Mehndi Artist - Natural Organic Process',
  description: 'Step into our studio. From 100% natural henna leaves to bespoke artistry, discover our chemical-free process.',
};

const processSteps = [
  {
    title: 'Sourcing the Finest Leaves',
    desc: 'We source pure, BAQ (Body Art Quality) Lawsonia Inermis leaves from the heart of Rajasthan, ensuring maximum pigment density.',
    icon: <Leaf className="text-maroon" size={24} />
  },
  {
    title: 'Precision Sieve & Sift',
    desc: 'Leaves are triple-sifted to a fine powder, removing any debris to ensure a smooth, jam-like flow during application.',
    icon: <Sparkles className="text-maroon" size={24} />
  },
  {
    title: 'Organic Infusion',
    desc: 'Mixed with pure essential oils (Eucalyptus, Lavender, or Tea Tree) and lemon juice for a rich, therapeutic blend.',
    icon: <Droplets className="text-maroon" size={24} />
  },
  {
    title: 'Controlled Curing',
    desc: 'The paste is allowed to "dye release" for 12-24 hours at specific temperatures to achieve a deep, mahogany stain.',
    icon: <Thermometer className="text-maroon" size={24} />
  }
];

export default function AtelierPage() {
  return (
    <div className="bg-[#FDF5E6] min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Hero Section */}
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center mb-40">
          <div className="order-2 lg:order-1">
            <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-maroon">
              The Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-henna mb-10 leading-[1.1]">
              The <span className="font-script text-maroon">Organic</span> Alchemy
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-sans">
              At Kartik&apos;s Atelier, we believe that true beauty shouldn&apos;t compromise safety. Our studio is dedicated to the craft of 100% chemical-free, hand-mixed henna.
            </p>
            <div className="p-8 bg-[#F4F7F7] border-l-4 border-maroon italic text-henna mb-8">
              &ldquo;No black henna, no PPD, no shortcuts. Just pure nature and patient artistry.&rdquo;
            </div>
          </div>
          <div className="order-1 lg:order-2 asymmetrical-frame aspect-square bg-maroon/5">
            <Image
              src="/images/gallery_henna_detail.png"
              alt="The Henna Paste Process"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="section-title">The Journey of a Stain</h2>
            <p className="text-henna/60 max-w-xl mx-auto mt-4">
              A meticulously timed process that ensures every cone provides a sharp flow and a deep, lasting impression.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[30px] top-0 bottom-0 w-[1px] bg-maroon/10 lg:left-1/2" />

            <div className="space-y-24">
              {processSteps.map((step, idx) => (
                <div key={idx} className={`relative flex items-center gap-12 lg:gap-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Point */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-maroon flex items-center justify-center text-white z-10 lg:left-1/2 lg:-ml-8 shadow-xl">
                    <span className="font-serif text-xl">{idx + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-24 lg:w-[45%] lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                    <div className="glass-card p-10">
                      <div className={`mb-6 flex ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-serif text-henna mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty space for large screens to balance grid */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white/40 p-16 border-maroon/10 border-2 rounded-sm max-w-4xl mx-auto transform hover:shadow-2xl transition-all duration-500">
           <h3 className="section-title text-3xl md:text-4xl mb-8">Ready to Experience <br /> Pure Artistry?</h3>
           <p className="text-slate-600 mb-12 italic">
            Book your session today and feel the therapeutic difference of natural henna.
           </p>
           <Link
            href="/contact-us"
            className="btn-premium"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
