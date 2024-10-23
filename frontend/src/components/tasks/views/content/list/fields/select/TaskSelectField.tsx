"use client"

import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/select/Select"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import styles from "./TaskSelectField.module.scss"

type TaskSelectFieldProps = ComponentPropsWithoutRef<typeof SelectTrigger> & {
    placeholder?: string
    children: any
    defaultValue?: any
    onValueChange?: (value: string) => void
}

const TaskSelectField = ({defaultValue, placeholder, children, className, onValueChange, ...props}: TaskSelectFieldProps) => {

  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger className={cn(styles.field, className)} {...props}>
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={styles.content}>
            {children}
        </SelectContent>
    </Select>
  )
}

export default TaskSelectField
