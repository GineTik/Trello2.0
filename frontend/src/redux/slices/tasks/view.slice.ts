import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const SELECTED_TASK_VIEW_COOKIE = 'selectedTaskView';

export const taskViewsSlice = createSlice({
  name: 'task-views',
  initialState: () => ({
    value: Cookies.get(SELECTED_TASK_VIEW_COOKIE) ?? null,
  }),
  reducers: {
    saveSelectedTaskView: (state, { payload }) => {
      state.value = payload;
      Cookies.set(SELECTED_TASK_VIEW_COOKIE, payload);
    },
  },
});

export const { saveSelectedTaskView } = taskViewsSlice.actions;
export default taskViewsSlice.reducer;
