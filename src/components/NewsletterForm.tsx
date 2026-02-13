'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { subscribeToNewsletter } from '@/app/(app)/actions/subscribe'
import { Loader2 } from 'lucide-react'
import NewsletterSuccessModal from './NewsletterSuccessModal'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setStatus('loading')
    setMessage('')

    try {
      const result = await subscribeToNewsletter(email, name)
      if (result.success) {
        setStatus('success')
        setMessage(result.message)
        setEmail('')
        setName('')
        setShowSuccessModal(true)
      } else {
        setStatus('error')
        setMessage(result.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'loading'}
          className="bg-white border-none h-16 rounded-full text-gray-700 text-lg pl-8 focus-visible:ring-0 shadow-[0_-3px_30px_rgba(0,0,0,0.15)] w-full md:w-[20rem]" 
        />
        <Input 
          type="email" 
          placeholder="Enter your e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="bg-white border-none h-16 rounded-full text-gray-700 text-lg pl-8 focus-visible:ring-0 shadow-[0_-3px_30px_rgba(0,0,0,0.15)] w-full md:w-[20rem]" 
        />
        <Button 
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold h-16 px-10 rounded-full uppercase tracking-wide text-lg shadow-[0_-10px_30px_rgba(0,0,0,0.15)] w-full md:w-auto min-w-[160px]"
        >
          {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe'}
        </Button>
      </form>
      
      <NewsletterSuccessModal 
        isOpen={showSuccessModal} 
        onOpenChange={setShowSuccessModal} 
      />
    </div>
  )
}

export default NewsletterForm
