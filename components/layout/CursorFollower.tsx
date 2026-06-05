"use client"

import { useEffect, useRef } from "react"

export function CursorFollower() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const spotRef  = useRef<HTMLDivElement>(null)

  const pos      = useRef({ x: -200, y: -200 })
  const ring     = useRef({ x: -200, y: -200 })
  const hovered  = useRef(false)
  const clicking = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }
      if (spotRef.current) {
        spotRef.current.style.left = `${e.clientX}px`
        spotRef.current.style.top  = `${e.clientY}px`
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      hovered.current = !!(t.closest("a, button, [data-cursor-hover], [role='button']"))
      if (ringRef.current) {
        ringRef.current.classList.toggle("hover", hovered.current)
      }
    }

    const onDown = () => {
      clicking.current = true
      if (ringRef.current) ringRef.current.classList.add("click")
    }
    const onUp = () => {
      clicking.current = false
      if (ringRef.current) ringRef.current.classList.remove("click")
    }

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = "1"
      if (ringRef.current) ringRef.current.style.opacity = "1"
    }
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = "0"
      if (ringRef.current) ringRef.current.style.opacity = "0"
    }

    let raf: number
    const tick = () => {
      const lerp = 0.12
      ring.current.x += (pos.current.x - ring.current.x) * lerp
      ring.current.y += (pos.current.y - ring.current.y) * lerp

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top  = `${ring.current.y}px`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener("mousemove",  onMove)
    window.addEventListener("mouseover",  onOver)
    window.addEventListener("mousedown",  onDown)
    window.addEventListener("mouseup",    onUp)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove",  onMove)
      window.removeEventListener("mouseover",  onOver)
      window.removeEventListener("mousedown",  onDown)
      window.removeEventListener("mouseup",    onUp)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <>
      {/* Dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        className="cursor-dot fixed hidden lg:block"
        style={{ opacity: 0, willChange: "left, top" }}
      />

      {/* Ring — lags behind slightly */}
      <div
        ref={ringRef}
        className="cursor-ring fixed hidden lg:block"
        style={{ opacity: 0, willChange: "left, top" }}
      />

      {/* Ambient light spot */}
      <div
        ref={spotRef}
        className="fixed pointer-events-none z-[9990] hidden lg:block"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(127,207,224,0.025) 0%, transparent 65%)",
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
          transition: "left 0.09s linear, top 0.09s linear",
          borderRadius: "50%",
        }}
      />
    </>
  )
}
