"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Gallery, Media } from '@/payload-types';

const categories = ["All", "PSP", "STEMize", "YLT", "Nyornuvi", "Events", "Team"];

interface GalleryGridProps {
  galleryEntries: Gallery[];
}

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GalleryGrid = ({ galleryEntries }: GalleryGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [allItems, setAllItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);

  // Flatten gallery entries into individual items
  useEffect(() => {
    const items: GalleryItem[] = [];
    galleryEntries.forEach(entry => {
      if (entry.images && Array.isArray(entry.images)) {
        entry.images.forEach((image) => {
          if (typeof image === 'object' && image?.url) {
             items.push({
               id: `${entry.id}-${image.id}`,
               src: image.url,
               alt: image.alt || entry.title,
               category: entry.category,
             });
          }
        });
      }
    });
    setAllItems(items);
    setFilteredItems(items);
  }, [galleryEntries]);


  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(allItems);
    } else {
      setFilteredItems(allItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, allItems]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  }, [selectedImageIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  return (
    <section className="py-16 px-4 md:px-16 bg-transparent">
      <div className="container mx-auto">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm  transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0B1C3E] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 pb-28">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => openModal(index)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid mb-4"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                   <span className="text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      {item.category}
                   </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeModal}
        >
            <button 
                onClick={closeModal}
                className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-50"
            >
                <X className="w-8 h-8" />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-6xl h-[80vh] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                {filteredItems[selectedImageIndex] && (
                  <>
                    <Image
                        src={filteredItems[selectedImageIndex].src}
                        alt={filteredItems[selectedImageIndex].alt}
                        fill
                        className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
                        <p className="text-white text-lg ">{filteredItems[selectedImageIndex].alt}</p>
                        <p className="text-gray-300 text-sm">{filteredItems[selectedImageIndex].category}</p>
                    </div>
                  </>
                )}
            </div>
        </div>
      )}

    </section>
  );
};

export default GalleryGrid;
