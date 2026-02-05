import { createAsyncThunk } from "@reduxjs/toolkit";
import { getconcernsApi, getRaiseTicket } from "../apiCalls/apiCalls";

export let raiseTicketData = createAsyncThunk(
  "user/getRaiseTicket",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getRaiseTicket(); // ✅ already data
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Login failed",
      );
    }
  },
);
export let concenData = createAsyncThunk(
  "user/ceoncerns",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getconcernsApi(); // ✅ already data
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Login failed",
      );
    }
  },
);
