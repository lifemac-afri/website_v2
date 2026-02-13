import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import NewsletterForm from './NewsletterForm'

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import('./Map'), { ssr: false })

const Footer = () => {
  return (
    <footer className="relative">
      {/* Overlapping Newsletter Section */}
      <div className="container mx-auto px-4 relative z-20 -mb-10 -mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-blue-950  mb-6 text-xl md:text-2xl lg:-ml-52">Subscribe to our newsletter</h3>
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0B1C3E] text-white pt-40 pb-8 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Column 1: Brand & Address */}
            <div className="space-y-6 lg:border-r border-white/10 pr-4">
              <div>
                <div className="mb-4">
                  <Image 
                    src="/images/logos/white.png" 
                    alt="LIFE-MAC Africa Logo" 
                    width={150} 
                    height={100} 
                    className="h-10 w-auto" 
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-[#EAB308] font-bold uppercase tracking-wide">Address</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Rotary Community Centre, SSNIT Flat Road,<br />
                  Ho Volta Region, Ghana, West Africa.<br />
                  Digital Address: VH-0020-7582
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6 lg:border-r border-white/10 px-4">
              <h3 className="text-[#EAB308] font-bold text-lg">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
                <li><Link href="/impact-stories" className="hover:text-white transition-colors">Impact Stories</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>

            {/* Column 3: What We Do */}
            <div className="space-y-6 lg:border-r border-white/10 px-4">
              <h3 className="text-[#EAB308] font-bold text-lg">What We Do</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/what-we-do/psp" className="hover:text-white transition-colors">PSP</Link></li>
                <li><Link href="/what-we-do/stemize" className="hover:text-white transition-colors">STEMize</Link></li>
                <li><Link href="/what-we-do/nyornuvi" className="hover:text-white transition-colors">Nyornuvi</Link></li>
                <li><Link href="/what-we-do/ylt" className="hover:text-white transition-colors">YLT</Link></li>
                <li><Link href="/what-we-do/masterclass" className="hover:text-white transition-colors">Masterclass Series</Link></li>
                <li><Link href="/what-we-do/uvl" className="hover:text-white transition-colors">UVL</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="space-y-8 lg:border-r border-white/10 px-4">
              <div className="space-y-4">
                <h3 className="text-[#EAB308] font-bold text-lg">Contact Us:</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#EAB308]" />
                    <span>info@lifemac.org</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EAB308]" />
                    <span>+233 55 472 0190</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#EAB308] font-bold text-lg">Keep In Touch</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <Link href="https://www.instagram.com/lifemacafrica?igsh=NDQya3ZmejBvYTl0" className="text-[#EAB308] hover:text-white transition-colors">
                        <Instagram className="w-6 h-6" />
                      </Link>
                      <Link href="https://www.linkedin.com/company/lifemacafrica/" className="text-[#EAB308] hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link href="https://x.com/LifeMacAfrica?t=Ld5HxbLqbs8NOc1IkoFd0g&s=09" className="text-[#EAB308] hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                      <Link href="https://www.facebook.com/share/1H9GEuRYmc/" className="text-[#EAB308] hover:text-white transition-colors">
                        <Facebook className="w-6 h-6" />
                      </Link>
                    </div>
                    <div className="flex gap-4">
                      <Link href="https://www.threads.net/@lifemacafrica" className="text-[#EAB308] hover:text-white transition-colors">
                         <svg viewBox="0 0 16 16" className="w-6 h-6 fill-current" aria-hidden="true">
                           <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                         </svg>
                      </Link>
                      <Link href="https://www.tiktok.com/@lifemac.africa?_t=ZM-8wnQCbOAq7c&_r=1" className="text-[#EAB308] hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </Link>
                      <Link href="https://youtube.com/@lifemacafrica?si=6dkhOEQ9FiVrJJod" className="text-[#EAB308] hover:text-white transition-colors">
                        <Youtube className="w-6 h-6" />
                      </Link>
                      <Link href="https://wa.me/233554720190" className="text-[#EAB308] hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>

            {/* Column 5: Map */}
            <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-white/10">
               <Map 
                 latitude={6.6008} 
                 longitude={0.4713} 
                 zoom={15} 
                 className="h-full w-full"
                 address="Rotary Community Centre, SSNIT Flat Road, Ho Volta Region, Ghana"
                 googleMapsUrl="https://www.google.com/maps/search/?api=1&query=6.6008,0.4713"
               />
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex gap-8">
              <a href="/docs/terms-and-privacy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/docs/terms-and-privacy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms Of Service</a>
            </div>
            <div>
              ©{new Date().getFullYear()} LIFE-MAC Africa | Empowering Communities.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer