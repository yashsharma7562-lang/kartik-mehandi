# Kartik Designer - Portfolio Website

A modern, responsive portfolio website for a professional mehendi/henna design artist. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Beautiful UI with custom brand colors and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized with Next.js 14 and Tailwind CSS
- **Animations**: Smooth Framer Motion animations throughout the site
- **SEO Friendly**: Proper metadata and SEO optimization
- **Contact Integration**: WhatsApp integration for bookings and inquiries

## Project Structure

```
kartik-designer/
├── app/
│   ├── layout.tsx                    # Root layout with fonts & metadata
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                 # About page
│   ├── services/
│   │   └── page.tsx                 # Services page with FAQ
│   ├── gallery/
│   │   └── page.tsx                 # Gallery page
│   ├── contact/
│   │   └── page.tsx                 # Contact/Booking page
│   └── globals.css                  # Global styles & Tailwind imports
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx              # Sticky transparent navbar
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── Button.tsx              # Reusable animated button
│   │   └── SectionHeading.tsx      # Animated section titles
│   ├── sections/
│   │   ├── Hero.tsx                # Home hero section
│   │   ├── FeaturedGallery.tsx     # Home gallery preview
│   │   ├── ArtistStory.tsx         # About section content
│   │   ├── ServiceCards.tsx        # Services grid
│   │   ├── MasonryGallery.tsx      # Full gallery masonry layout
│   │   └── BookingForm.tsx         # Contact form + WhatsApp
│   └── animations/
│       └── FadeIn.tsx              # Framer Motion wrapper
├── data/
│   ├── gallery.ts                  # Gallery image data (easily updatable)
│   ├── services.ts                 # Services content data
│   └── config.ts                   # Site config (social links, WhatsApp)
├── lib/
│   ├── utils.ts                    # Utility functions
│   └── animations.ts               # Framer Motion variants
├── public/
│   ├── images/
│   │   ├── hero-mehendi.jpg
│   │   ├── gallery/
│   │   │   ├── design-1.jpg
│   │   │   └── ... (more images)
│   │   └── logos/
│   └── favicon.ico
├── tailwind.config.ts              # Custom theme with brand colors
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone or download the project
cd kartik-designer

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Update Site Config

Edit `data/config.ts` with your details:

```typescript
export const siteConfig = {
  contact: {
    phone: '+91-XXXXXXXXXX',
    whatsapp: '+91-XXXXXXXXXX',
    email: 'hello@kartikdesigner.com',
    address: 'Your City, State, India',
  },
  social: {
    instagram: 'https://instagram.com/kartikdesigner',
    facebook: 'https://facebook.com/kartikdesigner',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
    youtube: 'https://youtube.com/@kartikdesigner',
  },
  // ... more config
};
```

### Add Images

1. Place hero image at: `public/images/hero-mehendi.jpg`
2. Add gallery images to: `public/images/gallery/design-{1-8}.jpg`
3. Update `data/gallery.ts` with correct image paths and details

### Customize Colors

Edit `tailwind.config.ts` to change the primary and secondary brand colors:

```typescript
colors: {
  primary: {
    50: '#faf5f0',
    // ... rest of color palette
    600: '#c16f4e',
    // ... more tones
  },
},
```

## Pages

### Home (`/`)
- Hero section with CTA
- Featured gallery preview
- Services overview
- Booking form

### About (`/about`)
- Artist story and background
- Portfolio highlights
- Values section
- Statistics

### Services (`/services`)
- All services with pricing
- Service details (duration, pricing)
- Frequently asked questions

### Gallery (`/gallery`)
- Filterable masonry gallery
- Filter by category (bridal, engagement, festival, custom)
- Hover effects and details

### Contact (`/contact`)
- Booking form with WhatsApp integration
- Contact information
- Social media links

## Components

### UI Components
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Links and social icons
- **Button**: Reusable animated button component
- **SectionHeading**: Animated section titles

### Section Components
- **Hero**: Hero section with animations
- **FeaturedGallery**: 3-item gallery preview
- **ArtistStory**: About section with image
- **ServiceCards**: Service grid with details
- **MasonryGallery**: Full gallery with filtering
- **BookingForm**: Form with WhatsApp integration

### Animation Component
- **FadeIn**: Wrapper for fade/slide animations

## Customization

### Change Colors
Update the color palette in `tailwind.config.ts`

### Change Fonts
Update fonts in `app/layout.tsx` and `tailwind.config.ts`

### Add More Services
Edit `data/services.ts` and add new service objects

### Add Gallery Images
Update `data/gallery.ts` with new gallery items

### Modify Animations
Edit animation variants in `lib/animations.ts`

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The site works with any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- Heroku

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React** - UI library

## Performance

- Optimized images with Next.js Image component
- CSS optimized with Tailwind CSS
- Smooth animations with Framer Motion
- Fast loading and navigation

## SEO

- Proper metadata for all pages
- OG tags for social sharing
- XML sitemap support ready
- Mobile-friendly responsive design

## Future Enhancements

- Blog section with mehendi tips
- Client testimonials carousel
- Instagram feed integration
- Booking calendar system
- Email notifications
- Payment integration

## License

This project is open source and available under the MIT License.

## Support

For questions or support, contact: hello@kartikdesigner.com

---

Made with ❤️ for mehendi artists
