import { TabsContent } from "@/components/tabs/Tabs"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import styles from "./ViewContentWrapper.module.scss"

type ViewContentWrapperProps = PropsWithChildren & ComponentPropsWithoutRef<typeof TabsContent>

const ViewContentWrapper = ({className, ...props}: ViewContentWrapperProps) => {
  return (
    <TabsContent className={cn(styles.wrapper, className)} {...props} />
  )
}

export default ViewContentWrapper
