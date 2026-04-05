import { Metadata } from 'next';
import { Check, Star, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Kartik Mehndi Artist - Premium Henna Packages',
  description: 'Detailed mehndi services for bridal, guest, and festive occasions. Explore our signature henna artistry.',
};

const services = [
  {
    title: 'Signature Bridal',
    price: 'Customized Pricing',
    description: 'The ultimate luxury experience for the traditional bride seeking maximum intricate coverage.',
    features: [
      'Intricate hand designs up to the elbow',
      'Intricate foot designs up to the ankle',
      'Custom storytelling motifs & portraits',
      '100% Organic chemical-free henna',
      'Exclusive aftercare consultation'
    ],
    icon: <Star className="text-emerald-600" size={28} />,
    popular: true
  },
  {
    title: 'Minimalist Bridal',
    price: 'Customized Pricing',
    description: 'A beautiful balance of traditional elegance and modern minimalism for the contemporary bride.',
    features: [
      'Elegant designs up to the wrist',
      'Refined floral or Arabic fusion layouts',
      'Symmetric palm masterpieces',
      '100% Organic chemical-free henna',
      'Perfect for intimate ceremonies'
    ],
    icon: <Heart className="text-emerald-600" size={28} />,
    popular: false
  },
  {
    title: 'Guest & Festive',
    price: 'Hourly or Group Rates',
    description: 'Professional application for bridesmaids, family, and festive celebrations.',
    features: [
      'Fast and fluid Arabic or mandala designs',
      'Accommodates 10-12 guests per hour',
      'Cohesive visual themes for groups',
      'Premium organic henna paste',
      'Assistant artists for large events'
    ],
    icon: <Sparkles className="text-emerald-600" size={28} />,
    popular: false
  }
];

export default function ServicePage() {
  return (
    <div className="bg-ivory-gradient min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-emerald-800">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 mb-8">
            Tailored <span className="font-script text-emerald-600">Artistry</span>
          </h1>
          <div className="w-24 h-[1px] bg-emerald-300 mx-auto mb-10" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Each reservation is a bespoke collaboration. We offer transparent consultation to ensure your henna reflects your unique style and ceremony.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`glass-card p-12 flex flex-col items-center text-center relative ${
                service.popular ? 'border-emerald-300 shadow-2xl scale-105 z-10 bg-white/60' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-800 text-white px-6 py-1 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
                  Most Requested
                </div>
              )}
              
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100/50">
                {service.icon}
              </div>

              <h2 className="text-3xl font-serif text-emerald-950 mb-4">{service.title}</h2>
              <p className="text-emerald-800 font-serif text-lg mb-6 italic opacity-70">{service.price}</p>
              <p className="text-slate-600 mb-10 leading-relaxed min-h-[80px]">
                {service.description}
              </p>

              <ul className="w-full space-y-5 mb-12 text-left">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <Check size={18} className="text-emerald-600 mt-1 shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full">
                <Link
                  href="/contact-us"
                  className={`block w-full py-5 text-sm uppercase tracking-widest transition-all ${
                    service.popular 
                      ? 'bg-emerald-800 text-white hover:bg-emerald-700' 
                      : 'border border-emerald-800 text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  View Pricing / Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-32 p-12 bg-emerald-950 rounded-sm text-center">
          <h3 className="font-serif text-3xl text-white mb-6">Planning a Destination Wedding?</h3>
          <p className="text-emerald-100/70 max-w-2xl mx-auto mb-10 italic">
            Kartik regularly travels for destination events across Udaipur, Jaipur, and international locations. We offer comprehensive travel-friendly packages for the bridal party.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 border-b border-emerald-400 pb-2 font-serif text-xl text-emerald-400 transition-colors hover:text-emerald-200"
          >
            Request Travel Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
