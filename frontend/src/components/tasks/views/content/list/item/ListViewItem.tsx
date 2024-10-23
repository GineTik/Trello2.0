"use client"

import { Checkbox } from "@/components/form/checkbox/Checkbox"
import { SelectItem } from "@/components/select/Select"
import { cn } from "@/lib/utils"
import { EnumTaskPriority, TypeTask } from "@/types/task.types"
import { useState } from "react"
import TaskColorField from "../fields/color/TaskColorField"
import TaskSelectField from "../fields/select/TaskSelectField"
import TaskTextField from "../fields/text/TaskTextField"
import styles from "./ListViewItem.module.scss"

const ListViewItem = ({name, priority, isCompleted, color}: TypeTask) => {
    const [actualColor, setActualColor] = useState(color)

  return (
    <div className={cn(styles.item)} style={{
        borderLeftColor: actualColor ?? "transparent"
    }}> 
        {/* <BaseInput className={cn(styles.item__checkbox, styles.field)} type="checkbox" defaultValue={isCompleted ? 1 : 0} /> */}
        <Checkbox className={styles.item__checkbox} defaultValue={isCompleted ? 1 : 0} />
        <TaskTextField className={styles.item__name} defaultValue={name} placeholder="change the name..." />
        <span className={styles.item__priority}>
            <TaskSelectField defaultValue={priority} placeholder="set the priority...">
                <SelectItem value={EnumTaskPriority.low}>
                    <span className={cn(styles.item__barge, styles.item__barge_low)}>low</span>
                </SelectItem>
                <SelectItem value={EnumTaskPriority.medium}>
                    <span className={cn(styles.item__barge, styles.item__barge_medium)}>medium</span>
                </SelectItem>
                <SelectItem value={EnumTaskPriority.high}>
                    <span className={cn(styles.item__barge, styles.item__barge_high)}>high</span>
                </SelectItem>
            </TaskSelectField>
        </span>
        <TaskColorField defaultValue={actualColor} className={styles.item__edit_color} onValueChange={(data) => setActualColor(data)} />
    </div>
  )
}

export default ListViewItem
