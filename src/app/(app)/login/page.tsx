import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Login | LIFE-MAC Africa Admin",
  description: "Login to the LIFE-MAC Africa admin dashboard",
}

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Image src="https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6elTabr2qu80yLtXiwBWvmPjYRrCVpAkDZGxQ" alt="LIFE-MAC Africa Logo" width={150} height={60} className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/admin/forgot-password" className="text-sm text-blue-900 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm ">
              Remember me for 30 days
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
            <Link href="/admin">Sign In</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
