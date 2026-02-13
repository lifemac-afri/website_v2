import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, GraduationCap, Target, Users } from 'lucide-react';
import React from 'react';


const PspResource = () => {
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
                                <h4 className="">Structured Mentorship</h4>
                                <p className="text-muted-foreground">
                                    We pair students with trained mentors who provide guidance, support, and encouragement
                                    through regular one-on-one and group sessions.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-teal-100 p-2 rounded-full text-teal-900">
                                <Target className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="">Goal-Setting Framework</h4>
                                <p className="text-muted-foreground">
                                    We teach students how to set SMART goals and develop action plans to achieve them, building
                                    accountability and self-discipline.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full text-yellow-900">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="">Career Exposure</h4>
                                <p className="text-muted-foreground">
                                    We organize career talks, field trips, and job shadowing opportunities to help students
                                    explore different professions and industries.
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
                                    <CardTitle className="text-4xl font-bold text-blue-900">2,800+</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Students mentored since inception</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-4xl font-bold text-blue-900">85%</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Of participants show improved academic performance
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-4xl font-bold text-blue-900">32</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Schools participating in our programs</p>
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
                                Mentorship Handbook for Teachers
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <Download className="mr-2 h-4 w-4" />
                                PSP Annual Report 2024
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <Download className="mr-2 h-4 w-4" />
                                Goal Setting Worksheet for Students
                            </Button>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default PspResource