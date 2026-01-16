import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/auth-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Homebase | One Login. Every Portal.",
  description: "The secure command center for every login your dental team needs. One dashboard. Every portal. No more spreadsheets, no more password chaos.",
  generator: "v0.app",
  icons: {
    icon: "/homebase-logo.png",
    shortcut: "/homebase-logo.png",
    apple: "/homebase-logo.png",
  },
  openGraph: {
    title: "Homebase | One Login. Every Portal.",
    description: "The secure command center for every login your dental team needs. Stop hunting for passwords. Start running your practice.",
    url: "https://homebase.dental",
    siteName: "Homebase",
    images: [
      {
        url: "/homebase-logo.png",
        width: 1200,
        height: 630,
        alt: "Homebase - One login. Every portal.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homebase | One Login. Every Portal.",
    description: "The secure command center for every login your dental team needs. Stop hunting for passwords. Start running your practice.",
    images: ["/homebase-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <AuthProvider>{children}</AuthProvider>
          </Suspense>
          <Toaster />
          <FloatingChatWidget />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
