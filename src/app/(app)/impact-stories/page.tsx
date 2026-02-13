import StoriesByProgram from '@/components/StoriesByProgram';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, ChevronRight, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload'
import config from '@/payload.config'
import StoriesList from '@/components/StoriesList';
import { format } from 'date-fns';
import ShareStorySection from '@/components/ShareStorySection';

export const dynamic = 'force-dynamic'

export default async function ImpactStoriesPage() {
  const payload = await getPayload({ config })
  const categories = ['PSP', 'STEMize', 'Nyornuvi', 'YLT']

  // Fetch all data in parallel
  const [featuredStoriesData, allStoriesData, impactMetricsData, ...galleryResults] = await Promise.all([
    // Fetch Featured Stories
    payload.find({
      collection: 'stories',
      where: {
        featured: {
          equals: true,
        },
      },
      limit: 3,
      sort: '-date',
    }),
    // Fetch All Stories
    payload.find({
      collection: 'stories',
      limit: 100,
      sort: '-date',
    }),
    // Fetch Impact Metrics
    payload.find({
      collection: 'impact-metrics',
      sort: 'order',
    }),
    // Fetch Gallery Images for Backgrounds
    ...categories.map(category =>
      payload.find({
        collection: 'gallery',
        where: {
          category: {
            equals: category,
          },
        },
        limit: 1,
      })
    )
  ])

  const featuredStories = featuredStoriesData.docs
  const allStories = allStoriesData.docs
  const impactMetrics = impactMetricsData.docs

  const galleryImages: Record<string, string> = {}

  categories.forEach((category, index) => {
    const galleryData = galleryResults[index] as any
    if (galleryData.docs.length > 0 && galleryData.docs[0]?.images && galleryData.docs[0].images.length > 0) {
      const firstImage = galleryData.docs[0].images[0]
      if (typeof firstImage === 'object' && firstImage?.url) {
        galleryImages[category] = firstImage.url
      }
    }
  })

  // Helper to map category to slug
  const getSlug = (category: string = "") => {
    return category.toLowerCase().replace(/\s+/g, '-');
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-[#FDF8F3] to-white">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-[#0B1C3E] to-[#009688] rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-lg rounded-br-lg overflow-hidden min-h-[400px] flex items-center ">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/impact.jpg"
                alt="Impact Stories Background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-20 py-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Impact Stories</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Real stories of transformation and empowerment.
              </p>

            </div>
          </div>

          {/* Overlapping Yellow Card */}
          <div className="relative z-20 -mt-16 mx-auto max-w-4xl px-4">
            <div className="bg-[#EAB308] rounded-2xl shadow-xl p-8 md:p-10 text-center">
              <p className="text-blue-950 text-lg md:text-xl leading-relaxed">
                Discover how our diverse initiatives are making a tangible difference in the lives of individuals and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-8 -mt-10 relative z-30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((stat, index) => {
              // Map index to a category for background image rotation
              const categoryKey = categories[index % categories.length] || 'PSP';
              const bgImage = galleryImages[categoryKey] || "/placeholder.svg";

              return (
                <Card key={stat.id} className="relative overflow-hidden border-none shadow-lg group h-48 flex flex-col items-center justify-center text-center rounded-none shadow-none ">

                  <div className="absolute inset-0 transition-colors"></div>
                  <div className="relative z-10 p-4">
                    <CardTitle className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">{stat.value}</CardTitle>
                    <p className="text-blue-950 text-lg">{stat.title}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      {featuredStories.length > 0 && (
        <section id="featured-stories" className="py-16 md:py-24 bg-gray-50 px-4 md:px-8 relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50"></div>
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-50"></div>

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-4 px-4 py-1.5 text-sm rounded-full">Inspiring Change</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-950 mb-4">Featured Stories</h2>
              <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
                Discover how our programs are making a real difference in the lives of individuals and communities across Africa.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredStories.map((story) => {
                const imageUrl = typeof story.image === 'object' && story.image?.url ? story.image.url : '/placeholder.svg';
                const descriptionText = (story.description as any)?.root?.children?.[0]?.children?.[0]?.text || "No description available.";

                return (
                  <Card key={story.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 pt-0 border-none shadow-lg rounded-2xl group flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#EAB308] text-blue-950 font-bold shadow-sm">Featured</Badge>
                      </div>
                      <Link href={`/what-we-do/${getSlug(story.category || 'General')}`}>
                        <Badge
                          className="absolute top-4 right-4 bg-white/90 text-blue-900 hover:bg-white backdrop-blur-sm"
                        >
                          {story.category || 'General'}
                        </Badge>
                      </Link>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-blue-950 line-clamp-2 group-hover:text-teal-700 transition-colors">{story.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm mt-2 text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-teal-600" />
                          {story.location || 'Ghana'}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-teal-600" />
                          {story.date ? format(new Date(story.date), 'MMM d, yyyy') : 'N/A'}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="grow">
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">{descriptionText}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6">
                      <Button variant="link" className="p-0 text-teal-700 hover:text-teal-800 flex items-center gap-1 group/btn">
                        Read full story <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Stories with Search and Filter */}
      <StoriesList stories={allStories} />

      {/* Share Your Story */}
      <ShareStorySection />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F3] to-white text-blue-950 px-4 md:px-8 relative pb-20">
        {/* Background Map */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <Image
            src="/images/world-map.png"
            alt="World Map"
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="container mx-auto text-center relative z-10 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Impact Story</h2>
          <p className="max-w-2xl mx-auto mb-10 text-gray-600 text-lg leading-relaxed">
            Join us in creating more success stories and making a lasting difference in communities across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold h-14 px-8 rounded-full shadow-lg transition-transform hover:scale-105" asChild>
              <Link href="/get-involved/volunteer">Volunteer With Us</Link>
            </Button>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-14 px-8 rounded-full shadow-lg transition-transform hover:scale-105" asChild>
              <Link href="/donate">Donate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-950/30 text-blue-950 hover:bg-blue-950/5 h-14 px-8 rounded-full" asChild>
              <Link href="/get-involved/partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
