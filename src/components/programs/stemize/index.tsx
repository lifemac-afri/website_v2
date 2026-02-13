import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Download, Share2, Users } from 'lucide-react';
import React from 'react';

const StemizeResource = () => {
  return (
    <div className="mt-12">
    <Tabs defaultValue="approach" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="approach">Our Approach</TabsTrigger>
        <TabsTrigger value="impact">Impact</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>
      <TabsContent value="approach" className="mt-4 space-y-4">
        <h3 className="text-xl ">How We Work</h3>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-full text-blue-900">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Hands-on Learning</h4>
              <p className="text-muted-foreground">
                We provide practical, experiential learning opportunities that make STEM concepts tangible
                and exciting.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-teal-100 p-2 rounded-full text-teal-900">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Teacher Training</h4>
              <p className="text-muted-foreground">
                We equip teachers with innovative teaching methodologies and resources to effectively
                deliver STEM education.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-900">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Community Engagement</h4>
              <p className="text-muted-foreground">
                We involve parents and community leaders to create a supportive ecosystem for STEM learning
                and career development.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="impact" className="mt-4">
        <div className="space-y-4">
          <h3 className="text-xl ">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">3,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Students reached with STEM education</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">42</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Schools participating in our programs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">85%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Of students report increased interest in STEM careers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="resources" className="mt-4">
        <div className="space-y-4">
          <h3 className="text-xl ">Helpful Resources</h3>
          <div className="grid gap-2">
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              STEM Curriculum Guide for Teachers
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              STEMize Project Annual Report 2024
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              DIY Science Experiments for Home
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>)
}

export default StemizeResource