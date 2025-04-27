import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resetingpin } from "../Apis/ResetingPin";

interface ResetingpinState {
  resetingpin: any | null;
  authenticatingresetingpin: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsresetingpin: any;
}

const initialState: ResetingpinState = {
  resetingpin: null,
  authenticatingresetingpin: false,
  authenticated: false,
  isError: false,
  errorsresetingpin: null,
};

export const ResetingpinSlice = createSlice({
  name: "resetingpin",
  initialState,
  reducers: {
    clearStateresetingpin: (state) => {
      state.resetingpin = null;
      state.authenticatingresetingpin = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsresetingpin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Resetingpin.pending, (state) => {
        console.log("resetingpin pending...");
        state.authenticatingresetingpin = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsresetingpin = null;
      })
      .addCase(Resetingpin.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("resetingpin.fulfilled payload:", action.payload);
        state.authenticatingresetingpin = false;
        state.authenticated = true;
        state.resetingpin = action.payload;
      })
      .addCase(Resetingpin.rejected, (state, action) => {
        console.log("resetingpin rejected:", action.payload);
        state.authenticatingresetingpin = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsresetingpin = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStateresetingpin } = ResetingpinSlice.actions;

export const ResetingpinSelector = (state: {
    resetingpin: ResetingpinState;
}) => state.resetingpin;

export default ResetingpinSlice.reducer;
