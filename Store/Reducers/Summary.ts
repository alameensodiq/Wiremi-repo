import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Summary } from "../Apis/Summary";

interface SummaryState {
  summary: any | null;
  authenticatingsummary: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: SummaryState = {
  summary: null,
  authenticatingsummary: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const SummarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    clearStatesummary: (state) => {
      state.summary = null;
      state.authenticatingsummary = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(Summary.pending, (state) => {
        console.log("summary pending...");
        state.authenticatingsummary = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(Summary.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("summary.fulfilled payload:", action.payload);
        state.authenticatingsummary = false;
        state.authenticated = true;
        state.summary = action.payload;
      })
      .addCase(Summary.rejected, (state, action) => {
        console.log("summary rejected:", action.payload);
        state.authenticatingsummary = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatesummary } = SummarySlice.actions;

export const SummarySelector = (state: { summary: SummaryState }) =>
  state.summary;

export default SummarySlice.reducer;
