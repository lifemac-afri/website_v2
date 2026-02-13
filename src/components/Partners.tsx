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

const Partners = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden mb-p0">
      {/* Background Map for this section if needed, or rely on parent. 
          The image shows a subtle map background. Let's add a local one for this section specifically if it's distinct.
          For now, we'll keep it clean or assume the global map might peek through if we make bg transparent, 
          but the design seems to have its own white/light context.
      */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <Image
            src="/images/africa-bottom.png"
            alt="Background Map"
            fill
            className="object-cover object-center"
          />
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-20">
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
          <div className="lg:w-2/3 p-8 flex items-center relative bg-white">
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
    </section>
  )
}

export default Partners