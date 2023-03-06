import { configureStore, createSlice } from "@reduxjs/toolkit";

const initState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initState,
  reducers: {
    addTask(state, actions) {
      state.tasks.push(actions.payload);
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export const taskAction = taskSlice.actions;

export default store;
