import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-start border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent border-border text-foreground",
        destructive: "bg-destructive text-white",
      },
      appearance: {
        default: "",
        light: "",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        lg: "rounded-md px-2 h-7 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5",
        md: "rounded-md px-1.5 h-6 min-w-6 gap-1 text-xs [&_svg]:size-3.5",
        sm: "rounded-sm px-1 h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        appearance: "light",
        className: "bg-primary/10 text-primary",
      },
      {
        variant: "secondary",
        appearance: "light",
        className: "bg-secondary/10 text-secondary-foreground",
      },
      {
        variant: "destructive",
        appearance: "light",
        className: "bg-destructive/10 text-destructive",
      },
      {
        variant: "primary",
        appearance: "ghost",
        className: "text-primary",
      },
      {
        variant: "destructive",
        appearance: "ghost",
        className: "text-destructive",
      },
    ],
    defaultVariants: {
      variant: "primary",
      appearance: "default",
      size: "md",
    },
  },
)

function Badge({
  className,
  variant,
  size,
  appearance,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "span"
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant, size, appearance }), className)} {...props} />
}

export { Badge, badgeVariants }
