import { cn } from "@/lib/utils"
import * as React from "react"
import styles from "./BaseInput.module.scss"

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          styles.input,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

export { BaseInput }
