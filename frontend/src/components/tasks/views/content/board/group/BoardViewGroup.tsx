import { TypeTask } from "@/types/task.types"
import BoardViewItem from "../item/BoardViewItem"
import styles from "./BoardViewGroup.module.scss"

type BoardViewGroupProps = {
    title: string
    date?: Date
    tasks?: TypeTask[]
}

const BoardViewGroup = ({title, date, tasks}: BoardViewGroupProps) => {
  return (
    <div className={styles.group}>
      <div>{title} ({tasks?.length})</div>
      {tasks?.map(task => <BoardViewItem {...task} />)}
    </div>
  )
}

export default BoardViewGroup
