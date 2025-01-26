import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UnfreezeCard } from "../Apis/UnfreezeCard";

interface UnfreezeCardState {
  unfreezecards: any | null;
  authenticatingunfreezecards: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: UnfreezeCardState = {
  unfreezecards: null,
  authenticatingunfreezecards: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const UnfreezeCardSlice = createSlice({
  name: "freezecards",
  initialState,
  reducers: {
    clearStateunfreezecard: (state) => {
      state.unfreezecards = null;
      state.authenticatingunfreezecards = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(UnfreezeCard.pending, (state) => {
        console.log("UnfreezeCard pending...");
        state.authenticatingunfreezecards = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(UnfreezeCard.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("UnfreezeCard.fulfilled payload:", action.payload);
        state.authenticatingunfreezecards = false;
        state.authenticated = true;
        state.unfreezecards = action.payload;
      })
      .addCase(UnfreezeCard.rejected, (state, action) => {
        console.log("UnfreezeCard rejected:", action.payload);
        state.authenticatingunfreezecards = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStateunfreezecard } = UnfreezeCardSlice.actions;

export const FreezeCardSelector = (state: {
  unfreezecards: UnfreezeCardState;
}) => state.unfreezecards;

export default UnfreezeCardSlice.reducer;
