import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion/Accordion"
import type { TypeUseGroupedTasksResultItem } from "@/hooks/tasks/use-grouped-tasks"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import ListViewAddItem from "../add-item/ListViewAddItem"
import ListViewItem from "../item/ListViewItem"
import styles from "./ListViewGroup.module.scss"

type ListViewGroupProps = Omit<ComponentPropsWithoutRef<typeof AccordionItem>, "value"> & TypeUseGroupedTasksResultItem

const ListViewGroup = ({label, children, className, deadline, tasks, noAddTaskButton, ...props}: ListViewGroupProps) => {
  return (
        <AccordionItem className={cn(styles.group, className)} value={label} {...props}>
            <AccordionTrigger className={styles.group__trigger}>
                {label} ({tasks?.length})
            </AccordionTrigger>
            <AccordionContent className={styles.group__content}>
                {tasks?.length == 0 && <span className={styles.group__zero_tasks}>Zero tasks</span>}
                {tasks?.map(item => <ListViewItem key={item.id} {...item} />)}
                {!noAddTaskButton && <ListViewAddItem date={deadline} />}
            </AccordionContent>
        </AccordionItem>
  )
}

export default ListViewGroup
