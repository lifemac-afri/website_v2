"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  fallbackImages: string[];
}

export function ImageGallery({ images, fallbackImages }: ImageGalleryProps) {
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  useEffect(() => {
    setCurrentImages(images.length > 0 ? images : fallbackImages);
  }, [images, fallbackImages]);

  const getImg = (index: number, fallback: string): string => {
    if (!currentImages.length || index < 0 || index >= currentImages.length) {
      return fallback;
    }
    return currentImages[index] || fallback;
  };

  // Ensure we have valid image URLs
  const safeFallbacks = fallbackImages.slice(0, 3).filter((url): url is string => Boolean(url));
  const image1 = getImg(0, safeFallbacks[0] || '');
  const image2 = getImg(1, safeFallbacks[1] || '');
  const image3 = getImg(2, safeFallbacks[2] || '');

  return (
    <div className="relative h-[600px] hidden lg:block">
      {/* Large Vertical Image */}
      <div className="absolute top-0 left-0 w-[45%] h-[85%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl z-10">
        <Image
          src={image1}
          alt="STEM Education"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Top Right Image */}
      <div className="absolute top-10 right-0 w-[45%] h-[45%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl">
        <Image
          src={image2}
          alt="Students learning coding"
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-10 w-[45%] h-[35%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl">
        <Image
          src={image3}
          alt="Robotics workshop"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
