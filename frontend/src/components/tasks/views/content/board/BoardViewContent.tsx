import { VIEWS } from "@/config/views.config"
import ViewContentWrapper from "../ViewContentWrapper"

const BoardViewContent = () => {
  return (
    <ViewContentWrapper value={VIEWS.BOARD}>
      Hello boards!
    </ViewContentWrapper>
  )
}

export default BoardViewContent
