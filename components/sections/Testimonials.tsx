'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'Kartik and his team created the most stunning, intricate design for my wedding. The stain was incredibly dark and lasted for weeks. Highly recommended for any bride looking for perfection!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Anjali Desai',
    role: 'Bridesmaid',
    text: 'The attention to detail is unmatched. They incorporated all the traditional elements we wanted while keeping the overall look very modern and chic. A truly premium experience.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    name: 'Sneha Patel',
    role: 'Event Client',
    text: 'Professional, punctual, and beautifully artistic. The team made our family event so special with their quick yet flawless mehendi application. The dark theme of this website suits their premium service perfectly!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sneha'
  },
  {
    name: 'Riya Gupta',
    role: 'Bride',
    text: 'I was very particular about the symmetry in my bridal mehendi. Kartik listened to every detail and executed it beyond my expectations. Five stars are not enough!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=riya'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-maroon mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="bg-[#1A2F2F] py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-maroon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Client Love" 
          subtitle="Testimonials" 
          description="Read what our brides and clients have to say about their premium mehendi experience."
          dark={true}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#132424] border border-henna/20 p-8 rounded-2xl hover:border-maroon/30 hover:shadow-[0_0_25px_rgba(128,0,0,0.1)] transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="font-serif text-lg text-[#FDF5E6]/60 leading-relaxed italic mb-8">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-maroon/50 object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-[#FDF5E6] tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-maroon-light/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
