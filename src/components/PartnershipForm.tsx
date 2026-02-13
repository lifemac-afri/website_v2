"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useTransition } from 'react';
import { submitPartnershipApplication } from '@/app/(app)/_actions/submitApplication';

const PartnershipForm = () => {
    const [isPending, startTransition] = useTransition();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            const result = await submitPartnershipApplication(formData);
            if (result.success) {
                setFormSubmitted(true);
            } else {
                setError(result.error || 'Something went wrong. Please try again.');
            }
        });
    }

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Partner Now!</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Kindly fill out the form below and partner with us. We'll get back to you to discuss potential
                    collaboration opportunities.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Card className="bg-[#0B1C3E] rounded-tl-[60px] rounded-br-[60px] shadow-xl border-none relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-10 -mb-10 pointer-events-none"></div>

                    <CardContent className="p-8 md:p-12 relative z-10">
                        {formSubmitted ? (
                            <div className="text-center py-8">
                                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                                <p className="text-white/90 mb-6">
                                    Your partnership inquiry has been submitted successfully. Our team will be in touch with you soon
                                    to discuss potential collaboration opportunities.
                                </p>
                                <Button variant="outline" onClick={() => setFormSubmitted(false)} className="mx-auto text-[#0B1C3E] border-none hover:bg-gray-100">
                                    Submit Another Inquiry
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="organizationName" className="text-white font-medium">Organization Name *</Label>
                                    <Input id="organizationName" name="organizationName" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="contactName" className="text-white font-medium">Contact Person's Name *</Label>
                                        <Input id="contactName" name="contactName" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="position" className="text-white font-medium">Position/Title *</Label>
                                        <Input id="position" name="position" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white font-medium">Email *</Label>
                                        <Input id="email" name="email" type="email" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-white font-medium">Phone Number *</Label>
                                        <Input id="phone" name="phone" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="website" className="text-white font-medium">Organization Website</Label>
                                    <Input id="website" name="website" type="url" placeholder="https://" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="partnershipType" className="text-white font-medium">Partnership Interest *</Label>
                                    <Select name="partnershipType" required>
                                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-xl focus:ring-white/40">
                                            <SelectValue placeholder="Select partnership type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="program">Program Partner</SelectItem>
                                            <SelectItem value="funding">Funding Partner</SelectItem>
                                            <SelectItem value="resource">Resource Partner</SelectItem>
                                            <SelectItem value="strategic">Strategic Partner</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-white font-medium">How would you like to partner with LIFE-MAC Africa? *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Please describe your organization and how you envision partnering with us."
                                        className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl focus:bg-white/20 focus:border-white/40 transition-colors resize-none"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hearAbout" className="text-white font-medium">How did you hear about us?</Label>
                                    <Select name="hearAbout">
                                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-xl focus:ring-white/40">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="website">Website</SelectItem>
                                            <SelectItem value="social">Social Media</SelectItem>
                                            <SelectItem value="event">Event</SelectItem>
                                            <SelectItem value="referral">Referral</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Checkbox id="newsletter" name="newsletter" className="mt-1 border-white/50 data-[state=checked]:bg-[#EAB308] data-[state=checked]:border-[#EAB308] data-[state=checked]:text-white" />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="newsletter" className="text-sm leading-snug text-white/90 font-normal">
                                            I would like to receive newsletters and updates from LIFE-MAC Africa.
                                        </Label>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Checkbox id="terms" required className="mt-1 border-white/50 data-[state=checked]:bg-[#EAB308] data-[state=checked]:border-[#EAB308] data-[state=checked]:text-white" />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="terms" className="text-sm leading-snug text-white/90 font-normal">
                                            I agree to the{" "}
                                            <Link href="#" className="text-[#EAB308] hover:text-white hover:underline font-medium">
                                                terms and conditions
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="#" className="text-[#EAB308] hover:text-white hover:underline font-medium">
                                                privacy policy
                                            </Link>
                                            .
                                        </Label>
                                    </div>
                                </div>

                                {error && <p className="text-red-200 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/30">{error}</p>}

                                <Button type="submit" disabled={isPending} className="w-full bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold h-14 rounded-full shadow-lg text-lg transition-all transform hover:-translate-y-1">
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PartnershipForm