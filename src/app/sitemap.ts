import type { MetadataRoute } from "next"
import { pages } from "@/content/pages"
import { site } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...pages.map(({ slug }) => `/${slug}`)].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: site.updated,
  }))
}
