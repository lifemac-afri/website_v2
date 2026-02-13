"use client"

import { Handshake, Users, Rocket, Flag, Heart, Shield, Star, GraduationCap, Megaphone } from 'lucide-react';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const journeyItems = [
  {
    title: "Leadership",
    icon: Flag,
    description: "We nurture strong leaders who inspire action and guide their communities toward positive change."
  },
  {
    title: "Inclusivity",
    icon: Heart,
    description: "We create spaces where every voice is heard and valued. We ensure our work benefits everyone, regardless of background."
  },
  {
    title: "Fortitude",
    icon: Shield,
    description: "We embrace resilience. We persevere through every challenge to ensure our impact is sustainable and scalable."
  },
  {
    title: "Excellence",
    icon: Star,
    description: "We hold ourselves to the highest standards. We don't just run programs; we deliver meaningful, measurable results every time."
  },
  {
    title: "Mentorship",
    icon: GraduationCap,
    description: "We actively guide the next generation by providing the tools, insight, and opportunities they need to grow into leaders."
  },
  {
    title: "Advocacy",
    icon: Megaphone,
    description: "We stand for equity and justice. We use our platform to champion policies and actions that uplift the underserved."
  },
  {
    title: "Collaboration",
    icon: Handshake,
    description: "We amplify our impact through partnership. We work together to achieve common goals that no one can reach alone."
  }
];

const JourneySection = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent ">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">The Journey We're On</h2>
        </div>

        <div className="relative mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <div
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <CarouselContent className="-ml-4">
                {journeyItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col items-center text-center h-full p-6">
                      <div className="mb-6 text-teal-500">
                        <item.icon className="w-12 h-12" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            {/* Optional: Add navigation buttons if desired, but user asked for fade effect which implies auto-scroll or swipe-like behavior. 
                Keeping them accessible but maybe hidden or styled minimally if needed. 
                For now, let's include them but positioned outside or subtly. 
                Actually, standard carousel usually has arrows. Let's add them. */}
            <div className="hidden md:block">
               <CarouselPrevious className="-left-4 lg:-left-12" />
               <CarouselNext className="-right-4 lg:-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
