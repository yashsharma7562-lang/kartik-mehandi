'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const faqs = [
  {
    question: 'How far in advance should I book my bridal mehendi?',
    answer: 'We recommend booking at least 3 to 6 months in advance for bridal Mehendi to ensure your preferred dates are available, especially during peak wedding seasons.'
  },
  {
    question: 'Do you use organic or chemical-free henna?',
    answer: 'Yes, we strictly use 100% organic, hand-mixed henna powder customized with essential oils. Our paste is free from harmful chemicals like PPD to guarantee a rich stain and safe application.'
  },
  {
    question: 'How long does bridal mehendi application take?',
    answer: 'A typical intricate bridal design taking up to the elbows and mid-calves can take between 4 to 8 hours depending on the complexity of the design.'
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Yes, we provide destination mehendi services globally. Travel and accommodation fees apply depending on the location of the event.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1A2F2F] py-20 border-t border-henna/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Answers to common queries"
          centered={true}
          dark={true}
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-henna/10 rounded-lg bg-[#132424] overflow-hidden hover:border-maroon/50 transition-colors duration-300"
            >
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg text-[#FDF5E6]">{faq.question}</span>
                <span className="text-maroon-light ml-4 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-[#FDF5E6]/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
