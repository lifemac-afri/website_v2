import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, CalendarCheck, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { getPayload } from 'payload'
import config from '@/payload.config'
import EventsList from "@/components/EventsList"

export default async function EventsPage() {
  const payload = await getPayload({ config })
  
  // Fetch Featured Event
  const featuredEventData = await payload.find({
    collection: 'events',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 1,
  })
  const featuredEvent = featuredEventData.docs[0]

  // Fetch Upcoming Events
  const upcomingEventsData = await payload.find({
    collection: 'events',
    where: {
      status: {
        equals: 'upcoming',
      },
    },
    sort: 'date',
    limit: 100,
  })
  const upcomingEvents = upcomingEventsData.docs

  // Fetch Past Events
  const pastEventsData = await payload.find({
    collection: 'events',
    where: {
      status: {
        equals: 'past',
      },
    },
    sort: '-date',
    limit: 3,
  })
  const pastEvents = pastEventsData.docs

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-32 px-4 md:px-12 bg-gradient-to-b from-[#FDF8F3] to-white">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-[#0B1C3E] to-[#009688] rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-lg rounded-br-lg overflow-hidden min-h-[400px] flex items-center ">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/world-map.png"
                alt="World Map"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-20 py-12 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Events & Programs</h1>
              <p className="text-xl md:text-2xl text-white/90  mb-8">
                Join our transformative events designed to empower African youth and create lasting community change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold h-14 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                  Register for an Event
                </Button>
                              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-20 bg-gradient-to-b to-[#FDF8F3] from-white md:px-12 px-4 relative overflow-hidden">
           {/* Decorative Blobs */}
           <div className="absolute top-20 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50"></div>
           <div className="absolute bottom-20 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-50"></div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                    src={typeof featuredEvent.image === 'object' && featuredEvent.image?.url ? featuredEvent.image.url : '/images/placeholder.jpg'}
                    alt={featuredEvent.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-[300px] md:h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <Badge className="bg-[#EAB308] text-blue-950 hover:bg-[#CA8A04] px-3 py-1 text-sm font-bold mb-2">Featured</Badge>
                    </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-4 px-3 py-1">{featuredEvent.category}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950 leading-tight">{featuredEvent.title}</h2>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <span className="">{format(new Date(featuredEvent.date), 'MMM d, yyyy')}</span>
                    </div>

                    {featuredEvent.time && (
                    <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="h-5 w-5 text-teal-600" />
                        <span className="">{featuredEvent.time}</span>
                    </div>
                    )}

                    <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span className="">{featuredEvent.location}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-8 line-clamp-3 text-lg leading-relaxed">
                   {(featuredEvent.description as any)?.root?.children?.[0]?.children?.[0]?.text || 'No description available.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 px-8 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none shadow-md">
                      Register Now
                  </Button>
                  <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 h-12 px-8 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none" asChild>
                    <Link href={`/events/${featuredEvent.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Search and Filter */}
      <EventsList events={upcomingEvents} />

      {/* Calendar View */}
      <section className="py-20 md:px-12 px-4 relative overflow-hidden mb-20 ">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950">Event Calendar</h2>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-teal-600 text-teal-700 hover:bg-teal-50 h-10 px-6 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
            >
              <CalendarCheck size={18} />
              <span>Subscribe to Calendar</span>
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-center p-16 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/30">
              <div className="bg-white p-4 rounded-full inline-block mb-6 shadow-sm">
                 <CalendarCheck size={48} className="text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Interactive Calendar Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">Our interactive event calendar is currently under development. Check back soon to easily view and sync our upcoming events!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
