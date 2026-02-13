"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, X, Instagram } from 'lucide-react';
import type { Team } from '@/payload-types';

interface TeamCarouselProps {
  team: Team[];
}

const TeamCarousel = ({ team }: TeamCarouselProps) => {
  const [rotation, setRotation] = useState(0);
  
  const cardWidth = 300; 
  const cardHeight = 450;
  const count = team.length;
  // Radius calculation similar to GalleryHero
  const radius = 520; 
  const angleStep = 360 / count;

  const nextSlide = () => {
    setRotation(prev => prev - angleStep);
  };

  const prevSlide = () => {
    setRotation(prev => prev + angleStep);
  };

  if (count === 0) {
      return <div className="text-center py-20 text-gray-500">No team members found.</div>;
  }

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center pb-20" style={{ perspective: '1000px' }}>
        {/* Carousel */}
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `translateZ(${radius}px) rotate(180deg) rotateX(180deg) rotateY(${rotation}deg)`
          }}
        >
           {team.map((member, index) => {
             const angle = index * angleStep;
             const imageUrl = typeof member.image === 'object' && member.image?.url ? member.image.url : '/images/placeholder-user.jpg';

             return (
               <div
                 key={member.id || index}
                 className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
                 style={{
                   width: `${cardWidth}px`,
                   height: `${cardHeight}px`,
                   marginLeft: `-${cardWidth / 2}px`, 
                   marginTop: `-${cardHeight / 2}px`, 
                   transform: `rotate(180deg) rotateX(180deg) rotateY(${angle}deg) translateZ(-${radius}px)`,
                   backfaceVisibility: 'hidden', 
                 }}
               >
                 <Image
                   src={imageUrl}
                   alt={member.name}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 
                 {/* Overlay - Always visible */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3E] via-[#0B1C3E]/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-teal-400  text-sm mb-4">{member.role}</p>
                    
                    <div className="flex gap-4">
                        {member.socials?.linkedin && (
                            <a href={member.socials.linkedin} className="text-white hover:text-teal-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {member.socials?.twitter && (
                            <a href={member.socials.twitter} className="text-white hover:text-teal-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        
                    </div>
                 </div>
               </div>
             );
           })}
        </div>

        {/* Controls */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <button 
            onClick={prevSlide}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#0B1C3E] transition-all"
            >
            <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
            onClick={nextSlide}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#0B1C3E] transition-all"
            >
            <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
  );
};

export default TeamCarousel;
