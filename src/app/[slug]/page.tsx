import ContactSection from "@/components/contact-section"
import LogoMark from "@/components/logo-mark"
import { pages } from "@/content/pages"
import { site } from "@/content/site"
import { pageMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return pages.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = pages.find((page) => page.slug === slug)
  if (!page) return {}

  return pageMetadata({
    title: `${page.title} | ${site.name}`,
    description: page.description,
    path: `/${slug}`,
  })
}

export default async function TextPage({ params }: Props) {
  const { slug } = await params
  const page = pages.find((page) => page.slug === slug)
  if (!page) notFound()

  return (
    <main>
      <header className="p-[6vw] md:pb-10 pb-8">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="md:size-24 size-16 flex md:p-6 p-3.5 items-center justify-center rounded-full md:border-4 border-3 aspect-square border-foreground"
        >
          <LogoMark className="w-full relative translate-y-0.5" />
        </Link>
      </header>
      <div className="flex flex-col gap-4 max-w-screen-2xl mx-auto w-full">
        <article
          className={cn(
            "rounded-lg md:px-[110px] px-8 md:py-[110px] py-16",
            page.className
          )}
        >
          <h1 className="md:text-6xl text-4xl md:mb-14 mb-8 font-semibold">
            {page.title}
          </h1>
          <div className="flex flex-col md:gap-8 gap-5 xl:text-2xl md:text-xl text-lg font-light leading-relaxed max-w-3xl [&_a]:font-semibold [&_h2]:font-semibold [&_h2]:md:text-4xl [&_h2]:text-2xl [&_h2]:md:mt-8 [&_h2]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:md:gap-4 [&_ul]:gap-3 [&_ul]:list-disc [&_ul]:pl-[1.1em]">
            {page.body}
          </div>
        </article>
        <ContactSection />
      </div>
    </main>
  )
}
