import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCard } from "../Apis/GetCard";

interface GetCardState {
  getcards: any | null;
  authenticatinggetcards: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: GetCardState = {
  getcards: null,
  authenticatinggetcards: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const GetCardSlice = createSlice({
  name: "getcards",
  initialState,
  reducers: {
    clearStategetcard: (state) => {
      state.getcards = null;
      state.authenticatinggetcards = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCard.pending, (state) => {
        console.log("GetCard pending...");
        state.authenticatinggetcards = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(GetCard.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("GetCard.fulfilled payload:", action.payload);
        state.authenticatinggetcards = false;
        state.authenticated = true;
        state.getcards = action.payload;
      })
      .addCase(GetCard.rejected, (state, action) => {
        console.log("GetCard rejected:", action.payload);
        state.authenticatinggetcards = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStategetcard } = GetCardSlice.actions;

export const CreateCardsSelector = (state: { getcards: GetCardState }) =>
  state.getcards;

export default GetCardSlice.reducer;
