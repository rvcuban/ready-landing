import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold 
   transition-colors uppercase tracking-wider`,
  {
    variants: {
      variant: {
        default: "bg-ready-orange/20 text-ready-orange border border-ready-orange/30",
        secondary: "bg-ready-pink/20 text-ready-pink border border-ready-pink/30",
        outline: "border border-white/20 text-ready-cream",
        pixel: `bg-ready-black border-2 border-ready-orange text-ready-orange 
                font-pixel text-[8px] rounded-none`,
        success: "bg-green-500/20 text-green-400 border border-green-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
