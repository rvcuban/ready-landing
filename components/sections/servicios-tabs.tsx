"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Gamepad2, 
  ChevronRight, 
  Compass,
  Video,
  MessageSquare,
  Rocket,
  Search,
  Megaphone,
  Euro
} from "lucide-react"

// ============================================
// SVG Arcade Machine Components - Temáticas por servicio
// ============================================

// 01 - ACOMPAÑAMIENTO: Brújula/Compass Machine (Orange)
const CompassMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#compassCabinet)" stroke="#F2921D" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="110" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="94" rx="4" fill="#0E0F14"/>
    {/* Compass */}
    <g transform="translate(100, 125)">
      <circle cx="0" cy="0" r="38" fill="none" stroke="#F2921D" strokeWidth="3" opacity="0.3"/>
      <circle cx="0" cy="0" r="32" fill="none" stroke="#F2921D" strokeWidth="2"/>
      <circle cx="0" cy="0" r="5" fill="#F2921D"/>
      {/* Cardinal points */}
      <text x="0" y="-22" textAnchor="middle" fill="#F2921D" fontSize="10" fontWeight="bold">N</text>
      <text x="0" y="28" textAnchor="middle" fill="#FFF1E6" fontSize="8" opacity="0.5">S</text>
      <text x="24" y="4" textAnchor="middle" fill="#FFF1E6" fontSize="8" opacity="0.5">E</text>
      <text x="-24" y="4" textAnchor="middle" fill="#FFF1E6" fontSize="8" opacity="0.5">O</text>
      {/* Needle */}
      <g>
        <animateTransform attributeName="transform" type="rotate" 
            values="0;10;-5;0" dur="3s" repeatCount="indefinite"/>
        <polygon points="0,-28 4,0 0,10 -4,0" fill="#F2921D"/>
        <polygon points="0,28 4,0 0,-10 -4,0" fill="#FFF1E6" opacity="0.5"/>
      </g>
    </g>
    {/* Controls */}
    <rect x="45" y="190" width="110" height="55" rx="6" fill="#1a1b22"/>
    <circle cx="75" cy="215" r="12" fill="#F2921D">
      <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="125" cy="215" r="12" fill="#0E0F14" stroke="#F2921D" strokeWidth="2"/>
    {/* Header */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#F2921D"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="34" textAnchor="middle" fill="#F2921D" fontSize="11" fontWeight="bold">STRATEGY</text>
    <circle cx="45" cy="10" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="10" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="compassCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// 02 - CONTENIDO: Video/Camera Machine (Pink)
const VideoMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#videoCabinet)" stroke="#B2174B" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="110" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="94" rx="4" fill="#0E0F14"/>
    {/* Camera/Film */}
    <g transform="translate(100, 125)">
      {/* Film reels */}
      <circle cx="-20" cy="-20" r="18" fill="none" stroke="#B2174B" strokeWidth="3">
        <animateTransform attributeName="transform" type="rotate" 
            values="0 -20 -20;360 -20 -20" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-20" cy="-20" r="6" fill="#B2174B"/>
      <circle cx="20" cy="-20" r="18" fill="none" stroke="#B2174B" strokeWidth="3">
        <animateTransform attributeName="transform" type="rotate" 
            values="0 20 -20;360 20 -20" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="20" cy="-20" r="6" fill="#B2174B"/>
      {/* Play button */}
      <polygon points="-8,15 -8,35 12,25" fill="#B2174B">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
      </polygon>
      {/* REC indicator */}
      <circle cx="35" cy="-35" r="5" fill="#ff3366">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </circle>
    </g>
    {/* Controls */}
    <rect x="45" y="190" width="110" height="55" rx="6" fill="#1a1b22"/>
    <rect x="60" y="205" width="30" height="25" rx="4" fill="#B2174B"/>
    <rect x="110" y="205" width="30" height="25" rx="4" fill="#0E0F14" stroke="#B2174B" strokeWidth="2"/>
    {/* Header */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#B2174B"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="34" textAnchor="middle" fill="#B2174B" fontSize="11" fontWeight="bold">CONTENT</text>
    <circle cx="45" cy="10" r="4" fill="#ff3366">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="10" r="4" fill="#ff3366">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="videoCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// 03 - GESTIÓN BÁSICA: Social/Chat Machine (Cyan)
const SocialMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#socialCabinet)" stroke="#06B6D4" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="110" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="94" rx="4" fill="#0E0F14"/>
    {/* Chat bubbles */}
    <g transform="translate(100, 120)">
      {/* Bubble 1 */}
      <g>
        <rect x="-40" y="-35" width="50" height="25" rx="12" fill="#06B6D4"/>
        <polygon points="-35,-10 -30,-10 -38,-2" fill="#06B6D4"/>
        <rect x="-35" y="-28" width="25" height="3" rx="1" fill="#0E0F14" opacity="0.3"/>
        <rect x="-35" y="-22" width="35" height="3" rx="1" fill="#0E0F14" opacity="0.3"/>
        <animate attributeName="opacity" values="0;1;1;1" dur="3s" repeatCount="indefinite"/>
      </g>
      {/* Bubble 2 */}
      <g>
        <rect x="0" y="0" width="45" height="25" rx="12" fill="#22D3EE"/>
        <polygon points="40,25 35,25 42,33" fill="#22D3EE"/>
        <rect x="5" y="7" width="30" height="3" rx="1" fill="#0E0F14" opacity="0.3"/>
        <rect x="5" y="13" width="20" height="3" rx="1" fill="#0E0F14" opacity="0.3"/>
        <animate attributeName="opacity" values="0;0;1;1" dur="3s" repeatCount="indefinite"/>
      </g>
      {/* Typing indicator */}
      <g transform="translate(-30, 35)">
        <circle cx="0" cy="0" r="3" fill="#06B6D4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="10" cy="0" r="3" fill="#06B6D4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" repeatCount="indefinite" begin="0.2s"/>
        </circle>
        <circle cx="20" cy="0" r="3" fill="#06B6D4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" repeatCount="indefinite" begin="0.4s"/>
        </circle>
      </g>
    </g>
    {/* Controls */}
    <rect x="45" y="190" width="110" height="55" rx="6" fill="#1a1b22"/>
    <circle cx="75" cy="215" r="12" fill="#06B6D4"/>
    <circle cx="125" cy="215" r="12" fill="#0E0F14" stroke="#06B6D4" strokeWidth="2"/>
    {/* Header */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#06B6D4"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="34" textAnchor="middle" fill="#06B6D4" fontSize="11" fontWeight="bold">SOCIAL</text>
    <circle cx="45" cy="10" r="4" fill="#22D3EE">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="10" r="4" fill="#22D3EE">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="socialCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// 04 - GESTIÓN PRO: Rocket/Funnel Machine (Purple)
const RocketMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#rocketCabinet)" stroke="#A855F7" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="110" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="94" rx="4" fill="#0E0F14"/>
    {/* Rocket */}
    <g transform="translate(100, 115)">
      <g>
        <animateTransform attributeName="transform" type="translate" 
            values="0,5;0,-5;0,5" dur="2s" repeatCount="indefinite"/>
        {/* Body */}
        <ellipse cx="0" cy="0" rx="15" ry="30" fill="#A855F7"/>
        {/* Nose */}
        <ellipse cx="0" cy="-30" rx="10" ry="15" fill="#C084FC"/>
        {/* Window */}
        <circle cx="0" cy="-10" r="8" fill="#0E0F14"/>
        <circle cx="0" cy="-10" r="5" fill="#22D3EE" opacity="0.8"/>
        {/* Fins */}
        <polygon points="-15,15 -25,35 -10,25" fill="#A855F7"/>
        <polygon points="15,15 25,35 10,25" fill="#A855F7"/>
        {/* Flames */}
        <ellipse cx="0" cy="38" rx="8" ry="12" fill="#F2921D">
          <animate attributeName="ry" values="12;18;12" dur="0.2s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="0" cy="38" rx="4" ry="8" fill="#FFF1E6">
          <animate attributeName="ry" values="8;12;8" dur="0.15s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      {/* Stars */}
      <circle cx="-35" cy="-25" r="2" fill="#FFF1E6">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="10" r="1.5" fill="#FFF1E6">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="-25" cy="20" r="1" fill="#FFF1E6">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
    </g>
    {/* Controls */}
    <rect x="45" y="190" width="110" height="55" rx="6" fill="#1a1b22"/>
    <circle cx="75" cy="215" r="12" fill="#A855F7"/>
    <circle cx="125" cy="215" r="12" fill="#0E0F14" stroke="#A855F7" strokeWidth="2"/>
    {/* Header */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#A855F7"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="34" textAnchor="middle" fill="#A855F7" fontSize="11" fontWeight="bold">BOOST PRO</text>
    <circle cx="45" cy="10" r="4" fill="#C084FC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="10" r="4" fill="#C084FC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="rocketCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// 05 - AUDITORÍA: Search/Magnifying Glass Machine (Green)
const SearchMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    <rect x="25" y="50" width="150" height="215" rx="10" 
          fill="url(#searchCabinet)" stroke="#22C55E" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    <rect x="40" y="70" width="120" height="110" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="94" rx="4" fill="#0E0F14"/>
    {/* Magnifying Glass */}
    <g transform="translate(100, 120)">
      <g>
        <animateTransform attributeName="transform" type="translate" 
            values="-5,-5;5,5;-5,-5" dur="3s" repeatCount="indefinite"/>
        {/* Glass circle */}
        <circle cx="-5" cy="-5" r="28" fill="none" stroke="#22C55E" strokeWidth="4"/>
        <circle cx="-5" cy="-5" r="22" fill="rgba(34,197,94,0.1)"/>
        {/* Shine */}
        <ellipse cx="-15" cy="-15" rx="6" ry="4" fill="#4ADE80" opacity="0.5" transform="rotate(-45 -15 -15)"/>
        {/* Handle */}
        <line x1="15" y1="15" x2="35" y2="35" stroke="#22C55E" strokeWidth="6" strokeLinecap="round"/>
      </g>
      {/* Data points being found */}
      <circle cx="-10" cy="-8" r="3" fill="#4ADE80">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="5" r="2" fill="#4ADE80">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="-15" cy="0" r="2.5" fill="#4ADE80">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </g>
    {/* Controls */}
    <rect x="45" y="190" width="110" height="55" rx="6" fill="#1a1b22"/>
    <circle cx="75" cy="215" r="12" fill="#22C55E"/>
    <circle cx="125" cy="215" r="12" fill="#0E0F14" stroke="#22C55E" strokeWidth="2"/>
    {/* Header */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#22C55E"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="34" textAnchor="middle" fill="#22C55E" fontSize="11" fontWeight="bold">AUDIT</text>
    <circle cx="45" cy="10" r="4" fill="#4ADE80">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="10" r="4" fill="#4ADE80">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
    </circle>
    <defs>
      <linearGradient id="searchCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// 06 - MARKETING: Claw Machine / Gancho de Peluches (Orange)
const ClawMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    {/* Cabinet */}
    <rect x="20" y="45" width="160" height="220" rx="10" 
          fill="url(#clawCabinet)" stroke="#F2921D" strokeWidth="3"/>
    <rect x="27" y="52" width="146" height="206" rx="8" fill="#0a0b10"/>
    {/* Glass display area */}
    <rect x="35" y="65" width="130" height="130" rx="6" fill="#1a1b22"/>
    <rect x="35" y="65" width="130" height="130" rx="6" fill="url(#glassGlow)" opacity="0.3"/>
    {/* Claw mechanism */}
    <g transform="translate(100, 85)">
      {/* Rail */}
      <rect x="-55" y="-15" width="110" height="6" rx="2" fill="#333"/>
      {/* Claw arm */}
      <g>
        <animateTransform attributeName="transform" type="translate" 
            values="0,0;20,0;20,40;20,35;0,35;0,0" dur="5s" repeatCount="indefinite"/>
        <rect x="-3" y="-10" width="6" height="50" fill="#F2921D"/>
        {/* Claw prongs */}
        <g transform="translate(0, 40)">
          <animateTransform attributeName="transform" type="scale" 
              values="1,1;1,1;1,1;0.7,1;0.7,1;1,1" dur="5s" repeatCount="indefinite"/>
          <path d="M0,0 L-15,20 L-10,22 L0,8" fill="#F2921D"/>
          <path d="M0,0 L15,20 L10,22 L0,8" fill="#F2921D"/>
          <path d="M0,0 L0,22 L-3,20 L0,8 L3,20 L0,22" fill="#ffb54d"/>
        </g>
      </g>
    </g>
    {/* Plushies/prizes */}
    <g transform="translate(100, 165)">
      {/* Pink bear */}
      <g transform="translate(-35, 0)">
        <circle cx="0" cy="0" r="12" fill="#B2174B"/>
        <circle cx="-5" cy="-3" r="2" fill="#FFF1E6"/>
        <circle cx="5" cy="-3" r="2" fill="#FFF1E6"/>
        <ellipse cx="0" cy="4" rx="3" ry="2" fill="#ff6b9d"/>
        <circle cx="-10" cy="-8" r="5" fill="#B2174B"/>
        <circle cx="10" cy="-8" r="5" fill="#B2174B"/>
      </g>
      {/* Yellow star */}
      <g transform="translate(0, 5)">
        <polygon points="0,-12 3,-4 12,-4 5,2 8,11 0,6 -8,11 -5,2 -12,-4 -3,-4" fill="#F2921D"/>
      </g>
      {/* Cyan ball */}
      <g transform="translate(35, 0)">
        <circle cx="0" cy="0" r="10" fill="#06B6D4"/>
        <ellipse cx="-3" cy="-3" rx="4" ry="3" fill="#22D3EE" opacity="0.6"/>
      </g>
      {/* Purple cube */}
      <g transform="translate(15, -15)">
        <rect x="-7" y="-7" width="14" height="14" rx="2" fill="#A855F7"/>
      </g>
      {/* Green blob */}
      <g transform="translate(-20, -20)">
        <ellipse cx="0" cy="0" rx="8" ry="6" fill="#22C55E"/>
      </g>
    </g>
    {/* Controls */}
    <rect x="35" y="200" width="130" height="50" rx="6" fill="#1a1b22"/>
    {/* Joystick */}
    <g transform="translate(70, 225)">
      <ellipse cx="0" cy="8" rx="12" ry="6" fill="#0E0F14"/>
      <rect x="-4" y="-8" width="8" height="16" rx="4" fill="#F2921D"/>
      <circle cx="0" cy="-8" r="6" fill="#ffb54d"/>
    </g>
    {/* Button */}
    <circle cx="130" cy="225" r="14" fill="#B2174B">
      <animate attributeName="fill" values="#B2174B;#ff3366;#B2174B" dur="3s" repeatCount="indefinite"/>
    </circle>
    <text x="130" y="229" textAnchor="middle" fill="#FFF1E6" fontSize="8" fontWeight="bold">GO!</text>
    {/* Prize chute */}
    <rect x="75" y="250" width="50" height="15" rx="4" fill="#0E0F14"/>
    {/* Header */}
    <rect x="30" y="8" width="140" height="35" rx="6" fill="#F2921D"/>
    <rect x="38" y="15" width="124" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="30" textAnchor="middle" fill="#F2921D" fontSize="11" fontWeight="bold">CLAW ADS</text>
    {/* Lights */}
    <circle cx="40" cy="6" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="6" r="4" fill="#B2174B">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.1s"/>
    </circle>
    <circle cx="100" cy="6" r="4" fill="#F2921D">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    <circle cx="130" cy="6" r="4" fill="#06B6D4">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.3s"/>
    </circle>
    <circle cx="160" cy="6" r="4" fill="#22C55E">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.4s"/>
    </circle>
    <defs>
      <linearGradient id="clawCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="glassGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F2921D" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#0E0F14" stopOpacity="0"/>
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
    id: "acompanamiento",
    name: "ACOMPAÑAMIENTO",
    number: "01",
    subtitle: "Estratégico",
    icon: Compass,
    color: "orange",
    price: "350",
    priceNote: "/mes",
    description: 
      "Para personas que crean su propio contenido pero no logran resultados.",
    longDescription: 
      "Analizamos tu marca, corregimos errores, definimos formatos, " +
      "aplicamos tendencias y creamos un plan claro para avanzar. " +
      "Incluye calendario, seguimiento, revisión de vídeos y estrategia aplicada a tu nicho.",
    features: [
      "Estudio completo de tu marca",
      "Estrategia de contenido",
      "Formatos y referencias",
      "Calendario mensual",
      "Aplicación de tendencias",
      "Revisión y feedback continuo",
      "Guía para grabar y mejorar retención"
    ],
    machine: CompassMachine
  },
  {
    id: "contenido",
    name: "CONTENIDO",
    number: "02",
    subtitle: "Creación",
    icon: Video,
    color: "pink",
    price: "desde 600",
    priceNote: "/mes",
    description: 
      "Creamos contenido completo para tu marca: estrategia, guiones, grabación, edición y publicación.",
    longDescription: 
      "Aplicamos tendencias de forma personalizada para tu sector y tus objetivos. " +
      "Puede aparecer el cliente o podemos crear contenido sin que él salga.",
    features: [
      "Estrategia personalizada",
      "Investigación de formatos",
      "Grabación profesional",
      "Edición optimizada para redes",
      "Publicación y programaciones",
      "Contenido con tendencias adaptadas"
    ],
    machine: VideoMachine
  },
  {
    id: "gestion-basica",
    name: "GESTIÓN",
    number: "03",
    subtitle: "RRSS Básica",
    icon: MessageSquare,
    color: "cyan",
    price: "250",
    priceNote: "/mes",
    description: 
      "Nos encargamos de publicar, escribir copys, preparar portadas y mantener un perfil profesional.",
    longDescription: 
      "Ideal para quien quiere delegar la parte técnica sin perder el control del contenido. " +
      "Organización del feed y configuración de hashtags incluidos.",
    features: [
      "Publicaciones programadas",
      "Textos optimizados",
      "Portadas profesionales",
      "Organización del feed",
      "Configuración de hashtags y tendencias"
    ],
    machine: SocialMachine
  },
  {
    id: "gestion-pro",
    name: "GESTIÓN PRO",
    number: "04",
    subtitle: "RRSS Avanzada",
    icon: Rocket,
    color: "purple",
    price: "500",
    priceNote: "/mes",
    description: 
      "Gestión completa orientada a ventas: funnels, automatizaciones y generación de oportunidades.",
    longDescription: 
      "Ideal para marcas que quieren usar sus redes como un canal real de ventas. " +
      "Incluye atención a clientes, mensajes estratégicos y prospección digital.",
    features: [
      "Gestión completa de interacciones",
      "Automatizaciones (ManyChat)",
      "Funnels de venta en redes",
      "Mensajería estratégica a leads",
      "Prospección digital",
      "Optimización continua para conversión"
    ],
    machine: RocketMachine
  },
  {
    id: "auditoria",
    name: "AUDITORÍA",
    number: "05",
    subtitle: "de Redes",
    icon: Search,
    color: "green",
    price: "150",
    priceNote: "único",
    description: 
      "Analizamos tu cuenta a fondo: errores, oportunidades, tendencias y estrategia.",
    longDescription: 
      "Entrega en PDF + sesión explicativa. Incluye análisis de formatos, " +
      "revisión de identidad, plan de acción y referentes aplicables.",
    features: [
      "Estudio de cuenta",
      "Análisis de formatos",
      "Revisión de identidad",
      "Estrategia propuesta",
      "Plan de acción",
      "Referentes y ejemplos"
    ],
    machine: SearchMachine
  },
  {
    id: "marketing",
    name: "MARKETING",
    number: "06",
    subtitle: "Digital / Campañas",
    icon: Megaphone,
    color: "orange",
    price: "desde 400",
    priceNote: "/mes + inversión",
    description: 
      "Gestión de Publicidad en Meta / LinkedIn / Google orientadas a ventas o captación.",
    longDescription: 
      "Investigamos mercado, definimos público objetivo, creamos anuncios, " +
      "optimizamos resultados y reportamos métricas con informe mensual.",
    features: [
      "Estudio del negocio y mercado",
      "Estrategia publicitaria",
      "Creación de anuncios y textos",
      "Configuración de audiencias",
      "Optimización continua",
      "Informe mensual"
    ],
    machine: ClawMachine
  }
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
        {/* Section Header - MAXIMALISTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          {/* Micro label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ready-cream/40">
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
              QUÉ HACEMOS
              <span className="w-10 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
            </span>
          </motion.div>
          
          {/* Giant condensed title */}
          <motion.h2 
            variants={itemVariants}
            className="font-display uppercase leading-[0.8] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 9rem)',
              transform: 'scaleY(1.15)',
            }}
          >
            <span className="text-ready-cream block">NUESTROS</span>
            <span 
              className="text-transparent bg-clip-text block -mt-1 sm:-mt-3" 
              style={{ backgroundImage: 'linear-gradient(135deg, #F2921D 0%, #B2174B 50%, #06B6D4 100%)' }}
            >
              SERVICIOS
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-ready-cream/50 max-w-xl mx-auto leading-relaxed font-body px-4"
          >
            No hacemos "vídeos bonitos". Hacemos comunicación que convierte, 
            marcas que se diferencian y contenidos que generan comunidad.
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
            {/* Mobile: Horizontal scroll tabs - MAXIMALISTA */}
            <div className="lg:hidden relative">
              {/* Scroll fade indicators */}
              <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-ready-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-ready-black to-transparent z-10 pointer-events-none" />
              
              {/* Tabs container */}
              <div 
                ref={tabsScrollRef}
                className="
                  flex gap-3 overflow-x-auto pb-4 mb-4
                  scrollbar-hide -mx-4 px-6
                  snap-x snap-mandatory scroll-smooth
                "
              >
                {services.map((service) => {
                  const isActive = activeService === service.id
                  const serviceColor = colorConfig[service.color] || colorConfig.orange
                  return (
                    <button
                      key={service.id}
                      data-service-id={service.id}
                      onClick={() => handleTabClick(service.id)}
                      className="flex-shrink-0 flex flex-col items-center gap-1 px-3 sm:px-4 py-3 transition-all duration-300 snap-center relative min-w-[70px]"
                      style={{
                        backgroundColor: isActive ? `rgba(${serviceColor.rgb}, 0.1)` : 'transparent',
                      }}
                    >
                      {/* Top accent bar */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-500"
                        style={{
                          width: isActive ? '80%' : '0%',
                          backgroundColor: serviceColor.hex,
                        }}
                      />
                      
                      {/* Number */}
                      <span 
                        className="font-display text-xl sm:text-2xl transition-all duration-300"
                        style={{ 
                          color: isActive ? serviceColor.hex : 'rgba(255,241,230,0.25)',
                          transform: 'scaleY(1.1)'
                        }}
                      >
                        {service.number}
                      </span>
                      
                      {/* Name */}
                      <span 
                        className="font-display uppercase text-[9px] sm:text-[10px] whitespace-nowrap tracking-wider transition-colors duration-300"
                        style={{ 
                          color: isActive ? '#FFF1E6' : 'rgba(255,241,230,0.4)',
                        }}
                      >
                        {service.name}
                      </span>
                    </button>
                  )
                })}
              </div>
              
              {/* Dot indicators for mobile */}
              <div className="flex justify-center gap-2 mt-2">
                {services.map((service) => {
                  const isActive = activeService === service.id
                  const serviceColor = colorConfig[service.color] || colorConfig.orange
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(service.id)}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? serviceColor.hex : 'rgba(255,241,230,0.15)',
                        transform: isActive ? 'scale(1.5)' : 'scale(1)',
                        boxShadow: isActive ? `0 0 10px rgba(${serviceColor.rgb}, 0.5)` : 'none'
                      }}
                      aria-label={`Ir a ${service.name}`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Desktop: Vertical tab list - MAXIMALISTA */}
            <div className="hidden lg:flex flex-col gap-3">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeService === service.id
                const serviceColor = colorConfig[service.color] || colorConfig.orange
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: easeOutExpo }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-5 px-6 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      backgroundColor: isActive ? `rgba(${serviceColor.rgb}, 0.08)` : 'transparent',
                    }}
                  >
                    {/* Left accent bar */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? serviceColor.hex : 'rgba(255,255,255,0.05)',
                        boxShadow: isActive ? `0 0 20px rgba(${serviceColor.rgb}, 0.5)` : 'none'
                      }}
                    />

                    {/* Number */}
                    <span 
                      className="flex-shrink-0 w-12 font-display text-2xl transition-all duration-500"
                      style={{ 
                        color: isActive ? serviceColor.hex : 'rgba(255,241,230,0.2)',
                        transform: 'scaleY(1.1)'
                      }}
                    >
                      {service.number}
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-display uppercase tracking-tight text-xl transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ 
                          color: isActive ? serviceColor.hex : '#FFF1E6',
                          transform: 'scaleY(1.05)'
                        }}
                      >
                        {service.name}
                      </h3>
                      <p className={`
                        text-xs uppercase tracking-[0.15em] transition-colors duration-500 truncate mt-1
                        ${isActive 
                          ? 'text-ready-cream/50' 
                          : 'text-ready-cream/30 group-hover:text-ready-cream/40'
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

          {/* Right: Content Area - MAXIMALISTA */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
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
                className="relative overflow-visible"
              >
                {/* Left accent bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 hidden md:block"
                  style={{ 
                    backgroundColor: currentColor.hex,
                    boxShadow: `0 0 30px rgba(${currentColor.rgb}, 0.4)`
                  }}
                />

                {/* Content Grid */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 md:pl-8 py-4">
                  
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
                    {/* Number + Price Row */}
                    <motion.div
                      initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.1, duration: 0.5, ease: easeOutExpo }}
                      className="flex items-end gap-4 mb-4"
                    >
                      {/* Service Number */}
                      <span 
                        className="font-display leading-none"
                        style={{ 
                          fontSize: 'clamp(3rem, 8vw, 5rem)',
                          color: currentColor.hex,
                          opacity: 0.25,
                          transform: 'scaleY(1.2)'
                        }}
                      >
                        {currentService.number}
                      </span>
                      
                      {/* Price Badge */}
                      <div className="mb-2">
                        <div 
                          className="inline-flex items-baseline gap-1 px-4 py-2 rounded-lg"
                          style={{ 
                            backgroundColor: `rgba(${currentColor.rgb}, 0.1)`,
                            border: `1px solid rgba(${currentColor.rgb}, 0.2)`
                          }}
                        >
                          <Euro className="w-4 h-4 mb-0.5" style={{ color: currentColor.hex }} />
                          <span 
                            className="font-display text-2xl sm:text-3xl"
                            style={{ color: currentColor.hex }}
                          >
                            {currentService.price}
                          </span>
                          {currentService.priceNote && (
                            <span className="text-ready-cream/40 text-xs ml-1">
                              {currentService.priceNote}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Title - MAXIMALISTA */}
                    <motion.h3 
                      className="font-display uppercase tracking-tight mb-2"
                      style={{ 
                        color: currentColor.hex,
                        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                        transform: 'scaleY(1.1)',
                        lineHeight: 0.9
                      }}
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.08, duration: 0.5, ease: easeOutExpo }}
                    >
                      {currentService.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-ready-cream/40 text-xs uppercase tracking-[0.2em] mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.12, duration: 0.5, ease: easeOutExpo }}
                    >
                      {currentService.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p 
                      className="text-ready-cream/60 leading-relaxed mb-6 font-body text-sm md:text-base"
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
                        text-[10px] text-ready-cream/30 
                        uppercase tracking-[0.3em] mb-3
                      ">
                        Qué incluye
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
                              flex items-center gap-3 
                              text-sm text-ready-cream/60
                            "
                          >
                            <div 
                              className="w-1 h-4 flex-shrink-0"
                              style={{ backgroundColor: currentColor.hex }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* CTA Button - MAXIMALISTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5, ease: easeOutExpo }}
                      className="mt-8"
                    >
                      <a
                        href="#contacto"
                        className="group inline-flex items-center gap-3 font-display uppercase tracking-wide text-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ color: currentColor.hex }}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Quiero esta máquina
                        </span>
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: currentColor.hex,
                            color: currentService.color === 'pink' || currentService.color === 'purple' ? '#fff' : '#0E0F14',
                            boxShadow: `0 0 20px rgba(${currentColor.rgb}, 0.3)`
                          }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </a>
                    </motion.div>
                  </div>
                </div>
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
