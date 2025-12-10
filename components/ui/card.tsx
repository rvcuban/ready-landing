import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-xl border border-white/10 bg-ready-black-light 
       text-ready-cream shadow-md transition-all duration-300`,
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-display text-2xl font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-ready-cream/70", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Custom Arcade Card variant
const ArcadeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glowColor?: 'orange' | 'pink' }
>(({ className, glowColor = 'orange', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `relative rounded-xl border bg-ready-black-light text-ready-cream 
       overflow-hidden transition-all duration-500 group
       hover:-translate-y-2`,
      glowColor === 'orange' 
        ? 'border-ready-orange/30 hover:border-ready-orange hover:shadow-arcade' 
        : 'border-ready-pink/30 hover:border-ready-pink hover:shadow-neon-pink',
      className
    )}
    {...props}
  >
    {/* Glow effect on hover */}
    <div 
      className={cn(
        `absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`,
        glowColor === 'orange' 
          ? 'bg-gradient-radial from-ready-orange/10 to-transparent' 
          : 'bg-gradient-radial from-ready-pink/10 to-transparent'
      )} 
    />
    {props.children}
  </div>
))
ArcadeCard.displayName = "ArcadeCard"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  ArcadeCard 
}
