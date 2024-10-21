import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import styles from "./Button.module.scss"

const buttonVariants = cva(
  cn(styles.variants_base, styles.sizes_base),
  {
    variants: {
      variant: {
        default: styles.variants_default,
        hover_background: styles.variants_hover_background,
        underline_hover_background: styles.variants_underline_hover_background,
        no_background: styles.variants_no_background,
        accent: styles.variants_accent
      },
      size: {
        default: styles.sizes_default,
        sm: styles.sizes_sm,
        lg: styles.sizes_lg,
        icon: styles.sizes_icon,
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
