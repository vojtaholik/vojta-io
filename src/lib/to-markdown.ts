import { isValidElement, type ReactNode } from "react"
import { site } from "@/content/site"

type Props = { children?: ReactNode; href?: string }

const HEADINGS: Record<string, string> = { h1: "#", h2: "##", h3: "###" }

// Reads the JSX a page renders and writes the same content as Markdown.
export function toMarkdown(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(toMarkdown).join("")
  if (!isValidElement<Props>(node)) return ""

  const { children, href } = node.props
  const text = toMarkdown(children)
  const tag = typeof node.type === "string" ? node.type : ""

  if (href) return `[${text}](${new URL(href, site.url).href})`
  if (tag in HEADINGS) return `${HEADINGS[tag]} ${text}\n\n`
  if (tag === "p") return `${text}\n\n`
  if (tag === "ul") return `${text}\n`
  if (tag === "li") return `- ${text}\n`
  if (tag === "strong") return `**${text}**`
  return text
}

export function toText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(toText).join("")
  return isValidElement<Props>(node) ? toText(node.props.children) : ""
}
