import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../slice/authSlice";
import taskSlice from "./../slice/taskSlice";
import walletSlice from "../slice/walletSlice";
import supportSlice from "../slice/supportSlice";

let store = configureStore({
  reducer: {
    auth: authSlice,
    taskSlice: taskSlice,
    wallet: walletSlice,
    support: supportSlice,
  },
});

export default store;
