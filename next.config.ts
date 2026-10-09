import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/:slug([^/.]+).md", destination: "/md/:slug" }]
  },
  async headers() {
    // Pages answer with HTML or Markdown depending on the Accept header, and
    // point agents at the Markdown twin and the sitemap.
    const pageHeaders = (twin: string) => [
      { key: "Vary", value: "Accept" },
      {
        key: "Link",
        value: `</sitemap.xml>; rel="sitemap", <${twin}>; rel="alternate"; type="text/markdown"`,
      },
    ]

    return [
      { source: "/", headers: pageHeaders("/index.md") },
      { source: "/:slug([^/.]+)", headers: pageHeaders("/:slug.md") },
    ]
  },
}

export default nextConfig
