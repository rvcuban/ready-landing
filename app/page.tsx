"use client"

import { useEffect, useState } from "react"
import { 
  Header, 
  Hero, 
  Salon, 
  ServiciosTabs, 
  Scores, 
  Pricing, 
  Contact, 
  Footer 
} from "@/components/sections"

// Konami Code Easter Egg
const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", 
  "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", 
  "ArrowLeft", "ArrowRight", 
  "KeyB", "KeyA"
]

export default function Home() {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [konamiIndex, setKonamiIndex] = useState(0)

  // Konami Code listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === KONAMI_CODE[konamiIndex]) {
        const newIndex = konamiIndex + 1
        if (newIndex === KONAMI_CODE.length) {
          setKonamiActivated(true)
          setKonamiIndex(0)
          // Easter egg effect
          document.body.classList.add("konami-mode")
          setTimeout(() => {
            document.body.classList.remove("konami-mode")
            setKonamiActivated(false)
          }, 5000)
        } else {
          setKonamiIndex(newIndex)
        }
      } else {
        setKonamiIndex(0)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiIndex])

  // Smooth scroll setup
  useEffect(() => {
    // Add smooth scrolling to all anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
          // Update URL without jumping
          window.history.pushState(null, "", target.hash)
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick as EventListener)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener)
      })
    }
  }, [])

  return (
    <>
      {/* Konami Easter Egg Overlay */}
      {konamiActivated && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <div className="text-center animate-bounce">
            <p className="font-pixel text-4xl text-ready-orange mb-4">
              🎮 LEVEL UP! 🎮
            </p>
            <p className="font-pixel text-lg text-ready-cream">
              +1000 POINTS
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* Section Divider */}
        <div className="section-divider" />
        
        <Salon />
        
        <div className="section-divider" />
        
        <ServiciosTabs />
        
        <div className="section-divider" />
        
        <Scores />
        
        <div className="section-divider" />
        
        <Pricing />
        
        <div className="section-divider" />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
