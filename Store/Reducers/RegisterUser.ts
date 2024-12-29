import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser } from "../Apis/RegisterUser";

interface RegisterUserState {
  registerusers: any | null;
  authenticating: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: RegisterUserState = {
  registerusers: null,
  authenticating: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const RegisterUserSlice = createSlice({
  name: "registerusers",
  initialState,
  reducers: {
    clearStateregister: (state) => {
      state.registerusers = null;
      state.authenticating = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        console.log("RegisterUser pending...");
        state.authenticating = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(RegisterUser.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("RegisterUser.fulfilled payload:", action.payload);
        state.authenticating = false;
        state.authenticated = true;
        state.registerusers = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        console.log("RegisterUser rejected:", action.payload);
        state.authenticating = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateregister } = RegisterUserSlice.actions;

export const RegisterUserSelector = (state: { registerusers: RegisterUserState }) =>
  state.registerusers;

export default RegisterUserSlice.reducer;
