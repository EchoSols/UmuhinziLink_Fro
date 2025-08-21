import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "UmuhinziLink - Connect Farmers to Digital Markets",
  description:
    "Empowering smallholder farmers in Rwanda with Technology to access markets, get AI-powered farming advice and secure agricultural loans",
  generator: "v0.app",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  scroll-behavior: smooth;
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
