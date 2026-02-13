import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function EventPageLoading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative bg-blue-900 text-white overflow-hidden rounded-bl-[60px] md:rounded-bl-[80px]">
        <Skeleton className="w-full h-[400px] md:h-[500px] opacity-20" />
        <div className="absolute inset-0 container mx-auto px-4 py-16 md:py-24 relative z-20">
          <Link
            href="/events"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Events
          </Link>
          <Skeleton className="h-8 w-32 rounded-full mb-6 bg-white/20" />
          <Skeleton className="h-16 w-3/4 mb-6 bg-white/20" />

          <div className="flex flex-wrap gap-6 mb-8">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full bg-white/20" />
                  <Skeleton className="h-5 w-32 bg-white/20" />
                </div>
              ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-14 w-40 rounded-full bg-white/20" />
            <Skeleton className="h-14 w-40 rounded-full bg-white/10" />
            <Skeleton className="h-14 w-40 rounded-full bg-white/10" />
          </div>
        </div>
      </section>

      {/* Event Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Skeleton */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-4 mb-12">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              <div className="space-y-4 mb-12">
                 <Skeleton className="h-8 w-1/2 mb-4" />
                 {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <Skeleton className="h-8 w-48 mb-6" />
                <div className="flex flex-wrap gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-10 w-40 rounded-xl" />
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="border-none shadow-xl bg-white rounded-2xl overflow-hidden relative p-8">
                <Skeleton className="h-8 w-48 mb-8" />

                <div className="space-y-6">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Skeleton className="h-12 w-12 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-24 mb-2" />
                          <Skeleton className="h-5 w-full" />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8">
                  <Skeleton className="h-12 w-full rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none" />
                </div>
              </div>
              
               <div className="border-none shadow-lg bg-gray-50 rounded-2xl p-6">
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-40" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Skeleton */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-10 w-2/3 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2 bg-white/10" />
          <Skeleton className="h-6 w-5/6 max-w-2xl mx-auto mb-10 bg-white/10" />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Skeleton className="h-14 w-48 rounded-full bg-white/20" />
            <Skeleton className="h-14 w-48 rounded-full bg-white/10" />
          </div>
        </div>
      </section>
    </main>
  )
}
