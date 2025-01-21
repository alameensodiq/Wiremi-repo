import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SavingsPayout } from "../Apis/SavingsPayout";

interface SavingsPayoutState {
  savingspayout: any | null;
  authenticatingsavingspayout: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: SavingsPayoutState = {
  savingspayout: null,
  authenticatingsavingspayout: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const SavingsPayoutSlice = createSlice({
  name: "savingspayout",
  initialState,
  reducers: {
    clearStatesavingspayout: (state) => {
      state.savingspayout = null;
      state.authenticatingsavingspayout = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SavingsPayout.pending, (state) => {
        console.log("savingspayout pending...");
        state.authenticatingsavingspayout = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(SavingsPayout.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("savingspayout.fulfilled payload:", action.payload);
        state.authenticatingsavingspayout = false;
        state.authenticated = true;
        state.savingspayout = action.payload;
      })
      .addCase(SavingsPayout.rejected, (state, action) => {
        console.log("savingspayout rejected:", action.payload);
        state.authenticatingsavingspayout = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatesavingspayout } = SavingsPayoutSlice.actions;

export const SavingsPayoutSelector = (state: {
  savingspayout: SavingsPayoutState;
}) => state.savingspayout;

export default SavingsPayoutSlice.reducer;
