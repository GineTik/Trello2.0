import { SelectItem } from "@/components/select/Select"
import { COLORS } from "@/config/colors.config"
import TaskSelectField from "../select/TaskSelectField"
import styles from "./TaskColorField.module.scss"

type TaskColorFieldProps = {
    defaultValue?: string
    className?: string
    onValueChange?: (value: string) => void
}

const TaskColorField = ({...props}: TaskColorFieldProps) => {
  return (
    <TaskSelectField placeholder="set the color" {...props}>
        {COLORS.map(color => <SelectItem key={color} value={color}>
            <div className={styles.color} style={{background: color}}></div>
        </SelectItem>)}
    </TaskSelectField>
  )
}

export default TaskColorField
