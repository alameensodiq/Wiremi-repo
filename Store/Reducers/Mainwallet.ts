import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mainwallet } from "../Apis/Mainwallet";

interface MainwalletState {
  mainwallet: any | null;
  authenticatingmainwallet: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: MainwalletState = {
  mainwallet: null,
  authenticatingmainwallet: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const MainwalletSlice = createSlice({
  name: "mainwallet",
  initialState,
  reducers: {
    clearStatemainwallet: (state) => {
      state.mainwallet = null;
      state.authenticatingmainwallet = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Mainwallet.pending, (state) => {
        state.authenticatingmainwallet = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(Mainwallet.fulfilled, (state, action: PayloadAction<any>) => {
        state.authenticatingmainwallet = false;
        state.authenticated = true;
        state.mainwallet = action.payload;
      })
      .addCase(Mainwallet.rejected, (state, action) => {
        state.authenticatingmainwallet = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatemainwallet } = MainwalletSlice.actions;

export const mainwalletSelector = (state: { mainwallet: MainwalletState }) =>
  state.mainwallet;

export default MainwalletSlice.reducer;
