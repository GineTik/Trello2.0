import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion/Accordion"
import { Button } from "@/components/button/Button"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { GoPlus } from "react-icons/go"
import ListViewAddItem from "../add-item/ListViewAddItem"
import styles from "./ListViewGroup.module.scss"

type ListViewGroupProps = Omit<ComponentPropsWithoutRef<typeof AccordionItem>, "value"> & {
    title: string
}

const ListViewGroup = ({title, children, className, ...props}: ListViewGroupProps) => {
  return (
        <AccordionItem className={cn(styles.group, className)} value={title} {...props}>
            <AccordionTrigger className={styles.group__trigger}>
                {title}
                <Button className={styles.group__icon} variant="hover_background" size="cube">
                    <GoPlus />
                </Button>
            </AccordionTrigger>
            <AccordionContent className={styles.group__content}>
                {children}
                <ListViewAddItem />
            </AccordionContent>
        </AccordionItem>
  )
}

export default ListViewGroup
