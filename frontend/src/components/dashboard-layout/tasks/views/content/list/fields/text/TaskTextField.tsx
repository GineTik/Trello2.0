import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"
import styles from "./TaskTextField.module.scss"

type TaskTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {

}

const TaskTextField = ({className, ...props}: TaskTextFieldProps) => {
  return (
    <input className={cn(styles.field, className)} {...props} />
  )
}

export default TaskTextField
