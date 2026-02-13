import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { upcomingEvents } from '@/data';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

const STEMize = async () => {
  const payload = await getPayload({ config })

  // Fetch Gallery Images for Nyornuvi
  const galleryData = await payload.find({
    collection: 'gallery',
    where: {
      category: {
        equals: 'STEMize',
      },
    },
  })

  // Flatten all images from all Nyornuvi albums
  const allImages = galleryData.docs.flatMap(album =>
    album.images?.map(img => typeof img === 'object' && img.url ? img.url : null).filter(Boolean) || []
  ) as string[]

  // Use the generated Payload type for events
  type PayloadEvent = {
    id: number | string;
    title: string;
    date: string;
    location: string;
    image?: {
      url: string;
      alt?: string;
    } | string | null;
  }

  // Fetch upcoming events for STEMIZE category
  const currentDate = new Date().toISOString()
  const eventsData = await payload.find({
    collection: 'events',
    where: {
      and: [
        {
          category: {
            equals: 'STEMIZE',
          },
        },
        {
          date: {
            greater_than_equal: currentDate,
          },
        },
      ],
    },
    sort: 'date',
    limit: 3, // Limit to 3 upcoming events
  })

  // Cast the events to our local type
  const events = eventsData.docs as unknown as PayloadEvent[]

  // Fallback images if we don't have enough
  const getImg = (index: number, fallback: string) => {
    if (allImages.length === 0) return fallback;
    return allImages[index % allImages.length] || fallback;
  }

  return (
    <main className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Background Africa Map (Inverted) */}
        <div className="absolute top-1/2 right-40 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none z-0 invert">
          <Image src="/images/africa.svg" alt="Africa Map" fill className="object-contain scale-130" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="space-y-8 relative z-30">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold text-[#0B1C3E] tracking-tight">
                  STEMize
                </h1>

              </div>

              <p className="text-lg md:text-xl text-[#0B1C3E]/80 max-w-lg leading-relaxed">
                STEMize bridges the gap in STEM education for underserved communities. We move beyond theory to offer hands-on learning experiences that align with the Ghana Education Service (GES) curriculum and global standards.
              </p>

              <Button
                asChild
                className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-lg px-10 py-6 rounded-full uppercase tracking-wide shadow-lg transition-transform hover:scale-105"
              >
                <Link href="https://stem-campaign.lifemac.org">
                  Donate a Kit
                </Link>
              </Button>
            </div>

            {/* Right Column: Image Collage */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Large Vertical Image - Now on the Left */}
              <div className="absolute top-0 left-0 w-[45%] h-[85%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl z-10">
                <Image
                  src="/images/stemize/stemize1.jpg"
                  alt="STEMIZE Project"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="absolute top-10 right-0 w-[45%] h-[45%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl">
                <Image
                  src="/images/stemize/stemize2.jpg"
                  alt="STEM Education"
                  fill
                  className="object-cover aspect-square"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-10 w-[45%] h-[35%] bg-gray-200 rounded-[3rem] overflow-hidden shadow-xl z-30">
                <Image
                  src="/images/stemize/stemize3.jpg"
                  alt="Xplore Bot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-3 md:pl-24 px-4 relative bg-gradient-to-b to-[#FDF8F3] from-white">
        {/* Background Africa Contour */}
        <div className="absolute inset-0 opacity-90 pointer-events-none z-10 -mt-40">
          <Image src="/images/africa-contour.png" alt="Africa Contour" fill className="object-contain scale-150" />
        </div>
        <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:pr-24">
          {/* Goal Section (Moved) */}
          <div className="grid md:grid-cols-2 md:gap-12 items-center py-12">
            <div className="relative h-[400px] md:h-[700px] w-full flex items-center justify-center -mt-20 ">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: "url('/images/stripmask-2.png')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: "url('/images/stripmask-2.png')",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center"
                }}
              >
                <Image
                  src="/images/stemize/stemize4.jpg"
                  alt="Community engagement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose max-w-none">

              <h3 className="text-2xl font-bold text-[#0B1C3E] mb-6">Our Strategic Focus:</h3>
              <ul className="space-y-4">
                {[
                  { title: "Igniting Curiosity", desc: "Transforming STEM from \"difficult subjects\" into exciting career paths." },
                  { title: "Bridging the Gap", desc: "Providing resources where national investment is currently insufficient." },
                  { title: "Building the Future Workforce", desc: "Equipping a new generation of problem-solvers capable of tackling Africa’s critical challenges—from food security and climate change to digitalization." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-[#0B1C3E]/80 text-lg">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-4 mt-2.5 shrink-0"></span>
                    <span>
                      <strong className="text-[#0B1C3E]">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Grid Container for Content and Sidebar */}
          <div className="grid md:grid-cols-3 gap-12 mt-28">
            {/* Main Content Column */}
            <div className="md:col-span-2 space-y-16">

              {/* Overlapping Cards Section */}
              <div className="relative py-16 md:py-24 ">
                {/* Dotted Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] rounded-3xl opacity-50"></div>

                <div className="relative h-[600px] md:h-[500px] w-full flex items-center justify-center">
                  {/* Top Left Image */}
                  <div className="absolute top-0 left-0 md:left-10 w-48 h-48 md:w-64 md:h-64  transform -rotate-6 z-10">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
                      <Image
                        src="/images/stemize/stemize5.jpg"
                        alt="Girls education"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Top Right Tilted Rectangle */}
                  <div className="absolute -top-36 right-0 md:right-10 w-64 h-40 md:w-96 md:h-48 transform rotate-6 z-0">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/stemize/stemize6.jpg"
                        alt="Empowerment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Central Text Card */}
                  <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl z-20 mx-4 text-center border border-gray-100">


                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-2">2,039</span>
                        <span className="text-sm md:text-base font-medium text-[#0B1C3E] uppercase tracking-wide">Students Engaged</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-2">22</span>
                        <span className="text-sm md:text-base font-medium text-[#0B1C3E] uppercase tracking-wide">Partner Schools</span>
                      </div>
                      <div className="flex flex-col items-center col-span-2">
                        <span className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-2">19</span>
                        <span className="text-sm md:text-base font-medium text-[#0B1C3E] uppercase tracking-wide">STEM Sessions</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="absolute bottom-0 right-0 md:right-10 w-48 h-48 md:w-64 md:h-64 transform rotate-6 z-10">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/stemize/stemize7.jpg"
                        alt="STEM Workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8 z-20">
              {/* Upcoming Events */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0B1C3E] mb-6 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#EAB308]" />
                  Upcoming Events
                </h3>
                <div className="space-y-6">
                  {events.length > 0 ? (
                    events.map((event) => {
                      const imageUrl = (
                        typeof event.image === 'object' && event.image !== null
                          ? event.image.url
                          : typeof event.image === 'string'
                            ? event.image
                            : '/images/placeholder-event.jpg'
                      );

                      return (
                        <div key={event.id} className="group cursor-pointer">
                          <div className="relative h-32 w-full mb-3 overflow-hidden rounded-xl">
                            <Image
                              src={imageUrl}
                              alt={event.title || 'Event image'}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B1C3E]">
                              {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Date TBD'}
                            </div>
                          </div>
                          <h4 className="font-bold text-[#0B1C3E] group-hover:text-[#EAB308] transition-colors mb-1">{event.title}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-500 text-center py-4">No upcoming STEMIZE events. Check back soon!</p>
                  )}
                </div>
              </div>

              {/* Contact Card */}
              <Card className="bg-[#0B1C3E] text-white border-none shadow-lg relative overflow-hidden z-20 ">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#EAB308]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <CardHeader>
                  <CardTitle className="text-white">Contact Us</CardTitle>
                  <CardDescription className="text-blue-200">Have questions about the Nyornuvi Project?</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6 text-blue-100 leading-relaxed">
                    Reach out to our program coordinator for more information or to discuss partnership opportunities.
                  </p>
                  <Button className="w-full bg-white text-[#0B1C3E] hover:bg-blue-50 font-bold rounded-xl">
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden bg-[#FDF8F3] z-0">
        {/* Background World Map */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/images/world.png" alt="World Map" fill className="object-cover object-center" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center pb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C3E] mb-6 tracking-tight">
            Sponsor the Next African Genius
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-[#0B1C3E]/80 leading-relaxed">
            Your contribution provides essential STEM education resources to nurture the next generation of African innovators, creators, and problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="https://stem-campaign.lifemac.org"
              className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-lg px-10 py-4 rounded-full uppercase tracking-wide shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
            >
              Donate A Kit
            </Link>
            <Link
              href="/get-involved/volunteer"
              className="border-2 border-[#0B1C3E] text-[#0B1C3E] hover:bg-[#0B1C3E] hover:text-white font-bold text-lg px-10 py-4 rounded-full uppercase tracking-wide transition-colors bg-transparent flex items-center justify-center"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default STEMize