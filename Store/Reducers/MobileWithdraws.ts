import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobileWithdraws } from "../Apis/MobileWithdraws";

interface MobileWithdrawsState {
  mobilewithdraws: any | null;
  authenticatingmobilewithdraws: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsmobilewithdraws: any;
}

const initialState: MobileWithdrawsState = {
  mobilewithdraws: null,
  authenticatingmobilewithdraws: false,
  authenticated: false,
  isError: false,
  errorsmobilewithdraws: null
};

export const MobileWithdrawsSlice = createSlice({
  name: "mobilewithdraws",
  initialState,
  reducers: {
    clearStatemobilewithdraws: (state) => {
      state.mobilewithdraws = null;
      state.authenticatingmobilewithdraws = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsmobilewithdraws = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(MobileWithdraws.pending, (state) => {
        console.log("mobilewithdraws pending...");
        state.authenticatingmobilewithdraws = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsmobilewithdraws = null;
      })
      .addCase(
        MobileWithdraws.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("mobilewithdraws.fulfilled payload:", action.payload);
          state.authenticatingmobilewithdraws = false;
          state.authenticated = true;
          state.mobilewithdraws = action.payload;
        }
      )
      .addCase(MobileWithdraws.rejected, (state, action) => {
        console.log("mobilewithdraws rejected:", action.payload);
        state.authenticatingmobilewithdraws = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsmobilewithdraws = action.payload || {
          error: "Unknown error occurred."
        };
      });
  }
});

export const { clearStatemobilewithdraws } = MobileWithdrawsSlice.actions;

export const MobileWithdrawsSelector = (state: {
  mobilewithdraws: MobileWithdrawsState;
}) => state.mobilewithdraws;

export default MobileWithdrawsSlice.reducer;
