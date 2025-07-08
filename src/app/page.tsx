import Section from "@/components/section"
import PortfolioSection from "@/components/portfolio-section"
import Island from "@/components/island"
import { getCachedImages } from "@/lib/images-query"
import { IslandProvider } from "@/utils/use-island"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  return (
    <IslandProvider>
      <main>
        {/* MOBILE */}
        <section
          data-mobile=""
          className="p-[6vw] md:hidden relative flex items-center justify-end min-h-[90svh] mb-6 selection:bg-green-background"
        >
          <Island />
          <h1 className="absolute right-[70%] bottom-10 translate-x-full origin-left -rotate-90 uppercase tracking-tight leading-none text-[25vw] font-medium">
            Design Engineer
          </h1>
          <h2 className="absolute left-[8%] bottom-5 text-lg max-w-[280px] ml-2 font-light">
            I craft full-stack learning platforms that don&apos;t suck — used by
            Apple, Netflix, and thousands of devs.
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full relative translate-y-0.5"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                fill="#000"
                d="M0 3h5v5H0zm5 5h5v5H5zm0 5h5v5H5zm10 5h5v5h-5zM5 3h5v5H5zm5 0h5v5h-5zm0 10h5v5h-5zm0-5h5v5h-5zm0 10h5v5h-5zM20 3h5v5h-5zm5 0h5v5h-5zM10 23h5v5h-5z"
              />
            </svg>
          </Link>
          <h1 className="uppercase tracking-tight text-nowrap leading-tight text-[11.05vw] font-medium">
            Design Engineer
          </h1>
          <h2 className="text-[1.97vw] ml-2 text-nowrap font-light">
            I craft full-stack learning platforms that don&apos;t suck — used by
            Apple, Netflix, and thousands of devs.
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
                <p>
                  I&apos;m <strong>Vojta Holik</strong> — co-founder of{" "}
                  <Link
                    className="font-semibold"
                    href="https://badass.dev"
                    target="_blank"
                  >
                    badass.dev
                  </Link>{" "}
                  and the design engineer behind some of the most successful
                  developer courses on the internet.
                </p>
                <p>
                  Since 2020, I&apos;ve been building custom course platforms
                  with{" "}
                  <Link
                    className="font-semibold"
                    href="https://x.com/jhooks"
                    target="_blank"
                  >
                    Joel Hooks
                  </Link>{" "}
                  (
                  <Link
                    className="font-semibold"
                    href="https://egghead.io"
                    target="_blank"
                  >
                    egghead.io
                  </Link>
                  ) using our open-source CMS, Course Builder.
                </p>
                <p>
                  I&apos;ve helped creators like <strong>Kent C. Dodds</strong>{" "}
                  and <strong>Matt Pocock</strong> teach millions with fast,
                  opinionated, battle-tested platforms — used by teams at{" "}
                  <strong className="bg-foreground text-green-background px-1 py-0.5">
                    Apple, EA, Netflix
                  </strong>
                  , and more.
                </p>
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
                <p>
                  I&apos;m <strong>Vojta Holik</strong> — co-founder of{" "}
                  <Link
                    className="font-semibold"
                    href="https://badass.dev"
                    target="_blank"
                  >
                    badass.dev
                  </Link>{" "}
                  and the design engineer behind some of the most successful
                  developer courses on the internet.
                </p>
                <p>
                  Since 2020, I&apos;ve been building custom course platforms
                  with{" "}
                  <Link
                    className="font-semibold"
                    href="https://x.com/jhooks"
                    target="_blank"
                  >
                    Joel Hooks
                  </Link>{" "}
                  (
                  <Link
                    className="font-semibold"
                    href="https://egghead.io"
                    target="_blank"
                  >
                    egghead.io
                  </Link>
                  ) using our open-source CMS, Course Builder.
                </p>
                <p>
                  I&apos;ve helped creators like <strong>Kent C. Dodds</strong>{" "}
                  and <strong>Matt Pocock</strong> teach millions with fast,
                  opinionated, battle-tested platforms — used by teams at{" "}
                  <strong className="bg-foreground text-green-background px-1 py-0.5">
                    Apple, EA, Netflix
                  </strong>
                  , and more.
                </p>
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
          <PortfolioSection
            contentPosition="right"
            backgroundColor="sand-background"
            selectionBg="foreground"
            selectionText="sand-background"
            title="Course Builder"
            description={
              <p>
                Course Builder is a technical implementation of a full-stack
                course framework. It&apos;s a way to build a course that
                represents the experience we&apos;ve had building courses for
                the last 10 years at egghead and Badass Courses.{" "}
                <strong>
                  Products listed below are all built on top of Course Builder.
                </strong>
              </p>
            }
            actions={[
              {
                label: "GitHub ↗︎",
                url: "https://github.com/badass-courses/course-builder",
              },
            ]}
            imageType="single"
            singleImageAlt="Course Builder Thumbnail"
            singleImagePath="/course-builder-thumb.png"
          />

          <PortfolioSection
            contentPosition="left"
            backgroundColor="yellow-background"
            selectionBg="foreground"
            selectionText="yellow-background"
            title="AI Hero"
            subtitle="with Matt Pocock"
            description={
              <>
                <p>
                  AI Hero is our first cohort-based course that flips AI
                  education on its head — designed from the ground up to be
                  completed using AI assistants, with{" "}
                  <strong className="bg-foreground text-yellow-background px-1 py-0.5">
                    1,000+
                  </strong>{" "}
                  developers joining the first cohort in July 2025.
                </p>
              </>
            }
            actions={[
              {
                label: "View Live ↗︎",
                url: "https://aihero.dev",
              },
            ]}
            imageType="carousel"
            imagePath="/ai-hero"
            imagesLoader={getCachedImages("ai-hero")}
            carouselControlsPosition="right"
          />

          <PortfolioSection
            contentPosition="right"
            backgroundColor="teal-background"
            selectionBg="foreground"
            selectionText="teal-background"
            title="Total TypeScript"
            subtitle="with Matt Pocock"
            description={
              <p>
                Total TypeScript is a comprehensive production-grade TypeScript
                training taught by Matt Pocock. In 2022, I took a crucial part
                in designing and developing the web experience. Since then,
                Total TypeScript crossed{" "}
                <strong className="bg-foreground text-teal-background px-1 py-0.5">
                  $2.5M
                </strong>{" "}
                in sales.
              </p>
            }
            actions={[
              {
                label: "View Live ↗︎",
                url: "https://totaltypescript.com",
              },
            ]}
            imageType="carousel"
            imagePath="/total-typescript"
            images={[
              { w: 712, h: 414 },
              { w: 712, h: 414 },
              { w: 712, h: 433 },
            ]}
            imagesLoader={getCachedImages("total-typescript")}
            carouselControlsPosition="left"
          />
          <PortfolioSection
            contentPosition="left"
            backgroundColor="purple-background"
            selectionBg="foreground"
            selectionText="purple-background"
            title="Epic AI"
            subtitle="with Kent C. Dodds"
            description={
              <>
                <p>
                  A live workshop series on building real-world AI systems using
                  Model Context Protocols (MCPs). We’re running live-first,
                  iterating fast, and we&apos;ve built the platform to support
                  it: calendar scheduling, multi-day ticketing, and real-time
                  sales.
                </p>
              </>
            }
            actions={[
              {
                label: "View Live ↗︎",
                url: "https://epicai.pro",
                type: "primary",
              },
            ]}
            imageType="carousel"
            imagePath="/epic-ai"
            imagesLoader={getCachedImages("epic-ai")}
            carouselControlsPosition="right"
          />
          <PortfolioSection
            contentPosition="right"
            backgroundColor="blue-background"
            selectionBg="foreground"
            selectionText="blue-background"
            title="Epic React & Epic Web"
            subtitle="with Kent C. Dodds"
            description={
              <>
                <p>
                  When Epic React first launched in 2020, it quickly became the
                  go-to resource for learning React. I played a key role in
                  designing and developing the learning experience, which
                  generated{" "}
                  <strong className="bg-foreground text-blue-background px-1 py-0.5">
                    over $1M
                  </strong>{" "}
                  in sales during its <strong>first month</strong>.
                </p>
              </>
            }
            actions={[
              {
                label: "View Live ↗︎",
                url: "https://epicreact.dev",
                type: "primary",
              },
            ]}
            imageType="carousel"
            imagePath="/epic-web"
            imagesLoader={getCachedImages("epic-web")}
            carouselControlsPosition="left"
          />
          <Section
            name="contact"
            className="rounded-lg xl:p-[150px] p-10 items-center bg-neutral-950 text-background [&_a]:text-background flex flex-col gap-10"
          >
            <div className="flex md:w-auto w-full items-center md:flex-row flex-col gap-5">
              <Link
                className="text-2xl md:w-auto w-full font-semibold hover:bg-neutral-900 no-underline px-5 py-3 rounded-full border-2 border-background inline-flex items-center justify-center"
                href="https://x.com/vojta_holik"
                target="_blank"
              >
                Follow me on X
              </Link>
              <Link
                className="text-2xl md:w-auto w-full font-semibold hover:bg-neutral-900 no-underline px-5 py-3 rounded-full border-2 border-background inline-flex items-center justify-center"
                href="mailto:vojta@holik.dev"
              >
                Email me ↗︎
              </Link>
            </div>
          </Section>
        </div>
      </main>
    </IslandProvider>
  )
}
