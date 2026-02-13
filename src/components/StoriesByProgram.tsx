"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { colorMap as rawColorMap, programs } from '@/data';

type ColorKey = 'blue' | 'teal' | 'yellow' | 'purple';
const colorMap = rawColorMap as Record<string, { bg: string; text: string; button: string; border: string; hover: string }>;

export default function StoriesByProgram() {
 
  const [activeProgram, setActiveProgram] = useState("nyornuvi");


  const toggleProgram = (programId:string) => {
    if (activeProgram === programId) {
      setActiveProgram("");
    } else {
      setActiveProgram(programId);
    }
  };

  return (
    <section className="py-16 md:px-12 px-4">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Stories by Program</h2>
          <div className="h-1 w-24 bg-teal-700 mt-2 mb-6"></div>
          <p className="max-w-3xl text-muted-foreground text-lg">
            Explore impact stories from each of our key programs.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`border rounded-lg overflow-hidden ${colorMap[program.color]?.border || 'border-gray-200'}`}
            >
              {/* Program Header - Always visible */}
              <div 
                className={`p-4 flex justify-between items-center cursor-pointer ${
                  activeProgram === program.id ? (colorMap[program.color]?.bg || 'bg-gray-100') : 'bg-white'
                } ${colorMap[program.color]?.hover || ''}`}
                onClick={() => toggleProgram(program.id)}
              >
                <h3 className="text-xl ">{program.title.split(" ")[0]}</h3>
                <div>
                  {activeProgram === program.id ? 
                    <ChevronUp className="h-5 w-5" /> : 
                    <ChevronDown className="h-5 w-5" />
                  }
                </div>
              </div>
              
              {/* Program Content - Visible when active */}
              {activeProgram === program.id && (
                <div className="p-4">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64">
                      <Image
                        src="https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe"
                        alt={`${program.id} program impact`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <div className="space-y-4 mb-6">
                        {program.achievements.map((achievement: { title: string; description: string }, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className={`${colorMap[program.color]?.bg || 'bg-gray-100'} p-2 rounded-full ${colorMap[program.color]?.text || 'text-gray-800'} mr-3`}>
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="">{achievement.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className={`${colorMap[program.color]?.button || 'bg-blue-600'} text-white`}>
                        <Link href={program.buttonHref}>{program.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}