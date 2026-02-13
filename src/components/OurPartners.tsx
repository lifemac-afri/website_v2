"use client"

import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const partnerUrls:string[] = [
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6kBeiFgWRrzEBXND96YA2H1SLt5uKfOTZlai8",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR65ezdwJMW6dCF9ulHvh0E5TxLGigmpSMJzUNr",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6lLuDJpya7hi9rTN2Aox5eKR03YgQbv8GXBIy",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6jgXLhvuRnD2eNLXlxd0Tc1V53BWGSA74whv6",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6iGG2IxD5BwXp8J5rHvPldeqkt12KfFzQ964a",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6d87dvP4KvRUsJLz1ayA725Bilq4jYrHC0FZh",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6yH00IsDRqhVZGQuvzYkNdnwcFUxmK8oEJXHD",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR65ezdwJMW6dCF9ulHvh0E5TxLGigmpSMJzUNr",
"https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6yQRN5TDRqhVZGQuvzYkNdnwcFUxmK8oEJXHD",
"/images/partners/firefly.png",
"/images/partners/amalitech.png",
"/images/partners/neip.png",
"/images/partners/asogli.JPG",
]

const partners = [
  "Partner 0", "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6", "Partner 7", "Partner 8"
];

const OurPartners = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FDF8F3] to-white px-4">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with these organizations to create positive change in communities across Africa.
          </p>
        </div>

<div className="w-full">
  <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch overflow-hidden gap-10">
          
          {/* Left Side - Title Card */}
          <div className="lg:w-fit bg-[#0B1C3E] py-12 px-5 flex flex-col justify-center rounded-tr-[3rem] rounded-bl-[3rem] relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Some of our <br />
              <span className="text-[#EAB308]">Esteemed</span> <br />
              partners
            </h2>
          </div>

          {/* Right Side - Partner Logos */}
          <div className="lg:w-3/4 p-8 flex items-center relative bg-white shadow border border-slate-100">
            {/* Yellow Vertical Bars */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-1 bg-[#EAB308] hidden lg:block"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-1 bg-[#EAB308] hidden lg:block"></div>

            <div className="w-full overflow-hidden px-8">
               <Carousel
                 opts={{
                   align: "start",
                   loop: true,
                 }}
                 plugins={[
                   Autoplay({
                     delay: 2000,
                     stopOnInteraction: true,
                   }),
                 ]}
                 className="w-full"
               >
                 <CarouselContent className="-ml-4">
                  {partnerUrls.map((img, idx) => (
                    <CarouselItem key={idx} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                      <div
                        className="relative w-full h-16 md:h-20 flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-110"
                      >
                        <Image
                          src={img}
                          alt={`Partner ${idx}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                 </CarouselContent>
               </Carousel>
            </div>
          </div>

        </div>
      </div>
</div>
      </div>
    </section>
  );
};

export default OurPartners;
