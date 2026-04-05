'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { Instagram, Facebook, Share2, Mail, Phone, MapPin } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tighter text-white">
                KARTIK
              </span>
              <span className="font-script -mt-2 ml-4 text-2xl text-emerald-400">
                Mehndi Artist
              </span>
            </Link>
            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-xs">
              Specializing in organic henna artistry and premium bridal designs. We create timeless patterns that celebrate your most cherished moments.
            </p>
            <div className="flex gap-5">
              <a href={siteConfig.social.instagram} className="hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.facebook} className="hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.social.pinterest} className="hover:text-emerald-400 transition-colors" aria-label="Pinterest">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-xl font-medium text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {siteConfig.nav.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-xl font-medium text-white">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-emerald-400 mt-1 shrink-0" />
                <span className="text-emerald-100/70 text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <span className="text-emerald-100/70 text-sm">
                  {siteConfig.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span className="text-emerald-100/70 text-sm break-all">
                  {siteConfig.contact.email}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-xl font-medium text-white">Newsletter</h3>
            <p className="text-emerald-100/70 text-sm">
              Get Mehndi Care Tips & design updates directly in your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-emerald-900 border border-emerald-800 px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors text-white"
                required
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-serif tracking-widest py-3 transition-colors text-sm uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Instagram Feed Row */}
        <div className="mt-24 border-t border-emerald-900 pt-16">
          <h4 className="font-serif text-center text-2xl mb-10 text-white">Follow Our Journey @kartikdesigner</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-emerald-900 relative overflow-hidden group">
                {/* Image Placeholder */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/insta-${i}.jpg')` }}
                />
                <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 mt-12 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-emerald-100/40">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
