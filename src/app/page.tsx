import ContactSection from "@/components/contact-section"
import Island from "@/components/island"
import JsonLd from "@/components/json-ld"
import LogoMark from "@/components/logo-mark"
import PortfolioSection from "@/components/portfolio-section"
import Section from "@/components/section"
import { about, projects, site } from "@/content/site"
import { getCachedImages } from "@/lib/images-query"
import { homeJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { IslandProvider } from "@/utils/use-island"
import Image from "next/image"
import Link from "next/link"

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
})

export default async function Home() {
  return (
    <IslandProvider>
      <JsonLd data={homeJsonLd()} />
      <main>
        {/* MOBILE */}
        <section
          data-mobile=""
          className="p-[6vw] md:hidden relative flex items-center justify-end min-h-[90svh] mb-6 selection:bg-green-background"
        >
          <Island />
          <h1 className="absolute right-[70%] bottom-10 translate-x-full origin-left -rotate-90 uppercase tracking-tight leading-none text-[25vw] font-medium">
            {site.role}
          </h1>
          <h2 className="absolute left-[8%] bottom-5 text-lg max-w-[280px] ml-2 font-light">
            {site.tagline}
          </h2>
        </section>
        {/* DESKTOP */}
        <section
          data-desktop=""
          className="p-[6vw] md:block hidden mb-6 selection:bg-green-background"
        >
          <Link
            href="/"
            className="size-24 mb-5 flex p-6 items-center justify-center rounded-full border-4 aspect-square border-foreground"
          >
            <LogoMark className="w-full relative translate-y-0.5" />
          </Link>
          <h1 className="uppercase tracking-tight text-nowrap leading-tight text-[11.05vw] font-medium">
            {site.role}
          </h1>
          <h2 className="text-[2vw] ml-2 text-nowrap font-light">
            {site.tagline}
          </h2>
        </section>
        <div className="flex flex-col gap-4 max-w-screen-2xl mx-auto w-full">
          {/* MOBILE ABOUT ME */}
          <Section
            name="about-me"
            data-mobile=""
            className="bg-green-background overflow-hidden md:hidden flex flex-col rounded-lg selection:bg-foreground selection:text-green-background"
          >
            <article className="py-16 flex flex-col px-8 justify-center">
              <h2 className="text-4xl mb-8 font-semibold">About me</h2>
              <div className="flex text-lg flex-col gap-5 font-light leading-relaxed">
                {about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
            {/* <div className="relative w-full h-24">
            <Image
              src={"/vojta-holik-design-engineer-sm.png"}
              alt="Vojta Holik, Design Engineer, dithered"
              fill
              quality={100}
              className="object-cover object-[50%_50%]"
            />
          </div> */}
          </Section>
          {/* DESKTOP ABOUT ME */}
          <section
            data-desktop=""
            className="md:grid hidden bg-green-background px-[110px] xl:gap-0 md:gap-16 grid-cols-2 place-items-center rounded-lg selection:bg-foreground selection:text-green-background"
          >
            <article className="py-[110px] flex flex-col justify-center">
              <h2 className="text-6xl mb-14 font-semibold">About me</h2>
              <div className="flex xl:text-2xl text-xl flex-col gap-10 font-light leading-relaxed max-w-xl">
                {about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
            <div className="relative w-full h-full">
              <Image
                src={"/vojta-holik-design-engineer.png"}
                alt="Vojta Holik, Design Engineer, dithered"
                fill
                className="object-cover"
              />
            </div>
          </section>
          {projects.map((project, index) => (
            <PortfolioSection
              key={project.title}
              contentPosition={index % 2 === 0 ? "left" : "right"}
              carouselControlsPosition={index % 2 === 0 ? "right" : "left"}
              backgroundColor={project.backgroundColor}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              actions={project.actions}
              imagePath={`/${project.images}`}
              imagesLoader={getCachedImages(project.images)}
            />
          ))}
          <ContactSection />
        </div>
      </main>
    </IslandProvider>
  )
}
