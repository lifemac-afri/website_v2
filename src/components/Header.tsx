'use client'
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'


import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Header = () => {
  const pathname = usePathname()
  const linkClass = (href: string) =>
    `text-sm  transition-colors ${
      pathname === href
        ? 'text-foreground border-b-2 border-[#EAB308] pb-1 rounded-b-md'
        : 'text-muted-foreground hover:text-[#EAB308]'
    }`


    const parentLinkClass = (prefix: string) =>
      `text-sm  transition-colors ${
        pathname.startsWith(prefix)
          ? 'text-foreground border-b-2 border-[#EAB308] pb-1'
          : 'text-muted-foreground hover:text-[#EAB308]'
      }`
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-x-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="">
              <Image src="/images/logos/main.png" alt="LIFE-MAC Africa Logo" width={180} height={40} className="h-6 md:h-10 w-auto object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/who-we-are" className={linkClass('/who-we-are')}>
            Who We Are
          </Link>

          {/* What We Do */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className={parentLinkClass('/what-we-do') + ' p-0 h-auto '}
              >
                What We Do <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/what-we-do/psp">Paradigm Shift Project (PSP)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/what-we-do/stemize">STEMize</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/what-we-do/nyornuvi">Nyornuvi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/what-we-do/ylt">Youth Learning Together (YLT)</Link>
              </DropdownMenuItem>
               <DropdownMenuItem asChild>
                <Link href="/what-we-do/masterclass">Masterclass Series</Link>
              </DropdownMenuItem>
               <DropdownMenuItem asChild>
                <Link href="/what-we-do/uvl">Ubuntu Venture Lab (UVL)</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Get Involved */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className={parentLinkClass('/get-involved') + ' p-0 h-auto '}
              >
                Get Involved <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/get-involved/volunteer">Volunteer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/get-involved/partner-with-us">Partner With Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/impact-stories" className={linkClass('/impact-stories')}>
            Impact Stories
          </Link>
          <Link href="/events" className={linkClass('/events')}>
            Events
          </Link>
           <Link href="/gallery" className={linkClass('/gallery')}>
            Gallery
          </Link>
          <Link href="/contact-us" className={linkClass('/contact-us')}>
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2 z-50">
          <Button asChild className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold px-5 md:px-8 h-9 md:h-10 text-xs md:text-sm rounded-full uppercase tracking-wide">
            <Link href="/donate">Donate</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet >
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-4">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-base ">
                  Home
                </Link>
                <Link href="/who-we-are" className="text-base ">
                  Who We Are
                </Link>
                <Separator />
                <h3 className="text-sm  text-muted-foreground">What We Do</h3>
                <Link href="/what-we-do/psp" className="text-base  pl-2">
                  Paradigm Shift Project (PSP)
                </Link>
                <Link href="/what-we-do/stemize" className="text-base  pl-2">
                  STEMize
                </Link>
                <Link href="/what-we-do/nyornuvi" className="text-base  pl-2">
                  Nyornuvi
                </Link>
                <Link href="/what-we-do/ylt" className="text-base  pl-2">
                  Youth Learning Together (YLT)
                </Link>
                <Link href="/what-we-do/masterclass" className="text-base  pl-2">
                  Masterclass
                </Link>
                <Separator />
                <h3 className="text-sm  text-muted-foreground">Get Involved</h3>
                <Link href="/get-involved/volunteer" className="text-base  pl-2">
                  Volunteer
                </Link>
                <Link href="/get-involved/partner-with-us" className="text-base  pl-2">
                  Partner With Us
                </Link>
                <Separator />
                <Link href="/impact-stories" className="text-base ">
                  Impact Stories
                </Link>
                <Link href="/events" className="text-base ">
                  Events
                </Link>
                 <Link href="/gallery" className="text-base ">
                  Gallery
                </Link>
                <Link href="/contact-us" className="text-base ">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header