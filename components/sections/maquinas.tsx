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
    <rect x="20" y="45" width="160" height="220" rx="12" fill="url(#racingCabinet)" stroke="#06B6D4" strokeWidth="3"/>
    <rect x="27" y="52" width="146" height="206" rx="10" fill="#0a0b10"/>
    
    {/* Neon glow effect */}
    <rect x="20" y="45" width="160" height="220" rx="12" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
    </rect>
    
    {/* Main Screen */}
    <rect x="35" y="65" width="130" height="95" rx="6" fill="#1a1b22"/>
    <rect x="42" y="72" width="116" height="81" rx="4" fill="#0E0F14"/>
    
    {/* Racing Scene */}
    <rect x="42" y="72" width="116" height="81" rx="4" fill="url(#skyGradientCyan)"/>
    {/* Road */}
    <path d="M100 153 L42 153 L60 100 L140 100 L158 153 Z" fill="#333"/>
    <path d="M100 153 L75 153 L85 110 L115 110 L125 153 Z" fill="#444"/>
    {/* Road lines - Cyan neon */}
    <line x1="100" y1="110" x2="100" y2="153" stroke="#06B6D4" strokeWidth="2" strokeDasharray="8,8">
      <animate attributeName="stroke-dashoffset" values="0;16" dur="0.3s" repeatCount="indefinite"/>
    </line>
    {/* Side road lines */}
    <line x1="65" y1="105" x2="55" y2="153" stroke="#06B6D4" strokeWidth="1" opacity="0.5"/>
    <line x1="135" y1="105" x2="145" y2="153" stroke="#06B6D4" strokeWidth="1" opacity="0.5"/>
    
    {/* Racing Car - Cyan themed */}
    <g transform="translate(82, 125)">
      <rect x="0" y="0" width="36" height="22" rx="4" fill="#06B6D4">
        <animate attributeName="y" values="0;-2;0;2;0" dur="0.15s" repeatCount="indefinite"/>
      </rect>
      <rect x="5" y="-8" width="26" height="12" rx="3" fill="#0891B2"/>
      <rect x="10" y="-5" width="16" height="6" rx="2" fill="#0E0F14" opacity="0.7"/>
      {/* Wheels */}
      <ellipse cx="6" cy="22" rx="5" ry="3" fill="#1a1b22"/>
      <ellipse cx="30" cy="22" rx="5" ry="3" fill="#1a1b22"/>
      {/* Exhaust flames - cyan/blue */}
      <path d="M-5 8 Q-12 11 -8 15 Q-15 13 -10 18" fill="#06B6D4" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="0.1s" repeatCount="indefinite"/>
      </path>
      {/* Neon underglow */}
      <rect x="-2" y="20" width="40" height="4" rx="2" fill="#06B6D4" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.5s" repeatCount="indefinite"/>
      </rect>
    </g>
    
    {/* Speed lines */}
    <line x1="50" y1="90" x2="50" y2="120" stroke="#06B6D4" strokeWidth="2" opacity="0.6">
      <animate attributeName="y1" values="90;75;90" dur="0.2s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="90" x2="150" y2="120" stroke="#06B6D4" strokeWidth="2" opacity="0.6">
      <animate attributeName="y1" values="90;75;90" dur="0.2s" repeatCount="indefinite"/>
    </line>
    
    {/* Steering Wheel - Cyan themed */}
    <g transform="translate(100, 200)">
      <circle cx="0" cy="0" r="35" fill="none" stroke="#06B6D4" strokeWidth="8"/>
      <circle cx="0" cy="0" r="28" fill="none" stroke="#333" strokeWidth="4"/>
      <circle cx="0" cy="0" r="12" fill="#1a1b22" stroke="#06B6D4" strokeWidth="2"/>
      {/* Wheel spokes */}
      <line x1="0" y1="-28" x2="0" y2="-12" stroke="#06B6D4" strokeWidth="4"/>
      <line x1="-24" y1="14" x2="-10" y2="6" stroke="#06B6D4" strokeWidth="4"/>
      <line x1="24" y1="14" x2="10" y2="6" stroke="#06B6D4" strokeWidth="4"/>
    </g>
    
    {/* Pedals */}
    <rect x="55" y="245" width="30" height="18" rx="3" fill="#06B6D4"/>
    <rect x="115" y="245" width="30" height="18" rx="3" fill="#0891B2"/>
    <text x="70" y="257" textAnchor="middle" fill="#0E0F14" fontSize="6" fontWeight="bold">GAS</text>
    <text x="130" y="257" textAnchor="middle" fill="#FFF1E6" fontSize="6" fontWeight="bold">BRAKE</text>
    
    {/* Gear Shifter */}
    <rect x="155" y="175" width="15" height="40" rx="3" fill="#1a1b22"/>
    <circle cx="162" cy="185" r="8" fill="#06B6D4">
      <animate attributeName="fill" values="#06B6D4;#0891B2;#06B6D4" dur="1s" repeatCount="indefinite"/>
    </circle>
    
    {/* Top Marquee - Cyan neon */}
    <rect x="30" y="10" width="140" height="32" rx="6" fill="#06B6D4"/>
    <rect x="38" y="18" width="124" height="16" rx="4" fill="#0E0F14"/>
    <text x="100" y="31" textAnchor="middle" fill="#06B6D4" fontSize="12" fontWeight="bold">TURBO</text>
    
    {/* Marquee lights */}
    <circle cx="42" cy="7" r="3" fill="#67E8F9">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="7" r="3" fill="#67E8F9">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.13s"/>
    </circle>
    <circle cx="158" cy="7" r="3" fill="#67E8F9">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.26s"/>
    </circle>
    
    {/* Speed indicator lights */}
    <circle cx="45" cy="165" r="5" fill="#22D3EE">
      <animate attributeName="fill" values="#22D3EE;#0E7490;#22D3EE" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="45" cy="178" r="5" fill="#06B6D4">
      <animate attributeName="fill" values="#06B6D4;#0E7490;#06B6D4" dur="0.5s" repeatCount="indefinite" begin="0.1s"/>
    </circle>
    <circle cx="45" cy="191" r="5" fill="#0891B2">
      <animate attributeName="fill" values="#0891B2;#155E75;#0891B2" dur="0.5s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    
    <defs>
      <linearGradient id="racingCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="skyGradientCyan" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0E4A5C"/>
        <stop offset="60%" stopColor="#0E0F14"/>
        <stop offset="100%" stopColor="#333"/>
      </linearGradient>
    </defs>
  </svg>
)

const PuzzleMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    {/* Cabinet Body - Purple themed */}
    <rect x="25" y="50" width="150" height="215" rx="10" fill="url(#puzzleCabinet)" stroke="#A855F7" strokeWidth="3"/>
    <rect x="32" y="57" width="136" height="201" rx="8" fill="#0a0b10"/>
    
    {/* Neon glow effect */}
    <rect x="25" y="50" width="150" height="215" rx="10" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite"/>
    </rect>
    
    {/* Screen Bezel */}
    <rect x="40" y="70" width="120" height="105" rx="6" fill="#1a1b22"/>
    {/* Screen */}
    <rect x="48" y="78" width="104" height="89" rx="4" fill="#0E0F14"/>
    {/* Screen purple glow */}
    <rect x="48" y="78" width="104" height="89" rx="4" fill="url(#screenGlowPurple)" opacity="0.4"/>
    
    {/* Puzzle Grid - 3x3 with purple theme */}
    <g transform="translate(55, 85)">
      {/* Row 1 */}
      <rect x="0" y="0" width="28" height="24" rx="3" fill="#A855F7">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="32" y="0" width="28" height="24" rx="3" fill="#C084FC">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="0" width="28" height="24" rx="3" fill="#A855F7">
        <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" begin="0.5s"/>
      </rect>
      
      {/* Row 2 */}
      <rect x="0" y="28" width="28" height="24" rx="3" fill="#C084FC">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.3s"/>
      </rect>
      {/* Empty slot with glow */}
      <rect x="32" y="28" width="28" height="24" rx="3" fill="#1a1b22" stroke="#E9D5FF" strokeWidth="1" strokeDasharray="4,2">
        <animate attributeName="stroke-opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      <rect x="64" y="28" width="28" height="24" rx="3" fill="#9333EA">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" begin="0.7s"/>
      </rect>
      
      {/* Row 3 */}
      <rect x="0" y="56" width="28" height="24" rx="3" fill="#9333EA">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="0.2s"/>
      </rect>
      <rect x="32" y="56" width="28" height="24" rx="3" fill="#A855F7">
        <animate attributeName="opacity" values="1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.4s"/>
      </rect>
      <rect x="64" y="56" width="28" height="24" rx="3" fill="#C084FC">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.6s"/>
      </rect>
      
      {/* Floating piece being placed */}
      <g>
        <rect x="28" y="20" width="32" height="28" rx="3" fill="#E9D5FF" opacity="0.9">
          <animate attributeName="x" values="70;32;70" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="y" values="-15;28;-15" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" repeatCount="indefinite"/>
        </rect>
      </g>
    </g>
    
    {/* Control Panel */}
    <rect x="45" y="185" width="110" height="65" rx="6" fill="#1a1b22"/>
    
    {/* D-Pad - Purple themed */}
    <g transform="translate(75, 215)">
      <rect x="-8" y="-20" width="16" height="40" rx="2" fill="#2a2b32"/>
      <rect x="-20" y="-8" width="40" height="16" rx="2" fill="#2a2b32"/>
      <circle cx="0" cy="0" r="6" fill="#A855F7"/>
      {/* Direction indicators */}
      <path d="M0 -15 L-5 -8 L5 -8 Z" fill="#A855F7"/>
      <path d="M0 15 L-5 8 L5 8 Z" fill="#A855F7"/>
      <path d="M-15 0 L-8 -5 L-8 5 Z" fill="#A855F7"/>
      <path d="M15 0 L8 -5 L8 5 Z" fill="#A855F7"/>
    </g>
    
    {/* Action Buttons - Purple theme */}
    <circle cx="120" cy="205" r="10" fill="#A855F7">
      <animate attributeName="fill-opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="140" cy="220" r="10" fill="#9333EA">
      <animate attributeName="fill-opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
    </circle>
    
    {/* Hint Button */}
    <rect x="95" y="235" width="50" height="12" rx="3" fill="#A855F7"/>
    <text x="120" y="244" textAnchor="middle" fill="#0E0F14" fontSize="7" fontWeight="bold">HINT</text>
    
    {/* Top Marquee - Purple neon */}
    <rect x="35" y="12" width="130" height="35" rx="6" fill="#A855F7"/>
    <rect x="42" y="19" width="116" height="21" rx="4" fill="#0E0F14"/>
    <text x="100" y="35" textAnchor="middle" fill="#A855F7" fontSize="14" fontWeight="bold">PUZZLE</text>
    
    {/* Marquee lights */}
    <circle cx="42" cy="9" r="3" fill="#E9D5FF">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="9" r="3" fill="#E9D5FF">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.15s"/>
    </circle>
    <circle cx="158" cy="9" r="3" fill="#E9D5FF">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" begin="0.3s"/>
    </circle>
    
    {/* Side decorations - puzzle piece silhouettes */}
    <path d="M22 120 L22 140 Q15 145 22 150 L22 170" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0.5"/>
    <path d="M178 120 L178 140 Q185 145 178 150 L178 170" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0.5"/>
    
    <defs>
      <linearGradient id="puzzleCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="screenGlowPurple" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#A855F7" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#0E0F14" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
)

const GameMasterMachine = () => (
  <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl">
    {/* Grand Throne-style Cabinet - Green themed */}
    <path d="M20 55 L180 55 L170 260 L30 260 Z" fill="url(#masterCabinet)" stroke="#22C55E" strokeWidth="3"/>
    <path d="M28 62 L172 62 L163 253 L37 253 Z" fill="#0a0b10"/>
    
    {/* Neon glow effect */}
    <path d="M20 55 L180 55 L170 260 L30 260 Z" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite"/>
    </path>
    
    {/* Crown on top - Green themed */}
    <path d="M55 25 L75 45 L100 15 L125 45 L145 25 L145 55 L55 55 Z" fill="#22C55E"/>
    <circle cx="100" cy="30" r="8" fill="#DCFCE7"/>
    <circle cx="75" cy="38" r="5" fill="#16A34A"/>
    <circle cx="125" cy="38" r="5" fill="#16A34A"/>
    {/* Crown sparkle */}
    <circle cx="100" cy="20" r="3" fill="#DCFCE7">
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
    </circle>
    
    {/* Main Strategy Screen */}
    <rect x="40" y="70" width="120" height="95" rx="6" fill="#1a1b22"/>
    <rect x="48" y="78" width="104" height="79" rx="4" fill="#0E0F14"/>
    {/* Screen green glow */}
    <rect x="48" y="78" width="104" height="79" rx="4" fill="url(#screenGlowGreen)" opacity="0.3"/>
    
    {/* Strategy Network Visualization - Green themed */}
    <g transform="translate(100, 117)">
      {/* Central node - pulsing */}
      <circle cx="0" cy="0" r="12" fill="#22C55E">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="0" y="4" textAnchor="middle" fill="#0E0F14" fontSize="8" fontWeight="bold">★</text>
      
      {/* Pulse ring */}
      <circle cx="0" cy="0" r="20" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;35;15" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connected nodes - green shades */}
      <circle cx="-35" cy="-20" r="8" fill="#4ADE80"/>
      <circle cx="35" cy="-20" r="8" fill="#4ADE80"/>
      <circle cx="-30" cy="25" r="8" fill="#86EFAC" opacity="0.8"/>
      <circle cx="30" cy="25" r="8" fill="#86EFAC" opacity="0.8"/>
      
      {/* Connection lines with data flow animation */}
      <line x1="0" y1="-12" x2="-30" y2="-17" stroke="#22C55E" strokeWidth="2"/>
      <line x1="0" y1="-12" x2="30" y2="-17" stroke="#22C55E" strokeWidth="2"/>
      <line x1="-8" y1="8" x2="-25" y2="20" stroke="#4ADE80" strokeWidth="2"/>
      <line x1="8" y1="8" x2="25" y2="20" stroke="#4ADE80" strokeWidth="2"/>
      
      {/* Data particles */}
      <circle cx="0" cy="0" r="3" fill="#DCFCE7">
        <animate attributeName="cx" values="0;-35;0" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="0;-20;0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="0" r="3" fill="#DCFCE7">
        <animate attributeName="cx" values="0;35;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        <animate attributeName="cy" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
      </circle>
    </g>
    
    {/* Multi-monitor Control Panel */}
    <rect x="40" y="175" width="120" height="70" rx="6" fill="#1a1b22"/>
    
    {/* Left mini screen - bar chart - green */}
    <rect x="48" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <rect x="53" y="200" width="6" height="10" fill="#22C55E"/>
    <rect x="62" y="195" width="6" height="15" fill="#4ADE80"/>
    <rect x="71" y="190" width="6" height="20" fill="#22C55E"/>
    <rect x="80" y="193" width="6" height="17" fill="#4ADE80"/>
    
    {/* Right mini screen - line chart - green */}
    <rect x="104" y="183" width="48" height="30" rx="3" fill="#0E0F14"/>
    <polyline points="112,205 122,198 132,202 142,190 148,195" 
              fill="none" stroke="#22C55E" strokeWidth="2">
      <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite"/>
    </polyline>
    
    {/* Master Controls */}
    <g transform="translate(100, 235)">
      {/* Main execute button - green */}
      <rect x="-35" y="-8" width="70" height="20" rx="4" fill="#22C55E">
        <animate attributeName="fill" values="#22C55E;#4ADE80;#22C55E" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="0" y="6" textAnchor="middle" fill="#0E0F14" fontSize="9" fontWeight="bold">EXECUTE</text>
      
      {/* Side indicator lights */}
      <circle cx="-45" cy="2" r="4" fill="#4ADE80">
        <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="45" cy="2" r="4" fill="#4ADE80">
        <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" begin="0.25s"/>
      </circle>
    </g>
    
    {/* Top Banner - green */}
    <rect x="45" y="2" width="110" height="20" rx="4" fill="#0E0F14" stroke="#22C55E" strokeWidth="1"/>
    <text x="100" y="16" textAnchor="middle" fill="#22C55E" fontSize="10" fontWeight="bold">GAME MASTER</text>
    
    {/* Marquee lights */}
    <circle cx="52" cy="12" r="3" fill="#86EFAC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="148" cy="12" r="3" fill="#86EFAC">
      <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    
    {/* Side green decorations */}
    <rect x="20" y="90" width="8" height="50" rx="2" fill="#22C55E" opacity="0.4"/>
    <rect x="172" y="90" width="8" height="50" rx="2" fill="#22C55E" opacity="0.4"/>
    <rect x="20" y="150" width="8" height="50" rx="2" fill="#22C55E" opacity="0.4"/>
    <rect x="172" y="150" width="8" height="50" rx="2" fill="#22C55E" opacity="0.4"/>
    
    <defs>
      <linearGradient id="masterCabinet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2b32"/>
        <stop offset="100%" stopColor="#1a1b22"/>
      </linearGradient>
      <linearGradient id="screenGlowGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#22C55E" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#0E0F14" stopOpacity="0"/>
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
    glowColor: "#F2921D",
    bgGradient: "from-orange-500/20 to-orange-900/5",
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
    glowColor: "#B2174B",
    bgGradient: "from-pink-500/20 to-pink-900/5",
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
    color: "cyan",
    glowColor: "#06B6D4",
    bgGradient: "from-cyan-500/20 to-cyan-900/5",
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
    color: "purple",
    glowColor: "#A855F7",
    bgGradient: "from-purple-500/20 to-purple-900/5",
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
    color: "green",
    glowColor: "#22C55E",
    bgGradient: "from-green-500/20 to-green-900/5",
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

            // Color mapping for different machines - using hex values for reliability
            const colorConfig: Record<string, { hex: string; light: string }> = {
              orange: { hex: '#F2921D', light: '#FFB54D' },
              pink: { hex: '#B2174B', light: '#FF3366' },
              cyan: { hex: '#06B6D4', light: '#22D3EE' },
              purple: { hex: '#A855F7', light: '#C084FC' },
              green: { hex: '#22C55E', light: '#4ADE80' }
            }

            const machineColor = colorConfig[machine.color] || colorConfig.orange

            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`${index === 4 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none" : ""}`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMachine(isActive ? null : machine.id)}
                  className="relative cursor-pointer rounded-2xl p-6 bg-gradient-to-b from-ready-black-light to-ready-black backdrop-blur-sm border-2 transition-all duration-500 group overflow-hidden"
                  style={{
                    borderColor: isActive ? machineColor.hex : 'rgba(255,255,255,0.1)',
                    boxShadow: isActive 
                      ? `0 0 60px ${machineColor.hex}40, inset 0 0 30px ${machineColor.hex}10` 
                      : undefined
                  }}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${machineColor.hex}20 0%, transparent 60%)`
                    }}
                  />

                  {/* Top Neon Line */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={isActive ? { width: '80%', opacity: 1 } : { width: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      backgroundColor: machineColor.hex,
                      boxShadow: `0 0 20px ${machineColor.hex}, 0 0 40px ${machineColor.hex}` 
                    }}
                  />

                  {/* Machine SVG with enhanced container */}
                  <div className="relative w-full h-64 md:h-72 mb-6 flex items-center justify-center">
                    {/* Glow behind machine */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div 
                        className="w-40 h-40 rounded-full blur-3xl"
                        style={{ backgroundColor: machine.glowColor, opacity: 0.3 }}
                      />
                    </motion.div>

                    {/* Machine with floating animation */}
                    <motion.div 
                      className="w-48 h-full relative z-10"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <motion.div
                        className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ rotate: [0, -2, 2, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <MachineComponent />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Machine Info */}
                  <div className="relative z-10 text-center">
                    {/* Stats Badge with animation */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block"
                    >
                      <Badge 
                        className="mb-3 text-ready-black font-bold"
                        style={{ 
                          backgroundColor: machineColor.hex,
                          boxShadow: `0 0 15px ${machineColor.hex}60` 
                        }}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {machine.stat.value} {machine.stat.label}
                      </Badge>
                    </motion.div>

                    {/* Title with glow effect */}
                    <h3 
                      className="font-display text-2xl font-bold mb-1"
                      style={{ 
                        color: machineColor.hex,
                        textShadow: `0 0 20px ${machineColor.hex}80`
                      }}
                    >
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
                          transition={{ duration: 0.4, ease: "easeOut" }}
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
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1, type: "spring" }}
                                  className="flex items-center gap-2 text-sm text-ready-cream/70"
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                  >
                                    <ChevronRight 
                                      className="w-4 h-4 flex-shrink-0" 
                                      style={{ color: machineColor.hex }}
                                    />
                                  </motion.div>
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand Indicator */}
                    <motion.div 
                      className={`
                        flex items-center justify-center mt-4 text-xs transition-colors
                        ${isActive ? 'text-ready-cream/60' : 'text-ready-cream/40'}
                      `}
                      animate={isActive ? {} : { y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {isActive ? "Menos detalles" : "Ver detalles"}
                      <ChevronRight 
                        className={`w-4 h-4 ml-1 transition-transform duration-300 
                          ${isActive ? 'rotate-90' : ''}`} 
                      />
                    </motion.div>
                  </div>

                  {/* Corner Glow Effects */}
                  <div 
                    className="absolute -top-2 -right-2 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundColor: machine.glowColor }}
                  />
                  <div 
                    className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: machine.glowColor }}
                  />

                  {/* Scanlines overlay for retro effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
                    }}
                  />
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
