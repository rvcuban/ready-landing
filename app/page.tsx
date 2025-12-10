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
import { PrankCountdown } from "@/components/prank-countdown"
import ScrollExperience, { SectionDivider } from "@/components/scroll-experience"
import SectionWrapper from "@/components/section-wrapper"

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
    <PrankCountdown>
      {/* Scroll Experience - Navigation dots, progress bar, particles */}
      <ScrollExperience />

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
      <main className="relative">
        {/* Hero - No wrapper, should be instantly visible */}
        <Hero />
        
        {/* Hero → Salon: Orange to Pink energy beam */}
        <SectionDivider color="#F2921D" nextColor="#B2174B" variant="energy" />
        
        {/* Salon Section with slide animation */}
        <SectionWrapper animation="slide" parallax parallaxIntensity={30}>
          <Salon />
        </SectionWrapper>
        
        {/* Salon → Servicios: Pink to Cyan arcade style */}
        <SectionDivider color="#B2174B" nextColor="#06B6D4" variant="arcade" />
        
        {/* Servicios Section with arcade animation */}
        <SectionWrapper animation="arcade" parallax parallaxIntensity={20}>
          <ServiciosTabs />
        </SectionWrapper>
        
        {/* Servicios → Scores: Cyan to Purple pixel cascade */}
        <SectionDivider color="#06B6D4" nextColor="#A855F7" variant="pixel" />
        
        {/* Scores Section with scale animation */}
        <SectionWrapper animation="scale" parallax parallaxIntensity={25}>
          <Scores />
        </SectionWrapper>
        
        {/* Scores → Pricing: Purple to Green energy beam */}
        <SectionDivider color="#A855F7" nextColor="#22C55E" variant="energy" />
        
        {/* Pricing Section with slide animation */}
        <SectionWrapper animation="slide" parallax parallaxIntensity={20}>
          <Pricing />
        </SectionWrapper>
        
        {/* Pricing → Contact: Green wave */}
        <SectionDivider color="#22C55E" nextColor="#F2921D" variant="wave" />
        
        {/* Contact Section with arcade animation */}
        <SectionWrapper animation="arcade">
          <Contact />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer />
    </PrankCountdown>
  )
}
