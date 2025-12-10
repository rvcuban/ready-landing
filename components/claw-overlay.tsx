"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

/**
 * GANCHO ARCADE - Integrado con el diseño de READY?
 * - Grande y visible
 * - Sin teletransporte (movimiento suave horizontal con spring)
 * - Estética arcade/neón que coincide con la web
 */

export function ClawOverlay() {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  const [totalHeight, setTotalHeight] = useState(5000)
  
  // Posición X objetivo basada en scroll (serpentea suavemente)
  const [targetX, setTargetX] = useState(15)
  
  // SPRING para movimiento horizontal SUAVE (sin teletransporte)
  const smoothX = useSpring(targetX, {
    stiffness: 25,  // Muy suave
    damping: 20,    // Amortiguado
    mass: 3         // Pesado = lento
  })
  
  // Posición Y basada en scroll
  const [scrollY, setScrollY] = useState(0)
  const smoothY = useSpring(scrollY, {
    stiffness: 40,
    damping: 25,
    mass: 2
  })

  // Balanceo basado en velocidad
  const [swing, setSwing] = useState(0)
  const smoothSwing = useSpring(swing, {
    stiffness: 100,
    damping: 8
  })

  useEffect(() => {
    setMounted(true)
    
    const updateDimensions = () => {
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      setTotalHeight(docHeight - winHeight)
    }
    
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    setTimeout(updateDimensions, 500)
    
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Actualizar posiciones basadas en scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Posición Y: desde 50px hasta casi el final
      const newY = 50 + (progress * (totalHeight * 0.9))
      setScrollY(newY)
      
      // Posición X: serpentea de izquierda a derecha
      // Usando seno para movimiento ondulado natural
      const waves = 3 // Número de ondas completas en todo el scroll
      const sineWave = Math.sin(progress * Math.PI * 2 * waves)
      // Rango: 10% a 85% de la pantalla
      const newX = 47.5 + (sineWave * 37.5)
      setTargetX(newX)
      
      // Balanceo basado en velocidad
      const velocity = scrollYProgress.getVelocity()
      setSwing(Math.max(-15, Math.min(15, velocity * 3)))
    })
    
    return () => unsubscribe()
  }, [scrollYProgress, totalHeight])

  if (!mounted) return null

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          CABLE - Siempre conecta el techo con el gancho
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        className="fixed top-0 pointer-events-none"
        style={{
          left: smoothX,
          width: '8px',
          height: smoothY,
          x: "-50%",
          zIndex: 45,
          background: `linear-gradient(to bottom, 
            #1a1a1a 0%, 
            #444 20%, 
            #666 50%, 
            #444 80%, 
            #1a1a1a 100%
          )`,
          boxShadow: `
            -2px 0 4px rgba(0,0,0,0.5),
            2px 0 4px rgba(0,0,0,0.5),
            inset 2px 0 2px rgba(255,255,255,0.1)
          `,
        }}
      >
        {/* Textura del cable */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 8px,
              rgba(0,0,0,0.3) 8px,
              rgba(0,0,0,0.3) 10px
            )`
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          MECANISMO RIEL SUPERIOR - Se mueve con el gancho
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        className="fixed top-0 pointer-events-none"
        style={{
          left: smoothX,
          x: "-50%",
          zIndex: 46,
        }}
      >
        {/* Riel fijo en la parte superior */}
        <div 
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-screen h-6"
          style={{
            background: 'linear-gradient(to bottom, #222 0%, #111 100%)',
            borderBottom: '3px solid #333',
          }}
        />
        
        {/* Carro móvil */}
        <div 
          className="relative w-32 h-12"
          style={{
            background: 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%)',
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          {/* Banda naranja */}
          <div 
            className="absolute top-0 left-0 right-0 h-2"
            style={{
              background: 'linear-gradient(to right, #cc6600, #F2921D, #ff8c00, #F2921D, #cc6600)',
              boxShadow: '0 0 10px #F2921D, 0 0 20px #F2921D50',
            }}
          />
          
          {/* Ruedas */}
          <div className="absolute -top-1 left-3 w-4 h-4 rounded-full bg-gradient-to-b from-gray-500 to-gray-700 border-2 border-gray-800" />
          <div className="absolute -top-1 right-3 w-4 h-4 rounded-full bg-gradient-to-b from-gray-500 to-gray-700 border-2 border-gray-800" />
          
          {/* Luz central */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <div 
              className="w-4 h-4 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, #F2921D 0%, #cc6600 100%)',
                boxShadow: '0 0 15px #F2921D, 0 0 30px #F2921D80',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          GANCHO PRINCIPAL - Grande y visible
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          rotate: smoothSwing,
          transformOrigin: "top center",
          zIndex: 44,
        }}
      >
        <svg 
          width="180" 
          height="220" 
          viewBox="0 0 180 220"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.6))',
          }}
        >
          <defs>
            {/* Gradiente cromado */}
            <linearGradient id="chromeClaw" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2a2a2a"/>
              <stop offset="20%" stopColor="#5a5a5a"/>
              <stop offset="35%" stopColor="#8a8a8a"/>
              <stop offset="50%" stopColor="#b0b0b0"/>
              <stop offset="65%" stopColor="#8a8a8a"/>
              <stop offset="80%" stopColor="#5a5a5a"/>
              <stop offset="100%" stopColor="#2a2a2a"/>
            </linearGradient>
            
            {/* Gradiente naranja neón */}
            <linearGradient id="neonOrange" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff9500"/>
              <stop offset="50%" stopColor="#F2921D"/>
              <stop offset="100%" stopColor="#cc6600"/>
            </linearGradient>
            
            {/* Filtro glow naranja */}
            <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feFlood floodColor="#F2921D" floodOpacity="0.8"/>
              <feComposite in2="blur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Gradiente cuerpo */}
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#333"/>
              <stop offset="50%" stopColor="#1a1a1a"/>
              <stop offset="100%" stopColor="#0d0d0d"/>
            </linearGradient>
          </defs>

          {/* ══════ CUERPO MOTOR ══════ */}
          <g transform="translate(90, 10)">
            {/* Carcasa principal */}
            <rect x="-55" y="0" width="110" height="60" rx="8" fill="url(#bodyGradient)" stroke="#444" strokeWidth="2"/>
            
            {/* Banda naranja superior con glow */}
            <rect x="-55" y="5" width="110" height="6" fill="url(#neonOrange)" filter="url(#orangeGlow)"/>
            
            {/* Ventilación izquierda */}
            <rect x="-48" y="18" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="-48" y="25" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="-48" y="32" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="-48" y="39" width="15" height="3" rx="1" fill="#0a0a0a"/>
            
            {/* Ventilación derecha */}
            <rect x="33" y="18" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="33" y="25" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="33" y="32" width="15" height="3" rx="1" fill="#0a0a0a"/>
            <rect x="33" y="39" width="15" height="3" rx="1" fill="#0a0a0a"/>
            
            {/* Panel central */}
            <rect x="-25" y="15" width="50" height="35" rx="4" fill="#0d0d0d" stroke="#333" strokeWidth="1"/>
            
            {/* Luz principal */}
            <circle cx="0" cy="32" r="12" fill="#111"/>
            <circle cx="0" cy="32" r="9" fill="url(#neonOrange)" filter="url(#orangeGlow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* LEDs pequeños */}
            <circle cx="-12" cy="20" r="3" fill="#00ff00" opacity="0.9">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="12" cy="20" r="3" fill="#ff3333" opacity="0.7"/>
            
            {/* Tornillos */}
            <circle cx="-45" cy="10" r="4" fill="#222" stroke="#444" strokeWidth="1"/>
            <circle cx="45" cy="10" r="4" fill="#222" stroke="#444" strokeWidth="1"/>
            <circle cx="-45" cy="50" r="4" fill="#222" stroke="#444" strokeWidth="1"/>
            <circle cx="45" cy="50" r="4" fill="#222" stroke="#444" strokeWidth="1"/>
            
            {/* Texto READY? */}
            <text x="0" y="55" textAnchor="middle" fill="#F2921D" fontSize="8" fontFamily="monospace" fontWeight="bold" filter="url(#orangeGlow)">
              READY?
            </text>
          </g>

          {/* ══════ ARTICULACIÓN ══════ */}
          <g transform="translate(90, 75)">
            <ellipse cx="0" cy="0" rx="40" ry="12" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
            <ellipse cx="0" cy="-3" rx="35" ry="9" fill="url(#chromeClaw)"/>
            
            {/* Eje central */}
            <rect x="-8" y="5" width="16" height="18" rx="3" fill="url(#chromeClaw)"/>
            
            {/* Puntos de pivote */}
            <circle cx="-28" cy="5" r="6" fill="#222" stroke="#444" strokeWidth="2"/>
            <circle cx="28" cy="5" r="6" fill="#222" stroke="#444" strokeWidth="2"/>
            <circle cx="0" cy="8" r="5" fill="#222" stroke="#444" strokeWidth="2"/>
          </g>

          {/* ══════ BRAZOS DEL GANCHO ══════ */}
          
          {/* Brazo Izquierdo */}
          <g transform="translate(62, 90)">
            <path 
              d="M28 0 C20 15, 10 40, 5 60 C0 80, -10 100, -5 115 C0 125, 15 125, 20 115 C25 105, 20 85, 18 70"
              fill="url(#chromeClaw)"
              stroke="#333"
              strokeWidth="1"
            />
            {/* Articulación */}
            <circle cx="10" cy="55" r="7" fill="#222" stroke="#444" strokeWidth="2"/>
            {/* Punta de goma naranja */}
            <ellipse cx="8" cy="118" rx="10" ry="12" fill="#1a1a1a"/>
            <ellipse cx="8" cy="118" rx="7" ry="9" fill="url(#neonOrange)" opacity="0.9"/>
          </g>
          
          {/* Brazo Derecho */}
          <g transform="translate(118, 90)">
            <path 
              d="M-28 0 C-20 15, -10 40, -5 60 C0 80, 10 100, 5 115 C0 125, -15 125, -20 115 C-25 105, -20 85, -18 70"
              fill="url(#chromeClaw)"
              stroke="#333"
              strokeWidth="1"
            />
            {/* Articulación */}
            <circle cx="-10" cy="55" r="7" fill="#222" stroke="#444" strokeWidth="2"/>
            {/* Punta de goma naranja */}
            <ellipse cx="-8" cy="118" rx="10" ry="12" fill="#1a1a1a"/>
            <ellipse cx="-8" cy="118" rx="7" ry="9" fill="url(#neonOrange)" opacity="0.9"/>
          </g>
          
          {/* Brazo Central (trasero) */}
          <g transform="translate(90, 95)" opacity="0.5">
            <path 
              d="M0 0 C-2 20, -3 45, 0 70 C3 95, 0 105, 0 115"
              fill="url(#chromeClaw)"
              stroke="#333"
              strokeWidth="1"
            />
            <ellipse cx="0" cy="115" rx="6" ry="8" fill="#1a1a1a"/>
            <ellipse cx="0" cy="115" rx="4" ry="6" fill="url(#neonOrange)" opacity="0.7"/>
          </g>
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          SOMBRA PROYECTADA
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        className="fixed pointer-events-none rounded-[50%]"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: 230,
          width: 120,
          height: 30,
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)',
          filter: 'blur(10px)',
          zIndex: 43,
        }}
      />
    </>
  )
}
