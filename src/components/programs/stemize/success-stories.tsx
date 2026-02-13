import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { successStoriesSTEMIZE } from '@/data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const StemizeSuccessStories = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
      <div className="grid gap-6">
        {successStoriesSTEMIZE.map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src={story.image }
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{story.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default StemizeSuccessStories