"use client"
import LocationSection from '@/components/Location';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type React from "react"
import { subscribeToNewsletter } from '@/app/(app)/actions/subscribe';
import NewsletterSuccessModal from '@/components/NewsletterSuccessModal';

// Office hours
const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
]

// Social media links
const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/lifemacafrica" },
  { name: "Twitter", icon: Twitter, url: "https://www.x.com/lifemacafrica" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/lifemacafrica" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/lifemacafrica" },
  { name: "YouTube", icon: Youtube, url: "https://youtu.be/MPxoVIf1B-w?si=aIwMaUbO1vr1WWee" },
]

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Newsletter State
  const [newsletterName, setNewsletterName] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false)

  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [contactMessage, setContactMessage] = useState('')

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      newsletter: formData.get('terms') === 'on', // Using terms checkbox as newsletter consent for now, or add separate field
    }

    try {
      const { submitContactForm } = await import('@/app/(app)/actions/contact')
      const result = await submitContactForm(data)
      
      if (result.success) {
        setContactStatus('success')
        setFormSubmitted(true)
      } else {
        setContactStatus('error')
        setContactMessage(result.message)
      }
    } catch (error) {
      setContactStatus('error')
      setContactMessage('Something went wrong. Please try again.')
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterName) return

    setNewsletterStatus('loading')
    setNewsletterMessage('')

    try {
      const result = await subscribeToNewsletter(newsletterEmail, newsletterName)
      if (result.success) {
        setNewsletterStatus('success')
        setNewsletterMessage(result.message)
        setNewsletterEmail('')
        setNewsletterName('')
        setShowNewsletterSuccess(true)
      } else {
        setNewsletterStatus('error')
        setNewsletterMessage(result.message)
      }
    } catch (error) {
      setNewsletterStatus('error')
      setNewsletterMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background Map */}
        <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none">
            <Image
            src="/images/africa.svg"
            alt="Africa Map"
            width={800}
            height={800}
            className="object-contain translate-x-1/4 -translate-y-1/4"
            />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0B1C3E]">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work.
          </p>
        </div>
      </section>
      {/* Main Contact Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
               <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 border border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-6">Send a Message</h2>
                  {formSubmitted ? (
                        <div className="text-center py-12">
                        <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B1C3E] mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Your message has been sent successfully. We'll get back to you shortly.
                        </p>
                        <Button 
                            onClick={() => setFormSubmitted(false)} 
                            className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold rounded-full px-8 h-12"
                        >
                            Send Another Message
                        </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Input name="firstName" id="firstName" placeholder="First Name" required className="bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] h-14 rounded-2xl px-6 text-gray-700 placeholder:text-gray-400" />
                            </div>
                            <div className="space-y-2">
                                <Input name="lastName" id="lastName" placeholder="Last Name" required className="bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] h-14 rounded-2xl px-6 text-gray-700 placeholder:text-gray-400" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Input name="email" id="email" type="email" placeholder="Email" required className="bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] h-14 rounded-2xl px-6 text-gray-700 placeholder:text-gray-400" />
                            </div>
                            <div className="space-y-2">
                                <Input name="phone" id="phone" placeholder="Phone" className="bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] h-14 rounded-2xl px-6 text-gray-700 placeholder:text-gray-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Textarea name="message" id="message" placeholder="Message" className="min-h-[200px] bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] rounded-2xl px-6 py-4 text-gray-700 placeholder:text-gray-400 resize-none" required />
                        </div>

                        <div className="flex items-start space-x-3">
                            <Checkbox name="terms" id="terms" required className="mt-1 border-gray-300 data-[state=checked]:bg-[#009688] data-[state=checked]:border-[#009688]" />
                            <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="terms" className="text-sm leading-snug text-gray-500 font-normal">
                                I agree to the{" "}
                                <Link href="#" className="text-[#009688] hover:underline font-medium">
                                privacy policy
                                </Link>{" "}
                                and consent to being contacted.
                            </Label>
                            </div>
                        </div>

                        <Button type="submit" disabled={contactStatus === 'loading'} className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold h-14 rounded-full px-10 text-lg shadow-lg hover:shadow-xl transition-all">
                            {contactStatus === 'loading' ? <Loader2 className="animate-spin mr-2" /> : null}
                            {contactStatus === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>
                        {contactMessage && (
                            <p className="text-red-500 text-sm mt-2">{contactMessage}</p>
                        )}
                        </form>
                    )}
               </div>
            </div>

            {/* Newsletter Card */}
            <div className="lg:w-1/3">
                <div className="bg-[#009688] rounded-tl-[60px] rounded-br-[60px] shadow-xl p-8 md:p-10 h-full text-white relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-10 -mb-10 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Newsletters</h3>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            Subscribe to our newsletter to get the latest updates, news, and impact stories from LIFE-MAC Africa delivered directly to your inbox.
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                            <Input 
                                placeholder="Name" 
                                value={newsletterName}
                                onChange={(e) => setNewsletterName(e.target.value)}
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 rounded-2xl px-6 focus:bg-white/20 focus:border-white/40 transition-colors"
                            />
                            <Input 
                                type="email" 
                                placeholder="Email" 
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 rounded-2xl px-6 focus:bg-white/20 focus:border-white/40 transition-colors"
                            />
                            <Button 
                                type="submit" 
                                disabled={newsletterStatus === 'loading'}
                                className="w-full bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold h-14 rounded-full shadow-lg mt-4"
                            >
                                {newsletterStatus === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe'}
                            </Button>
                            {newsletterMessage && (
                                <p className={`text-sm mt-2 ${newsletterStatus === 'error' ? 'text-red-200' : 'text-green-200'}`}>
                                    {newsletterMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-[#E0F2F1] rounded-tl-[40px] rounded-br-[40px] p-8 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-full shadow-sm text-[#009688]">
                    <Phone className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-[#0B1C3E] font-bold text-lg">+233 55 472 0190</p>
                </div>
             </div>

             <div className="bg-[#E3F2FD] rounded-tl-[40px] rounded-br-[40px] p-8 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-full shadow-sm text-[#0B1C3E]">
                    <Mail className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                    <p className="text-[#0B1C3E] font-bold text-lg">info@lifemac.org</p>
                </div>
             </div>

             <div className="bg-[#FFF8E1] rounded-tl-[40px] rounded-br-[40px] p-8 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-full shadow-sm text-[#EAB308]">
                    <MapPin className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="text-[#0B1C3E] font-bold text-lg leading-tight">Ho, Volta Region, Ghana</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <NewsletterSuccessModal 
        isOpen={showNewsletterSuccess} 
        onOpenChange={setShowNewsletterSuccess} 
      />

      {/* Location Map */}
      <div className="mb-20">
        <LocationSection />
      </div>
    </main>
  )
}



