import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, ChevronRight, Facebook, Linkedin, MapPin, Twitter } from "lucide-react"
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import RichText from '@/components/RichText'
import ShareButtons from '@/components/ShareButtons'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const stories = await payload.find({
    collection: 'stories',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const story = stories.docs[0]

  if (!story) {
    return {
      title: 'Story Not Found',
    }
  }

  const title = `${story.title} | Impact Stories`
  const description = (story.description as any)?.root?.children?.[0]?.children?.[0]?.text || `Read the inspiring story of ${story.title}.`
  const imageUrl = (story.image && typeof story.image === 'object' && 'url' in story.image ? story.image.url : null) ?? '/images/og-default.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: story.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ImpactStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const stories = await payload.find({
    collection: 'stories',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const story = stories.docs[0]

  if (!story) {
    notFound()
  }

  // Fetch related stories
  const relatedStories = await payload.find({
    collection: 'stories',
    where: {
      slug: {
        not_equals: slug,
      },
      category: {
        equals: story.category,
      },
    },
    limit: 3,
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    image: story.image && typeof story.image === 'object' && 'url' in story.image && story.image.url ? [story.image.url] : [],
    datePublished: story.date,
    author: {
      '@type': 'Organization',
      name: 'LIFE-MAC Africa',
    },
    description: (story.description as any)?.root?.children?.[0]?.children?.[0]?.text || '',
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="container pt-8 pb-4 mx-auto">
        <Link
          href="/impact-stories"
          className="flex items-center text-gray-500 hover:text-[#0B1C3E] transition-colors w-fit font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Impact Stories
        </Link>
      </div>


      <article className="container mx-auto pb-24 rounded-lg">
        {/* Header */}
        <header className="bg-white rounded-t-[2rem] pt-32 pb-20 px-4 md:px-8 border-b border-gray-50 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B1C3E] mb-6 leading-tight">
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm md:text-base">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-[#EAB308]" />
              <span>
                {new Date(story.date || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            {story.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#EAB308]" />
                <span>{story.location}</span>
              </div>
            )}
            {/* Social Share */}
            <ShareButtons title={story.title} slug={slug} />
          </div>
        </header>

        {/* Featured Image */}
        <div className="bg-white px-4 md:px-8 pb-8">
           <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
            {story.image && typeof story.image === 'object' && 'url' in story.image && story.image.url ? (
               <Image 
                  src={story.image.url} 
                  alt={story.title} 
                  fill 
                  className="object-cover" 
                  priority 
               />
            ) : (
              <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                <span className="text-lg">No Image Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white lg:rounded-b-[2rem] px-4 py-16 md:px-8 md:py-24 shadow-sm">
           <div className="prose prose-lg max-w-none prose-headings:text-[#0B1C3E] prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-slate-600 prose-p:leading-loose prose-p:mb-6 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-blockquote:border-l-4 prose-blockquote:border-[#EAB308] prose-blockquote:bg-yellow-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-8 prose-img:rounded-2xl prose-img:my-8 prose-strong:text-[#0B1C3E] prose-li:text-slate-600 prose-li:mb-2">
              {/* @ts-ignore */}
              <RichText content={story.description} />
           </div>
        </div>

        {/* Call to Action - Integrated */}
        <div className='px-4 md:px-8 w-full bg-white'>

        <div className="mt-12 bg-[#0B1C3E] rounded-[1rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-lg mb-20">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image src="/images/africa.svg" alt="Pattern" fill className="object-cover invert" />
           </div>
           <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Inspired by this story?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join us in creating more success stories like this one. Your support makes a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold h-12 px-8 rounded-full text-lg">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 rounded-full text-lg">
                  <Link href="/get-involved/volunteer">Get Involved</Link>
                </Button>
              </div>
           </div>
        </div>
        </div>

        {/* Related Stories */}
        {relatedStories.docs.length > 0 && (
          <div className="mt-16 mb-20 px-4 md:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C3E]">More Impact Stories</h2>
              <Link href="/impact-stories" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedStories.docs.map((relatedStory) => (
                <Link key={relatedStory.id} href={`/impact-stories/${relatedStory.slug}`} className="group block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                    {relatedStory.image && typeof relatedStory.image === 'object' && 'url' in relatedStory.image && relatedStory.image.url ? (
                      <Image
                        src={relatedStory.image.url}
                        alt={relatedStory.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100" />
                    )}
                    <Badge className="absolute top-2 right-2 bg-white/90 text-[#0B1C3E] hover:bg-white backdrop-blur-sm border-none text-xs">
                      {relatedStory.category}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[#0B1C3E] group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                    {relatedStory.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1 text-[#EAB308]" />
                    {new Date(relatedStory.date || '').toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
