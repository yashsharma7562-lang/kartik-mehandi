export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'bridal' | 'engagement' | 'festival' | 'custom';
  year: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Bridal Mehendi - Royal Theme',
    description: 'Intricate full-hand mehendi design with traditional motifs',
    image: '/images/gallery/design-1.jpg',
    category: 'bridal',
    year: 2024,
  },
  {
    id: '2',
    title: 'Engagement Mehendi',
    description: 'Elegant geometric patterns with personalized initials',
    image: '/images/gallery/design-2.jpg',
    category: 'engagement',
    year: 2024,
  },
  {
    id: '3',
    title: 'Festival Mehendi',
    description: 'Vibrant traditional design for special celebrations',
    image: '/images/gallery/design-3.jpg',
    category: 'festival',
    year: 2024,
  },
  {
    id: '4',
    title: 'Custom Bridal Design',
    description: 'Personalized mehendi with family initials and motifs',
    image: '/images/gallery/design-4.jpg',
    category: 'bridal',
    year: 2024,
  },
  {
    id: '5',
    title: 'Festival Celebration',
    description: 'Full-hand mehendi with intricate floral patterns',
    image: '/images/gallery/design-5.jpg',
    category: 'festival',
    year: 2024,
  },
  {
    id: '6',
    title: 'Engagement Special',
    description: 'Modern design combining traditional and contemporary elements',
    image: '/images/gallery/design-6.jpg',
    category: 'engagement',
    year: 2023,
  },
  {
    id: '7',
    title: 'Royal Bridal Mehendi',
    description: 'Elaborate full-body mehendi with premium finishes',
    image: '/images/gallery/design-7.jpg',
    category: 'bridal',
    year: 2023,
  },
  {
    id: '8',
    title: 'Custom Pattern Design',
    description: 'Unique custom mehendi incorporating personal symbols',
    image: '/images/gallery/design-8.jpg',
    category: 'custom',
    year: 2023,
  },
];
