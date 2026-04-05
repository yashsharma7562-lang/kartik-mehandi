import { Metadata } from 'next';
import { BookingForm } from '@/components/sections/BookingForm';
import { LocationMap } from '@/components/sections/LocationMap';

export const metadata: Metadata = {
  title: 'Contact | Kartik Designer - Luxury Bridal Mehendi',
  description: 'Book your premium mehendi session with Kartik Designer. Let&apos;s begin your henna journey.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#fffdf9] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ff321c]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm tracking-[0.32em] uppercase text-[#ff321c] mb-4 font-semibold">
            Contact
          </p>
          <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-[#101010] mb-6">
            Let&apos;s Begin Your <span className="text-[#ff321c] italic font-light">Henna Journey.</span>
          </h2>
          <div className="w-16 h-px bg-[#ff321c] mx-auto mb-6" />
          <p className="text-xl text-black/60 font-light max-w-2xl mx-auto leading-relaxed">
            Reserve your date and experience unmatched henna artistry. Our books fill up quickly.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      <LocationMap />
    </div>
  );
}
