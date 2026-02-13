"use client"

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
}

interface PartnerTestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const PartnerTestimonialsCarousel: React.FC<PartnerTestimonialsCarouselProps> = ({ testimonials }) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-12">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3">
              <div className="relative mt-1 h-full">
                <div className={`relative z-10 bg-white/5 backdrop-blur-sm p-6 pt-12 h-full flex flex-col rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none border border-white/20 shadow-lg`}>
                  
                  <div className="absolute -top-10 right-8 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md z-20">
                    <Image
                      src={testimonial.image }
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="">
                    <Quote className="text-[#EAB308] w-8 h-8 fill-current opacity-80 mb-4" />
                    <p className="italic text-white opacity-90 leading-relaxed mb-2 relative z-10">"{testimonial.quote}"</p>
                  </div>
                  <div className="border-t border-white/20 mt-auto pt-4">
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                    <p className="text-[#EAB308] text-sm font-medium">{testimonial.organization}</p>
                  </div>

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
          <CarouselNext className="-right-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default PartnerTestimonialsCarousel;
