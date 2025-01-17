import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateCards } from "../Apis/CreateCard";

interface CreateCardsState {
  createcards: any | null;
  authenticatingcreatecards: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: CreateCardsState = {
  createcards: null,
  authenticatingcreatecards: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const CreateCardsSlice = createSlice({
  name: "createcards",
  initialState,
  reducers: {
    clearStatecreatecard: (state) => {
      state.createcards = null;
      state.authenticatingcreatecards = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateCards.pending, (state) => {
        console.log("CreateCards pending...");
        state.authenticatingcreatecards = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(CreateCards.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("CreateCards.fulfilled payload:", action.payload);
        state.authenticatingcreatecards = false;
        state.authenticated = true;
        state.createcards = action.payload;
      })
      .addCase(CreateCards.rejected, (state, action) => {
        console.log("CreateCards rejected:", action.payload);
        state.authenticatingcreatecards = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatecreatecard } = CreateCardsSlice.actions;

export const CreateCardsSelector = (state: { createcards: CreateCardsState }) =>
  state.createcards;

export default CreateCardsSlice.reducer;
