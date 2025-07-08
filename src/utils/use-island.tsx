"use client"

import { createContext, useContext, useEffect, useState } from "react"

export const IslandContext = createContext<{
  isInView: string | null
  setIsInView: (name: string | null) => void
}>({
  isInView: null,
  setIsInView: () => {},
})

export function IslandProvider({ children }: { children: React.ReactNode }) {
  const [isInView, setIsInView] = useState<string | null>(null)

  return (
    <IslandContext.Provider value={{ isInView, setIsInView }}>
      {children}
    </IslandContext.Provider>
  )
}

export function useIsland() {
  const context = useContext(IslandContext)
  if (!context) {
    throw new Error("useIsland must be used within a IslandProvider")
  }
  return context
}

export function useIslandOnSection(
  name: string,
  ref: React.RefObject<HTMLDivElement | null>
) {
  const { isInView: currentSection, setIsInView } = useIsland()
  useEffect(() => {
    if (!ref?.current) return

    const checkLogoPosition = () => {
      if (!ref.current) return

      const logoTop = 40
      const logoBottom = 104 // 40 + 64
      const rect = ref.current.getBoundingClientRect()

      console.log(`Section ${name}:`, {
        top: rect.top,
        bottom: rect.bottom,
        logoTouches: rect.top <= logoBottom && rect.bottom >= logoTop,
      })

      // Logo touches section when any part overlaps
      const logoIntersects = rect.top <= logoBottom && rect.bottom >= logoTop

      if (logoIntersects) {
        console.log(`Setting ${name} as active`)
        setIsInView(name)
      } else if (currentSection === name && !logoIntersects) {
        console.log(`Clearing ${name} - no longer touching`)
        setIsInView(null)
      }
    }

    // Check on scroll and resize
    window.addEventListener("scroll", checkLogoPosition, { passive: true })
    window.addEventListener("resize", checkLogoPosition, { passive: true })
    // Initial check
    checkLogoPosition()

    return () => {
      window.removeEventListener("scroll", checkLogoPosition)
      window.removeEventListener("resize", checkLogoPosition)
    }
  }, [name, setIsInView, currentSection])
}
