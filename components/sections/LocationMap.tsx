import { SectionHeading } from '@/components/ui/SectionHeading';

export function LocationMap() {
  return (
    <section className="w-full bg-[#FDF5E6] border-t border-maroon/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Our Studio"
          subtitle="Location"
          description="Find us at our premium studio for your luxury mehendi experience."
        />
        <div className="mt-12 w-full h-[400px] overflow-hidden rounded-none shadow-xl relative border border-maroon/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11342.34!2d77.1009!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzI0LjAiTiA3N8KwMDYnMDMuMiJF!5e0!3m2!1sen!2sin!4v1657626993134!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Studio Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
