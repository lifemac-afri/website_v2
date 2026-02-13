"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Calendar, Users, ImageIcon, MessageSquare, DollarSign, Layers, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin",
      icon: BarChart3,
      label: "Dashboard",
      exact: true,
    },
    {
      href: "/admin/impact-stories",
      icon: FileText,
      label: "Impact Stories",
    },
    {
      href: "/admin/events",
      icon: Calendar,
      label: "Events",
    },
    {
      href: "/admin/programs",
      icon: Layers,
      label: "Programs",
    },
    {
      href: "/admin/team",
      icon: Users,
      label: "Team Members",
    },
    {
      href: "/admin/media",
      icon: ImageIcon,
      label: "Media Library",
    },
    {
      href: "/admin/testimonials",
      icon: MessageSquare,
      label: "Testimonials",
    },
    {
      href: "/admin/donations",
      icon: DollarSign,
      label: "Donations",
    },
  ]

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <div className="hidden border-r bg-white lg:block lg:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/logo.png" alt="LIFE-MAC Africa Logo" width={120} height={40} className="h-8 w-auto" />
          <span className="text-sm ">Admin</span>
        </Link>
      </div>
      <nav className="space-y-1 p-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive(route.href, route.exact) ? "bg-blue-50 text-blue-900" : "text-gray-900 hover:bg-gray-100",
            )}
          >
            <route.icon
              className={cn("h-5 w-5", isActive(route.href, route.exact) ? "text-blue-900" : "text-gray-500")}
            />
            <span>{route.label}</span>
          </Link>
        ))}

        <div className="pt-4 mt-4 border-t">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
          >
            <Home className="h-5 w-5 text-gray-500" />
            <span>View Website</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
