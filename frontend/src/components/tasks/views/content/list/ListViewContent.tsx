import { Accordion } from "@/components/accordion/Accordion"
import { VIEWS } from "@/config/views.config"
import { EnumTaskPriority } from "@/types/task.types"
import ViewContentWrapper from "../ViewContentWrapper"
import ListViewGroup from "./group/ListViewGroup"
import ListViewItem from "./item/ListViewItem"

const ListViewContent = () => {
  return (
    <ViewContentWrapper value={VIEWS.LIST}>
        <Accordion type="multiple" defaultValue={["Today", "Tomorrow", "Within Week"]}>
            <ListViewGroup title="Today">
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"} />
                <ListViewItem name="Second task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={undefined} isCompleted id={"test"}  />
            </ListViewGroup>
            <ListViewGroup title="Tomorrow">
            <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="Second task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
            </ListViewGroup>
            <ListViewGroup title="Within Week">
            <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="Second task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
                <ListViewItem name="First task" priority={EnumTaskPriority.high} isCompleted id={"test"}  />
            </ListViewGroup>
        </Accordion>
    </ViewContentWrapper>
  )
}

export default ListViewContent
