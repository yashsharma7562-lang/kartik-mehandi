import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Kartik | Professional Bridal Mehendi Artist',
  description: 'Learn about Kartik, an expert mehendi artist delivering bespoke henna artistry with a philosophy that henna is a ritual, not just a service.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#fffdf9] min-h-screen pt-32 pb-24 text-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout: Image on left, Philosophy on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[600px] w-full lg:w-[90%] bg-[#f3ece6] rounded-none overflow-hidden border border-black/5 shadow-xl">
            {/* Minimalist offset border for logic aesthetic */}
            <div className="absolute inset-4 border border-[#ff321c]/10 z-20 pointer-events-none" />
            <Image
              src="/images/download.jpeg"
              alt="Kartik applying Mehendi"
              fill
              className="object-cover brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-[15s]"
            />
          </div>

          <div className="px-4 lg:px-0">
            <p className="text-sm tracking-[0.32em] uppercase text-[#ff321c] mb-4 font-semibold">
              Our Philosophy
            </p>
            <h1 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-[#101010] mb-8 leading-tight">
              The Hand Behind <br /> the Art: <br />
              <span className="italic font-light text-[#ff321c]">Kartik&apos;s Passion</span>
            </h1>
            
            <div className="w-16 h-px bg-[#ff321c] mb-8" />

            <div className="space-y-6 font-sans font-light text-lg leading-relaxed text-black/70">
              <p>
                For me, <strong className="text-[#ff321c] font-medium">Henna is a ritual, not a job.</strong> It is the delicate thread that connects ancient traditions to the modern bride&apos;s most anticipated day.
              </p>
              <p>
                My journey began over a decade ago, fueled by a fascination with the fluid geometry of natural henna stains. I realized early on that bridal mehendi is more than just an accessory; it is an intimate meditation, a blessing painted onto the skin.
              </p>
              <p>
                I am formally certified in advanced mehendi application, ensuring that every cone of paste I mix is strictly 100% organic, hand-crafted from Sojat henna leaves, and completely free from PPD or harmful chemicals. This steadfast dedication to purity is what achieves our signature deep, burgundy stain.
              </p>
              <p>
                When you choose our studio for your wedding day, you are not just booking an artist—you are investing in peace of mind. I bring a calm, luxurious, and deeply personalized experience to your celebrations, ensuring that the artistry you wear is as flawless and unique as your own love story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
