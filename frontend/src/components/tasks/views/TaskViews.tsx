import { Tabs, TabsList } from "@/components/tabs/Tabs";
import { VIEWS } from "@/config/views.config";
import { FaListUl } from "react-icons/fa";
import { HiViewBoards } from "react-icons/hi";
import BoardViewContent from "./content/board/BoardViewContent";
import ListViewContent from "./content/list/ListViewContent";
import TaskViewsItem from "./item/TaskViewsItem";
import styles from "./TaskViews.module.scss";

const TaskViews = () => {
  return (
    <Tabs className={styles.views} defaultValue={VIEWS.LIST}>
      <TabsList className={styles.views_tabs}>
        <TaskViewsItem value={VIEWS.LIST}><FaListUl /> List</TaskViewsItem>
        <TaskViewsItem value={VIEWS.BOARD}><HiViewBoards /> Board</TaskViewsItem>
      </TabsList>
      <ListViewContent />
      <BoardViewContent />
    </Tabs>
  )
}

export default TaskViews
