import { TypeUser } from '@/types/user.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TypeState = {
  value?: TypeUser | null;
};

export const profileSlice = createSlice({
  name: 'task-views',
  initialState: <TypeState>{
    value: null,
  },
  reducers: {
    update: (state, { payload }: PayloadAction<TypeUser>) => {
      state.value = payload;
    },
    logout: state => {
      state.value = null;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
