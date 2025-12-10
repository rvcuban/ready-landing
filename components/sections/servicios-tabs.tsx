"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Gamepad2, 
  Zap, 
  ChevronRight, 
  Magnet, 
  Target, 
  Rocket, 
  Puzzle, 
  Crown 
} from "lucide-react"

// ============================================
// SVG Arcade Machine Components (Compactas)
// ============================================

const GanchoMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="55" width="150" height="210" rx="10" 
          fill="url(#cabinetGradient)" stroke="#F2921D" strokeWidth="3"/>
    <rect x="30" y="60" width="140" height="200" rx="8" fill="#0a0b10"/>
    <rect x="40" y="75" width="120" height="90" rx="6" fill="#1a1b22"/>
    <rect x="48" y="83" width="104" height="74" rx="4" fill="#0E0F14"/>
    <rect x="48" y="83" width="104" height="74" rx="4" 
          fill="url(#screenGlowOrange)" opacity="0.6"/>
    <g transform="translate(100, 115)">
      <path d="M20 -15 L20 15 C20 32 10 42 0 42 C-10 42 -20 32 -20 15 L-20 -15" 
            fill="none" stroke="#F2921D" strokeWidth="8" strokeLinecap="round">
        <animate attributeName="stroke-opacity" 
                 values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <rect x="-28" y="-25" width="16" height="15" rx="3" fill="#F2921D"/>
      <rect x="12" y="-25" width="16" height="15" rx="3" fill="#F2921D"/>
      <circle cx="0" cy="55" r="3" fill="#FFF1E6">
        <animate attributeName="cy" 
                 values="70;45;70" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" 
                 values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
    </g>
    <rect x="40" y="175" width="120" height="75" rx="6" fill="#1a1b22"/>
    <ellipse cx="70" cy="210" rx="18" ry="12" fill="#0E0F14"/>
    <circle cx="70" cy="185" r="10" fill="#F2921D">
      <animate attributeName="fill" 
               values="#F2921D;#ffb54d;#F2921D" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="115" cy="200" r="12" fill="#F2921D">
      <animate attributeName="r" 
               values="12;13;12" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="145" cy="205" r="10" fill="#B2174B"/>
    <rect x="35" y="15" width="130" height="38" rx="6" fill="#F2921D"/>
    <rect x="40" y="20" width="120" height="28" rx="4" fill="#0E0F14"/>
    <text x="100" y="40" textAnchor="middle" fill="#F2921D" fontSize="16" 
          fontWeight="bold" fontFamily="monospace">GANCHO</text>
    <circle cx="42" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" 
               values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" 
               values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.15s"/>
    </circle>
    <circle cx="158" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" 
               values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.3s"/>
    </circle>
    <defs>
      <linearGradient id="cabinetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="screenGlowOrange" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F2921D" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#F2921D" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#0E0F14" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
)

const PinballMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <path d="M25 75 L175 75 L165 265 L35 265 Z" 
          fill="url(#cabinetPink)" stroke="#B2174B" strokeWidth="3"/>
    <path d="M32 82 L168 82 L159 258 L41 258 Z" fill="#0a0b10"/>
    <path d="M42 95 L158 95 L150 245 L50 245 Z" fill="#0E0F14"/>
    <path d="M42 95 L158 95 L150 245 L50 245 Z" 
          fill="url(#playfieldGlow)" opacity="0.3"/>
    <g>
      <circle cx="75" cy="130" r="18" fill="#B2174B">
        <animate attributeName="r" 
                 values="18;20;18" dur="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="130" r="12" fill="#ff3366"/>
      <text x="75" y="134" textAnchor="middle" 
            fill="#FFF1E6" fontSize="10" fontWeight="bold">100</text>
    </g>
    <g>
      <circle cx="125" cy="125" r="18" fill="#F2921D">
        <animate attributeName="r" 
                 values="18;20;18" dur="0.4s" repeatCount="indefinite" begin="0.2s"/>
      </circle>
      <circle cx="125" cy="125" r="12" fill="#ffb54d"/>
      <text x="125" y="129" textAnchor="middle" 
            fill="#0E0F14" fontSize="10" fontWeight="bold">200</text>
    </g>
    <circle cx="130" cy="190" r="8" fill="url(#ballGradient)">
      <animate attributeName="cx" 
               values="130;70;100;80;130" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="cy" 
               values="190;140;170;200;190" dur="4s" repeatCount="indefinite"/>
    </circle>
    <rect x="40" y="20" width="120" height="50" rx="6" 
          fill="#1a1b22" stroke="#B2174B" strokeWidth="2"/>
    <rect x="48" y="28" width="104" height="34" rx="4" fill="#0E0F14"/>
    <text x="100" y="52" textAnchor="middle" fill="#B2174B" fontSize="20" 
          fontWeight="bold" fontFamily="monospace">88888</text>
    <rect x="50" y="2" width="100" height="18" rx="4" fill="#B2174B"/>
    <text x="100" y="15" textAnchor="middle" 
          fill="#FFF1E6" fontSize="10" fontWeight="bold">PINBALL</text>
    <defs>
      <linearGradient id="cabinetPink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="playfieldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B2174B" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#0E0F14"/>
      </linearGradient>
      <radialGradient id="ballGradient">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="50%" stopColor="#E0E0E0"/>
        <stop offset="100%" stopColor="#AAAAAA"/>
      </radialGradient>
    </defs>
  </svg>
)

const TurboMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="20" y="45" width="160" height="220" rx="12" 
          fill="url(#racingCabinet)" stroke="#06B6D4" strokeWidth="3"/>
    <rect x="27" y="52" width="146" height="206" rx="10" fill="#0a0b10"/>
    <rect x="35" y="65" width="130" height="95" rx="6" fill="#1a1b22"/>
    <rect x="42" y="72" width="116" height="81" rx="4" fill="#0E0F14"/>
    <rect x="42" y="72" width="116" height="81" rx="4" fill="url(#skyGradientCyan)"/>
    <path d="M100 153 L42 153 L60 100 L140 100 L158 153 Z" fill="#333"/>
    <line x1="100" y1="110" x2="100" y2="153" 
          stroke="#FFF1E6" strokeWidth="2" strokeDasharray="8,8">
      <animate attributeName="stroke-dashoffset" 
               values="0;16" dur="0.3s" repeatCount="indefinite"/>
    </line>
    <g transform="translate(82, 125)">
      <rect x="0" y="0" width="36" height="22" rx="4" fill="#F2921D">
        <animate attributeName="y" 
                 values="0;-2;0;2;0" dur="0.15s" repeatCount="indefinite"/>
      </rect>
      <rect x="5" y="-8" width="26" height="12" rx="3" fill="#B2174B"/>
      <path d="M-5 8 Q-12 11 -8 15" fill="#06B6D4" opacity="0.8">
        <animate attributeName="opacity" 
                 values="0.8;0.4;0.8" dur="0.1s" repeatCount="indefinite"/>
      </path>
    </g>
    <g transform="translate(100, 200)">
      <circle cx="0" cy="0" r="35" fill="none" stroke="#06B6D4" strokeWidth="8"/>
      <circle cx="0" cy="0" r="12" fill="#1a1b22" stroke="#22D3EE" strokeWidth="2"/>
      <circle cx="0" cy="-25" r="4" fill="#F2921D"/>
    </g>
    <rect x="30" y="10" width="140" height="32" rx="6" fill="#06B6D4"/>
    <rect x="38" y="18" width="124" height="16" rx="4" fill="#0E0F14"/>
    <text x="100" y="31" textAnchor="middle" 
          fill="#06B6D4" fontSize="12" fontWeight="bold">TURBO</text>
    <circle cx="42" cy="12" r="4" fill="#F2921D">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="158" cy="12" r="4" fill="#B2174B">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    <defs>
      <linearGradient id="racingCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="skyGradientCyan" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0e4a5c"/>
        <stop offset="60%" stopColor="#0E0F14"/>
        <stop offset="100%" stopColor="#333"/>
      </linearGradient>
    </defs>
  </svg>
)

const PuzzleMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#puzzleCabinet)" stroke="#A855F7" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="105" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="89" rx="4" fill="#0E0F14"/>
    <g transform="translate(55, 85)">
      <rect x="0" y="0" width="28" height="24" rx="3" fill="#A855F7">
        <animate attributeName="opacity" 
                 values="1;0.7;1" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="32" y="0" width="28" height="24" rx="3" fill="#F2921D">
        <animate attributeName="opacity" 
                 values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="0" width="28" height="24" rx="3" fill="#06B6D4"/>
      <rect x="0" y="28" width="28" height="24" rx="3" fill="#22C55E"/>
      <rect x="32" y="28" width="28" height="24" rx="3" 
            fill="#1a1b22" stroke="#FFF1E6" strokeWidth="1" strokeDasharray="4,2">
        <animate attributeName="stroke-opacity" 
                 values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="28" width="28" height="24" rx="3" fill="#B2174B"/>
      <rect x="0" y="56" width="28" height="24" rx="3" fill="#06B6D4"/>
      <rect x="32" y="56" width="28" height="24" rx="3" fill="#A855F7"/>
      <rect x="64" y="56" width="28" height="24" rx="3" fill="#F2921D"/>
    </g>
    <rect x="45" y="185" width="110" height="65" rx="6" fill="#1a1b22"/>
    <circle cx="80" cy="215" r="8" fill="#22C55E"/>
    <circle cx="120" cy="205" r="10" fill="#F2921D"/>
    <circle cx="140" cy="220" r="10" fill="#B2174B"/>
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#A855F7"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="35" textAnchor="middle" 
          fill="#A855F7" fontSize="14" fontWeight="bold">PUZZLE</text>
    <circle cx="50" cy="10" r="4" fill="#C084FC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="150" cy="10" r="4" fill="#C084FC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="puzzleCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

const GameMasterMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <path d="M20 55 L180 55 L170 260 L30 260 Z" 
          fill="url(#masterCabinet)" stroke="#22C55E" strokeWidth="3"/>
    <path d="M28 62 L172 62 L163 253 L37 253 Z" fill="#0a0b10"/>
    <path d="M55 25 L75 45 L100 15 L125 45 L145 25 L145 55 L55 55 Z" fill="#F2921D"/>
    <circle cx="100" cy="30" r="8" fill="#FFF1E6"/>
    <circle cx="75" cy="38" r="5" fill="#B2174B"/>
    <circle cx="125" cy="38" r="5" fill="#06B6D4"/>
    <rect x="40" y="70" width="120" height="95" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="79" rx="4" fill="#0E0F14"/>
    <g transform="translate(100, 117)">
      <circle cx="0" cy="0" r="12" fill="#22C55E">
        <animate attributeName="r" 
                 values="12;14;12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="0" y="4" textAnchor="middle" 
            fill="#0E0F14" fontSize="8" fontWeight="bold">★</text>
      <circle cx="0" cy="0" r="20" fill="none" 
              stroke="#22C55E" strokeWidth="1" opacity="0">
        <animate attributeName="r" 
                 values="15;35;15" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" 
                 values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-35" cy="-20" r="8" fill="#F2921D"/>
      <circle cx="35" cy="-20" r="8" fill="#B2174B"/>
      <line x1="0" y1="-12" x2="-30" y2="-17" 
            stroke="#4ADE80" strokeWidth="2"/>
      <line x1="0" y1="-12" x2="30" y2="-17" 
            stroke="#4ADE80" strokeWidth="2"/>
    </g>
    <rect x="40" y="175" width="120" height="70" rx="6" fill="#1a1b22"/>
    <rect x="48" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <rect x="104" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <circle cx="60" cy="198" r="6" fill="#F2921D"/>
    <circle cx="80" cy="198" r="6" fill="#B2174B"/>
    <circle cx="120" cy="198" r="6" fill="#06B6D4"/>
    <circle cx="140" cy="198" r="6" fill="#A855F7"/>
    <g transform="translate(100, 235)">
      <rect x="-35" y="-8" width="70" height="20" rx="4" fill="#22C55E">
        <animate attributeName="fill" 
                 values="#22C55E;#4ADE80;#22C55E" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="0" y="6" textAnchor="middle" 
            fill="#0E0F14" fontSize="9" fontWeight="bold">EXECUTE</text>
    </g>
    <rect x="45" y="2" width="110" height="20" rx="4" 
          fill="#0E0F14" stroke="#22C55E" strokeWidth="1"/>
    <text x="100" y="16" textAnchor="middle" 
          fill="#22C55E" fontSize="10" fontWeight="bold">GAME MASTER</text>
    <defs>
      <linearGradient id="masterCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// ============================================
// Data
// ============================================

// Configuración de colores con valores hex para inline styles
const colorConfig: Record<string, { hex: string; light: string; rgb: string }> = {
  orange: { hex: '#F2921D', light: '#FFB54D', rgb: '242,146,29' },
  pink: { hex: '#B2174B', light: '#FF3366', rgb: '178,23,75' },
  cyan: { hex: '#06B6D4', light: '#22D3EE', rgb: '6,182,212' },
  purple: { hex: '#A855F7', light: '#C084FC', rgb: '168,85,247' },
  green: { hex: '#22C55E', light: '#4ADE80', rgb: '34,197,94' }
}

const services = [
  {
    id: "gancho",
    name: "GANCHO",
    subtitle: "Máquina de Captación",
    icon: Magnet,
    color: "orange",
    description: 
      "Estrategias que atraen leads cualificados como imanes. " +
      "Diseñamos sistemas de captación que convierten desconocidos en clientes.",
    longDescription: 
      "En READY? sabemos que la captación es el primer nivel del juego. " +
      "Creamos embudos de conversión optimizados, lead magnets irresistibles y " +
      "automatizaciones inteligentes que trabajan 24/7 para tu marca.",
    features: [
      "Estrategia de captación multicanal",
      "Funnels de conversión optimizados",
      "Lead magnets irresistibles",
      "Automatización inteligente",
      "Segmentación avanzada",
      "Nurturing personalizado"
    ],
    stat: { value: "+340%", label: "Conversión media" },
    machine: GanchoMachine
  },
  {
    id: "pinball",
    name: "PINBALL",
    subtitle: "Máquina de Branding",
    icon: Target,
    color: "pink",
    description: 
      "Tu marca rebotando en todas las mentes. " +
      "Creamos identidades que no se olvidan.",
    longDescription: 
      "Una marca sin identidad es como un pinball sin bolas. " +
      "Diseñamos sistemas de marca completos que hacen que tu " +
      "negocio destaque y sea recordado en cada interacción.",
    features: [
      "Identidad visual completa",
      "Tono de voz y storytelling",
      "Manual de marca",
      "Assets multiplataforma",
      "Estrategia de posicionamiento",
      "Arquitectura de marca"
    ],
    stat: { value: "98%", label: "Brand recall" },
    machine: PinballMachine
  },
  {
    id: "turbo",
    name: "TURBO",
    subtitle: "Máquina de Performance",
    icon: Rocket,
    color: "cyan",
    description: 
      "Velocidad y potencia en campañas pagadas. " +
      "Resultados que se miden en euros, no en vanity metrics.",
    longDescription: 
      "El performance marketing es una carrera, y nosotros tenemos " +
      "el motor más potente. Optimizamos cada euro invertido para " +
      "maximizar tu retorno con datos en tiempo real.",
    features: [
      "Google & Meta Ads",
      "Optimización continua A/B",
      "Reporting en tiempo real",
      "Escalado inteligente",
      "Atribución avanzada",
      "Audiencias predictivas"
    ],
    stat: { value: "5.2x", label: "ROAS promedio" },
    machine: TurboMachine
  },
  {
    id: "puzzle",
    name: "PUZZLE",
    subtitle: "Máquina de Contenido",
    icon: Puzzle,
    color: "purple",
    description: 
      "Contenido que encaja perfecto y construye comunidad. " +
      "Cada pieza suma al panorama completo.",
    longDescription: 
      "El contenido es el rey, pero solo si las piezas encajan. " +
      "Creamos estrategias de contenido que conectan con tu audiencia " +
      "y construyen comunidades leales alrededor de tu marca.",
    features: [
      "Estrategia de contenidos",
      "Producción audiovisual",
      "Copywriting persuasivo",
      "Community management",
      "Calendario editorial",
      "UGC y colaboraciones"
    ],
    stat: { value: "+200%", label: "Engagement" },
    machine: PuzzleMachine
  },
  {
    id: "gamemaster",
    name: "GAME MASTER",
    subtitle: "Máquina de Consultoría",
    icon: Crown,
    color: "green",
    description: 
      "La visión estratégica que tu negocio necesita. " +
      "Jugamos en tu equipo para ganar.",
    longDescription: 
      "A veces necesitas a alguien que vea el tablero completo. " +
      "Ofrecemos consultoría estratégica para alinear todas las " +
      "piezas de tu marketing y llevarte al siguiente nivel.",
    features: [
      "Auditoría de marketing 360°",
      "Plan estratégico anual",
      "Workshops de equipo",
      "Mentorías 1:1",
      "KPIs y dashboards",
      "Análisis competitivo"
    ],
    stat: { value: "+150", label: "Marcas asesoradas" },
    machine: GameMasterMachine
  },
]

// ============================================
// Premium Easing & Animation Variants
// ============================================

const easeOutExpo = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 24,
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

const contentVariants = {
  initial: { 
    opacity: 0, 
    y: 16, 
    scale: 0.985,
    filter: "blur(6px)"
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)"
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    scale: 0.985,
    filter: "blur(4px)"
  }
}

// ============================================
// Main Component
// ============================================

export function ServiciosTabs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const tabsScrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState(services[0].id)

  const currentService = services.find(s => s.id === activeService) || services[0]
  const MachineComponent = currentService.machine
  const currentColor = colorConfig[currentService.color] || colorConfig.orange

  // Auto-scroll to active tab on mobile
  const handleTabClick = (serviceId: string) => {
    setActiveService(serviceId)
    
    // Find the button and scroll it into view
    setTimeout(() => {
      const activeButton = tabsScrollRef.current?.querySelector(
        `[data-service-id="${serviceId}"]`
      ) as HTMLElement
      if (activeButton && tabsScrollRef.current) {
        const container = tabsScrollRef.current
        const scrollLeft = activeButton.offsetLeft - 
          (container.clientWidth / 2) + (activeButton.clientWidth / 2)
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-x-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-ready-black" />
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_30%_50%,rgba(242,146,29,0.06)_0%,transparent_50%)]
      " />
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_70%_80%,rgba(178,23,75,0.05)_0%,transparent_40%)]
      " />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-16 md:mb-24"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="pixel" className="mb-5">
              <Gamepad2 className="w-3 h-3 mr-2" />
              SERVICIOS
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-ready-cream">Nuestras </span>
            <span className="
              text-transparent bg-clip-text 
              bg-gradient-to-r from-ready-orange to-ready-pink
            ">
              Máquinas
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-ready-cream/70 max-w-2xl mx-auto leading-relaxed px-2"
          >
            5 servicios diseñados para que tu marca suba de nivel.
          </motion.p>
        </motion.div>

        {/* Tabs Layout - Desktop: Side by side | Mobile: Stacked */}
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left: Tab List */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            className="order-1 lg:order-1"
          >
            {/* Mobile: Horizontal scroll tabs with indicators */}
            <div className="lg:hidden relative">
              {/* Scroll fade indicators */}
              <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-ready-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-ready-black to-transparent z-10 pointer-events-none" />
              
              {/* Tabs container */}
              <div 
                ref={tabsScrollRef}
                className="
                  flex gap-2 overflow-x-auto pb-4 mb-4
                  scrollbar-hide -mx-4 px-6
                  snap-x snap-mandatory scroll-smooth
                "
              >
                {services.map((service) => {
                  const Icon = service.icon
                  const isActive = activeService === service.id
                  const serviceColor = colorConfig[service.color] || colorConfig.orange
                  return (
                    <button
                      key={service.id}
                      data-service-id={service.id}
                      onClick={() => handleTabClick(service.id)}
                      className="flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] snap-center"
                      style={isActive ? {
                        backgroundColor: `rgba(${serviceColor.rgb}, 0.15)`,
                        borderColor: serviceColor.hex,
                        color: serviceColor.hex,
                        boxShadow: `0 0 20px rgba(${serviceColor.rgb}, 0.3)`
                      } : {
                        backgroundColor: 'rgba(26,27,34,1)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,241,230,0.6)'
                      }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-display font-semibold text-xs sm:text-sm whitespace-nowrap">
                        {service.name}
                      </span>
                    </button>
                  )
                })}
              </div>
              
              {/* Dot indicators for mobile */}
              <div className="flex justify-center gap-1.5 mt-2">
                {services.map((service) => {
                  const isActive = activeService === service.id
                  const serviceColor = colorConfig[service.color] || colorConfig.orange
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(service.id)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? serviceColor.hex : 'rgba(255,241,230,0.2)',
                        transform: isActive ? 'scale(1.3)' : 'scale(1)'
                      }}
                      aria-label={`Ir a ${service.name}`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Desktop: Vertical tab list */}
            <div className="hidden lg:flex flex-col gap-2">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeService === service.id
                const serviceColor = colorConfig[service.color] || colorConfig.orange
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                    animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: easeOutExpo }}
                    whileHover={{ x: 4 }}
                    className="group relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-2"
                    style={isActive ? {
                      backgroundColor: `rgba(${serviceColor.rgb}, 0.1)`,
                      borderColor: serviceColor.hex,
                      boxShadow: `0 0 30px rgba(${serviceColor.rgb}, 0.12)`
                    } : {
                      backgroundColor: 'rgba(26,27,34,0.5)',
                      borderColor: 'rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={isActive ? {
                        backgroundColor: serviceColor.hex,
                        color: service.color === 'pink' || service.color === 'purple' ? '#fff' : '#0E0F14'
                      } : {
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: 'rgba(255,241,230,0.5)'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-display font-bold text-lg transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ color: isActive ? serviceColor.hex : '#FFF1E6' }}
                      >
                        {service.name}
                      </h3>
                      <p className={`
                        text-sm transition-colors duration-500 truncate
                        ${isActive 
                          ? 'text-ready-cream/70' 
                          : 'text-ready-cream/40 group-hover:text-ready-cream/60'
                        }
                      `}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <ChevronRight 
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'translate-x-0 opacity-100' : 'text-ready-cream/20 -translate-x-2 opacity-0 group-hover:opacity-50'}`}
                      style={{ color: isActive ? serviceColor.hex : undefined }}
                    />

                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                        style={{ backgroundColor: serviceColor.hex }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 35,
                          mass: 0.8
                        }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* CTA below tabs - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9, ease: easeOutExpo }}
              className="hidden lg:block mt-10 pt-8 border-t border-white/10"
            >
              <p className="text-ready-cream/50 text-sm mb-4">
                ¿No sabes qué servicio elegir?
              </p>
              <a 
                href="#contacto"
                className="
                  inline-flex items-center gap-2 text-ready-orange 
                  hover:text-ready-orange/80 transition-all duration-500
                  hover:gap-3 font-medium
                "
              >
                Te ayudamos a decidir
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: easeOutExpo }}
            className="order-2 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: easeOutExpo }}
                className="relative rounded-2xl overflow-visible border-2 transition-colors duration-500 bg-gradient-to-br from-ready-black-light to-ready-black"
                style={{ borderColor: `rgba(${currentColor.rgb}, 0.3)` }}
              >
                {/* Content Grid */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                  
                  {/* Left: Machine SVG */}
                  <div className="
                    flex items-center justify-center 
                    py-2 sm:py-4 md:py-0 order-1 md:order-1
                  ">
                    <motion.div 
                      className="w-28 h-36 sm:w-40 sm:h-52 md:w-56 md:h-72"
                      initial={{ scale: 0.85, rotate: -3, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 180, 
                        damping: 22,
                        mass: 1,
                        delay: 0.1
                      }}
                    >
                      <MachineComponent />
                    </motion.div>
                  </div>

                  {/* Right: Info */}
                  <div className="order-2 md:order-2 flex flex-col justify-center">
                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.15, duration: 0.5, ease: easeOutExpo }}
                    >
                      <Badge 
                        className="mb-4"
                        style={{
                          backgroundColor: currentColor.hex,
                          color: currentService.color === 'pink' || currentService.color === 'purple' ? '#fff' : '#0E0F14',
                          boxShadow: `0 0 15px rgba(${currentColor.rgb}, 0.4)`
                        }}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {currentService.stat.value} {currentService.stat.label}
                      </Badge>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                      style={{ color: currentColor.hex }}
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.08, duration: 0.5, ease: easeOutExpo }}
                    >
                      {currentService.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-ready-cream/60 text-sm mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.12, duration: 0.5, ease: easeOutExpo }}
                    >
                      {currentService.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p 
                      className="text-ready-cream/80 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18, duration: 0.5, ease: easeOutExpo }}
                    >
                      {currentService.longDescription}
                    </motion.p>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25, duration: 0.5, ease: easeOutExpo }}
                    >
                      <p className="
                        text-xs text-ready-cream/40 
                        uppercase tracking-wider mb-3
                      ">
                        Qué incluye:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentService.features.map((feature, i) => (
                          <motion.li 
                            key={feature}
                            initial={{ opacity: 0, x: -8, filter: "blur(2px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ 
                              delay: 0.3 + i * 0.04, 
                              duration: 0.4, 
                              ease: easeOutExpo 
                            }}
                            className="
                              flex items-center gap-2 
                              text-sm text-ready-cream/70
                            "
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: currentColor.hex }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5, ease: easeOutExpo }}
                      className="mt-8"
                    >
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:gap-3"
                        style={{
                          backgroundColor: currentColor.hex,
                          color: currentService.color === 'pink' || currentService.color === 'purple' ? '#fff' : '#0E0F14',
                          boxShadow: `0 0 0 rgba(${currentColor.rgb}, 0)`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 35px rgba(${currentColor.rgb}, 0.35)`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 0 rgba(${currentColor.rgb}, 0)`
                        }}
                      >
                        Quiero esta máquina
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effects - Hidden on mobile to prevent overflow */}
                <div 
                  className="hidden md:block absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ backgroundColor: currentColor.hex }}
                />
                <div 
                  className="hidden md:block absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-10"
                  style={{ backgroundColor: currentColor.hex }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOutExpo }}
          className="lg:hidden text-center mt-8 sm:mt-14"
        >
          <p className="text-ready-cream/50 text-sm mb-5">
            ¿No sabes qué servicio elegir?
          </p>
          <a 
            href="#contacto"
            className="
              inline-flex items-center gap-2 px-6 py-3 
              rounded-full font-semibold
              bg-gradient-to-r from-ready-orange to-ready-pink
              text-ready-black
              hover:shadow-[0_0_40px_rgba(242,146,29,0.35)]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:gap-3
            "
          >
            <Gamepad2 className="w-5 h-5" />
            Te ayudamos a elegir
          </a>
        </motion.div>
      </div>
    </section>
  )
}
