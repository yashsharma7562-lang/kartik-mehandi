import Link from 'next/link';
import { siteConfig } from '@/data/config';

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 2.75h10A2.25 2.25 0 0 1 19.25 5v14A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75Z"
      />
      <path strokeLinecap="round" d="M10 18h4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-5.27 6-11a6 6 0 1 0-12 0c0 5.73 6 11 6 11Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 8 5 8-5" />
    </svg>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center bg-[#1f1f1f] text-white hover:bg-[#ff321c]"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#111111] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex min-h-[96px] min-w-[152px] items-center justify-center border-[3px] border-[#ff321c] px-6 py-5 no-underline"
            >
              <div className="text-center leading-none text-white">
                <p className="font-brand text-[2.3rem]">Harin&apos;s</p>
                <p className="-mt-2 pl-5 font-brand text-[1.75rem]">Mehndi</p>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="text-[#ff321c]">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">Call Us At</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="mt-3 block text-sm text-white/80 no-underline hover:text-white">
                {siteConfig.contact.phone}
              </a>
              <a
                href={`tel:${siteConfig.contact.alternatePhone}`}
                className="mt-2 block text-sm text-white/60 no-underline hover:text-white"
              >
                {siteConfig.contact.alternatePhone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary-400 transition-colors">
                  📞 {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary-400 transition-colors">
                  📧 {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              )}
              {siteConfig.social.whatsapp && (
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Kartik Designer. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
