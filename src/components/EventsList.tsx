"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Search, Filter, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Event, Media } from "@/payload-types"

const eventCategories = ["All Events", "General", "STEMIZE", "PSP", "YLT"]

interface EventsListProps {
  events: Event[]
}

const EventsList = ({ events }: EventsListProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (event.description as any)?.root?.children?.[0]?.children?.[0]?.text?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDF8F3] to-white md:px-12 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-blue-950">Upcoming Events</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Search events..." 
                className="pl-12 border-gray-200 h-12 rounded-xl focus:ring-teal-500 focus:border-teal-500 shadow-sm" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 border-gray-200 h-12 px-6 rounded-xl hover:bg-gray-50 text-gray-700">
              <Filter size={20} />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        {/* Event Categories */}
        <Tabs defaultValue="All Events" className="mb-12">
          <TabsList className="flex flex-wrap justify-start gap-3 mb-12 h-auto bg-transparent p-0">
            {eventCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white bg-gray-100 text-gray-600 rounded-full px-6 py-2.5 text-sm  transition-all data-[state=active]:shadow-md border border-transparent data-[state=active]:border-teal-600 hover:bg-gray-200"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {eventCategories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents
                  .filter((event) => category === "All Events" || event.category === category)
                  .map((event) => {
                    const imageUrl = typeof event.image === 'object' && event.image?.url ? event.image.url : '/images/placeholder.jpg';
                    
                    return (
                      <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 pt-0 h-full flex flex-col border-0 shadow-lg rounded-2xl group">
                        <div className="relative h-56 shrink-0 overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Badge className="absolute top-4 right-4 bg-[#EAB308] text-blue-950 font-bold shadow-sm">{event.category}</Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight group-hover:text-teal-700 transition-colors">{event.title}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-2 text-gray-500 mt-3 text-sm ">
                              <Calendar className="h-4 w-4 text-teal-600" />
                              <span>{event.date ? format(new Date(event.date), 'MMM d, yyyy') : 'TBD'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 mt-1.5 text-sm ">
                              <MapPin className="h-4 w-4 text-teal-600" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grow pt-2">
                          {/* Simple description rendering - ideally use a RichText renderer */}
                          <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                            {(event.description as any)?.root?.children?.[0]?.children?.[0]?.text || 'No description available.'}
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between mt-auto pt-4 border-t border-gray-50">
                          <Button variant="ghost" className="text-teal-700 hover:text-teal-800 hover:bg-teal-50 px-0 " asChild>
                            <Link href={`/events/${event.id}`} className="flex items-center gap-1">
                                Learn More <ChevronRight size={16} />
                            </Link>
                          </Button>
                          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm ">Register</Button>
                        </CardFooter>
                      </Card>
                    )
                  })}
                  {filteredEvents.filter((event) => category === "All Events" || event.category === category).length === 0 && (
                    <div className="col-span-full text-center py-16 text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="flex flex-col items-center gap-3">
                        <Search size={48} className="text-gray-300" />
                        <p className="text-lg ">No events found in this category.</p>
                        <p className="text-sm text-gray-400">Try adjusting your search or filter.</p>
                      </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default EventsList
