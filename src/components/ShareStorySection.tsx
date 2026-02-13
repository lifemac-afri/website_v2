'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight, Share2 } from 'lucide-react'
import Image from 'next/image'
import ShareStoryModal from './ShareStoryModal'

export default function ShareStorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="share-story" className="py-20 md:px-12 px-4 bg-gradient-to-b to-[#FDF8F3] from-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-6">
                <Share2 className="h-8 w-8 text-[#009688]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1C3E]">Share Your Story</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Have you been impacted by one of our programs? We would love to hear your story.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your experience can inspire others and help us showcase the tangible impact of our work. Whether you are a program participant, volunteer, or community member, we invite you to share your journey with us.
              </p>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0B1C3E] hover:bg-[#0B1C3E]/90 text-white h-12 px-8 rounded-3xl shadow-lg transition-transform hover:scale-105"
              >
                Share Your Story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] order-1 md:order-2">
              <div className="absolute inset-0 bg-[#009688]/20 rounded-[40px] transform rotate-3 translate-x-2 translate-y-2"></div>
              <Image
                src="https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe"
                alt="Share your story"
                fill
                className="object-cover rounded-[40px] shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <ShareStoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
