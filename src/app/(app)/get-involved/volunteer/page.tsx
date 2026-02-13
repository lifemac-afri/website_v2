import FAQVolunteerSection from '@/components/FaqsVolunteer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import VolunteerApplicationForm from '@/components/VolunteerApplicationForm';
import { volunteerOpportunities } from '@/data';
import { ArrowRight, Clock, Heart, MapPin, Star, Users, CheckCircle2, Quote } from 'lucide-react';
import Image from 'next/image';
import { getPayload } from 'payload'
import config from '@/payload.config'
import VolunteerTestimonialsCarousel from '@/components/VolunteerTestimonialsCarousel';

const Volunteer = async () => {
  const payload = await getPayload({ config })

  const testimonialsData = await payload.find({
    collection: 'volunteer-testimonials',
  })

  const testimonials = testimonialsData.docs.map((t) => ({
    name: t.name,
    role: t.role,
    quote: t.quote,
    image: typeof t.image === 'object' && t.image?.url ? t.image.url : '/images/placeholder-user.jpg',
  }))

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
                Be Part of the Change.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               Sign up to be a volunteer with LIFE-MAC Africa and embark on a journey of giving back, personal growth, and creating a positive impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold px-8 rounded-full uppercase tracking-wide h-12 shadow-lg">
                  <a href="#volunteer-form">Be A Volunteer</a>
                </Button>
                
              </div>
            </div>
          </div>
            <div className="relative h-[500px] w-full transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center scale-120"
                style={{
                  backgroundImage: `url('/images/volunteer/volunteer1.jpg')`,
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

        {/* Why Volunteer Section */}
        <section className="py-24 px-4 md:px-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Why Volunteer With Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Volunteering with LIFE-MAC Africa offers a unique opportunity to contribute to meaningful change while
                developing your own skills and network.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Make a Difference",
                  description: "Your time and skills directly impact the lives of individuals and communities we serve, creating lasting positive change.",
                  icon: Heart,
                  color: "blue"
                },
                {
                  title: "Grow Professionally",
                  description: "Gain valuable experience, apply your expertise, and develop new professional and personal skills through meaningful work.",
                  icon: Star,
                  color: "teal"
                },
                {
                  title: "Build Your Network",
                  description: "Connect with like-minded individuals, professionals, and community leaders who share your passion for social impact.",
                  icon: Users,
                  color: "yellow"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className={`text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group p-6 relative overflow-hidden ${
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
              ))}
            </div>
          </div>
        </section>
  
   
      </div>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-[#0B1C3E] text-white px-4 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 -top-32 -bottom-32">
           <Image 
              src="/images/africa.svg" 
              alt="Background Pattern" 
              fill 
              className="object-cover object-center invert"
           />
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Testimonials</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Hear from some of our volunteers about their experiences with LIFE-MAC Africa.
            </p>
          </div>

          <VolunteerTestimonialsCarousel testimonials={testimonials.map(t => ({
            ...t,
            role: t.role || 'Volunteer'
          }))} />
        </div>
      </section>

 
      <div className="grid lg:grid-cols-2 px-24 pb-32">
        {/* Right Column: FAQ */}
        <div className="bg-white py-16 px-4 md:px-16">
           <FAQVolunteerSection />
        </div>

        {/* Left Column: Form */}
        <div id="volunteer-form" className="py-16 px-4 md:px-16">
           <VolunteerApplicationForm />
        </div>
        
      </div>
    

    </main>
  )
}

export default Volunteer