"use client"

import type { LucideIcon } from "lucide-react"
import React from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, HomeIcon, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface DashboardLayoutProps {
  children: React.ReactNode
  navigation: Array<{
    name: string
    href: string
    icon: LucideIcon
  }>
}

export function DashboardLayout({ children, navigation }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ label: "Home", href: "/" }]

    const breadcrumbLabelMap: Record<string, string> = {
      "/patient/shop": "My Peptides",
      "/patient/peptides": "Shop",
    }

    let currentPath = ""
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Check if we have a custom label for this path
      let label = breadcrumbLabelMap[currentPath]

      if (!label) {
        // Default label generation
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")

        if (label === "Ehr") label = "EHR"
        if (label === "Id") label = "Details"
      }

      breadcrumbs.push({
        label,
        href: currentPath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/design-mode/brandmark-design.png"
                alt="Bridge MDX"
                width={198}
                height={40}
                className="h-[37px] w-auto ml-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm">
              <p className="font-medium">{user?.name}</p>
              <p className="text-muted-foreground text-xs">{user?.email}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed md:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background
          transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <nav className="flex flex-col gap-2 p-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <li className="inline-flex items-center gap-2">
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-foreground">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-foreground flex items-center gap-1"
                      >
                        {index === 0 && <HomeIcon className="h-4 w-4" />}
                        {index === 0 ? "" : crumb.label}
                      </Link>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && (
                    <li role="presentation" aria-hidden="true">
                      <ChevronRight className="h-4 w-4" />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
