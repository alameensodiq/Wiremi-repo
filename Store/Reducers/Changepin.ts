import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Changepin } from "../Apis/Changepin";

interface ChangepinState {
  changepin: any | null;
  authenticatingchangepin: boolean;
  authenticated: boolean;
  isError: boolean;
  errorschangepin: any;
}

const initialState: ChangepinState = {
  changepin: null,
  authenticatingchangepin: false,
  authenticated: false,
  isError: false,
  errorschangepin: null,
};

export const ChangepinSlice = createSlice({
  name: "changepin",
  initialState,
  reducers: {
    clearStatechangepin: (state) => {
      state.changepin = null;
      state.authenticatingchangepin = false;
      state.authenticated = false;
      state.isError = false;
      state.errorschangepin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Changepin.pending, (state) => {
        console.log("changepin pending...");
        state.authenticatingchangepin = true;
        state.authenticated = false;
        state.isError = false;
        state.errorschangepin = null;
      })
      .addCase(Changepin.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("changepin.fulfilled payload:", action.payload);
        state.authenticatingchangepin = false;
        state.authenticated = true;
        state.changepin = action.payload;
      })
      .addCase(Changepin.rejected, (state, action) => {
        console.log("changepin rejected:", action.payload);
        state.authenticatingchangepin = false;
        state.authenticated = false;
        state.isError = true;
        state.errorschangepin = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatechangepin } = ChangepinSlice.actions;

export const ChangepinSelector = (state: {
  changepin: ChangepinState;
}) => state.changepin;

export default ChangepinSlice.reducer;
