import { Button } from '@/components/button/Button'
import { useTasks } from '@/hooks/tasks/use-tasks'
import { GoPlus } from 'react-icons/go'
import styles from "./BoardViewAddItem.module.scss"

type BoardViewAddItemProps = {
    deadline: Date
}

const BoardViewAddItem = ({deadline}: BoardViewAddItemProps) => {
    const {createTask, createIsPending} = useTasks()

  return (
    <Button className={styles.item} onClick={() => createTask(deadline)} isLoading={createIsPending} variant="hover_background">
      <GoPlus />
    </Button>
  )
}

export default BoardViewAddItem
