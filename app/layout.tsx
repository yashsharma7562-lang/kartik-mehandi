import type { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { SiteFooter } from '@/components/ui/SiteFooter';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { siteConfig } from '@/data/config';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  keywords: ['mehendi', 'henna', 'mehendi artist', 'henna design', 'bridal mehendi', 'wedding mehendi'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  verification: { google: 'your-google-verification-code' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={siteConfig.colors.primary} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex min-h-screen flex-col bg-[#FDF5E6] text-[#2F4F4F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
