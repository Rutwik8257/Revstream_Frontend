import { createSlice } from "@reduxjs/toolkit";
import { addTaskData, taskData } from "../thunk/taskThunk";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTaskError: (state) => {
      state.error = null;
    },
    resetTasks: (state) => {
      state.tasks = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* ADD TASK */
      .addCase(addTaskData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTaskData.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.unshift(action.payload);
      })
      .addCase(addTaskData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* GET TASKS */
      .addCase(taskData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(taskData.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(taskData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTaskError, resetTasks } = taskSlice.actions;
export default taskSlice.reducer;
