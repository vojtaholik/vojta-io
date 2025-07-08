"use client"

import { cn } from "@/lib/utils"
import { useIslandOnSection } from "@/utils/use-island"
import { useEffect, useRef } from "react"

export default function Section({
  children,
  name,
  ...props
}: {
  children: React.ReactNode
  className?: string
  name: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  useIslandOnSection(name, ref)

  return (
    <section {...props} ref={ref} className={cn(props.className)}>
      {children}
    </section>
  )
}
