import type { Metadata } from "next"
import "./globals.css"
import Noise from "@/components/noise"
import { getAllFontClasses } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Vojta Holik — Design Engineer",
  description:
    "Vojta crafts full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  // safar color
  themeColor: "#F8F4EC",
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
      "Vojta crafts full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
    type: "website",
    siteName: "vojta.io",
    url: "https://vojta.io",

    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vojta Holik — Design Engineer",
    description:
      "Vojta crafts full-stack learning platforms that don't suck — used by Apple, Netflix, and thousands of devs.",
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
    <html lang="en">
      <body
        className={`${getAllFontClasses()} font-maison-neue antialiased bg-background`}
      >
        {children}
        <Noise />
      </body>
    </html>
  )
}
