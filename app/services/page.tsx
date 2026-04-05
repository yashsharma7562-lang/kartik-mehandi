import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Services & Pricing | Kartik Designer',
  description: 'Detailed mehendi services and pricing for bridal, sangeet, and custom henna packages.',
};

export default function ServicesPage() {
  const packages = [
    {
      name: 'Bridal Full Package',
      price: 'Starting at ₹15,000',
      description: 'The ultimate luxury experience for the traditional bride seeking maximum intricate coverage.',
      features: [
        'Intricate hand designs up to the elbow',
        'Intricate foot designs up to the ankle',
        'Custom portrait or motif inclusion',
        'Premium 100% organic henna paste',
        'Includes intricate figures (Dulha-Dulhan)',
      ],
      highlighted: true,
    },
    {
      name: 'Bridal Half Package',
      price: 'Starting at ₹10,000',
      description: 'A beautiful balance of traditional elegance and modern minimalism for the contemporary bride.',
      features: [
        'Intricate hand designs up to the wrist',
        'Simple, elegant border designs on feet',
        'Choice of traditional or Arabic fusion layout',
        'Premium 100% organic henna paste',
        'Perfect for intimate wedding ceremonies',
      ],
      highlighted: false,
    },
    {
      name: 'Sangeet Guest Mehendi',
      price: 'Starting at ₹2,500 / hr',
      description: 'Professional hourly-rate application for your bridesmaids and wedding guests.',
      features: [
        'Fast and fluid Arabic or mandala designs',
        'Accommodates approx. 10-12 guests per hour',
        'One side or both sides of hands',
        'Premium 100% organic henna paste',
        'Dedicated assistant artist available upon request',
      ],
      highlighted: false,
    }
  ];

  return (
    <div className="bg-[#fffdf9] min-h-screen pt-32 pb-24 font-sans text-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <p className="text-sm tracking-[0.32em] uppercase text-[#ff321c] mb-4 font-semibold">
            Detailed Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#101010] mb-6">
            Custom Packages for <br />
            <span className="italic font-light text-[#ff321c]">Every Occasion</span>
          </h1>
          <div className="w-16 h-px bg-[#ff321c] mx-auto mb-6" />
          <p className="text-lg text-black/70 font-light max-w-2xl mx-auto">
            Transparent pricing for our most requested services. Each reservation is tailored to ensure you receive the finest organic artistry.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-8 rounded-none transition-all duration-300 border ${
                pkg.highlighted 
                  ? 'bg-white border-[#ff321c] shadow-[18px_18px_0_rgba(255,50,28,0.05)] transform lg:-translate-y-4' 
                  : 'bg-white border-black/5 hover:border-[#ff321c]/20'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff321c] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-light text-[#101010] mb-2">{pkg.name}</h3>
                <p className="text-black/60 font-light text-sm h-12 leading-relaxed">{pkg.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-black/5">
                <span className="text-3xl font-light text-[#ff321c]">{pkg.price}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <span className="text-[#ff321c] mr-3">✦</span>
                    <span className="text-black/70 font-light text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                href="/contact" 
                className={`w-full py-4 tracking-[0.28em] text-[11px] uppercase rounded-none font-semibold ${
                  pkg.highlighted 
                    ? 'bg-[#ff321c] text-white hover:bg-[#e82b18]' 
                    : 'bg-transparent border border-[#ff321c] text-[#ff321c] hover:bg-[#ff321c] hover:text-white'
                }`}
              >
                Inquire Now
              </Button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
