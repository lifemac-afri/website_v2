import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import type { Testimonial } from '@/payload-types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  // Display only the first 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 pl-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
              Stories that Inspire
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
             Our work is best told through the voices of those we serve. These stories capture how individuals and communities experience the impact.
            </p>
            <Button asChild className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold px-8 py-6 rounded-full uppercase tracking-wide mt-4">
              <Link href="/impact-stories">Read More</Link>
            </Button>
          </div>

          {/* Right Content - Staggered Cards */}
          <div className="relative flex flex-col gap-12">
            {displayTestimonials.map((testimonial, index) => {
               const imageUrl = typeof testimonial.image === 'object' && testimonial.image?.url ? testimonial.image.url : '/images/placeholder-user.jpg';
               
               return (
              <div 
                key={testimonial.id} 
                className={`relative bg-white rounded-3xl shadow-lg p-6 max-w-2xl ${
                  index % 2 === 0 ? 'self-end mr-8' : 'self-start ml-8'
                }`}
              >
                {/* Teal Background Shape */}
                <div className={`absolute -z-10 w-[105%] h-[120%] -top-4 ${
                  index % 2 === 0 ? '-left-8' : '-right-8'
                }`}>
                  <Image 
                    src="/images/testimonial-card.svg" 
                    alt="Background Shape" 
                    fill 
                    className={`object-fill ${index % 2 === 0 ? 'scale-x-[-1]' : ''}`}
                  />
                </div>
                
                <div className="flex flex-col relative z-10">
                  <div className="absolute -top-12 right-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Quote className="text-blue-950 w-8 h-8 fill-current opacity-80" />
                    <p className="text-slate-700 text-sm leading-relaxed mb-2 w-full">
                      {testimonial.quote}
                    </p>
                    
                    <div className="border-t border-slate-100 pt-1">
                      <h4 className="text-blue-950 font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-teal-600 text-[10px]  uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials

