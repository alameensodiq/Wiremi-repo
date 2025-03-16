import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MomoDeposit } from "../Apis/MomoDeposit";
interface MomoDepositState {
  momodeposit: any | null;
  authenticatingmomodeposit: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: MomoDepositState = {
  momodeposit: null,
  authenticatingmomodeposit: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const MomoDepositSlice = createSlice({
  name: "momodeposit",
  initialState,
  reducers: {
    clearStatemomodeposit: (state) => {
      state.momodeposit = null;
      state.authenticatingmomodeposit = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(MomoDeposit.pending, (state) => {
        console.log("momodeposit pending...");
        state.authenticatingmomodeposit = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(MomoDeposit.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("momodeposit.fulfilled payload:", action.payload);
        state.authenticatingmomodeposit = false;
        state.authenticated = true;
        state.momodeposit = action.payload;
      })
      .addCase(MomoDeposit.rejected, (state, action) => {
        console.log("momodeposit rejected:", action.payload);
        state.authenticatingmomodeposit = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatemomodeposit } = MomoDepositSlice.actions;

export const MomoDepositSelector = (state: {
  momodeposit: MomoDepositState;
}) => state.momodeposit;

export default MomoDepositSlice.reducer;
