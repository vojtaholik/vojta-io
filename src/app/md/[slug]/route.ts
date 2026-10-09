import { pages } from "@/content/pages"
import { homeMarkdown, markdownResponse, pageMarkdown } from "@/lib/markdown"

// The Markdown twin of every page. /index.md and /<page>.md are rewritten
// here, and so is a page requested with Accept: text/markdown (see proxy.ts).

export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: "index" }, ...pages.map(({ slug }) => ({ slug }))]
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const page = pages.find((page) => page.slug === slug)

  return page
    ? markdownResponse(pageMarkdown(page), page.slug)
    : markdownResponse(homeMarkdown(), "/")
}
