import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-xl 
   text-sm font-semibold 
   transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
   focus-visible:outline-none focus-visible:ring-2 
   focus-visible:ring-ready-orange focus-visible:ring-offset-2 
   focus-visible:ring-offset-ready-black 
   disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `bg-ready-orange text-ready-black hover:bg-ready-orange/90 
                  shadow-[0_4px_14px_rgba(242,146,29,0.25)]
                  hover:shadow-[0_8px_25px_rgba(242,146,29,0.35)] 
                  hover:-translate-y-0.5 active:translate-y-0
                  active:shadow-[0_2px_8px_rgba(242,146,29,0.2)]`,
        secondary: `bg-ready-pink text-ready-cream hover:bg-ready-pink/90 
                    shadow-[0_4px_14px_rgba(178,23,75,0.25)]
                    hover:shadow-[0_8px_25px_rgba(178,23,75,0.35)]
                    hover:-translate-y-0.5 active:translate-y-0`,
        outline: `border-2 border-ready-orange text-ready-orange bg-transparent 
                  hover:bg-ready-orange hover:text-ready-black
                  hover:shadow-[0_0_20px_rgba(242,146,29,0.2)]`,
        ghost: `text-ready-cream hover:bg-white/10 hover:text-ready-orange`,
        link: `text-ready-orange underline-offset-4 hover:underline`,
        arcade: `bg-gradient-to-r from-ready-orange to-ready-pink text-ready-black 
                 font-bold uppercase tracking-wider 
                 shadow-[0_6px_20px_rgba(242,146,29,0.3)]
                 hover:shadow-[0_10px_35px_rgba(242,146,29,0.4)] 
                 hover:-translate-y-0.5 active:translate-y-0
                 active:shadow-[0_3px_10px_rgba(242,146,29,0.25)]
                 relative overflow-hidden`,
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
