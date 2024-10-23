import { Button } from "@/components/button/Button"
import Heading from "@/components/heading/Heading"
import { PageHeader, PageHeaderRow } from "@/components/page-header/PageHeader"
import { FiPlusSquare } from "react-icons/fi"
import { MdKeyboardArrowDown } from "react-icons/md"
import styles from "./TaskHeader.module.scss"

const TaskHeader = () => {
  return (
    <PageHeader className={styles.header}>
      <PageHeaderRow className={styles.header__row}>
        <div className={styles.header__information}>
            <Heading tag="h1">Trello 2.0 tasks board</Heading>
            <p className={styles.header__description}>Create and complete and manage your tasks using board or list views</p>
        </div>
        <div className={styles.header__actions}>
            <Button variant="default">
                Sort
                <MdKeyboardArrowDown />
            </Button>
            <Button variant="accent">
                <FiPlusSquare />
                Create a task
            </Button>
        </div>
      </PageHeaderRow>
    </PageHeader>
  )
}

export default TaskHeader
