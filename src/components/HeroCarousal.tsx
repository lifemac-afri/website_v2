import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Carousal = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-[#FDF8F3] to-white flex items-center">
      {/* Background World Map */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Image
          src="/images/world-map.png"
          alt="World Map Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 md:py-24">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start space-y-8 max-w-2xl pt-8 pl-6 md:pt-0 lg:pl-2 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-[1.1]">
           Empowering 
Communities
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
        Echoing John Lewis, we ask, "If not us, then who? If not now, then when?" We are driven to take action, knowing that real change begins with us.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold px-8 rounded-full uppercase tracking-wide h-12 shadow-lg">
              <Link href="/donate">Donate</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white font-bold px-8 rounded-full uppercase tracking-wide h-12 bg-transparent border-2">
              <Link href="/get-involved/volunteer">Join Us</Link>
            </Button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-teal-500 rounded-full hidden lg:block -translate-x-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-500 rounded-full hidden lg:block"></div>
        </div>

        {/* Right Column: Africa Masked Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[650px] aspect-square">
             <Image
              src="/images/african-mask-clip.png"
              alt="African Children"
              fill
              className="object-contain drop-shadow-2xl  scale-95 md:scale-120 md:-ml-20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousal