import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  ChevronLeft,
  CalendarCheck,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for individual event
const events = {
  "youth-leadership-summit-2023": {
    title: "Youth Leadership Summit 2023",
    date: "November 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Accra International Conference Center",
    address: "Castle Road, Accra, Ghana",
    category: "Leadership",
    image: "/placeholder.svg?height=600&width=1200",
    registrationDeadline: "November 10, 2023",
    capacity: 500,
    spotsLeft: 127,
    price: "Free",
    organizer: "LIFE-MAC Africa",
    sponsors: ["Ghana Education Service", "Ministry of Youth and Sports", "UNICEF Ghana"],
    description:
      "Join us for our annual Youth Leadership Summit where young leaders from across Africa gather to share ideas, learn from experts, and build networks that will shape the future of our continent.",
    longDescription: `
      <p>The Youth Leadership Summit 2023 is LIFE-MAC Africa's flagship event bringing together 500 young leaders from across the continent for a day of inspiration, learning, and networking.</p>
      
      <p>This year's theme, "Building Resilient Leaders for Africa's Future," focuses on equipping young people with the skills, mindset, and connections needed to lead through challenging times and create sustainable impact in their communities.</p>
      
      <h3>What to Expect:</h3>
      <ul>
        <li>Keynote speeches from renowned African leaders and changemakers</li>
        <li>Panel discussions on pressing issues facing African youth</li>
        <li>Interactive workshops on leadership skills, project management, and community organizing</li>
        <li>Networking sessions with peers, mentors, and potential collaborators</li>
        <li>Exhibition showcasing youth-led initiatives and organizations</li>
        <li>Opportunities to join LIFE-MAC Africa's programs and networks</li>
      </ul>
      
      <h3>Who Should Attend:</h3>
      <ul>
        <li>Young leaders aged 18-35</li>
        <li>Student leaders and activists</li>
        <li>Young professionals interested in social impact</li>
        <li>Representatives from youth-focused organizations</li>
        <li>Educators and mentors working with youth</li>
      </ul>
      
      <p>Attendance is free, but registration is required as spaces are limited. Lunch and refreshments will be provided.</p>
    `,
    schedule: [
      {
        time: "8:00 AM - 9:00 AM",
        title: "Registration and Networking Breakfast",
      },
      {
        time: "9:00 AM - 9:30 AM",
        title: "Welcome Address",
        speaker: "Dr. Kofi Mensah, Executive Director, LIFE-MAC Africa",
      },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Keynote: Leadership in Times of Crisis",
        speaker: "Hon. Abena Osei-Asare, Deputy Minister of Finance",
      },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Coffee Break and Networking",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Panel Discussion: Youth Leadership in Africa - Challenges and Opportunities",
        speakers: [
          "Dr. Yaa Asantewaa, Academic Director, University of Ghana",
          "Mr. Emmanuel Kwarteng, CEO, Youth Empowerment Foundation",
          "Ms. Fatima Alhassan, Youth Activist",
        ],
      },
      {
        time: "12:30 PM - 1:30 PM",
        title: "Lunch Break",
      },
      {
        time: "1:30 PM - 3:00 PM",
        title: "Breakout Sessions",
        sessions: [
          "Leadership Skills for Community Impact",
          "Digital Tools for Youth Advocacy",
          "Fundraising and Resource Mobilization",
          "Building Cross-Cultural Collaborations",
        ],
      },
      {
        time: "3:00 PM - 3:30 PM",
        title: "Afternoon Refreshments",
      },
      {
        time: "3:30 PM - 4:30 PM",
        title: "Keynote: The Future of Youth Leadership in Africa",
        speaker: "Prof. Nana Ama Browne, International Leadership Expert",
      },
      {
        time: "4:30 PM - 5:00 PM",
        title: "Closing Remarks and Call to Action",
        speaker: "Ms. Akosua Frimpong, Programs Director, LIFE-MAC Africa",
      },
    ],
    faqs: [
      {
        question: "Is there a registration fee?",
        answer: "No, the summit is free to attend, but registration is required as spaces are limited.",
      },
      {
        question: "Will meals be provided?",
        answer: "Yes, lunch and refreshments will be provided throughout the day.",
      },
      {
        question: "Is there an age limit for participants?",
        answer:
          "The summit is primarily designed for young leaders aged 18-35, but we welcome participants of all ages who are passionate about youth leadership.",
      },
      {
        question: "Will I receive a certificate of participation?",
        answer: "Yes, all participants will receive a digital certificate of participation.",
      },
      {
        question: "Can I attend virtually?",
        answer:
          "This year's summit is primarily an in-person event, but key sessions will be livestreamed on our social media platforms.",
      },
    ],
    relatedEvents: [
      {
        id: "stemize-workshop-series",
        title: "STEMize Workshop Series",
        date: "November 22, 2023",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "paradigm-shift-conference",
        title: "Paradigm Shift Conference",
        date: "December 12, 2023",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "youth-learning-together-workshop",
        title: "Youth Learning Together Workshop",
        date: "January 10, 2024",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  // Additional events would be defined here
}

export const dynamic = 'force-dynamic'

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events[slug as keyof typeof events]

  // Fallback for events not in our mock data
  if (!event) {
    return (
      <main className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white md:px-12 px-4 overflow-hidden rounded-bl-[60px] md:rounded-bl-[80px]">
        {/* Background Map */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/world-map.png"
            alt="World Map"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="p-0 mb-8">
            <Link
              href="/events"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Events
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-[#EAB308] text-blue-950 hover:bg-[#CA8A04] px-4 py-1 text-sm font-bold rounded-full">
                {event.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{event.title}</h1>

            <div className="flex flex-wrap gap-6 text-lg text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#EAB308]" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#EAB308]" />
                <span>{event.time}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#EAB308]" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#EAB308]" />
                <span>{event.spotsLeft} spots left</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold h-14 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-14 px-8 rounded-full">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Add to Calendar
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-14 px-8 rounded-full">
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-16 md:px-12 px-4 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <div
                className="prose prose-lg max-w-none text-gray-600 prose-headings:text-blue-950 prose-a:text-teal-600"
                dangerouslySetInnerHTML={{ __html: event.longDescription }}
              ></div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Event Sponsors</h3>
                <div className="flex flex-wrap gap-4">
                  {event.sponsors.map((sponsor, index) => (
                    <div key={index} className="bg-white border border-gray-100 shadow-sm rounded-xl px-6 py-3 text-gray-600  flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      {sponsor}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              <Card className="border-none shadow-xl bg-white rounded-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-6">Event Details</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Date</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Time</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                        <p className="text-sm text-gray-500 mt-1">{event.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Capacity</p>
                        <p className="text-gray-600">
                          {event.capacity} attendees <span className="text-teal-600 ">({event.spotsLeft} spots left)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <CalendarCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Registration Deadline</p>
                        <p className="text-gray-600">{event.registrationDeadline}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Price</p>
                        <p className="text-gray-600">{event.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none shadow-md">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Organizer Card */}
              <Card className="border-none shadow-lg bg-blue-50/50 rounded-2xl p-6">
                <h4 className="font-bold text-blue-950 mb-2">Organized by</h4>
                <p className="text-lg  text-teal-700">{event.organizer}</p>
                <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">Contact Organizer &rarr;</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-[#0B1C3E] text-white md:px-12 px-4 relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <Image
            src="/images/world-map.png"
            alt="World Map"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join us at {event.title}?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of an inspiring and transformative event. Register now to secure your
            spot!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#EAB308] text-blue-950 hover:bg-[#CA8A04] font-bold h-14 px-10 rounded-full shadow-xl transition-transform hover:scale-105">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-10 rounded-full">
              Contact Event Organizer
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
