import { createSlice } from "@reduxjs/toolkit";
import { concenData, raiseTicketData } from "../thunk/supportThunk";

let supportSlice = createSlice({
  name: "support",
  initialState: {
    raiseTicketData: null,
    raiseTicketLoading: false,
    raiseTicketError: null,
    concenData: null,
    concenLoading: false,
    concenError: null,
  },
  extraReducers: (builder) => {
    builder
      // ! Raise a ticket
      .addCase(raiseTicketData.pending, (state) => {
        state.raiseTicketLoading = true;
        state.raiseTicketError = null;
      })
      .addCase(raiseTicketData.fulfilled, (state, action) => {
        state.raiseTicketLoading = false;
        state.raiseTicketData = action.payload;
        console.log(action);
      })
      .addCase(raiseTicketData.rejected, (state, action) => {
        state.raiseTicketLoading = false;
        state.raiseTicketError = action.payload;
      })
      // ! Concerns
      .addCase(concenData.pending, (state) => {
        state.concenLoading = true;
        state.concenError = null;
      })
      .addCase(concenData.fulfilled, (state, action) => {
        state.concenLoading = false;
        state.concenData = action.payload;
        console.log(action);
      })
      .addCase(concenData.rejected, (state, action) => {
        state.concenLoading = false;
        state.concenError = action.payload;
      });
  },
});
export default supportSlice.reducer;
