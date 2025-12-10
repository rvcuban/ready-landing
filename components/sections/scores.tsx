"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  Zap, 
  Play, 
  X,
  Volume2,
  VolumeX
} from "lucide-react"
import Image from "next/image"

const stats = [
  { 
    icon: Trophy, 
    value: 50, 
    suffix: "+", 
    label: "Marcas transformadas",
    description: "Proyectos exitosos completados"
  },
  { 
    icon: TrendingUp, 
    value: 340, 
    suffix: "%", 
    label: "Visitas promedio",
    description: "Retorno sobre inversión"
  },
  { 
    icon: Users, 
    value: 60, 
    suffix: "M", 
    label: "Impactos generados",
    description: "Personas alcanzadas"
  },
  { 
    icon: Clock, 
    value: 4, 
    suffix: "+", 
    label: "Años de experiencia",
    description: "Jugando en primera división"
  },
]

const testimonials = [
  {
    quote: "READY? transformó nuestra presencia digital. En 6 meses, triplicamos nuestros leads cualificados.",
    author: "María García",
    role: "CEO, TechStart",
    rating: 5,
    result: "+300% leads",
    // Video opcional - si tiene video, mostrar thumbnail con play
    hasVideo: false,
    videoUrl: "",
    thumbnail: ""
  },
  {
    quote: "El mejor equipo con el que hemos trabajado. Entienden de negocio, no solo de marketing.",
    author: "Carlos Ruiz",
    role: "Director Marketing, FoodCo",
    rating: 5,
    result: "5.8x ROAS",
    hasVideo: false,
    videoUrl: "",
    thumbnail: ""
  },
  {
    quote: "Pasamos de ser invisibles a liderar nuestro sector. El rebranding fue un antes y después.",
    author: "Ana Martínez",
    role: "Fundadora, BeautyLab",
    rating: 5,
    result: "+450% engagement",
    hasVideo: false,
    videoUrl: "",
    thumbnail: ""
  },
]

// Videos de casos de éxito / colaboraciones
// INSTRUCCIONES: Añade los videos del cliente aquí
// - videoUrl: URL del video (puede ser local "/videos/ejemplo.mp4" o externo)
// - thumbnail: Imagen de preview del video
// - title: Nombre del proyecto o colaborador
// - subtitle: Breve descripción
const videoShowcases = [
  {
    id: 1,
    videoUrl: "/videos/caso-1.mp4",
    thumbnail: "/images/video-thumb-1.jpg",
    title: "Caso de Éxito #1",
    subtitle: "Colaboración Huawei",
    result: "+200% ventas"
  },
  {
    id: 2,
    videoUrl: "/videos/caso-2.mp4",
    thumbnail: "/images/video-thumb-2.jpg",
    title: "Caso de Éxito #2",
    subtitle: "Proyecto viral",
    result: "1M+ views"
  },
  {
    id: 3,
    videoUrl: "/videos/caso-3.mp4",
    thumbnail: "/images/video-thumb-3.jpg",
    title: "Caso de Éxito #3",
    subtitle: "Transformación digital",
    result: "10x ROI"
  },
]

// Premium Easing
const easeOutExpo = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: easeOutExpo 
    }
  }
}

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

// Video Modal Component - Using Portal to render outside normal DOM flow
function VideoModal({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title 
}: { 
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = useState(false)

  // Wait for client mount
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Stable close handler
  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.width = ""
    onClose()
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      // Store scroll position and lock
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
    
    return () => {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, handleClose])

  // Don't render on server or if not open
  if (!mounted || !isOpen) return null

  // Render using Portal to document.body
  return createPortal(
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ zIndex: 99999 }}
      onClick={handleClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleClose()
        }}
        className="absolute top-4 right-4 w-14 h-14 rounded-full 
                  bg-ready-orange text-black
                  flex items-center justify-center
                  shadow-lg active:scale-95 touch-manipulation"
        style={{ zIndex: 100000 }}
        aria-label="Cerrar video"
      >
        <X className="w-8 h-8" strokeWidth={3} />
      </button>

      {/* Video Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          playsInline
          autoPlay
          muted={false}
          className="max-w-full max-h-full rounded-lg"
          style={{ 
            maxWidth: "min(100%, 400px)",
            maxHeight: "calc(100vh - 120px)",
            objectFit: "contain"
          }}
        />
      </div>
    </div>,
    document.body
  )
}

// Video Thumbnail Card Component
function VideoCard({ 
  video, 
  index, 
  isInView, 
  onPlay 
}: { 
  video: typeof videoShowcases[0]
  index: number
  isInView: boolean
  onPlay: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ 
        duration: 0.7, 
        delay: 0.3 + index * 0.1, 
        ease: easeOutExpo 
      }}
      className="relative group cursor-pointer"
      onClick={onPlay}
    >
      {/* Vertical aspect ratio for social media content */}
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden
                     border border-white/10 
                     group-hover:border-ready-orange/50
                     transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                     group-hover:shadow-[0_20px_60px_rgba(242,146,29,0.2)]">
        
        {/* Thumbnail / Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-ready-black-light to-ready-black">
          {video.thumbnail && (
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover opacity-80 group-hover:opacity-100
                        group-hover:scale-105
                        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          )}
          {/* Placeholder pattern siempre visible como fondo */}
          <div className="absolute inset-0 -z-10
                         bg-[linear-gradient(45deg,transparent_25%,rgba(242,146,29,0.05)_25%,rgba(242,146,29,0.05)_50%,transparent_50%,transparent_75%,rgba(242,146,29,0.05)_75%)]
                         bg-[length:20px_20px]" />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t 
                       from-ready-black via-ready-black/40 to-transparent
                       opacity-80 group-hover:opacity-60
                       transition-opacity duration-500" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-ready-orange/30 
                           animate-ping opacity-0 group-hover:opacity-75" 
                 style={{ animationDuration: '2s' }} />
            
            {/* Play Button */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                           bg-ready-orange/90 backdrop-blur-sm
                           border-2 border-ready-orange
                           flex items-center justify-center
                           group-hover:bg-ready-orange
                           group-hover:shadow-[0_0_40px_rgba(242,146,29,0.5)]
                           transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-ready-black fill-ready-black ml-1" />
            </div>
          </motion.div>
        </div>

        {/* Arcade Corner Decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 
                       border-t border-l border-ready-orange/50
                       group-hover:border-ready-orange
                       transition-colors duration-300" />
        <div className="absolute top-2 right-2 w-4 h-4 
                       border-t border-r border-ready-orange/50
                       group-hover:border-ready-orange
                       transition-colors duration-300" />
        <div className="absolute bottom-2 left-2 w-4 h-4 
                       border-b border-l border-ready-orange/50
                       group-hover:border-ready-orange
                       transition-colors duration-300" />
        <div className="absolute bottom-2 right-2 w-4 h-4 
                       border-b border-r border-ready-orange/50
                       group-hover:border-ready-orange
                       transition-colors duration-300" />

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <h4 className="font-display font-bold text-ready-cream text-lg">
                {video.title}
              </h4>
              <p className="text-ready-cream/60 text-sm">
                {video.subtitle}
              </p>
            </div>
            <Badge variant="default" className="text-[10px] shrink-0">
              <Zap className="w-3 h-3 mr-1" />
              {video.result}
            </Badge>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ stat, index, isInView }: { 
  stat: typeof stats[0]
  index: number
  isInView: boolean 
}) {
  const count = useCounter(stat.value, 2200, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeOutExpo }}
      className="relative group"
    >
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 
                     hover:border-ready-orange/40 
                     transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                     hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-ready-orange/15 
                       flex items-center justify-center mb-4 sm:mb-6
                       group-hover:bg-ready-orange/25 
                       transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                       group-hover:scale-105">
          <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-ready-orange" />
        </div>

        {/* Value */}
        <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ready-cream mb-2">
          {stat.value % 1 !== 0 ? count / 10 : count}
          <span className="text-ready-orange">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-lg sm:text-xl font-semibold text-ready-cream mb-1">
          {stat.label}
        </h3>
        <p className="text-xs sm:text-sm text-ready-cream/50">
          {stat.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Scores() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Video Modal State
  const [activeVideo, setActiveVideo] = useState<{
    url: string
    title: string
  } | null>(null)

  return (
    <section
      id="scores"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ready-black-light to-ready-black" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ready-orange/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-ready-pink/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative mx-auto px-6">
        {/* Section Header - MAXIMALISTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          {/* Micro label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ready-cream/40">
              <span className="w-8 h-px bg-purple-500/50" />
              LEVEL 03
              <span className="w-8 h-px bg-purple-500/50" />
            </span>
          </motion.div>
          
          {/* Giant condensed title */}
          <motion.h2 
            variants={itemVariants}
            className="font-display uppercase leading-[0.85] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              transform: 'scaleY(1.1)',
            }}
          >
            <span className="text-ready-cream">HIGH </span>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #A855F7, #F2921D)' }}>
              SCORES
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-ready-cream/50 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Los números no mienten. Estos son los récords que hemos ayudado 
            a nuestros clientes a 
            <span className="text-ready-orange font-medium"> romper</span>.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Video Showcases Section */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <Badge variant="pixel" className="mb-4">
              <Play className="w-3 h-3 mr-2" />
              REPLAYS
            </Badge>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ready-cream mb-4">
              Mira el <span className="text-ready-orange">gameplay</span>
            </h3>
            <p className="text-ready-cream/60 max-w-lg mx-auto">
              Videos reales de colaboraciones y resultados con nuestros clientes.
            </p>
          </div>

          {/* Grid optimizado para videos verticales */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6
                         max-w-6xl mx-auto">
            {videoShowcases.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                isInView={isInView}
                onPlay={() => setActiveVideo({
                  url: video.videoUrl,
                  title: video.title
                })}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
        >
          <h3 className="font-display text-2xl font-bold text-center text-ready-cream mb-12">
            Lo que dicen los <span className="text-ready-orange">jugadores</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6 + index * 0.08, 
                  ease: easeOutExpo 
                }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10
                          hover:border-ready-orange/25 
                          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                          hover:shadow-[0_16px_32px_rgba(0,0,0,0.25)]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ready-orange text-ready-orange" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-ready-cream/80 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-ready-cream">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-ready-cream/50">
                      {testimonial.role}
                    </p>
                  </div>
                  <Badge variant="default" className="text-[10px]">
                    <Zap className="w-3 h-3 mr-1" />
                    {testimonial.result}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoUrl={activeVideo?.url || ""}
        title={activeVideo?.title || ""}
      />
    </section>
  )
}
