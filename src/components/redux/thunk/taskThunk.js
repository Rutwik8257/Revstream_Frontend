

import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTask, getTask } from "../apiCalls/apiCalls";

/* ADD TASK */
export const addTaskData = createAsyncThunk(
  "tasks/addTask",
  async (value, { rejectWithValue }) => {
    try {
      const response = await addTask(value);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/* GET TASKS */
export const taskData = createAsyncThunk(
  "tasks/getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTask();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
