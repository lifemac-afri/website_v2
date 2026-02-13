import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'

const BoardSection = async () => {
  const payload = await getPayload({ config })
  const boardData = await payload.find({
    collection: 'board',
    limit: 100,
    sort: 'order',
  })
  const boardMembers = boardData.docs

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Board of Directors</h2>
          <div className="h-1 w-24 bg-[#EAB308] rounded-full mb-6"></div>
        </div>

        <div className="flex flex-col gap-16 items-center justify-center ">
          {/* Top Row - 4 items */}
          {/* Top Row - 3 items */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-16 w-full max-w-7xl">
            {boardMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group relative w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-4rem)]">
               <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Background SVG - Offset and Blue-ish */}
                 <div className="absolute top-0 right-0 w-full h-full z-0 translate-x-14 translate-y-6 -rotate-[54deg]" >
                    <Image
                      src="/images/board.svg"
                      alt="Background"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Image - Grayscale and Cutout-like */}
                   <div className="relative w-72 h-72 z-10 rounded-full overflow-hidden ">
                    {member.image && typeof member.image === 'object' && 'url' in member.image && (
                      <Image
                        src={member.image.url || ''}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-125 object-top pt-7"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-8 space-y-1 relative z-10">
                  <h3 className="text-xl font-bold text-[#0B1C3E]">{member.name}</h3>
                  <p className="text-teal-500 font-medium text-sm tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 items */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-16 w-full max-w-7xl">
             {boardMembers.slice(3, 5).map((member, index) => (
              <div key={index + 4} className="flex flex-col items-center text-center group relative w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-4rem)]">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Background SVG */}
                  <div className="absolute top-0 right-0 w-full h-full z-0 translate-x-14 translate-y-6 -rotate-[54deg]" >
                    <Image
                      src="/images/board.svg"
                      alt="Background"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Image */}
                  <div className="relative w-72 h-72 z-10 rounded-full overflow-hidden ">
                    {member.image && typeof member.image === 'object' && 'url' in member.image && (
                      <Image
                        src={member.image.url || ''}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-125 object-top pt-7"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-1 relative z-10 mt-8">
                  <h3 className="text-xl font-bold text-[#0B1C3E]">{member.name}</h3>
                  <p className="text-teal-500 font-medium text-sm tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardSection
