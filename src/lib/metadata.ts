import type { Metadata } from "next"

const image = { url: "/og-image.png", width: 1200, height: 630 }

// What a page says about itself in <head>, including where its Markdown twin is.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: { "text/markdown": path === "/" ? "/index.md" : `${path}.md` },
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "vojta.io",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
