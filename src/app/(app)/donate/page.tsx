"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { CheckCircle2, Heart, DollarSign, CreditCard, Lock, Calendar, Gift, Building, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

// Dynamically import PaystackButton with SSR disabled to avoid 'window is not defined' error
const PaystackButton = dynamic(() => import('@/components/PaystackButton'), { 
    ssr: false,
    loading: () => (
        <Button 
            disabled 
            className="w-full h-14 text-lg font-bold bg-[#EAB308] hover:bg-[#CA8A04] text-white rounded-full shadow-lg mt-4 opacity-50 cursor-not-allowed"
        >
            Loading Payment...
        </Button>
    )
})

export default function DonatePage() {
  const [amount, setAmount] = useState("100")
  const [customAmount, setCustomAmount] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const finalAmount = amount === 'custom' ? (customAmount ? Number(customAmount) : 0) : Number(amount);

  const handleSuccess = (reference: any) => {
    console.log(reference);
    alert("Thank you for your donation! Reference: " + reference.reference);
  };

  const handleClose = () => {
    console.log('Payment closed');
  }

  const isFormValid = email && finalAmount > 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background Map */}
        <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none">
            <Image
            src="/images/africa.svg"
            alt="Africa Map"
            width={800}
            height={800}
            className="object-contain translate-x-1/4 -translate-y-1/4"
            />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0B1C3E]">Your Donation Changes Lives</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every donation empowers individuals and strengthens communities through education, leadership development, and sustainable initiatives across Ghana.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 pb-20">
        <div className="container mx-auto pb-20">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Donation Form */}
            <div className="lg:w-2/3">
               <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 border border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-6">Make a Secure Donation</h2>
                  
                  <div className="space-y-8">
                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold text-[#0B1C3E]">Select Amount (GHS)</Label>
                      <RadioGroup 
                        value={amount} 
                        onValueChange={(val) => {
                          setAmount(val)
                          setCustomAmount("")
                        }} 
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        {["100", "500", "1000", "2000"].map((val) => (
                          <div key={val}>
                            <RadioGroupItem value={val} id={`amount-${val}`} className="sr-only peer" />
                            <Label
                              htmlFor={`amount-${val}`}
                              className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-gray-100 bg-white hover:border-[#0B1C3E] hover:bg-gray-50 peer-data-[state=checked]:border-[#0B1C3E] peer-data-[state=checked]:bg-[#0B1C3E] peer-data-[state=checked]:text-white cursor-pointer transition-all shadow-sm"
                            >
                              <span className="text-2xl font-bold">{val}</span>
                              <span className="text-xs opacity-80">GHS</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {/* Custom Amount */}
                      <div className="mt-4">
                         <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-500 mb-2 block">Or enter a custom amount</Label>
                         <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">GHS</span>
                            <Input 
                              id="custom-amount"
                              type="number" 
                              placeholder="Enter amount" 
                              className="pl-14 h-14 rounded-xl border-gray-200 text-lg bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688] transition-all"
                              value={customAmount}
                              onChange={(e) => {
                                setCustomAmount(e.target.value)
                                setAmount("custom")
                              }}
                              onFocus={() => setAmount("custom")}
                            />
                         </div>
                      </div>
                    </div>

                    {/* Donor Details */}
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B1C3E]">Your Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input 
                            id="first-name" 
                            placeholder="John" 
                            className="h-14 rounded-2xl px-6 bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688]" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input 
                            id="last-name" 
                            placeholder="Doe" 
                            className="h-14 rounded-2xl px-6 bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688]"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          className="h-14 rounded-2xl px-6 bg-blue-50/50 border-none focus:ring-1 focus:ring-[#009688]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <PaystackButton 
                        amount={finalAmount}
                        email={email}
                        firstName={firstName}
                        lastName={lastName}
                        disabled={!isFormValid}
                        onSuccess={handleSuccess}
                        onClose={handleClose}
                        text={finalAmount > 0 ? `Donate GHS ${finalAmount} Now` : "Donate Now"}
                    />

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-6 text-gray-400 text-sm pt-4">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Verified Charity</span>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Other Ways to Support */}
            <div className="lg:w-1/3">
                <div className="bg-[#009688] rounded-tl-[60px] rounded-br-[60px] shadow-xl p-8 md:p-10 h-full text-white relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -ml-10 -mb-10 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8">Other Ways to Support Our Mission</h3>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            Explore other meaningful ways to contribute to our vision.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-white/20 p-3 rounded-full h-fit flex-shrink-0">
                                    <Calendar className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Monthly Giving</h4>
                                    <p className="text-white/80 text-sm">Become a sustaining supporter with a monthly donation that provides reliable funding.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white/20 p-3 rounded-full h-fit flex-shrink-0">
                                    <Gift className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">In-Kind Gifts</h4>
                                    <p className="text-white/80 text-sm">We welcome donations of essential supplies, equipment, technology, or professional services that directly benefit our operations.
</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white/20 p-3 rounded-full h-fit flex-shrink-0">
                                    <Building className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Corporate Giving</h4>
                                    <p className="text-white/80 text-sm">Align your brand with social impact. We collaborate with companies through CSR sponsorships, matching gift programs, and employee engagement initiatives.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white/20 p-3 rounded-full h-fit flex-shrink-0">
                                    <Briefcase className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Legacy Giving</h4>
                                    <p className="text-white/80 text-sm">Create a lasting legacy through a major contribution of funds, property, or essential assets, or by including us in your estate plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>


        </div>
      </section>
    </main>
  )
}
