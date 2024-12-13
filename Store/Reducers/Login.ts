import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Login} from '../Apis/Login';

interface LoginState {
  login: any | null;
  authenticating: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: LoginState = {
  login: null,
  authenticating: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const LoginSlice = createSlice({
  name: "logins",
  initialState,
  reducers: {
    clearState: (state) => {
      state.login = null;
      state.authenticating = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.authenticating = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(Login.fulfilled, (state, action: PayloadAction<any>) => {
        state.authenticating = false;
        state.authenticated = true;
        state.login = action.payload;
      })
      .addCase(Login.rejected, (state, action) => {
        state.authenticating = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearState } = LoginSlice.actions;

export const LoginSelector = (state: { login: LoginState }) =>
  state.login;

export default LoginSlice.reducer;
