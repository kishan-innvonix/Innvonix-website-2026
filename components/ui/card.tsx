"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type CardContextType = {
  variant: "default" | "accent"
}

const CardContext = React.createContext<CardContextType>({ variant: "default" })

const useCardContext = () => React.useContext(CardContext)

const cardVariants = cva("flex flex-col items-stretch text-card-foreground rounded-xl", {
  variants: {
    variant: {
      default: "bg-card border border-border shadow-xs",
      accent: "bg-muted shadow-xs p-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const cardHeaderVariants = cva("flex items-center justify-between flex-wrap px-5 min-h-14 gap-2.5", {
  variants: {
    variant: {
      default: "border-b border-border",
      accent: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const cardContentVariants = cva("grow p-5", {
  variants: {
    variant: {
      default: "",
      accent: "bg-card rounded-t-xl [&:last-child]:rounded-b-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const cardFooterVariants = cva("flex items-center px-5 min-h-14", {
  variants: {
    variant: {
      default: "border-t border-border",
      accent: "bg-card rounded-b-xl mt-[2px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Card({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  const resolvedVariant: CardContextType["variant"] = variant ?? "default"

  return (
    <CardContext.Provider value={{ variant: resolvedVariant }}>
      <div data-slot="card" className={cn(cardVariants({ variant: resolvedVariant }), className)} {...props} />
    </CardContext.Provider>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext()
  return <div data-slot="card-header" className={cn(cardHeaderVariants({ variant }), className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext()
  return <div data-slot="card-content" className={cn(cardContentVariants({ variant }), className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext()
  return <div data-slot="card-footer" className={cn(cardFooterVariants({ variant }), className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("text-base font-semibold leading-none tracking-tight", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
