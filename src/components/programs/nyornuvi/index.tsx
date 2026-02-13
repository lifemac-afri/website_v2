import React from 'react'
import { ArrowRight, Calendar, Download, MapPin, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const NyornuviResource = () => {
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
              <h4 className="">Education & Awareness</h4>
              <p className="text-muted-foreground">
                We conduct workshops in schools and communities to educate girls about menstrual hygiene and
                reproductive health.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-teal-100 p-2 rounded-full text-teal-900">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Community Engagement</h4>
              <p className="text-muted-foreground">
                We involve parents, teachers, and boys in conversations about menstruation to reduce stigma
                and create supportive environments.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-900">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Resource Distribution</h4>
              <p className="text-muted-foreground">
                We provide free sanitary products to girls who cannot afford them, ensuring they don't miss
                school during their periods.
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
                <CardTitle className="text-4xl font-bold text-teal-700">2,500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Girls reached with education and resources</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">35%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Increase in school attendance during menstruation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Communities engaged across Ghana</p>
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
              Menstrual Hygiene Management Guide
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              Nyornuvi Project Annual Report 2024
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              Educational Materials for Teachers
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default NyornuviResource