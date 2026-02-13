import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from "next/image"
import { Linkedin, Mail, Twitter, Crown, Users, Rocket, Handshake, Scale, UserCog, BicepsFlexed, BookOpen, Laptop, HeartPulse, Briefcase, Sprout, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'
import { coreValues, focalAreas } from "@/data"
import OurImpact from "@/components/OurImpact"
import TeamCarousel from "@/components/TeamCarousel"
import BoardSection from "@/components/BoardSection"



const WhoWeAre = async () => {
  const payload = await getPayload({ config })
  const teamData = await payload.find({
    collection: 'team',
    limit: 100,
    sort: 'createdAt',
  })
  const team = teamData.docs

  return (
    <main className="min-h-screen bg-background">
   

    {/* Hero Section */}
    <section className="relative pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-r from-[#0B1C3E] to-[#009688] rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-lg rounded-br-lg overflow-hidden min-h-[400px] flex items-center ">
          {/* Background Image */}
          <div className="absolute right-40 top-0 bottom-0 w-1/2 md:w-1/3 opacity-40 md:opacity-100">
            <Image
              src="/images/africa.png"
              alt="Africa Map"
              fill
              className="object-contain object-right scale-150 pr-20"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-20 py-12 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed it is the only thing that ever has" - Margaret Mead
            </p>
          </div>
        </div>

        {/* Overlapping Yellow Card */}
        <div className="relative z-20 -mt-16 mx-auto max-w-4xl px-4">
          <div className="bg-[#EAB308] rounded-2xl shadow-xl p-8 md:p-10 text-center">
            <p className="text-white text-lg md:text-xl leading-relaxed">
         We are a social enterprise committed to empowering individuals and communities, with a priority on marginalized and vulnerable populations.
            </p>
          </div>
        </div>
      </div>
    </section>



    {/* Mission and Vision Section */}
    <section className="relative py-16 md:py-24">
      {/* Background Africa Map */}
      <div className="absolute inset-0 pointer-events-none opacity-2">
         <Image 
            src="/images/africa.svg" 
            alt="Africa Map Background" 
            fill 
            className="object-contain object-[45%_center] scale-125 invert"
         />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 space-y-32">
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Fostering futures where our collective efforts drive global well-being and prosperity.
              </p>
              <div className="h-2 w-full bg-[#009688] mt-8 rounded-full"></div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Empowering communities through diverse initiatives for sustainable development.
              </p>
              <div className="h-2 w-full bg-[#EAB308] mt-8 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Core Values Section */}
    <section className="relative py-16 md:py-24 bg-white">
      {/* Background Africa Lone */}
      

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-6">Core Values</h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Row - 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Leadership",
                description: "We nurture strong leaders who inspire action and guide their communities toward positive change.",
                icon: Crown
              },
              {
                title: "Inclusivity",
                description: "We create spaces where every voice is heard and valued. We ensure our work benefits everyone, regardless of background.",
                icon: Users
              },
              {
                title: "Fortitude",
                description: "We embrace resilience. We persevere through every challenge to ensure our impact is sustainable and scalable.",
                icon: BicepsFlexed // Using BicepsFlexed as Biceps was deprecated
              },
              {
                title: "Excellence",
                description: "We hold ourselves to the highest standards. We don't just run programs; we deliver meaningful, measurable results every time.",
                icon: Rocket
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-slate-50 p-8 hover:shadow-lg transition-shadow ${
                  index % 2 === 0 
                    ? 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none' 
                    : 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none'
                }`}
              >
                <div className="mb-4">
                  <value.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1C3E] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:w-3/4 lg:mx-auto">
             {[
                {
                title: "Mentorship",
                description: "We actively guide the next generation by providing the tools, insight, and opportunities they need to grow into leaders.",
                icon: UserCog
              },
              {
                title: "Advocacy",
                description: "We stand for equity and justice. We use our platform to champion policies and actions that uplift the underserved",
                icon: Scale
              },
              {
                title: "Collaboration",
                description: "We amplify our impact through partnership. We work together to achieve common goals that no one can reach alone.",
                icon: Handshake
              }
            
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-slate-50 p-8 hover:shadow-lg transition-shadow ${
                  index % 2 === 0 
                    ? 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none' 
                    : 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none'
                }`}
              >
                <div className="mb-4">
                  <value.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1C3E] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Focal Areas Section */}
    <section className="relative py-16 md:py-24 bg-[#0B1C3E] overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
         <Image 
            src="/images/africa-contour.png" 
            alt="Background Pattern" 
            fill 
            className="object-cover object-center scale-100"
         />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Focal Areas</h2>
          <div className="h-1 w-24 bg-[#EAB308] rounded-full mb-6"></div>
          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            At LIFE-MAC Africa, our work is anchored in Seven Pillars of Impact. We address critical challenges across these sectors to drive positive change and foster sustainable development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Education",
              icon: BookOpen,
              description: "Promoting quality education and lifelong learning opportunities for all.",
            },
            {
              title: "Gender Equality and Social Inclusion",
              icon: Scale,
              description: "Advancing gender equality and empowering women and girls.",
            },
            {
              title: "Technology",
              icon: Laptop,
              description: "Bridging the digital divide and fostering innovation through technology.",
            },
            {
              title: "Health & Sanitation",
              icon: HeartPulse,
              description: "Improving access to healthcare and promoting good sanitation practices.",
            },
            {
              title: "Decent Work",
              icon: Briefcase,
              description: "Creating sustainable employment opportunities and economic growth.",
            },
            {
              title: "Agriculture and Climate Action",
              icon: Sprout,
              description: "Supporting sustainable agriculture and environmental conservation.",
            },
            {
              title: "Civic Participation",
              icon: Home,
              description: "Building resilient communities through participatory approaches.",
            },
          ].map((area, index) => (
            <div
              key={index}
              className={`bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(25%-2rem)] max-w-sm flex flex-col items-center text-center ${
                  index % 2 === 0 
                    ? 'rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none' 
                    : 'rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-none rounded-br-none'
                }`}
            >
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <area.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1C3E] mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Board of Directors Section */}
    {/* <BoardSection /> */}

    {/* Team Section */}
    <section className="relative py-16 md:py-24 overflow-hidden bg-white pb-28">
       {/* Background Map */}
       <div className="absolute inset-0 pointer-events-none opacity-40">
         <Image 
            src="/images/africa-contour.png" 
            alt="Background Pattern" 
            fill 
            className="object-cover object-center"
         />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Meet Our Team</h2>
          <div className="h-1 w-24 bg-[#EAB308] rounded-full mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            Meet the dedicated professionals behind LIFE-MAC Africa's mission and vision.
          </p>
        </div>

        <TeamCarousel team={team} />
      </div>
    </section>

  
  </main>
  )
}

export default WhoWeAre