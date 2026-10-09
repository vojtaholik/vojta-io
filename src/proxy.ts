import { NextResponse, type NextRequest } from "next/server"
import { pages } from "@/content/pages"
import { markdownResponse, notFoundMarkdown } from "@/lib/markdown"

// Content negotiation: a page asked for with Accept: text/markdown is answered
// with its Markdown twin, and a missing page with a Markdown 404.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const twin =
    pathname === "/"
      ? "index"
      : pages.find(({ slug }) => pathname === `/${slug}`)?.slug

  if (twin) {
    return NextResponse.rewrite(new URL(`/md/${twin}`, request.url))
  }

  return markdownResponse(notFoundMarkdown(), undefined, 404)
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/)[^.]*)",
      has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
    },
  ],
}
