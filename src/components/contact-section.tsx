import Section from "@/components/section"
import { pages } from "@/content/pages"
import { site } from "@/content/site"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

const buttonClassName =
  "md:text-2xl text-lg text-center text-balance md:w-auto w-full font-semibold hover:bg-neutral-900 no-underline px-5 py-3 rounded-full border-2 border-background inline-flex items-center justify-center gap-2.5"

export default function ContactSection() {
  return (
    <Section
      name="contact"
      className="rounded-lg xl:p-[150px] p-10 items-center bg-neutral-950 text-background [&_a]:text-background flex flex-col gap-10"
    >
      <div className="flex md:w-auto w-full items-center md:flex-row flex-col gap-5">
        <Link className={buttonClassName} href={site.x} target="_blank">
          <HugeiconsIcon
            icon={NewTwitterIcon}
            strokeWidth={2}
            className="size-[1.15em] shrink-0"
          />
          Follow me on X
        </Link>
        <Link
          className={buttonClassName}
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HugeiconsIcon
            icon={GithubIcon}
            strokeWidth={2}
            className="size-[1.15em] shrink-0"
          />
          Browse projects on GitHub
        </Link>
        <Link className={buttonClassName} href={`mailto:${site.email}`}>
          <HugeiconsIcon
            icon={Mail01Icon}
            strokeWidth={2}
            className="size-[1.15em] shrink-0"
          />
          Email me
        </Link>
      </div>
      <nav
        aria-label="Site"
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:text-lg text-base font-light"
      >
        <Link className="hover:underline no-underline" href="/">
          Work
        </Link>
        {pages.map((page) => (
          <Link
            key={page.slug}
            className="hover:underline no-underline"
            href={`/${page.slug}`}
          >
            {page.title}
          </Link>
        ))}
      </nav>
    </Section>
  )
}
