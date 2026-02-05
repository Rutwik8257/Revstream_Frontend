import { createSlice } from "@reduxjs/toolkit";
import { getWalletData, withdrawMoneyToAccount } from "../thunk/moneyThunk";

const initialState = {
  wallet: 0,
  loading: false,
  error: null,
  transactions: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ===== GET WALLET =====
      .addCase(getWalletData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWalletData.fulfilled, (state, action) => {
        state.loading = false;
        state.wallet = action.payload;
        state.transactions = action.payload.transactions;
      })
      .addCase(getWalletData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===== WITHDRAW MONEY =====
      .addCase(withdrawMoneyToAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(withdrawMoneyToAccount.fulfilled, (state, action) => {
        state.loading = false;

        // 🔁 Update balance after withdraw
        if (state.wallet) {
          state.wallet.balance = action.payload.balance;
          state.wallet.transactions = action.payload.transactions;
        }
      })
      .addCase(withdrawMoneyToAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default walletSlice.reducer;
