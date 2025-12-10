"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#salon", label: "El Salón" },
  { href: "#servicios", label: "Servicios" },
  { href: "#scores", label: "High Scores" },
  { href: "#pricing", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
]

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className={cn(
          `fixed top-0 left-0 right-0 z-50 
           transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`,
          isScrolled 
            ? "bg-ready-black/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <span className="font-display text-2xl font-bold text-ready-cream">
              READY<span className="text-ready-orange">?</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="
                  text-sm text-ready-cream/70 hover:text-ready-orange 
                  transition-colors duration-500 relative group
                "
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.6, ease: easeOutExpo }}
              >
                {link.label}
                <span className="
                  absolute -bottom-1 left-0 w-0 h-0.5 bg-ready-orange 
                  group-hover:w-full 
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                " />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#pricing">
              <Button variant="arcade" size="sm">
                INSERT COIN
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ready-cream p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed inset-0 z-40 bg-ready-black/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    text-2xl font-display text-ready-cream 
                    hover:text-ready-orange transition-colors duration-500
                  "
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.5, ease: easeOutExpo }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: easeOutExpo }}
              >
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="arcade" 
                    size="lg" 
                    className="mt-4"
                  >
                    INSERT COIN
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
