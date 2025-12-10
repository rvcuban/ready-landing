"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { 
  Gamepad2, 
  Zap, 
  Target, 
  MessageSquare, 
  ChevronUp,
  Sparkles
} from "lucide-react"

// ============================================
// Secciones de la página
// ============================================
const sections = [
  { id: "hero", name: "START", icon: Gamepad2, color: "#F2921D" },
  { id: "salon", name: "SALÓN", icon: Sparkles, color: "#B2174B" },
  { id: "servicios", name: "SERVICIOS", icon: Zap, color: "#06B6D4" },
  { id: "scores", name: "SCORES", icon: Target, color: "#A855F7" },
  { id: "contacto", name: "CONTACTO", icon: MessageSquare, color: "#22C55E" },
]

// ============================================
// Floating Particles Component
// ============================================
const FloatingParticles = () => {
  // Menos partículas en móvil para mejor rendimiento
  const [particleCount, setParticleCount] = useState(8)
  
  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 5 : 12)
    }
    updateParticleCount()
    window.addEventListener('resize', updateParticleCount)
    return () => window.removeEventListener('resize', updateParticleCount)
  }, [])

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden hidden sm:block">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            background: `linear-gradient(135deg, #F2921D, #B2174B)`,
            opacity: 0.3,
          }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0, 0.4, 0.4, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration + 5,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// ============================================
// Progress Bar Component (Top)
// ============================================
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #F2921D, #B2174B, #06B6D4, #A855F7, #22C55E)",
      }}
    />
  )
}

// ============================================
// Section Dots Navigation
// ============================================
const SectionDotsNav = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)

      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2

      let currentSection = "hero"
      let minDistance = Infinity

      // Find the section closest to the center of the viewport
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height / 2
          const distance = Math.abs(sectionCenter - viewportCenter)
          
          // Check if section is at least partially visible
          const isVisible = rect.top < viewportHeight && rect.bottom > 0
          
          if (isVisible && distance < minDistance) {
            minDistance = distance
            currentSection = section.id
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    
    // Also run on resize in case sections change size
    window.addEventListener("resize", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-3"
        >
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center justify-end"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{
                    backgroundColor: section.color,
                    color: "#0E0F14",
                    boxShadow: `0 0 20px ${section.color}50`,
                  }}
                >
                  {section.name}
                </motion.span>

                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? section.color : "rgba(255,255,255,0.05)",
                    boxShadow: isActive ? `0 0 25px ${section.color}60` : "none",
                    border: `2px solid ${isActive ? section.color : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <Icon 
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: isActive ? "#0E0F14" : "rgba(255,241,230,0.4)" }}
                  />
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ border: `2px solid ${section.color}` }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {index < sections.length - 1 && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-3"
                    style={{
                      backgroundColor: isActive ? section.color : "rgba(255,255,255,0.1)",
                      transition: "background-color 0.5s",
                    }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

// ============================================
// Scroll to Top Button
// ============================================
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.3)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[90] w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center group"
          style={{
            background: "linear-gradient(135deg, #F2921D, #B2174B)",
            boxShadow: "0 0 30px rgba(242,146,29,0.3)",
          }}
        >
          <ChevronUp className="w-6 h-6 text-ready-black" />
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #F2921D, #B2174B)",
              filter: "blur(15px)",
              zIndex: -1,
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-white/20" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ============================================
// Section Transition Overlay - Creates depth between sections
// ============================================
const SectionTransitionOverlay = () => {
  const { scrollY } = useScroll()
  const [currentColor, setCurrentColor] = useState("#F2921D")

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sectionElements = sections.map(s => ({
      ...s,
      element: document.getElementById(s.id)
    })).filter(s => s.element)

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const { element, color } = sectionElements[i]
      if (element && latest >= element.offsetTop - 200) {
        setCurrentColor(color)
        break
      }
    }
  })

  return (
    <>
      {/* Side gradient lines - hidden on mobile */}
      <div className="fixed left-0 top-0 bottom-0 w-[2px] z-[15] pointer-events-none hidden md:block">
        <motion.div 
          className="h-full w-full"
          style={{ 
            background: `linear-gradient(180deg, transparent, ${currentColor}40, transparent)`,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-[2px] z-[15] pointer-events-none hidden md:block">
        <motion.div 
          className="h-full w-full"
          style={{ 
            background: `linear-gradient(180deg, transparent, ${currentColor}40, transparent)`,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Corner accents - hidden on mobile */}
      <div 
        className="fixed top-20 left-4 w-16 h-16 pointer-events-none z-[15] opacity-20 hidden lg:block"
        style={{
          borderLeft: `2px solid ${currentColor}`,
          borderTop: `2px solid ${currentColor}`,
          transition: "border-color 0.5s ease",
        }}
      />
      <div 
        className="fixed top-20 right-4 w-16 h-16 pointer-events-none z-[15] opacity-20 hidden lg:block"
        style={{
          borderRight: `2px solid ${currentColor}`,
          borderTop: `2px solid ${currentColor}`,
          transition: "border-color 0.5s ease",
        }}
      />
    </>
  )
}

// ============================================
// Energy Lines Between Sections
// ============================================
export const SectionDivider = ({ 
  color = "#F2921D", 
  variant = "wave",
  nextColor = "#B2174B"
}: { 
  color?: string
  variant?: "wave" | "pixel" | "arcade" | "energy"
  nextColor?: string
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  if (variant === "energy") {
    return (
      <motion.div 
        ref={ref}
        className="relative h-32 -my-16 z-20 overflow-hidden"
        style={{ opacity }}
      >
        {/* Central energy beam */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="h-[2px] w-full max-w-4xl mx-auto relative"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, ${nextColor}, transparent)`,
            }}
          >
            {/* Traveling pulse */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-20 h-[4px] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
              }}
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 6 + i * 2,
              height: 6 + i * 2,
              left: `${15 + i * 18}%`,
              backgroundColor: i % 2 === 0 ? color : nextColor,
              boxShadow: `0 0 15px ${i % 2 === 0 ? color : nextColor}`,
            }}
            animate={{
              y: [0, -15, 0, 15, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    )
  }

  if (variant === "wave") {
    return (
      <motion.div 
        ref={ref}
        className="relative h-24 -my-12 z-10 overflow-hidden"
        style={{ opacity, scale }}
      >
        <svg 
          className="absolute w-full h-full" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
            fill={color}
            fillOpacity="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: i % 2 === 0 ? color : nextColor }}
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>
    )
  }

  if (variant === "pixel") {
    return (
      <motion.div 
        ref={ref}
        className="relative h-16 -my-8 z-10 flex items-center justify-center gap-1 overflow-hidden"
        style={{ opacity }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: i % 3 === 0 ? color : i % 3 === 1 ? nextColor : `${color}50` }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            whileInView={{ 
              opacity: Math.random() * 0.5 + 0.3,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.02,
              type: "spring",
            }}
          />
        ))}
      </motion.div>
    )
  }

  // Arcade variant
  return (
    <motion.div 
      ref={ref}
      className="relative h-20 -my-10 z-10 overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 flex items-center">
        <motion.div
          className="h-[2px] flex-1"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${color}, ${nextColor}, transparent)` 
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center relative"
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${nextColor})`,
            boxShadow: `0 0 30px ${color}50`,
          }}
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Sparkles className="w-5 h-5 text-ready-black" />
          
          {/* Orbiting dots */}
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div 
              className="w-2 h-2 rounded-full absolute"
              style={{ 
                backgroundColor: nextColor,
                transform: "translateX(24px)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ============================================
// Main Scroll Experience Component
// ============================================
export default function ScrollExperience() {
  return (
    <>
      <FloatingParticles />
      <SectionDotsNav />
      <ScrollToTopButton />
      <SectionTransitionOverlay />
    </>
  )
}
