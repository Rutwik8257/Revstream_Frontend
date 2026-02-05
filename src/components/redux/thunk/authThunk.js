

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addAddress,
  addAddressCompany,
  addUser,
  getUser,
  login,
  sendEmail,
  updateCompanyProfile,
} from "../apiCalls/apiCalls";

// ===== CREATE USER =====
export const createUser = createAsyncThunk(
  "user/addUser",
  async (value, { rejectWithValue }) => {
    try {
      const data = await addUser(value); // ✅ already data
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Registration failed",
      );
    }
  },
);
export const addAddressData = createAsyncThunk(
  "address/add",
  async ({ payload, userId }, { rejectWithValue }) => {
    try {
      return await addAddressCompany(payload, userId);
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Address save failed"
      );
    }
  }
);

// ===== GET USER DATA =====
export const getUserData = createAsyncThunk(
  "address/userData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUser();
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Address save failed",
      );
    }
  },
);
export const updateCompanyData = createAsyncThunk(
  "address/updateCompany",
  async (value, { rejectWithValue }) => {
    try {
      const data = await updateCompanyProfile(value);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Address save failed",
      );
    }
  },
);

// ===== SEND EMAIL =====
export const sendEmailData = createAsyncThunk(
  "user/sendEmail",
  async (value, { rejectWithValue }) => {
    try {
      const data = await sendEmail(value); // ✅ already data
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Email sending failed",
      );
    }
  },
);

// ===== LOGIN =====
export const loginData = createAsyncThunk(
  "user/login",
  async (value, { rejectWithValue }) => {
    try {
      const data = await login(value); // ✅ already data
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Invalid credentials",
      );
    }
  },
);
