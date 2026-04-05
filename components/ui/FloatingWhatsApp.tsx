'use client';

import { siteConfig } from '@/data/config';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 bg-white text-emerald-950 px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
        Chat with us
      </div>
      <MessageCircle size={28} fill="currentColor" className="text-white" />
    </a>
  );
}
