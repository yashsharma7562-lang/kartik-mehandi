import { Metadata } from 'next';
import { Phone, Mail, MapPin, Instagram, Facebook, Share2 } from 'lucide-react';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Contact Us | Kartik Mehndi Artist - Book Your Bridal Henna',
  description: 'Reach out to Kartik for premium bridal mehndi bookings, sangeet events, and festive henna consultations.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FDF5E6] min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.5em] text-maroon">
            Reach Out
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-henna mb-8">
            Consult <span className="font-script text-maroon italic">With Kartik</span>
          </h1>
          <div className="w-24 h-[1px] bg-maroon/20 mx-auto mb-10" />
          <p className="text-xl text-henna/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Ready to adorn your most cherished celebrations? Fill out the form below or reach out directly via our contact details.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact Details & Info */}
          <div className="flex flex-col gap-12">
            <div className="space-y-8">
              <h2 className="section-title text-3xl">Get In Touch</h2>
              <p className="text-henna/60">
                We typically respond to bridal inquiries within 12-24 hours. For urgent bookings, please reach out via WhatsApp.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-full bg-maroon/5 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-henna mb-2">Phone</h3>
                  <p className="text-henna/60">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-full bg-maroon/5 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-henna mb-2">Email</h3>
                  <p className="text-henna/60">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-full bg-maroon/5 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-henna mb-2">Studio</h3>
                  <p className="text-henna/60 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-12 border-t border-maroon/10">
               <h3 className="font-serif text-xl text-henna mb-6">Connect Socially</h3>
               <div className="flex gap-6">
                <a href={siteConfig.social.instagram} className="h-12 w-12 rounded-full border border-maroon/10 flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href={siteConfig.social.facebook} className="h-12 w-12 rounded-full border border-maroon/10 flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href={siteConfig.social.pinterest} className="h-12 w-12 rounded-full border border-maroon/10 flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all">
                  <Share2 size={20} />
                </a>
              </div>
            </div>
            
            {/* Google Map Integration Placeholder */}
            <div className="mt-8 rounded-sm overflow-hidden h-[300px] bg-slate-200 border border-maroon/10 relative grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center bg-maroon/5">
                 <p className="font-serif text-maroon/60 uppercase tracking-widest text-xs font-bold px-8 py-4 border-2 border-maroon/10">Interactive Map Integration</p>
               </div>
               {/* Embed actual Google Map iframe here in production */}
               <iframe
                title="Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.545866!2d72.7505141!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!500"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                aria-hidden="false"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 p-10 md:p-16 shadow-2xl rounded-sm border border-maroon/5">
            <h2 className="font-serif text-3xl text-henna mb-10">Send an Inquiry</h2>
            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-maroon">FullName</label>
                  <input type="text" id="name" placeholder="Enter your full name" className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-maroon">EmailAddress</label>
                  <input type="email" id="email" placeholder="Enter your email" className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors" />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-maroon">PhoneNumber</label>
                  <input type="tel" id="phone" placeholder="Your phone number" className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest font-semibold text-maroon">PreferredDate</label>
                  <input type="date" id="date" className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="service" className="text-xs uppercase tracking-widest font-semibold text-maroon">ServiceInterest</label>
                <select id="service" className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors">
                  <option>Signature Bridal</option>
                  <option>Minimalist Bridal</option>
                  <option>Guest/Festive Mehndi</option>
                  <option>Destination Wedding</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-maroon">YourMessage</label>
                <textarea id="message" rows={5} placeholder="Tell us about your event details..." className="w-full bg-maroon/5 border-b border-maroon/10 px-0 py-3 text-sm focus:outline-none focus:border-maroon transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-maroon text-white font-serif tracking-[0.3em] py-6 text-sm uppercase transition-all hover:bg-maroon-dark hover:-translate-y-1 active:translate-y-0 active:shadow-md">
                 Send Your Inquiry
              </button>
              
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
                Protected by premium artisanal standards.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
