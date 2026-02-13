import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InitiativesSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-transparent overflow-hidden ">

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Masked Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square">
               <Image
                  src="/images/strip-mask.png"
                  alt="Initiatives in Motion"
                  fill
                  className="object-contain drop-shadow-xl scale-130"
                />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start space-y-6 pl-3 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
              Our Initiatives in <br />
              Motion
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              We educate, empower, and equip communities to lead change. Each initiative is built on the conviction that when people are given the right tools of knowledge, opportunity, and equity, they will build their own path.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                { title: "Paradigm Shift Project(PSP)", href: "/what-we-do/psp" },
                { title: "STEMize", href: "/what-we-do/stemize" },
                { title: "Nyornuvi", href: "/what-we-do/nyornuvi" },
                { title: "Youth Learning Together (YLT)", href: "/what-we-do/ylt" },
                { title: "Masterclass", href: "/what-we-do/masterclass" }
              ].map((item, index) => (
                <li key={index} className="flex items-center text-blue-950  hover:text-teal-600 transition-colors">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
