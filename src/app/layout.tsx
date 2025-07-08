import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Noise from "@/components/noise"
import { getAllFontClasses, maisonNeue, maisonNeueMono } from "@/lib/fonts"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Vojta Holik — Design Engineer",
  description:
    "I craft full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "Vojta Holik — Design Engineer",
    description:
      "I craft full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
    type: "website",
    siteName: "Vojta Holik",
    url: "https://vojta.io",

    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vojta Holik — Design Engineer",
    description:
      "I craft full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={``}>
      <body
        className={`${getAllFontClasses()} font-maison-neue antialiased bg-background`}
      >
        {children}
        <Noise />
      </body>
    </html>
  )
}
