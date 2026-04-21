import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "w-full bg-background border border-input text-foreground placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      size: {
        lg: "px-4 py-3 text-sm rounded-md",
        md: "px-3 py-2.5 text-sm rounded-md",
        sm: "px-2.5 py-2 text-xs rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

function Textarea({
  className,
  size,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return <textarea data-slot="textarea" className={cn(textareaVariants({ size }), className)} {...props} />
}

export { Textarea, textareaVariants }
