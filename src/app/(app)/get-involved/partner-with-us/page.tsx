import PartnershipFAQSection from '@/components/FaqsPartnership';
import PartnershipForm from '@/components/PartnershipForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { partnershipBenefits } from '@/data';
import { Heart, Star, Users } from 'lucide-react';
import Image from 'next/image';
import PartnerTestimonialsCarousel from '@/components/PartnerTestimonialsCarousel';
import PartnershipOpportunities from '@/components/PartnershipOpportunities';
import OurPartners from '@/components/OurPartners';

const PartnerWithUs = async () => {


  return (
    <main className="">
     
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-[#FDF8F3] to-slate-50 flex items-center">
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <Image 
              src="/images/africa.svg" 
              alt="Africa Background" 
              fill 
              className="object-contain object-right invert"
           />
        </div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 md:py-24">
          <div className="flex flex-col items-start space-y-8 max-w-2xl pt-8 md:pt-0 lg:pl-20">
            <div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#0B1C3E] mb-6 leading-tight">
                Collaborate for Change.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join us in making a difference, transforming lives, building stronger communities, and contributing to a more sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold px-8 rounded-full uppercase tracking-wide h-12 shadow-lg">
                  <a href="#partner-form">Partner With Us</a>
                </Button>
                
              </div>
            </div>
          </div>
            <div className="relative h-[500px] w-full transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center scale-120"
                style={{
                  backgroundImage: `url('/images/volunteer/volunteer2.jpg')`,
                  maskImage: `url('/images/africa.svg')`,
                  WebkitMaskImage: `url('/images/africa.svg')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </div>
        </div>
      </section>

      {/* Combined Section Wrapper */}
      <div className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-85">
           <Image 
              src="/images/africa-contour.png" 
              alt="Background Pattern" 
              fill 
              className="object-cover object-center"
           />
        </div>

        {/* Why Partner With Us Section */}
        <section className="py-24 px-4 md:px-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                By partnering with us, you can amplify your impact, leverage collective resources, and co-create initiatives that promote education, gender equality, and health. Together, we can build a stronger, more inclusive future.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipBenefits.map((item, index) => {
                 // 3 on line one, 1 centered on the last line (for 4 items)
                 const colClass = index === 3 ? 'md:col-start-2' : '';
                 
                 return (
                <Card 
                  key={index} 
                  className={`text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group p-6 relative overflow-hidden ${colClass} ${
                    index % 2 === 0 
                      ? 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none' 
                      : 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none'
                  }`}
                >
                  <CardHeader>
                  <div className="mx-auto flex items-center justify-center mb-6">
                    <item.icon 
                      className="w-12 h-12 text-teal-500 group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0B1C3E]">{item.title}</CardTitle>
                </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )})}
            </div>
          </div>
        </section>
      </div>

      {/* Partnership Opportunities */}
      <PartnershipOpportunities />

      {/* Our Partners */}
      <OurPartners />

      <div className="grid lg:grid-cols-2 px-24 pb-32">
        {/* Right Column: FAQ */}
        <div className=" py-16 px-4 md:px-16">
           <PartnershipFAQSection />
        </div>

        {/* Left Column: Form */}
        <div id="partner-form" className="py-16 px-4 md:px-16">
           <PartnershipForm />
        </div>
        
      </div>

    </main>
  )
}

export default PartnerWithUs