import type { ReactNode } from "react"
import { about, projects, site } from "./site"

export type TextPage = {
  slug: string
  title: string
  description: string
  className: string
  body: ReactNode
}

export const pages: TextPage[] = [
  {
    slug: "about",
    title: "About",
    description:
      "Who Vojta Holik is, what he builds and who he has built it with.",
    className:
      "bg-green-background selection:bg-foreground selection:text-green-background",
    body: (
      <>
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <h2>Selected work</h2>
        <ul>
          {projects.map(({ title, subtitle, actions }) => (
            <li key={title}>
              {actions ? (
                <a href={actions[0].url} target="_blank">
                  {title}
                </a>
              ) : (
                title
              )}
              {subtitle && `, ${subtitle}`}
            </li>
          ))}
        </ul>
        <p>
          Every project has screenshots and a short write-up on the{" "}
          <a href="/">home page</a>. To reach me, see{" "}
          <a href="/contact">Contact</a>.
        </p>
      </>
    ),
  },
  {
    slug: "contact",
    title: "Contact",
    description:
      "How to reach Vojta Holik by email, on X and on GitHub, and where to get help with a course.",
    className:
      "bg-teal-background selection:bg-foreground selection:text-teal-background",
    body: (
      <>
        <p>
          Write to me at <a href={`mailto:${site.email}`}>{site.email}</a>.
          English or Czech, both work.
        </p>
        <p>
          Email is the place for work inquiries and for questions about anything
          on this site.
        </p>
        <h2>Elsewhere</h2>
        <ul>
          <li>
            <a href={site.x} target="_blank">
              X
            </a>
            , as @vojta_holik
          </li>
          <li>
            <a href={site.github} target="_blank">
              GitHub
            </a>
            , where good-css and my other public code live
          </li>
        </ul>
        <h2>Help with a course</h2>
        <p>
          AI Hero, Total TypeScript and Epic React each have their own support.
          If you need help with a purchase or an account, write to
          team@aihero.dev, team@totaltypescript.com or team@epicreact.dev.
        </p>
      </>
    ),
  },
  {
    slug: "privacy",
    title: "Privacy",
    description:
      "What vojta.io collects when you visit: anonymous page views, server logs and nothing else.",
    className:
      "bg-sand-background selection:bg-foreground selection:text-sand-background",
    body: (
      <>
        <p>
          This site is my portfolio. It has no accounts, no forms and no ads,
          and it sets no cookies.
        </p>
        <h2>What gets collected</h2>
        <ul>
          <li>
            <strong>Page views.</strong> I use Vercel Web Analytics to count
            visits. For each page view it stores the time, the page address, the
            referrer, an approximate location, and the browser, operating system
            and device type. It tells visitors apart with a hash made from the
            request and drops that hash after 24 hours.
          </li>
          <li>
            <strong>Server logs.</strong> The site is hosted on Vercel, which
            processes your IP address and the details of each request to deliver
            the page.
          </li>
          <li>
            <strong>Email.</strong> If you write to me, I get your address and
            your message, and I use them to reply.
          </li>
        </ul>
        <h2>What I don&apos;t do</h2>
        <p>
          I don&apos;t sell this data, share it with advertisers or combine it
          with anything else to identify you.
        </p>
        <h2>Questions</h2>
        <p>
          Write to <a href={`mailto:${site.email}`}>{site.email}</a>. This page
          was last updated on 9 October 2026.
        </p>
      </>
    ),
  },
]
