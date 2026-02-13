import Carousal from '@/components/HeroCarousal';
import OurImpact from '@/components/OurImpact';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { carouselData } from '@/data';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import JourneySection from '@/components/JourneySection';
import InitiativesSection from '@/components/InitiativesSection';
import { getPayload } from 'payload'
import config from '@/payload.config'


export default async function Home() {
  const payload = await getPayload({ config })
  const testimonialsData = await payload.find({
    collection: 'testimonials',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 3,
    sort: 'createdAt',
  })
  const testimonials = testimonialsData.docs

  const impactMetricsData = await payload.find({
    collection: 'impact-metrics',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'order',
  })
  const impactMetrics = impactMetricsData.docs

	return (
		<main className="">

			{/* Hero Carousel Section */}
			<Carousal />

			{/* Journey and Initiatives Wrapper with Background Map */}
			<div className="relative overflow-hidden">
				<div className="absolute left-0 top-1/2 -translate-y-1/2 h-[90%] w-full md:w-2/3 lg:w-1/2 z-0 pointer-events-none">
					<div className="relative w-full h-full opacity-3">
						<Image
							src="/images/africa.svg"
							alt="Africa Background"
							fill
							className="object-contain object-left invert"
						/>
					</div>
				</div>
				
				<div className="relative z-10 bg-transparent">
					{/* Journey Section */}
					<JourneySection />

					{/* Initiatives Section */}
					<InitiativesSection />

					{/* Our Impacts Section */}
					<OurImpact metrics={impactMetrics} />
				</div>
			</div>

			{/* Testimonials and Get Involved Wrapper with Background Map */}
			<div className="relative">
				<div className="absolute inset-0 z-0 pointer-events-none">
					<div className="relative w-full h-full opacity-60">
						<Image
							src="/images/africa-contour.png"
							alt="Africa Contour Background"
							fill
							className="object-contain object-center scale-130 mt-24 -ml-32"
						/>
					</div>
				</div>

				{/* Testimonials Section */}
				<Testimonials testimonials={testimonials} />

				{/* Get Involved Section */}
				<section className="relative py-16 md:py-24 mt-24">
					<div className="absolute inset-0">
						<Image src="https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe" alt="People collaborating" fill className="object-cover" />
						<div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-700/80"></div>
					</div>
					<div className="container mx-auto px-4 relative">
						<div className="max-w-4xl mx-auto text-center text-white">
							<h2 className="mb-4 text-4xl font-bold">Get Involved</h2>
							<p className="mb-8 text-xl">Collaborate For A Change</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/get-involved/volunteer"
								className="px-8 py-3 font-bold text-white bg-[#EAB308] hover:bg-[#CA8A04] rounded-full uppercase tracking-wide transition-colors"
							>
								Volunteer Now
							</Link>
							<Link
								href="/get-involved/partner-with-us"
								className="px-8 py-3 font-bold text-white bg-transparent border-2 border-white hover:bg-white/10 rounded-full uppercase tracking-wide transition-colors"
							>
								Partner With Us
							</Link>
							<Link
								href="/donate"
								className="px-8 py-3 font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-full uppercase tracking-wide transition-colors"
							>
								Donate Today
							</Link>
						</div>
						</div>
					</div>
				</section>
			</div>
			<Partners />

			{/* Our Partners Section */}


		</main>
	)
}
