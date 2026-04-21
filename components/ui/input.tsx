import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full bg-background border border-input text-foreground placeholder:text-muted-foreground/80 focus-visible:ring-ring/30 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      size: {
        lg: "h-10 px-4 text-sm rounded-md",
        md: "h-9 px-3 text-sm rounded-md",
        sm: "h-8 px-2.5 text-xs rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Input({
  className,
  type,
  size,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
