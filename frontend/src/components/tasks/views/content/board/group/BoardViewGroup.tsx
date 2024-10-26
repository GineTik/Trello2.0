import { TypeUseGroupedTasksResultItem } from "@/hooks/tasks/use-grouped-tasks"
import BoardViewAddItem from "../add-item/BoardViewAddItem"
import BoardViewItem from "../item/BoardViewItem"
import styles from "./BoardViewGroup.module.scss"

type BoardViewGroupProps = TypeUseGroupedTasksResultItem

const BoardViewGroup = ({label, deadline, tasks}: BoardViewGroupProps) => {
  return (
    <div className={styles.group}>
      <div className={styles.group__header}>
        <span>{label} ({tasks?.length})</span>
      </div>
      {tasks?.map(task => <BoardViewItem {...task} />)}
      {deadline && <BoardViewAddItem deadline={deadline} />}
    </div>
  )
}

export default BoardViewGroup
