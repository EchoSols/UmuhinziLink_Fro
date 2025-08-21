"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  CreditCard,
  Brain,
  TrendingUp,
  MessageSquare,
  ShoppingCart,
  User,
  Phone,
  Settings,
  LogOut,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Package, label: "My Products", href: "/dashboard/products" },
  { icon: CreditCard, label: "Input Request", href: "/dashboard/credit" },
  { icon: Brain, label: "AI Tips", href: "/dashboard/ai-tips" },
  { icon: TrendingUp, label: "Market Analytics", href: "/dashboard/analytics" },
  { icon: MessageSquare, label: "Message", href: "/dashboard/messages" },
  { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Phone, label: "Contact", href: "/dashboard/contact" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: LogOut, label: "Logout", href: "/" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("currentUser")
    if (userData) {
      setCurrentUser(JSON.parse(userData))
    } else {
      // Redirect to login if not authenticated
      router.push("/login")
      return
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!currentUser) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-border/40 p-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-green-600">
                UmuhinziLink
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild={item.label !== "Logout"} 
                    isActive={pathname === item.href} 
                    className="w-full justify-start"
                  >
                    {item.label === "Logout" ? (
                      <button onClick={handleLogout} className="flex items-center gap-3 w-full">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            
            {/* User Profile Section */}
            <div className="mt-auto p-4 border-t border-border/40">
              <div className="flex items-center gap-3">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {currentUser.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {currentUser.location}
                  </p>
                </div>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  )
}
