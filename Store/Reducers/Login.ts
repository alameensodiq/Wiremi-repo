import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Login} from '../Apis/Login';

interface LoginState {
  logins: any | null;
  authenticatinglogin: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: LoginState = {
  logins: null,
  authenticatinglogin: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const LoginSlice = createSlice({
  name: "logins",
  initialState,
  reducers: {
    clearStatelogin: (state) => {
      state.logins = null;
      state.authenticatinglogin = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.authenticatinglogin = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(Login.fulfilled, (state, action: PayloadAction<any>) => {
        state.authenticatinglogin = false;
        state.authenticated = true;
        state.logins = action.payload;
      })
      .addCase(Login.rejected, (state, action) => {
        state.authenticatinglogin = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatelogin } = LoginSlice.actions;

export const LoginSelector = (state: { logins: LoginState }) =>
  state.logins;

export default LoginSlice.reducer;
