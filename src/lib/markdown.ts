import { pages, type TextPage } from "@/content/pages"
import { about, projects, site } from "@/content/site"
import { toMarkdown } from "./to-markdown"

const absolute = (path: string) => new URL(path, site.url).href

const frontmatter = (title: string, description: string, path: string) =>
  [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `canonical: ${absolute(path)}`,
    `last-updated: ${site.updated}`,
    "---",
  ].join("\n")

const contactList = [
  `- Email: [${site.email}](mailto:${site.email})`,
  `- [X](${site.x})`,
  `- [GitHub](${site.github})`,
].join("\n")

export function homeMarkdown() {
  const work = projects.map(({ title, subtitle, description, actions }) =>
    [
      `### ${title}${subtitle ? ` (${subtitle})` : ""}`,
      toMarkdown(description).trim(),
      actions?.map(({ label, url }) => `- [${label}](${url})`).join("\n"),
    ]
      .filter(Boolean)
      .join("\n\n")
  )

  return [
    frontmatter(site.title, site.description, "/"),
    `# ${site.title}`,
    site.tagline,
    "## About me",
    ...about.map(toMarkdown),
    "## Work",
    ...work,
    "## Contact",
    contactList,
    "## More",
    pages
      .map(({ slug, title }) => `- [${title}](${absolute(slug)})`)
      .join("\n"),
  ].join("\n\n")
}

export function pageMarkdown({ slug, title, description, body }: TextPage) {
  return [
    frontmatter(`${title} | ${site.name}`, description, slug),
    `# ${title}`,
    toMarkdown(body).trim(),
  ].join("\n\n")
}

export function notFoundMarkdown() {
  return [
    "# Page not found",
    `There is no page at this address on ${new URL(site.url).host}.`,
    "These exist:",
    [
      `- [Home](${absolute("/")})`,
      ...pages.map(({ slug, title }) => `- [${title}](${absolute(slug)})`),
      `- [llms.txt](${absolute("llms.txt")})`,
      `- [Sitemap](${absolute("sitemap.xml")})`,
    ].join("\n"),
  ].join("\n\n")
}

export function llmsTxt() {
  return [
    `# ${site.name}`,
    `> Design engineer and co-founder of badass.dev. This is his portfolio: ${projects.length} projects with screenshots, and how to reach him.`,
    "## When to use this site",
    `Use it when someone asks who ${site.name} is, what he has designed and built, or how to contact him. Use it to check his part in ${projects.map(({ title }) => title).join(", ")}.`,
    "Do not use it for help with a course purchase or account. AI Hero, Total TypeScript and Epic React have their own support, and the contact page lists the addresses.",
    "To read a page as Markdown, request it with `Accept: text/markdown` or add `.md` to its path. The home page is `/index.md`.",
    "## Pages",
    [
      `- [Home](${absolute("index.md")}): the about text and all ${projects.length} projects`,
      ...pages.map(
        ({ slug, title, description }) =>
          `- [${title}](${absolute(`${slug}.md`)}): ${description}`
      ),
    ].join("\n"),
    "## Projects",
    projects
      .map(({ title, subtitle, actions }) => {
        const name = actions ? `[${title}](${actions[0].url})` : title
        return `- ${name}${subtitle ? `: ${subtitle}` : ""}`
      })
      .join("\n"),
    "## Contact",
    contactList,
  ].join("\n\n")
}

// `path` is the HTML page this Markdown is the twin of.
export function markdownResponse(body: string, path?: string, status = 200) {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
  })
  if (path) headers.set("Link", `<${absolute(path)}>; rel="canonical"`)

  return new Response(`${body}\n`, { status, headers })
}
