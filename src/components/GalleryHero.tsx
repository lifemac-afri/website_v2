"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const images = [
  "/images/Impact in Images/_MG_3757.jpg", // Volunteer group
  "/images/Impact in Images/IMG_0248.jpg",
  "/images/Impact in Images/IMG_0358.jpg",
  "/images/Impact in Images/IMG_0430.jpg",
  "/images/Impact in Images/IMG_0474.jpg",
  "/images/Impact in Images/IMG_0990.jpg",
  "/images/Impact in Images/IMG_1047.jpg",
  "/images/Impact in Images/IMG_7802.jpg", 
  "/images/Impact in Images/IMG_7623.jpg",
];

const GalleryHero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selectedImage])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const nextSlide = () => {
    api?.scrollNext()
  }

  const prevSlide = () => {
    api?.scrollPrev()
  }

  return (
    <section className="relative py-24 overflow-x-hidden bg-gradient-to-b from-[#FDF8F3] to-white min-h-[900px] flex flex-col items-center">
       {/* Background Text/Header */}
       <div className="text-center mb-6 z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B1C3E] mb-6 tracking-tight">
            Our Impact in Pictures
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the moments that define our journey and the lives we touch across Africa.
          </p>
       </div>

      <div className="w-full mt-14 px-4 sm:px-6 lg:px-12">
        <div className="relative w-full rounded-[32px] border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(11,28,62,0.12)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white/80 to-transparent rounded-l-[32px]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white/80 to-transparent rounded-r-[32px]" />

          <Carousel
            setApi={(nextApi) => setApi(nextApi)}
            opts={{ align: "center", loop: true, skipSnaps: false }}
            className="w-full px-6 sm:px-10"
          >
            <CarouselContent className="py-14 md:py-16">
            {images.map((src, index) => {
              const isActive = index === activeIndex

              return (
                <CarouselItem
                  key={index}
                  className="basis-[360px] pl-3 md:basis-[560px] md:pl-5"
                >
                  <button
                    type="button"
                    aria-label={`View gallery image ${index + 1}`}
                    aria-current={isActive}
                    className={
                      "relative block w-full px-1.5 md:px-2 origin-center transition-all duration-500 ease-out motion-reduce:transition-none " +
                      (isActive
                        ? "z-20 scale-120 opacity-100"
                        : "z-10 scale-92 opacity-70 hover:opacity-90")
                    }
                    onClick={() => {
                      if (index !== activeIndex) {
                        api?.scrollTo(index)
                        return
                      }
                      setSelectedImage(src)
                    }}
                  >
                    <div
                      className={
                        "rounded-[28px] border border-white/25 p-[10px] backdrop-blur-md transition-all duration-500 ease-out motion-reduce:transition-none " +
                        (isActive
                          ? "bg-white/25 shadow-[0_40px_120px_rgba(11,28,62,0.22)]"
                          : "bg-white/15 shadow-[0_16px_50px_rgba(11,28,62,0.14)]")
                      }
                    >
                      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover scale-110 blur-2xl opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                        <Image
                          src={src}
                          alt={`Gallery Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 ring-1 ring-white/10" />
                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              )
            })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-8 z-20">
        <button 
          type="button"
          aria-label="Previous image"
          onClick={prevSlide}
          disabled={!api}
          className="p-4 rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 text-[#0B1C3E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          type="button"
          aria-label="Next image"
          onClick={nextSlide}
          disabled={!api}
          className="p-4 rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 text-[#0B1C3E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors"
            >
                <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-[3/2] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={selectedImage}
                    alt="Gallery Fullscreen"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
      )}

    </section>
  );
};

export default GalleryHero;
