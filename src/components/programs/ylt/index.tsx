import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Globe, Share2, Users } from 'lucide-react';

const YltResource = () => {
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
              <h4 className="">Peer-to-Peer Learning</h4>
              <p className="text-muted-foreground">
                We facilitate sessions where participants learn from each other, sharing their expertise and
                experiences in a collaborative environment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-teal-100 p-2 rounded-full text-teal-900">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Hybrid Model</h4>
              <p className="text-muted-foreground">
                We offer both in-person and online sessions to ensure accessibility and flexibility for all
                participants, regardless of their location.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-yellow-100 p-2 rounded-full text-yellow-900">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="">Industry Partnerships</h4>
              <p className="text-muted-foreground">
                We collaborate with industry leaders to ensure our content is relevant and aligned with
                current market demands and trends.
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
                <CardTitle className="text-4xl font-bold text-teal-700">1,500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Young people trained since inception</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">78%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Of participants report improved career prospects
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-teal-700">120+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Workshops conducted</p>
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
              Digital Skills Toolkit
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              Career Transition Guide
            </Button>
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              Personal Branding Workbook
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default YltResource