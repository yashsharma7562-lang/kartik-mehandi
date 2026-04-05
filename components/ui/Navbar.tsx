'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/config';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'glass-header py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tighter text-emerald-900 transition-colors group-hover:text-emerald-700 md:text-3xl">
            KARTIK
          </span>
          <span className="font-script -mt-2 ml-4 text-xl text-emerald-600 md:text-2xl">
            Mehndi Artist
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link text-[13px] ${
                pathname === item.href ? 'text-emerald-700 font-semibold' : 'text-slate-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="group relative overflow-hidden bg-emerald-800 px-8 py-3 text-[13px] font-medium tracking-widest text-white transition-all hover:bg-emerald-700"
          >
            <span className="relative z-10 uppercase">Book Now</span>
            <div className="absolute inset-x-0 bottom-0 h-0 w-full bg-emerald-600 transition-all duration-300 group-hover:h-full"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-emerald-900 transition-colors hover:text-emerald-600"
            aria-label="Toggle menu"
          >
            <div className="flex w-6 flex-col items-end gap-1.5">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'w-4'
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center p-12">
          <div className="flex flex-col gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-serif text-4xl font-light text-emerald-900 transition-all hover:pl-4 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-6">
            <Link
              href="/contact-us"
              className="w-full bg-emerald-800 py-5 text-center font-serif text-xl tracking-wider text-white"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
            <div className="flex justify-center gap-6 text-emerald-900">
              <a href={siteConfig.social.instagram} className="text-sm">Instagram</a>
              <a href={siteConfig.social.whatsapp} className="text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
