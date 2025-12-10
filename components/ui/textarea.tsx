import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[120px] w-full rounded-xl border border-white/10 
           bg-ready-black-light px-4 py-3 text-sm text-ready-cream
           placeholder:text-ready-cream/40
           focus:outline-none focus:ring-2 focus:ring-ready-orange/60 
           focus:border-ready-orange/40
           focus:shadow-[0_0_20px_rgba(242,146,29,0.1)]
           hover:border-white/20
           disabled:cursor-not-allowed disabled:opacity-50
           transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] resize-none`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
