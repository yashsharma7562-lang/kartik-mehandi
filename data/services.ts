export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  pricing: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Bridal Mehendi',
    description: 'Complete bridal mehendi package with intricate traditional designs, full-hand coverage, and lasting dark color. Perfect for your special day.',
    icon: '💒',
    pricing: '₹5,000 - ₹15,000',
    duration: '3-4 hours',
  },
  {
    id: '2',
    title: 'Engagement Mehendi',
    description: 'Elegant mehendi designs for engagement celebrations. Combines traditional motifs with modern patterns personalized to your preference.',
    icon: '💍',
    pricing: '₹3,000 - ₹8,000',
    duration: '2-3 hours',
  },
  {
    id: '3',
    title: 'Festival Mehendi',
    description: 'Beautiful mehendi designs for festivals and special occasions. Quick application with vibrant, striking patterns.',
    icon: '🎉',
    pricing: '₹2,000 - ₹5,000',
    duration: '1.5-2 hours',
  },
  {
    id: '4',
    title: 'Custom Designs',
    description: 'Personalized mehendi incorporating your initials, symbols, and unique preferences. One-of-a-kind designs tailored just for you.',
    icon: '✨',
    pricing: '₹4,000 - ₹12,000',
    duration: '2-3 hours',
  },
  {
    id: '5',
    title: 'Party & Events',
    description: 'Quick mehendi services for parties, gatherings, and casual events. Fast application with beautiful results.',
    icon: '🎊',
    pricing: '₹1,500 - ₹4,000',
    duration: '45 mins - 1.5 hours',
  },
  {
    id: '6',
    title: 'Group Bookings',
    description: 'Special rates for group bookings and events. Perfect for bridesmaids, family celebrations, and large gatherings.',
    icon: '👥',
    pricing: 'Custom Quote',
    duration: 'Varies',
  },
];
