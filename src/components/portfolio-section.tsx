"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { useElementHeight } from "@/utils/use-element-height"
import { cn } from "@/lib/utils"
import type { ProjectAction } from "@/content/site"
import type { ProjectImage } from "@/lib/images"
import React from "react"
import Section from "./section"

const subscribe = () => () => {}

interface PortfolioSectionProps {
  // Layout
  contentPosition: "left" | "right"

  // Styling
  backgroundColor: string

  // Content
  title: string
  subtitle?: string
  description: string | React.ReactNode
  actions?: ProjectAction[]

  // Images
  imagePath?: string // Carousel directory
  imagesLoader?: Promise<ProjectImage[]>

  // Carousel specific
  carouselControlsPosition?: "left" | "right"
}

export default function PortfolioSection({
  contentPosition,
  backgroundColor,
  title,
  subtitle,
  description,
  actions,
  imagePath,
  imagesLoader,
  carouselControlsPosition = "right",
}: PortfolioSectionProps) {
  const { ref: contentRef, height: contentHeight } =
    useElementHeight<HTMLElement>(400)
  // The server renders only the first screenshot. The rest mount after
  // hydration, which keeps dozens of offscreen images out of the HTML.
  const hydrated = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
  const allImages = imagesLoader ? React.use(imagesLoader) : []
  const images = hydrated ? allImages : allImages.slice(0, 1)
  const renderContent = () => (
    <article
      ref={contentRef}
      className="md:py-[110px] md:px-0 px-10 pb-14 col-span-2 flex flex-col justify-center"
    >
      <h2
        className="inline-flex flex-col md:text-6xl text-4xl md:mb-8 mb-5 font-semibold"
        style={{
          color: `color-mix(in oklch, var(--foreground) 90%, var(--${backgroundColor}))`,
        }}
      >
        <span>{title}</span>
        {subtitle && (
          <span className="md:text-3xl text-2xl md:mt-2 font-light">
            {subtitle}
          </span>
        )}
      </h2>
      <div
        className="flex xl:text-2xl lg:text-lg md:text-base text-lg font-light flex-col gap-10 leading-relaxed max-w-xl"
        style={{
          color: `color-mix(in oklch, var(--foreground) 80%, var(--${backgroundColor}))`,
        }}
      >
        {typeof description === "string" ? (
          <p className="">{description}</p>
        ) : (
          <div className="flex flex-col gap-4">{description}</div>
        )}
        {actions && (
          <div className="flex flex-wrap gap-3 items-center">
            {actions.map(({ url, type = "primary", label }, index) => (
              <Link
                target="_blank"
                key={index}
                href={url}
                className={cn(
                  "md:text-2xl text-lg rounded-full hover:bg-foreground hover:text-background hover:border-foreground border-2 px-8 no-underline font-normal py-3 inline-flex items-center justify-center",
                  type === "primary"
                    ? "border-foreground"
                    : "border-transparent bg-foreground/10"
                )}
              >
                {label} ↗︎
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )

  const renderCarousel = () => {
    return (
      <>
        {/* MOBILE */}
        <div
          className={cn("md:hidden block relative mt-10 scale-105", {
            // "-rotate-1": carouselControlsPosition === "left",
            // "rotate-1": carouselControlsPosition === "right",
          })}
        >
          <Carousel
            orientation="horizontal"
            opts={{ loop: true, align: "center" }}
          >
            <div className="flex items-center flex-col relative">
              <CarouselContent
                className="h-full"
                // style={{
                //   height: contentHeight > 0 ? `${contentHeight}px` : "auto",
                // }}
              >
                {images.map(({ width, height, name }, i) => (
                  <CarouselItem
                    className="xl:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:basis-1/4 basis-4/5"
                    key={`${title.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                  >
                    <Image
                      src={`${imagePath}/${name}`}
                      alt={`${title} ${i + 1}`}
                      width={width}
                      height={height}
                      sizes="80vw"
                      className="rounded-[1rem]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <div
                className={`absolute left-0 w-16 h-full bg-gradient-to-r from-transparent to-${backgroundColor} pointer-events-none opacity-100`}
              />
              <div
                className={`absolute right-0 w-16 h-full bg-gradient-to-l from-transparent to-${backgroundColor} pointer-events-none opacity-100`}
              /> */}
              {/* <div
                className={cn(
                  "absolute bottom-6.5 scale-75 rounded-lg px-3 py-1 left-3 text-sm font-semibold uppercase",
                  {
                    "rotate-2": carouselControlsPosition === "right",
                    "-rotate-2": carouselControlsPosition === "left",
                  }
                )}
              >
                Prod Screenshots
              </div> */}

              <div className="flex gap-2 flex-row w-full justify-end px-10 pt-10">
                <CarouselPrevious className="relative inset-0 size-10 [&_svg]:size-4 hover:bg-foreground hover:text-background border-2 bg-transparent border-foreground" />
                <CarouselNext className="relative inset-0 size-10 [&_svg]:size-4 border-2 bg-transparent hover:bg-foreground hover:text-background border-foreground" />
              </div>
            </div>
          </Carousel>
        </div>
        {/* DESKTOP */}
        <div
          className={cn("md:block hidden relative col-span-3 scale-105", {
            "-rotate-1": carouselControlsPosition === "left",
            "rotate-1": carouselControlsPosition === "right",
          })}
        >
          <Carousel
            orientation="vertical"
            opts={{ loop: true, align: "center" }}
          >
            <div className="flex items-center relative">
              {carouselControlsPosition === "left" && (
                <div className="flex relative items-center -ml-5 gap-2 flex-col pr-10">
                  <CarouselPrevious className="relative top-0 size-14 hover:bg-foreground hover:text-background border-2 bg-transparent border-foreground" />
                  <CarouselNext className="relative bottom-0 size-14 border-2 bg-transparent hover:bg-foreground hover:text-background border-foreground" />
                </div>
              )}
              <CarouselContent
                className="mt-0"
                style={{
                  height: contentHeight > 0 ? `${contentHeight}px` : "auto",
                }}
              >
                {images.map(({ width, height, name }, i) => (
                  <CarouselItem
                    className="xl:basis-1/2 lg:basis-1/3 sm:basis-1/4 pt-4"
                    key={`${title.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                  >
                    <Image
                      src={`${imagePath}/${name}`}
                      alt={`${title} ${i + 1}`}
                      width={width}
                      height={height}
                      sizes="45vw"
                      className="rounded-[1rem]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-${backgroundColor} pointer-events-none opacity-100`}
              />
              <div
                className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-${backgroundColor} pointer-events-none opacity-100`}
              />
              <div
                className={cn(
                  "absolute bottom-10 rounded-lg px-3 py-1 text-sm font-semibold uppercase bg-foreground/50 backdrop-blur-sm text-background",
                  {
                    "right-28": carouselControlsPosition === "right",
                    "left-28": carouselControlsPosition === "left",
                  }
                )}
              >
                Screenshots
              </div>
              {carouselControlsPosition === "right" && (
                <div className="flex relative items-center -mr-5 gap-2 flex-col pl-10">
                  <CarouselPrevious className="relative top-0 size-14 hover:bg-foreground hover:text-background border-2 bg-transparent border-foreground" />
                  <CarouselNext className="relative bottom-0 size-14 border-2 bg-transparent hover:bg-foreground hover:text-background border-foreground" />
                </div>
              )}
            </div>
          </Carousel>
        </div>
      </>
    )
  }

  return (
    <Section
      name={title.toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "md:px-[110px] md:grid flex flex-col overflow-hidden grid-cols-5 md:gap-[110px] place-items-center rounded-lg",
        {
          "bg-sand-background selection:bg-foreground selection:text-sand-background":
            backgroundColor === "sand-background",
          "bg-yellow-background selection:bg-foreground selection:text-yellow-background":
            backgroundColor === "yellow-background",
          "bg-teal-background selection:bg-foreground selection:text-teal-background":
            backgroundColor === "teal-background",
          "bg-purple-background selection:bg-foreground selection:text-purple-background":
            backgroundColor === "purple-background",
          "bg-green-background selection:bg-foreground selection:text-green-background":
            backgroundColor === "green-background",
          "bg-blue-background selection:bg-foreground selection:text-blue-background":
            backgroundColor === "blue-background",
          "bg-violet-background selection:bg-foreground selection:text-violet-background":
            backgroundColor === "violet-background",
          "bg-lime-background selection:bg-foreground selection:text-lime-background":
            backgroundColor === "lime-background",
          "bg-pink-background selection:bg-foreground selection:text-pink-background":
            backgroundColor === "pink-background",
          "flex-col-reverse": contentPosition === "left",
        }
      )}
    >
      {contentPosition === "left" ? (
        <>
          {renderContent()}
          {renderCarousel()}
        </>
      ) : (
        <>
          {renderCarousel()}
          {renderContent()}
        </>
      )}
    </Section>
  )
}
