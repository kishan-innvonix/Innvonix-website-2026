"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva("inline-flex items-center max-w-full overflow-x-auto", {
  variants: {
    variant: {
      default: "bg-accent rounded-lg p-1 gap-1",
      line: "border-b border-border gap-2",
      button: "gap-2",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

const tabsTriggerVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-colors", {
  variants: {
    variant: {
      default: "text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground",
      button: "text-accent-foreground data-[state=active]:bg-accent",
      line: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
    },
    size: {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

type TabsContextType = {
  variant?: "default" | "button" | "line"
  size?: "sm" | "md" | "lg"
}

const TabsContext = React.createContext<TabsContextType>({
  variant: "default",
  size: "md",
})

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn(className)} {...props} />
}

function TabsList({
  className,
  variant = "default",
  size = "md",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsContext.Provider value={{ variant: variant ?? "default", size: size ?? "md" }}>
      <TabsPrimitive.List data-slot="tabs-list" className={cn(tabsListVariants({ variant, size }), className)} {...props} />
    </TabsContext.Provider>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant, size } = React.useContext(TabsContext)
  return <TabsPrimitive.Trigger data-slot="tabs-trigger" className={cn(tabsTriggerVariants({ variant, size }), className)} {...props} />
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn("mt-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
