"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, Calendar, ChevronRight, Filter, MapPin, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Story, Media } from "@/payload-types"

interface StoriesListProps {
  stories: Story[]
}

const StoriesList = ({ stories }: StoriesListProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  // Helper to map category to slug
  const getSlug = (category: string = "") => {
    return category.toLowerCase().replace(/\s+/g, '-');
  }

  // Filter stories based on search query and active filter
  const filteredStories = stories.filter((story) => {
    const descriptionText = (story.description as any)?.root?.children?.[0]?.children?.[0]?.text || "";
    
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descriptionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (story.category || "").toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = activeFilter === "all" || getSlug(story.category || "") === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <section className="py-20 bg-white md:px-12 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 mb-4">All Impact Stories</h2>
          <p className="max-w-2xl text-gray-600 text-lg">
Browse our full collection of stories or filter by program to explore specific initiatives.

          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search stories..."
              className="pl-12 border-gray-200 h-12 rounded-xl focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 h-12 px-6 rounded-xl border-gray-200 hover:bg-white hover:border-teal-500 hover:text-teal-700 w-full md:w-auto justify-between">
                  <span className="flex items-center gap-2"><Filter className="h-4 w-4" /> Filter by Program</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <DropdownMenuItem className="rounded-lg cursor-pointer py-2" onClick={() => setActiveFilter("all")}>All Programs</DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer py-2" onClick={() => setActiveFilter("nyornuvi")}>Nyornuvi</DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer py-2" onClick={() => setActiveFilter("stemize")}>STEMize</DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer py-2" onClick={() => setActiveFilter("psp")}>
                  PSP
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer py-2" onClick={() => setActiveFilter("ylt")}>
                  YLT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.slice(0, 3).map((story) => {
               const imageUrl = typeof story.image === 'object' && story.image?.url ? story.image.url : '/placeholder.svg';
               const descriptionText = (story.description as any)?.root?.children?.[0]?.children?.[0]?.text || "No description available.";

               return (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 pt-0 border border-gray-100 shadow-sm rounded-2xl group h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt={story.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Link href={`/what-we-do/${getSlug(story.category || 'General')}`}>
                    <Badge
                      className="absolute top-4 right-4 bg-white/90 text-blue-900 hover:bg-white  backdrop-blur-sm shadow-sm"
                    >
                      {story.category || 'General'}
                    </Badge>
                  </Link>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-blue-950 line-clamp-2 group-hover:text-teal-700 transition-colors">{story.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs mt-2 ">
                    <span className="flex items-center text-gray-500">
                      <MapPin className="h-3 w-3 mr-1 text-teal-600" />
                      {story.location || 'Ghana'}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <Calendar className="h-3 w-3 mr-1 text-teal-600" />
                      {story.date ? format(new Date(story.date), 'MMM d, yyyy') : 'N/A'}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{descriptionText}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-5 border-t border-gray-50 mt-auto">
                  <Button variant="link" className="p-0 text-teal-700  hover:text-teal-800 flex items-center gap-1 mt-4" asChild>
                    <Link href={`/impact-stories/${story.slug}`}>
                      Read more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )})}
          </div>
        ) : (
          <div className="text-center py-20 md:px-12 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-600  mb-2">No stories found matching your search criteria.</p>
            <p className="text-gray-400 mb-6">Try adjusting your search terms or filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("all")
              }}
              className="border-teal-600 text-teal-700 hover:bg-teal-50"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-gray-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200">
            1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-gray-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200">
            2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-gray-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200">
            3
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-gray-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StoriesList
