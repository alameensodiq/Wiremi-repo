import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SavingDashboard } from "../Apis/SavingDashboard";

interface SavingDashboardState {
  savedashboard: any | null;
  authenticatingsavedashboard: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: SavingDashboardState = {
  savedashboard: null,
  authenticatingsavedashboard: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const SavingDashboardSlice = createSlice({
  name: "savedashboard",
  initialState,
  reducers: {
    clearStatesavedashboard: (state) => {
      state.savedashboard = null;
      state.authenticatingsavedashboard = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(SavingDashboard.pending, (state) => {
        console.log("savedashboard pending...");
        state.authenticatingsavedashboard = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        SavingDashboard.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("savedashboard.fulfilled payload:", action.payload);
          state.authenticatingsavedashboard = false;
          state.authenticated = true;
          state.savedashboard = action.payload;
        }
      )
      .addCase(SavingDashboard.rejected, (state, action) => {
        console.log("savedashboard rejected:", action.payload);
        state.authenticatingsavedashboard = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatesavedashboard } = SavingDashboardSlice.actions;

export const SavingDashboardSelector = (state: {
  savedashboard: SavingDashboardState;
}) => state.savedashboard;

export default SavingDashboardSlice.reducer;
