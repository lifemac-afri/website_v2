'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'

interface ShareStoryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShareStoryModal({ isOpen, onClose }: ShareStoryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    story: '',
    contactConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit story')
      }

      const data = await response.json()
      
      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
        setFormData({ name: '', email: '', story: '', contactConsent: false })
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Error submitting story:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-2xl bg-white md:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0B1C3E] to-[#009688] text-white px-6 md:px-8 py-6 flex items-center justify-between relative overflow-hidden">
          {/* Background Africa SVG */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
            <img
              src="/images/africa.svg"
              alt=""
              className="h-full w-full object-contain object-right scale-150"
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold">Share Your Story</h2>
            <p className="text-white/90 text-sm mt-1">We'd love to hear about your experience</p>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-140px)] md:max-h-[calc(90vh-140px)]">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address <span className="text-gray-400">(Optional)</span>
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full"
              />
            </div>

            {/* Story Field */}
            <div className="space-y-2">
              <label htmlFor="story" className="block text-sm font-semibold text-gray-700">
                Your Story <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="story"
                required
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                placeholder="Share your experience with our programs... How has LIFE-MAC Africa impacted your life?"
                className="w-full min-h-[200px] resize-none"
              />
              <p className="text-xs text-gray-500">
                Tell us about your journey, the challenges you faced, and how our programs helped you.
              </p>
            </div>

            {/* Contact Consent */}
            <div className="flex items-start space-x-3 bg-blue-50/50 p-4 rounded-lg">
              <Checkbox
                id="consent"
                checked={formData.contactConsent}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, contactConsent: checked as boolean })
                }
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
                I am willing to be contacted by the LIFE-MAC Africa team regarding my story and 
                potentially have it featured on the website and other platforms.
              </label>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <p className="font-semibold">Thank you for sharing your story!</p>
                <p className="text-sm">We appreciate you taking the time to share your experience with us.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm">Please try again later or contact us directly.</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:flex-1 bg-[#0B1C3E] hover:bg-[#0B1C3E]/90 text-white rounded-3xl shadow-lg transition-transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
