import { COOKIES } from "@/config/cookies.config"
import Cookies from "js-cookie"
import { useCallback, useEffect, useState } from "react"

export function useTaskView() {
    const selectView = useCallback((value: string) => {
        Cookies.set(COOKIES.SELECTED_TASK_VIEW, value)
    }, [])

    const [defaultValue, setDefaultValue] = useState<string>()
    useEffect(() => {
        setDefaultValue(Cookies.get(COOKIES.SELECTED_TASK_VIEW))
    }, [])
    
    return {selectView, defaultValue}
}