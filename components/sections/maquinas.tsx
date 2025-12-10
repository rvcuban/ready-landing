"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Gamepad2, Zap } from "lucide-react"

// ============================================
// SVG Arcade Machine Components
// ============================================

const GanchoMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    {/* Cabinet Base */}
    <rect x="25" y="55" width="150" height="210" rx="10" 
          fill="url(#cabinetGradient)" stroke="#F2921D" strokeWidth="3"/>
    {/* Cabinet inner shadow */}
    <rect x="30" y="60" width="140" height="200" rx="8" fill="#0a0b10"/>
    
    {/* Screen bezel */}
    <rect x="40" y="75" width="120" height="90" rx="6" fill="#1a1b22"/>
    {/* Screen */}
    <rect x="48" y="83" width="104" height="74" rx="4" fill="#0E0F14"/>
    {/* Screen glow effect */}
    <rect x="48" y="83" width="104" height="74" rx="4" fill="url(#screenGlowOrange)" opacity="0.6"/>
    
    {/* Animated Magnet Icon */}
    <g transform="translate(100, 115)">
      <path d="M20 -15 L20 15 C20 32 10 42 0 42 C-10 42 -20 32 -20 15 L-20 -15" 
            fill="none" stroke="#F2921D" strokeWidth="8" strokeLinecap="round">
        <animate attributeName="stroke-opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
      </path>
      {/* Magnet poles */}
      <rect x="-28" y="-25" width="16" height="15" rx="3" fill="#F2921D"/>
      <rect x="12" y="-25" width="16" height="15" rx="3" fill="#F2921D"/>
      {/* Attraction particles */}
      <circle cx="0" cy="55" r="3" fill="#FFF1E6">
        <animate attributeName="cy" values="70;45;70" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-15" cy="60" r="2" fill="#FFF1E6">
        <animate attributeName="cy" values="75;50;75" dur="2s" repeatCount="indefinite" begin="0.3s"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
      <circle cx="15" cy="60" r="2" fill="#FFF1E6">
        <animate attributeName="cy" values="75;50;75" dur="2s" repeatCount="indefinite" begin="0.6s"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      </circle>
    </g>
    
    {/* Control Panel */}
    <rect x="40" y="175" width="120" height="75" rx="6" fill="#1a1b22"/>
    {/* Joystick base */}
    <ellipse cx="70" cy="210" rx="18" ry="12" fill="#0E0F14"/>
    <ellipse cx="70" cy="208" rx="14" ry="8" fill="#2a2b32"/>
    {/* Joystick */}
    <rect x="66" y="188" width="8" height="20" rx="4" fill="#333"/>
    <circle cx="70" cy="185" r="10" fill="#F2921D">
      <animate attributeName="fill" values="#F2921D;#ffb54d;#F2921D" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    {/* Action Buttons */}
    <circle cx="115" cy="200" r="12" fill="#F2921D">
      <animate attributeName="r" values="12;13;12" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="145" cy="205" r="10" fill="#B2174B"/>
    <circle cx="130" cy="225" r="8" fill="#FFF1E6" opacity="0.8"/>
    
    {/* Coin Slot */}
    <rect x="80" y="255" width="40" height="6" rx="3" fill="#F2921D"/>
    <text x="100" y="252" textAnchor="middle" fill="#F2921D" fontSize="6" opacity="0.7">INSERT COIN</text>
    
    {/* Top Marquee with lights */}
    <rect x="35" y="15" width="130" height="38" rx="6" fill="#F2921D"/>
    <rect x="40" y="20" width="120" height="28" rx="4" fill="#0E0F14"/>
    <text x="100" y="40" textAnchor="middle" fill="#F2921D" fontSize="16" fontWeight="bold" 
          fontFamily="'Press Start 2P', monospace">GANCHO</text>
    
    {/* Marquee lights */}
    <circle cx="42" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.15s"/>
    </circle>
    <circle cx="158" cy="12" r="4" fill="#FFF1E6">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.3s"/>
    </circle>
    
    {/* Side decorations */}
    <rect x="25" y="100" width="5" height="30" fill="#F2921D" opacity="0.5"/>
    <rect x="170" y="100" width="5" height="30" fill="#F2921D" opacity="0.5"/>
    
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
    {/* Angled Cabinet Body */}
    <path d="M25 75 L175 75 L165 265 L35 265 Z" fill="url(#cabinetPink)" stroke="#B2174B" strokeWidth="3"/>
    {/* Inner body */}
    <path d="M32 82 L168 82 L159 258 L41 258 Z" fill="#0a0b10"/>
    
    {/* Playfield - angled */}
    <path d="M42 95 L158 95 L150 245 L50 245 Z" fill="#0E0F14"/>
    {/* Playfield glow */}
    <path d="M42 95 L158 95 L150 245 L50 245 Z" fill="url(#playfieldGlow)" opacity="0.3"/>
    
    {/* Upper bumpers with glow */}
    <g>
      <circle cx="75" cy="130" r="18" fill="#B2174B">
        <animate attributeName="r" values="18;20;18" dur="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="130" r="12" fill="#ff3366"/>
      <text x="75" y="134" textAnchor="middle" fill="#FFF1E6" fontSize="10" fontWeight="bold">100</text>
    </g>
    <g>
      <circle cx="125" cy="125" r="18" fill="#F2921D">
        <animate attributeName="r" values="18;20;18" dur="0.4s" repeatCount="indefinite" begin="0.2s"/>
      </circle>
      <circle cx="125" cy="125" r="12" fill="#ffb54d"/>
      <text x="125" y="129" textAnchor="middle" fill="#0E0F14" fontSize="10" fontWeight="bold">200</text>
    </g>
    <g>
      <circle cx="100" cy="165" r="15" fill="#B2174B">
        <animate attributeName="r" values="15;17;15" dur="0.4s" repeatCount="indefinite" begin="0.1s"/>
      </circle>
      <circle cx="100" cy="165" r="10" fill="#ff3366"/>
      <text x="100" y="169" textAnchor="middle" fill="#FFF1E6" fontSize="8" fontWeight="bold">50</text>
    </g>
    
    {/* Animated Ball */}
    <circle cx="130" cy="190" r="8" fill="url(#ballGradient)">
      <animate attributeName="cx" values="130;70;100;80;130" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="190;140;170;200;190" dur="4s" repeatCount="indefinite"/>
    </circle>
    
    {/* Flippers */}
    <g transform="translate(60, 225)">
      <rect x="0" y="0" width="35" height="10" rx="5" fill="#B2174B" 
            transform="rotate(-25, 0, 5)">
        <animate attributeName="transform" values="rotate(-25,0,5);rotate(-10,0,5);rotate(-25,0,5)" 
                 dur="0.3s" repeatCount="indefinite"/>
      </rect>
    </g>
    <g transform="translate(140, 225)">
      <rect x="-35" y="0" width="35" height="10" rx="5" fill="#B2174B" 
            transform="rotate(25, 0, 5)">
        <animate attributeName="transform" values="rotate(25,0,5);rotate(10,0,5);rotate(25,0,5)" 
                 dur="0.3s" repeatCount="indefinite" begin="0.15s"/>
      </rect>
    </g>
    
    {/* Score Display Backbox */}
    <rect x="40" y="20" width="120" height="50" rx="6" fill="#1a1b22" stroke="#B2174B" strokeWidth="2"/>
    <rect x="48" y="28" width="104" height="34" rx="4" fill="#0E0F14"/>
    {/* Score digits */}
    <text x="100" y="52" textAnchor="middle" fill="#B2174B" fontSize="20" fontWeight="bold"
          fontFamily="'Press Start 2P', monospace">88888</text>
    
    {/* Top Marquee */}
    <rect x="50" y="2" width="100" height="18" rx="4" fill="#B2174B"/>
    <text x="100" y="15" textAnchor="middle" fill="#FFF1E6" fontSize="10" fontWeight="bold">PINBALL</text>
    
    {/* Side rails */}
    <line x1="42" y1="95" x2="50" y2="245" stroke="#B2174B" strokeWidth="3"/>
    <line x1="158" y1="95" x2="150" y2="245" stroke="#B2174B" strokeWidth="3"/>
    
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
    {/* Racing Cabinet - sit-down style */}
    <rect x="20" y="45" width="160" height="220" rx="12" fill="url(#racingCabinet)" stroke="#F2921D" strokeWidth="3"/>
    <rect x="27" y="52" width="146" height="206" rx="10" fill="#0a0b10"/>
    
    {/* Main Screen */}
    <rect x="35" y="65" width="130" height="95" rx="6" fill="#1a1b22"/>
    <rect x="42" y="72" width="116" height="81" rx="4" fill="#0E0F14"/>
    
    {/* Racing Scene */}
    <rect x="42" y="72" width="116" height="81" rx="4" fill="url(#skyGradient)"/>
    {/* Road */}
    <path d="M100 153 L42 153 L60 100 L140 100 L158 153 Z" fill="#333"/>
    <path d="M100 153 L75 153 L85 110 L115 110 L125 153 Z" fill="#444"/>
    {/* Road lines */}
    <line x1="100" y1="110" x2="100" y2="153" stroke="#F2921D" strokeWidth="2" strokeDasharray="8,8">
      <animate attributeName="stroke-dashoffset" values="0;16" dur="0.3s" repeatCount="indefinite"/>
    </line>
    
    {/* Racing Car */}
    <g transform="translate(82, 125)">
      <rect x="0" y="0" width="36" height="22" rx="4" fill="#F2921D">
        <animate attributeName="y" values="0;-2;0;2;0" dur="0.15s" repeatCount="indefinite"/>
      </rect>
      <rect x="5" y="-8" width="26" height="12" rx="3" fill="#B2174B"/>
      <rect x="10" y="-5" width="16" height="6" rx="2" fill="#0E0F14" opacity="0.7"/>
      {/* Wheels */}
      <ellipse cx="6" cy="22" rx="5" ry="3" fill="#1a1b22"/>
      <ellipse cx="30" cy="22" rx="5" ry="3" fill="#1a1b22"/>
      {/* Exhaust flames */}
      <path d="M-5 8 Q-12 11 -8 15 Q-15 13 -10 18" fill="#F2921D" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="0.1s" repeatCount="indefinite"/>
      </path>
    </g>
    
    {/* Speed lines */}
    <line x1="50" y1="90" x2="50" y2="120" stroke="#FFF1E6" strokeWidth="2" opacity="0.6">
      <animate attributeName="y1" values="90;75;90" dur="0.2s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="90" x2="150" y2="120" stroke="#FFF1E6" strokeWidth="2" opacity="0.6">
      <animate attributeName="y1" values="90;75;90" dur="0.2s" repeatCount="indefinite"/>
    </line>
    
    {/* Steering Wheel */}
    <g transform="translate(100, 200)">
      <circle cx="0" cy="0" r="35" fill="none" stroke="#F2921D" strokeWidth="8"/>
      <circle cx="0" cy="0" r="28" fill="none" stroke="#333" strokeWidth="4"/>
      <circle cx="0" cy="0" r="12" fill="#1a1b22" stroke="#F2921D" strokeWidth="2"/>
      {/* Wheel spokes */}
      <line x1="0" y1="-28" x2="0" y2="-12" stroke="#F2921D" strokeWidth="4"/>
      <line x1="-24" y1="14" x2="-10" y2="6" stroke="#F2921D" strokeWidth="4"/>
      <line x1="24" y1="14" x2="10" y2="6" stroke="#F2921D" strokeWidth="4"/>
    </g>
    
    {/* Pedals */}
    <rect x="55" y="245" width="30" height="18" rx="3" fill="#F2921D"/>
    <rect x="115" y="245" width="30" height="18" rx="3" fill="#B2174B"/>
    <text x="70" y="257" textAnchor="middle" fill="#0E0F14" fontSize="6" fontWeight="bold">GAS</text>
    <text x="130" y="257" textAnchor="middle" fill="#FFF1E6" fontSize="6" fontWeight="bold">BRAKE</text>
    
    {/* Gear Shifter */}
    <rect x="155" y="175" width="15" height="40" rx="3" fill="#1a1b22"/>
    <circle cx="162" cy="185" r="8" fill="#F2921D"/>
    
    {/* Top Marquee */}
    <rect x="30" y="10" width="140" height="32" rx="6" fill="#F2921D"/>
    <rect x="38" y="18" width="124" height="16" rx="4" fill="#0E0F14"/>
    <text x="100" y="31" textAnchor="middle" fill="#F2921D" fontSize="12" fontWeight="bold">TURBO</text>
    
    {/* Speed indicator lights */}
    <circle cx="45" cy="165" r="5" fill="#00ff00">
      <animate attributeName="fill" values="#00ff00;#004400;#00ff00" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="45" cy="178" r="5" fill="#ffff00">
      <animate attributeName="fill" values="#ffff00;#444400;#ffff00" dur="0.5s" repeatCount="indefinite" begin="0.1s"/>
    </circle>
    <circle cx="45" cy="191" r="5" fill="#ff0000">
      <animate attributeName="fill" values="#ff0000;#440000;#ff0000" dur="0.5s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    
    <defs>
      <linearGradient id="racingCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a3a5c"/>
        <stop offset="60%" stopColor="#0E0F14"/>
        <stop offset="100%" stopColor="#333"/>
      </linearGradient>
    </defs>
  </svg>
)

const PuzzleMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    {/* Cabinet Body */}
    <rect x="25" y="50" width="150" height="215" rx="10" fill="url(#puzzleCabinet)" stroke="#B2174B" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    
    {/* Screen Bezel */}
    <rect x="40" y="70" width="120" height="105" rx="6" fill="#1a1b22"/>
    {/* Screen */}
    <rect x="48" y="78" width="104" height="89" rx="4" fill="#0E0F14"/>
    
    {/* Puzzle Grid - 3x3 with animations */}
    <g transform="translate(55, 85)">
      {/* Row 1 */}
      <rect x="0" y="0" width="28" height="24" rx="3" fill="#B2174B">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="32" y="0" width="28" height="24" rx="3" fill="#F2921D">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="0" width="28" height="24" rx="3" fill="#B2174B">
        <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" begin="0.5s"/>
      </rect>
      
      {/* Row 2 */}
      <rect x="0" y="28" width="28" height="24" rx="3" fill="#F2921D">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.3s"/>
      </rect>
      {/* Empty slot with glow */}
      <rect x="32" y="28" width="28" height="24" rx="3" fill="#1a1b22" stroke="#FFF1E6" strokeWidth="1" strokeDasharray="4,2">
        <animate attributeName="stroke-opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="28" width="28" height="24" rx="3" fill="#F2921D">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" begin="0.7s"/>
      </rect>
      
      {/* Row 3 */}
      <rect x="0" y="56" width="28" height="24" rx="3" fill="#B2174B">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="0.2s"/>
      </rect>
      <rect x="32" y="56" width="28" height="24" rx="3" fill="#B2174B">
        <animate attributeName="opacity" values="1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.4s"/>
      </rect>
      <rect x="64" y="56" width="28" height="24" rx="3" fill="#F2921D">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.6s"/>
      </rect>
      
      {/* Floating piece being placed */}
      <g>
        <rect x="28" y="20" width="32" height="28" rx="3" fill="#FFF1E6" opacity="0.9">
          <animate attributeName="x" values="70;32;70" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="y" values="-15;28;-15" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" repeatCount="indefinite"/>
        </rect>
      </g>
    </g>
    
    {/* Control Panel */}
    <rect x="45" y="185" width="110" height="65" rx="6" fill="#1a1b22"/>
    
    {/* D-Pad */}
    <g transform="translate(75, 215)">
      <rect x="-8" y="-20" width="16" height="40" rx="2" fill="#2a2b32"/>
      <rect x="-20" y="-8" width="40" height="16" rx="2" fill="#2a2b32"/>
      <circle cx="0" cy="0" r="6" fill="#B2174B"/>
      {/* Direction indicators */}
      <path d="M0 -15 L-5 -8 L5 -8 Z" fill="#B2174B"/>
      <path d="M0 15 L-5 8 L5 8 Z" fill="#B2174B"/>
      <path d="M-15 0 L-8 -5 L-8 5 Z" fill="#B2174B"/>
      <path d="M15 0 L8 -5 L8 5 Z" fill="#B2174B"/>
    </g>
    
    {/* Action Buttons */}
    <circle cx="120" cy="205" r="10" fill="#F2921D">
      <animate attributeName="fill-opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="140" cy="220" r="10" fill="#B2174B">
      <animate attributeName="fill-opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
    </circle>
    
    {/* Hint Button */}
    <rect x="95" y="235" width="50" height="12" rx="3" fill="#F2921D"/>
    <text x="120" y="244" textAnchor="middle" fill="#0E0F14" fontSize="7" fontWeight="bold">HINT</text>
    
    {/* Top Marquee */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#B2174B"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="35" textAnchor="middle" fill="#B2174B" fontSize="14" fontWeight="bold">PUZZLE</text>
    
    {/* Side decorations - puzzle piece silhouettes */}
    <path d="M22 120 L22 140 Q15 145 22 150 L22 170" fill="none" stroke="#B2174B" strokeWidth="2" opacity="0.5"/>
    <path d="M178 120 L178 140 Q185 145 178 150 L178 170" fill="none" stroke="#B2174B" strokeWidth="2" opacity="0.5"/>
    
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
    {/* Grand Throne-style Cabinet */}
    <path d="M20 55 L180 55 L170 260 L30 260 Z" fill="url(#masterCabinet)" stroke="#F2921D" strokeWidth="3"/>
    <path d="M28 62 L172 62 L163 253 L37 253 Z" fill="#0a0b10"/>
    
    {/* Crown on top */}
    <path d="M55 25 L75 45 L100 15 L125 45 L145 25 L145 55 L55 55 Z" fill="#F2921D"/>
    <circle cx="100" cy="30" r="8" fill="#FFF1E6"/>
    <circle cx="75" cy="38" r="5" fill="#B2174B"/>
    <circle cx="125" cy="38" r="5" fill="#B2174B"/>
    
    {/* Main Strategy Screen */}
    <rect x="40" y="70" width="120" height="95" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="79" rx="4" fill="#0E0F14"/>
    
    {/* Strategy Network Visualization */}
    <g transform="translate(100, 117)">
      {/* Central node - pulsing */}
      <circle cx="0" cy="0" r="12" fill="#F2921D">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="0" y="4" textAnchor="middle" fill="#0E0F14" fontSize="8" fontWeight="bold">★</text>
      
      {/* Pulse ring */}
      <circle cx="0" cy="0" r="20" fill="none" stroke="#F2921D" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;35;15" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connected nodes */}
      <circle cx="-35" cy="-20" r="8" fill="#B2174B"/>
      <circle cx="35" cy="-20" r="8" fill="#B2174B"/>
      <circle cx="-30" cy="25" r="8" fill="#FFF1E6" opacity="0.8"/>
      <circle cx="30" cy="25" r="8" fill="#FFF1E6" opacity="0.8"/>
      
      {/* Connection lines with data flow animation */}
      <line x1="0" y1="-12" x2="-30" y2="-17" stroke="#F2921D" strokeWidth="2"/>
      <line x1="0" y1="-12" x2="30" y2="-17" stroke="#F2921D" strokeWidth="2"/>
      <line x1="-8" y1="8" x2="-25" y2="20" stroke="#B2174B" strokeWidth="2"/>
      <line x1="8" y1="8" x2="25" y2="20" stroke="#B2174B" strokeWidth="2"/>
      
      {/* Data particles */}
      <circle cx="0" cy="0" r="3" fill="#FFF1E6">
        <animate attributeName="cx" values="0;-35;0" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="0;-20;0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="0" r="3" fill="#FFF1E6">
        <animate attributeName="cx" values="0;35;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        <animate attributeName="cy" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
      </circle>
    </g>
    
    {/* Multi-monitor Control Panel */}
    <rect x="40" y="175" width="120" height="70" rx="6" fill="#1a1b22"/>
    
    {/* Left mini screen - bar chart */}
    <rect x="48" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <rect x="53" y="200" width="6" height="10" fill="#F2921D"/>
    <rect x="62" y="195" width="6" height="15" fill="#B2174B"/>
    <rect x="71" y="190" width="6" height="20" fill="#F2921D"/>
    <rect x="80" y="193" width="6" height="17" fill="#B2174B"/>
    
    {/* Right mini screen - line chart */}
    <rect x="104" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <polyline points="112,205 122,198 132,202 142,190 148,195" 
              fill="none" stroke="#F2921D" strokeWidth="2">
      <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite"/>
    </polyline>
    
    {/* Master Controls */}
    <g transform="translate(100, 235)">
      {/* Main execute button */}
      <rect x="-35" y="-8" width="70" height="20" rx="4" fill="#F2921D">
        <animate attributeName="fill" values="#F2921D;#ffb54d;#F2921D" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="0" y="6" textAnchor="middle" fill="#0E0F14" fontSize="9" fontWeight="bold">EXECUTE</text>
      
      {/* Side indicator lights */}
      <circle cx="-45" cy="2" r="4" fill="#00ff00"/>
      <circle cx="45" cy="2" r="4" fill="#00ff00"/>
    </g>
    
    {/* Top Banner */}
    <rect x="45" y="2" width="110" height="20" rx="4" fill="#0E0F14" stroke="#F2921D" strokeWidth="1"/>
    <text x="100" y="16" textAnchor="middle" fill="#F2921D" fontSize="10" fontWeight="bold">GAME MASTER</text>
    
    {/* Side gold decorations */}
    <rect x="20" y="90" width="8" height="50" rx="2" fill="#F2921D" opacity="0.4"/>
    <rect x="172" y="90" width="8" height="50" rx="2" fill="#F2921D" opacity="0.4"/>
    <rect x="20" y="150" width="8" height="50" rx="2" fill="#F2921D" opacity="0.4"/>
    <rect x="172" y="150" width="8" height="50" rx="2" fill="#F2921D" opacity="0.4"/>
    
    <defs>
      <linearGradient id="masterCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
    </defs>
  </svg>
)

// ============================================
// Machine Component Mapping
// ============================================

const machineComponents: Record<string, React.FC> = {
  gancho: GanchoMachine,
  pinball: PinballMachine,
  turbo: TurboMachine,
  puzzle: PuzzleMachine,
  gamemaster: GameMasterMachine,
}

// ============================================
// Machine Data
// ============================================

const machines = [
  {
    id: "gancho",
    name: "GANCHO",
    subtitle: "Máquina de Captación",
    color: "orange",
    description: "Estrategias que atraen leads cualificados como imanes.",
    features: [
      "Estrategia de captación multicanal",
      "Funnels de conversión optimizados",
      "Lead magnets irresistibles",
      "Automatización inteligente"
    ],
    stat: { value: "+340%", label: "Conversión" }
  },
  {
    id: "pinball",
    name: "PINBALL",
    subtitle: "Máquina de Branding",
    color: "pink",
    description: "Tu marca rebotando en todas las mentes.",
    features: [
      "Identidad visual completa",
      "Tono de voz y storytelling",
      "Manual de marca",
      "Assets multiplataforma"
    ],
    stat: { value: "98%", label: "Recall" }
  },
  {
    id: "turbo",
    name: "TURBO",
    subtitle: "Máquina de Performance",
    color: "orange",
    description: "Velocidad y potencia en campañas pagadas.",
    features: [
      "Google & Meta Ads",
      "Optimización continua A/B",
      "Reporting en tiempo real",
      "Escalado inteligente"
    ],
    stat: { value: "5.2x", label: "ROAS" }
  },
  {
    id: "puzzle",
    name: "PUZZLE",
    subtitle: "Máquina de Contenido",
    color: "pink",
    description: "Contenido que encaja perfecto y construye comunidad.",
    features: [
      "Estrategia de contenidos",
      "Producción audiovisual",
      "Copywriting persuasivo",
      "Community management"
    ],
    stat: { value: "+200%", label: "Engagement" }
  },
  {
    id: "gamemaster",
    name: "GAME MASTER",
    subtitle: "Máquina de Consultoría",
    color: "orange",
    description: "La visión estratégica que tu negocio necesita.",
    features: [
      "Auditoría de marketing 360°",
      "Plan estratégico anual",
      "Workshops de equipo",
      "Mentorías 1:1"
    ],
    stat: { value: "+150", label: "Marcas" }
  },
]

// ============================================
// Main Component
// ============================================

export function Maquinas() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeMachine, setActiveMachine] = useState<string | null>(null)

  return (
    <section
      id="maquinas"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ready-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,146,29,0.08)_0%,transparent_50%)]" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="pixel" className="mb-4">
            <Gamepad2 className="w-3 h-3 mr-2" />
            LEVEL 02
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-ready-cream">Nuestras </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ready-orange to-ready-pink">
              Máquinas
            </span>
          </h2>
          <p className="text-lg text-ready-cream/70 max-w-2xl mx-auto">
            5 servicios diseñados para que tu marca suba de nivel. 
            Elige tu jugada o combínalas para el 
            <span className="text-ready-orange font-semibold"> combo definitivo</span>.
          </p>
        </motion.div>

        {/* Machines Grid - Arcade Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {machines.map((machine, index) => {
            const MachineComponent = machineComponents[machine.id]
            const isActive = activeMachine === machine.id

            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`${index === 4 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMachine(isActive ? null : machine.id)}
                  className={`
                    relative cursor-pointer rounded-2xl p-6
                    bg-gradient-to-b from-ready-black-light to-ready-black
                    border-2 transition-all duration-300
                    ${isActive 
                      ? machine.color === 'orange' 
                        ? 'border-ready-orange shadow-[0_0_30px_rgba(242,146,29,0.3)]' 
                        : 'border-ready-pink shadow-[0_0_30px_rgba(178,23,75,0.3)]'
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Machine SVG */}
                  <div className="w-full h-64 md:h-72 mb-6 flex items-center justify-center">
                    <div className="w-48 h-full transform hover:scale-105 transition-transform duration-500">
                      <MachineComponent />
                    </div>
                  </div>

                  {/* Machine Info */}
                  <div className="text-center">
                    {/* Stats Badge */}
                    <Badge 
                      variant={machine.color === 'orange' ? 'default' : 'secondary'}
                      className="mb-3"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      {machine.stat.value} {machine.stat.label}
                    </Badge>

                    {/* Title */}
                    <h3 className={`
                      font-display text-2xl font-bold mb-1
                      ${machine.color === 'orange' ? 'text-ready-orange' : 'text-ready-pink'}
                    `}>
                      {machine.name}
                    </h3>
                    <p className="text-ready-cream/60 text-sm mb-3">
                      {machine.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-ready-cream/70 text-sm leading-relaxed">
                      {machine.description}
                    </p>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/10">
                            <p className="text-xs text-ready-cream/50 uppercase tracking-wider mb-3">
                              Incluye:
                            </p>
                            <ul className="space-y-2 text-left">
                              {machine.features.map((feature, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-ready-cream/70"
                                >
                                  <ChevronRight className={`w-4 h-4 flex-shrink-0
                                    ${machine.color === 'orange' 
                                      ? 'text-ready-orange' 
                                      : 'text-ready-pink'}`} 
                                  />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand Indicator */}
                    <div className={`
                      flex items-center justify-center mt-4 text-xs transition-colors
                      ${isActive ? 'text-ready-cream/60' : 'text-ready-cream/40'}
                    `}>
                      {isActive ? "Menos detalles" : "Ver detalles"}
                      <ChevronRight 
                        className={`w-4 h-4 ml-1 transition-transform duration-300 
                          ${isActive ? 'rotate-90' : ''}`} 
                      />
                    </div>
                  </div>

                  {/* Corner Glow Effect */}
                  <div className={`
                    absolute -top-1 -right-1 w-20 h-20 rounded-full blur-2xl opacity-20
                    ${machine.color === 'orange' ? 'bg-ready-orange' : 'bg-ready-pink'}
                  `} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-ready-cream/60 mb-4">
            ¿No sabes qué máquina elegir?
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-gradient-to-r from-ready-orange to-ready-pink
                       text-ready-black font-semibold
                       hover:shadow-[0_0_30px_rgba(242,146,29,0.4)]
                       transition-all duration-300"
          >
            <Gamepad2 className="w-5 h-5" />
            Te ayudamos a elegir
          </a>
        </motion.div>
      </div>
    </section>
  )
}
