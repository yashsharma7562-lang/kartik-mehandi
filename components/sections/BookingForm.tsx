'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/config';
import { getWhatsAppLink } from '@/lib/utils';
import { containerVariants, itemVariants } from '@/lib/animations';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  eventDate: string;
  serviceType: string;
  message: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    eventDate: '',
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi! I'd like to book a mehendi service.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Event Date: ${formData.eventDate}
Service Type: ${formData.serviceType}
Message: ${formData.message}`;

    window.open(getWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      eventDate: '',
      serviceType: '',
      message: '',
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClasses = "w-full px-4 py-4 rounded-none bg-[#FDF5E6]/50 border border-maroon/10 text-henna placeholder-henna/30 focus:border-maroon focus:ring-0 focus:outline-none transition-all duration-300";
  const labelClasses = "block text-[11px] font-semibold text-henna/50 mb-2 uppercase tracking-[0.25em]";

  return (
    <section className="py-20 bg-[#FDF5E6]" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-[#FDF5E6] p-8 md:p-12 rounded-none border border-maroon/10 shadow-xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-henna mb-4">
              Book Your Appointment
            </h2>
            <p className="text-henna/60 font-light leading-relaxed">
              Submit your inquiry and we&apos;ll be in touch within 24 hours to secure your date.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClasses}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className={labelClasses}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              {/* Location */}
              <div>
                <label className={labelClasses}>Event Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="City or Venue"
                />
              </div>

              {/* Event Date */}
              <div>
                <label className={labelClasses}>Event Date *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className={labelClasses}>Service Type *</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Select a service</option>
                <option value="bridal">Bridal Mehendi</option>
                <option value="engagement">Engagement Mehendi</option>
                <option value="festival">Festival Mehendi</option>
                <option value="custom">Custom Design</option>
                <option value="party">Party & Events</option>
                <option value="group">Group Booking</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className={labelClasses}>Additional Details (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Share your vision or any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <Button 
                type="submit" 
                className="w-full py-4 tracking-[0.3em] font-semibold text-[11px] uppercase rounded-none bg-maroon text-white hover:bg-maroon-dark"
              >
                {submitted ? '✓ Request Sent Successfully' : 'Submit Inquiry'}
              </Button>
            </motion.div>

            <p className="text-[11px] text-henna/40 text-center pt-2 font-medium tracking-wide uppercase">
              Your inquiry is routed directly to WhatsApp for an immediate response.
            </p>
          </motion.form>

          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-maroon/10"
          >
            <a href={`tel:${siteConfig.contact.phone}`} className="text-center p-6 bg-[#FDF5E6] border border-maroon/10 hover:border-maroon/20 rounded-none group transition-colors">
              <p className="text-2xl mb-3">📞</p>
              <p className="text-maroon text-xs font-semibold tracking-wider font-sans">{siteConfig.contact.phone}</p>
            </a>

            <a href={`mailto:${siteConfig.contact.email}`} className="text-center p-6 bg-[#FDF5E6] border border-maroon/10 hover:border-maroon/20 rounded-none group transition-colors">
              <p className="text-2xl mb-3">📧</p>
              <p className="text-maroon text-xs font-semibold tracking-wider font-sans">{siteConfig.contact.email}</p>
            </a>

            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-center p-6 bg-[#FDF5E6] border border-maroon/10 hover:border-maroon/20 rounded-none group transition-colors">
              <p className="text-2xl mb-3">💬</p>
              <p className="text-maroon text-xs font-semibold tracking-wider font-sans uppercase">WhatsApp Us</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
