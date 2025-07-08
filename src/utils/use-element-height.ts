import { useCallback, useEffect, useRef, useState } from "react"

export function useElementHeight<T extends HTMLElement = HTMLElement>(
  minHeight = 0
) {
  const [height, setHeight] = useState(0)
  const ref = useRef<T>(null)

  const updateHeight = useCallback(() => {
    if (!ref.current) return
    const newHeight = Math.max(minHeight, ref.current.offsetHeight)
    setHeight(newHeight)
  }, [minHeight])

  useEffect(() => {
    if (!ref.current) return

    // Initial measurement
    updateHeight()

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updateHeight()
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [updateHeight])

  return { ref, height }
}
