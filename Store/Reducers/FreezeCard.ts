import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FreezeCard } from "../Apis/FreezeCard";

interface FreezeCardState {
  freezecards: any | null;
  authenticatingfreezecards: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: FreezeCardState = {
  freezecards: null,
  authenticatingfreezecards: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const FreezeCardSlice = createSlice({
  name: "freezecards",
  initialState,
  reducers: {
    clearStatefreezecard: (state) => {
      state.freezecards = null;
      state.authenticatingfreezecards = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(FreezeCard.pending, (state) => {
        console.log("FreezeCard pending...");
        state.authenticatingfreezecards = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(FreezeCard.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("FreezeCard.fulfilled payload:", action.payload);
        state.authenticatingfreezecards = false;
        state.authenticated = true;
        state.freezecards = action.payload;
      })
      .addCase(FreezeCard.rejected, (state, action) => {
        console.log("FreezeCard rejected:", action.payload);
        state.authenticatingfreezecards = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatefreezecard } = FreezeCardSlice.actions;

export const FreezeCardSelector = (state: { freezecards: FreezeCardState }) =>
  state.freezecards;

export default FreezeCardSlice.reducer;
