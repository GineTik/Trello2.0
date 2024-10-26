import { ScrollArea, ScrollBar } from "@/components/scroll-area/ScrollArea"
import { VIEWS } from "@/config/views.config"
import { useGroupedTasks } from "@/hooks/tasks/use-grouped-tasks"
import ViewContentWrapper from "../ViewContentWrapper"
import BoardViewGroup from "./group/BoardViewGroup"

const BoardViewContent = () => {
  const {groupedTasks} = useGroupedTasks()

  return (
    <ScrollArea className="h-full">
      <ViewContentWrapper value={VIEWS.BOARD}>
        <div className="flex gap-2">
          {groupedTasks?.map(item => <BoardViewGroup 
            title={item.label} 
            {...item} 
          />)}
        </div>
      </ViewContentWrapper>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default BoardViewContent
