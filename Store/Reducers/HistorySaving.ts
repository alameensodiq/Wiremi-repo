import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistorySavings } from "../Apis/HistorySavings";

interface HistorySavingState {
  historysaving: any | null;
  authenticatinghistorysaving: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: HistorySavingState = {
  historysaving: null,
  authenticatinghistorysaving: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const HistorySavingSlice = createSlice({
  name: "historysaving",
  initialState,
  reducers: {
    clearStatehistorysaving: (state) => {
      state.historysaving = null;
      state.authenticatinghistorysaving = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HistorySavings.pending, (state) => {
        console.log("HistorySavings pending...");
        state.authenticatinghistorysaving = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        HistorySavings.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("HistorySaving.fulfilled payload:", action.payload);
          state.authenticatinghistorysaving = false;
          state.authenticated = true;
          state.historysaving = action.payload;
        }
      )
      .addCase(HistorySavings.rejected, (state, action) => {
        console.log("HistorySavingg rejected:", action.payload);
        state.authenticatinghistorysaving = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatehistorysaving } = HistorySavingSlice.actions;

export const HistorySavingSelector = (state: {
  historysaving: HistorySavingState;
}) => state.historysaving;

export default HistorySavingSlice.reducer;
