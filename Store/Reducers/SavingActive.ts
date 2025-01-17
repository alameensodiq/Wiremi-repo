import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SavingActive } from "../Apis/SavingActive";

interface SavingActiveState {
  saveactive: any | null;
  authenticatingsaveactive: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: SavingActiveState = {
  saveactive: null,
  authenticatingsaveactive: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const SavingActiveSlice = createSlice({
  name: "saveactive",
  initialState,
  reducers: {
    clearStatesaveactive: (state) => {
      state.saveactive = null;
      state.authenticatingsaveactive = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(SavingActive.pending, (state) => {
        console.log("savedashboard pending...");
        state.authenticatingsaveactive = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(SavingActive.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("saveactive.fulfilled payload:", action.payload);
        state.authenticatingsaveactive = false;
        state.authenticated = true;
        state.saveactive = action.payload;
      })
      .addCase(SavingActive.rejected, (state, action) => {
        console.log("saveactive rejected:", action.payload);
        state.authenticatingsaveactive = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatesaveactive } = SavingActiveSlice.actions;

export const SavingActiveSelector = (state: {
  saveactive: SavingActiveState;
}) => state.saveactive;

export default SavingActiveSlice.reducer;
