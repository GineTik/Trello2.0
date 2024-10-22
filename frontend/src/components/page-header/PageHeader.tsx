import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"
import styles from "./PageHeader.module.scss"

type PageHeader = ButtonHTMLAttributes<HTMLDivElement> & {
  children: any
}

const PageHeader = ({className, ...props}: PageHeader) => {
  return (
    <div className={cn(styles.header, className)} {...props} />
  )
}

const PageHeaderRow = ({className, ...props}: PageHeader) => {
    return (
      <div className={cn(styles.header__row, className)} {...props} />
    )
  }

export { PageHeader, PageHeaderRow }

