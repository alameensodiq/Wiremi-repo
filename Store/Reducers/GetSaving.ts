import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetSaving } from "../Apis/GetSaving";

interface GetSavingState {
  getsaving: any | null;
  authenticatinggetsaving: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: GetSavingState = {
  getsaving: null,
  authenticatinggetsaving: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const GetSavingSlice = createSlice({
  name: "getsaving",
  initialState,
  reducers: {
    clearStategetsaving: (state) => {
      state.getsaving = null;
      state.authenticatinggetsaving = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetSaving.pending, (state) => {
        console.log("GetSaving pending...");
        state.authenticatinggetsaving = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(GetSaving.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("GetSaving.fulfilled payload:", action.payload);
        state.authenticatinggetsaving = false;
        state.authenticated = true;
        state.getsaving = action.payload;
      })
      .addCase(GetSaving.rejected, (state, action) => {
        console.log("GetSaving rejected:", action.payload);
        state.authenticatinggetsaving = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStategetsaving } = GetSavingSlice.actions;

export const GetSavingSelector = (state: { getsaving: GetSavingState }) =>
  state.getsaving;

export default GetSavingSlice.reducer;
