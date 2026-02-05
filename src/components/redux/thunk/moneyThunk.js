import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWallet, withdrawMoney } from "../apiCalls/apiCalls";

// 👉 Withdraw Money
export const withdrawMoneyToAccount = createAsyncThunk(
  "wallet/withdrawMoney",
  async (value, { rejectWithValue }) => {
    try {
      const response = await withdrawMoney(value);
      return response; // ✅ ONLY serializable data
    } catch (error) {
      return rejectWithValue(
        error.response|| error.message
      ); // ✅ serializable error
    }
  }
);

// 👉 Get Wallet Data
export const getWalletData = createAsyncThunk(
  "wallet/getWallet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getWallet();
      return response; // ✅ ONLY data
    } catch (error) {
      return rejectWithValue(
        error.response || error.message
      );
    }
  }
);
