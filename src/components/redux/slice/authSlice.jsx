import { createSlice } from "@reduxjs/toolkit";
import {
  addAddressData,
  createUser,
  getUserData,
  loginData,
  sendEmailData,
  updateCompanyData,
} from "../thunk/authThunk";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  sentEmail: false,
  loading: false,
  error: null,
  message: null,
  userId: null,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.sentEmail = false;
      state.error = null;
      localStorage.removeItem("token");
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* CREATE USER */
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload.message;
        state.userId = action.payload.registrationId;
        console.log(action.payload.registrationId);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addAddressData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddressData.fulfilled, (state, action) => {
        state.loading = false;
        // state.userData = action.payload;
        console.log(action);
      })
      .addCase(addAddressData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===== GET USER DATA =====
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        console.log(action);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // update company profile
      .addCase(updateCompanyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCompanyData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        console.log(action);
      })
      .addCase(updateCompanyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* SEND EMAIL */
      .addCase(sendEmailData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendEmailData.fulfilled, (state) => {
        state.loading = false;
        state.sentEmail = true;
      })
      .addCase(sendEmailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(loginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.message);
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
