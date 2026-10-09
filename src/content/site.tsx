import type { ReactNode } from "react"

// The site's copy lives here once. The pages render it as HTML, and the
// Markdown twins, llms.txt and JSON-LD are generated from the same nodes.

export const site = {
  url: "https://vojta.io",
  name: "Vojta Holik",
  role: "Design Engineer",
  title: "Vojta Holik, Design Engineer",
  tagline:
    "I craft full-stack learning platforms that don't suck. Used by Apple, Netflix, and thousands of devs.",
  description:
    "Vojta crafts full-stack learning platforms that don't suck. Used by Apple, Netflix, and thousands of devs.",
  email: "vojta@holik.dev",
  x: "https://x.com/vojta_holik",
  github: "https://github.com/vojtaholik",
  updated: "2026-10-09",
}

export const about: ReactNode[] = [
  <>
    I&apos;m <strong>Vojta Holik</strong>, co-founder of{" "}
    <a className="font-semibold" href="https://badass.dev" target="_blank">
      badass.dev
    </a>{" "}
    and the design engineer behind some of the most successful developer courses
    on the internet.
  </>,
  <>
    Since 2018, I&apos;ve been building custom course platforms with{" "}
    <a className="font-semibold" href="https://x.com/jhooks" target="_blank">
      Joel Hooks
    </a>{" "}
    (
    <a className="font-semibold" href="https://egghead.io" target="_blank">
      egghead.io
    </a>
    ) using our own CMS, Course Builder.
  </>,
  <>
    I&apos;ve helped creators like <strong>Kent C. Dodds</strong> and{" "}
    <strong>Matt Pocock</strong> teach millions with fast, opinionated platforms
    used by teams at{" "}
    <strong className="bg-foreground text-green-background px-1 py-0.5">
      Apple, EA, Netflix
    </strong>
    , and more.
  </>,
]

export type ProjectAction = {
  label: string
  url: string
  type?: "primary" | "secondary"
}

export type Project = {
  title: string
  subtitle?: string
  backgroundColor: string
  description: ReactNode
  actions?: ProjectAction[]
  // Directory in public/ that holds the carousel screenshots
  images: string
}

export const projects: Project[] = [
  {
    title: "AI Coding Dictionary",
    subtitle: "with Matt Pocock",
    backgroundColor: "violet-background",
    description: (
      <p>
        Matt wrote a plain-English dictionary of the words people throw around
        when they talk about AI coding. I designed and built the site for it, a
        3D graph of{" "}
        <strong className="bg-foreground text-violet-background px-1 py-0.5">
          71 terms
        </strong>{" "}
        with 543 links between them. Click a term and the camera flies to it.
        Search, and everything that doesn&apos;t match fades out.
      </p>
    ),
    actions: [
      { label: "View Live", url: "https://www.aicodingdictionary.com" },
    ],
    images: "ai-coding-dictionary",
  },
  {
    title: "good-css.com",
    subtitle: "open-source agent skill",
    backgroundColor: "lime-background",
    description: (
      <p>
        Coding agents know :has(), subgrid and anchor positioning. They rarely
        reach for them. I built good-css so they do. It packs{" "}
        <strong className="bg-foreground text-lime-background px-1 py-0.5">
          47
        </strong>{" "}
        modern CSS techniques into an agent skill, and the site runs every one
        of them as a live specimen.
      </p>
    ),
    actions: [
      { label: "View Live", url: "https://good-css.com" },
      {
        label: "GitHub",
        url: "https://github.com/vojtaholik/good-css",
        type: "secondary",
      },
    ],
    images: "good-css",
  },
  {
    title: "Stick'em Up",
    subtitle: "stickers.badass.dev",
    backgroundColor: "pink-background",
    description: (
      <p>
        A clean laptop is a sad laptop. So I built a page where you stick Badass
        stickers on the lid of a 3D MacBook. I made the stickers too, with a
        tool I built for it. The music is made right in your browser and builds
        with every sticker.{" "}
        <strong className="bg-foreground text-pink-background px-1 py-0.5">
          It&apos;s fun
        </strong>{" "}
        and you should try it.
      </p>
    ),
    actions: [{ label: "View Live", url: "https://stickers.badass.dev" }],
    images: "stickers",
  },
  {
    title: "Course Builder",
    backgroundColor: "sand-background",
    description: (
      <p>
        Course Builder is the framework and CMS we build our course sites on. We
        put 10 years of building courses at egghead and Badass Courses into it.{" "}
        <strong>Every product listed below runs on it.</strong>
      </p>
    ),
    images: "course-builder",
  },
  {
    title: "AI Hero",
    subtitle: "with Matt Pocock",
    backgroundColor: "yellow-background",
    description: (
      <p>
        AI Hero is our first cohort-based course, built to be completed with an
        AI assistant. The first cohort in July 2025 had{" "}
        <strong className="bg-foreground text-yellow-background px-1 py-0.5">
          1,000+
        </strong>{" "}
        developers.
      </p>
    ),
    actions: [{ label: "View Live", url: "https://aihero.dev" }],
    images: "ai-hero",
  },
  {
    title: "Total TypeScript",
    subtitle: "with Matt Pocock",
    backgroundColor: "teal-background",
    description: (
      <p>
        Total TypeScript is Matt Pocock&apos;s TypeScript training. In 2022, I
        played a big part in designing and building the site. Since then it has
        crossed{" "}
        <strong className="bg-foreground text-teal-background px-1 py-0.5">
          $2.5M
        </strong>{" "}
        in sales.
      </p>
    ),
    actions: [{ label: "View Live", url: "https://totaltypescript.com" }],
    images: "total-typescript",
  },
  // {
  //   title: "Epic AI",
  //   subtitle: "with Kent C. Dodds",
  //   backgroundColor: "purple-background",
  //   description: (
  //     <p>
  //       A live workshop series on building real-world AI systems using Model
  //       Context Protocols (MCPs). We&apos;re running live-first, iterating
  //       fast, and we&apos;ve built the platform to support it: calendar
  //       scheduling, multi-day ticketing, and real-time sales.
  //     </p>
  //   ),
  //   actions: [{ label: "View Live", url: "https://epicai.pro" }],
  //   images: "epic-ai",
  // },
  {
    title: "Epic React & Epic Web",
    subtitle: "with Kent C. Dodds",
    backgroundColor: "blue-background",
    description: (
      <p>
        Epic React launched in 2020 and made{" "}
        <strong className="bg-foreground text-blue-background px-1 py-0.5">
          over $1M
        </strong>{" "}
        in sales in its <strong>first month</strong>. I did a lot of the design
        and development for it.
      </p>
    ),
    actions: [{ label: "View Live", url: "https://epicreact.dev" }],
    images: "epic-web",
  },
]
