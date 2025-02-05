import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ForgetPin } from "../Apis/ForgetPin";

interface ForgetPinState {
  forgetpin: any | null;
  authenticatingforgetpin: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: ForgetPinState = {
    forgetpin: null,
  authenticatingforgetpin: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const ForgetPinSlice = createSlice({
  name: "forgetpin",
  initialState,
  reducers: {
    clearStateforgetpin: (state) => {
      state.forgetpin = null;
      state.authenticatingforgetpin = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ForgetPin.pending, (state) => {
        console.log("ForgetPin pending...");
        state.authenticatingforgetpin = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(ForgetPin.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("ForgetPin.fulfilled payload:", action.payload);
        state.authenticatingforgetpin = false;
        state.authenticated = true;
        state.forgetpin = action.payload;
      })
      .addCase(ForgetPin.rejected, (state, action) => {
        console.log("ForgetPin rejected:", action.payload);
        state.authenticatingforgetpin = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const {  clearStateforgetpin } = ForgetPinSlice.actions;

export const ForgetPinSelector = (state: { forgetpin: ForgetPinState }) =>
  state.forgetpin;

export default ForgetPinSlice.reducer;
