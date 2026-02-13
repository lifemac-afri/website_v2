import React from 'react'
import Image from 'next/image'
import type { ImpactMetric } from '@/payload-types'

interface OurImpactProps {
  metrics: ImpactMetric[]
}

const OurImpact = ({ metrics }: OurImpactProps) => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-12">
        <div className="relative w-full rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/impact-image.png"
              alt="Our Impact Background"
              fill
              className="object-cover object-top"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 w-full py-12 px-6 md:px-12 text-center text-white">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
              <div className="h-1 w-24 bg-white mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric) => (
                <div key={metric.id} className="flex flex-col items-center">
                  <span className="text-5xl md:text-6xl font-bold mb-2">{metric.value}</span>
                  <p className="text-sm md:text-base  max-w-[150px]">{metric.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurImpact