"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  animation?: "fade" | "slide" | "scale" | "arcade"
  parallax?: boolean
  parallaxIntensity?: number
}

export default function SectionWrapper({ 
  children, 
  className = "",
  id,
  animation = "fade",
  parallax = false,
  parallaxIntensity = 50,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-10% 0px -10% 0px" 
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [parallax ? parallaxIntensity : 0, parallax ? -parallaxIntensity : 0]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  )

  const animationVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    },
    slide: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    },
    arcade: {
      hidden: { 
        opacity: 0, 
        y: 40,
        filter: "blur(10px)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        transition: { 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.1
        }
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants[animation]}
      style={{ 
        y: parallax ? y : 0,
      }}
    >
      <motion.div 
        style={{ 
          opacity: parallax ? opacity : 1,
          scale: parallax ? scale : 1,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

// ============================================
// Animated Content Blocks
// ============================================
interface AnimatedBlockProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function AnimatedBlock({ 
  children, 
  delay = 0,
  className = "",
  direction = "up"
}: AnimatedBlockProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffsets[direction],
        filter: "blur(8px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// Staggered Grid Animation
// ============================================
interface StaggeredGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredGrid({ 
  children, 
  className = "",
  staggerDelay = 0.08
}: StaggeredGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          scale: 0.9,
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// Text Reveal Animation
// ============================================
interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({ 
  children, 
  className = "",
  delay = 0
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={`inline-block overflow-hidden ${className}`}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

// ============================================
// Glowing Line Animation
// ============================================
interface GlowingLineProps {
  color?: string
  className?: string
  direction?: "horizontal" | "vertical"
}

export function GlowingLine({ 
  color = "#F2921D",
  className = "",
  direction = "horizontal"
}: GlowingLineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        height: direction === "horizontal" ? 2 : "100%",
        width: direction === "horizontal" ? "100%" : 2,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: color }}
        initial={{ 
          scaleX: direction === "horizontal" ? 0 : 1,
          scaleY: direction === "vertical" ? 0 : 1,
        }}
        animate={isInView ? { 
          scaleX: 1,
          scaleY: 1,
        } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute"
        style={{
          width: direction === "horizontal" ? 40 : "100%",
          height: direction === "horizontal" ? "100%" : 40,
          background: `linear-gradient(${
            direction === "horizontal" ? "90deg" : "180deg"
          }, transparent, ${color}, transparent)`,
          boxShadow: `0 0 20px ${color}`,
        }}
        initial={{ 
          x: direction === "horizontal" ? "-100%" : 0,
          y: direction === "vertical" ? "-100%" : 0,
        }}
        animate={isInView ? {
          x: direction === "horizontal" ? "400%" : 0,
          y: direction === "vertical" ? "400%" : 0,
        } : {}}
        transition={{ 
          duration: 1.5, 
          delay: 0.5,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2
        }}
      />
    </motion.div>
  )
}
