"use client"

import { cn } from "@/lib/utils"
import { useIsland } from "@/utils/use-island"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import VojtaHolikFaceDithered from "../../public/vojta-holik-face-dithered.jpg"

export default function Island() {
  const { isInView } = useIsland()

  return (
    <Link
      href="/"
      className={cn(
        "fixed transition scale-100 origin-top-right ease-in-out overflow-hidden right-10 top-10 size-16 mb-5 flex p-3.5 items-center justify-center rounded-full border-3 aspect-square border-foreground",
        {
          "opacity-0 scale-0":
            isInView &&
            [
              "course-builder",
              "ai-hero",
              "epic-ai",
              "total-typescript",
              "epic-react-&-epic-web",
            ].includes(isInView),
        }
      )}
    >
      <AnimatePresence mode="popLayout">
        {!isInView && (
          <motion.svg
            key="logo"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full relative translate-y-0.5"
            fill="none"
            viewBox="0 0 30 30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            <path
              fill="#000"
              d="M0 3h5v5H0zm5 5h5v5H5zm0 5h5v5H5zm10 5h5v5h-5zM5 3h5v5H5zm5 0h5v5h-5zm0 10h5v5h-5zm0-5h5v5h-5zm0 10h5v5h-5zM20 3h5v5h-5zm5 0h5v5h-5zM10 23h5v5h-5z"
            />
          </motion.svg>
        )}
        {isInView === "about-me" && (
          <motion.div
            key="face"
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            <Image
              src={VojtaHolikFaceDithered}
              fill
              className="object-cover"
              quality={100}
              alt="Vojta Holik"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  )
}
