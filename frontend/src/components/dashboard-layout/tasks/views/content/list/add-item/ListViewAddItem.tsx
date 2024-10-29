import { useTasks } from '@/hooks/tasks/use-tasks'
import { GoPlus } from 'react-icons/go'
import styles from "./ListViewAddItem.module.scss"

type ListViewAddItemProps = {
  date: Date
}

const ListViewAddItem = ({date}: ListViewAddItemProps) => {
  const {createTask} = useTasks()

  return (
    <div className={styles.item} onClick={() => createTask(date)}>
      <GoPlus />
      New
    </div>
  )
}

export default ListViewAddItem
