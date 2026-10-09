import type { Metadata, Viewport } from "next"
import "./globals.css"
import Noise from "@/components/noise"
import { getAllFontClasses } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/content/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#F8F4EC",
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
        <Analytics />
        <Noise />
      </body>
    </html>
  )
}
