'use client'

import React from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

interface NewsletterSuccessModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const NewsletterSuccessModal = ({ isOpen, onOpenChange }: NewsletterSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-none shadow-2xl rounded-2xl p-8 text-center">
        <DialogHeader className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-24 mb-2">
            <Image 
              src="https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6elTabr2qu80yLtXiwBWvmPjYRrCVpAkDZGxQ" 
              alt="LIFE-MAC Africa Logo" 
              fill
              className="object-contain"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#0B1C3E]">
            Thank You for Subscribing!
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-lg">
            You have successfully joined our newsletter. We're excited to share our journey and impact stories with you.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-center">
          <Button 
            onClick={() => onOpenChange(false)}
            className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold px-8 py-2 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default NewsletterSuccessModal
