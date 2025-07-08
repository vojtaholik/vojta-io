import { useEffect, useRef, useState } from "react"

export function useFitText(scale = 10) {
  const ref = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState("1rem")

  useEffect(() => {
    if (!ref.current) return

    const resize = () => {
      const el = ref.current
      const width = el?.parentElement?.offsetWidth || 0
      if (width) setFontSize(`${width / scale}px`)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(ref.current.parentElement!)
    resize()

    return () => ro.disconnect()
  }, [scale])

  return { ref, fontSize }
}
