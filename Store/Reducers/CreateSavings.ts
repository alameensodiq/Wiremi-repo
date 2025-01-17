import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreatingSavings } from "../Apis/CreateSavings";

interface CreatingSavingsState {
  creatingsavings: any | null;
  authenticatingcreatingsavings: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: CreatingSavingsState = {
  creatingsavings: null,
  authenticatingcreatingsavings: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const CreatingSavingsSlice = createSlice({
  name: "creatingsavings",
  initialState,
  reducers: {
    clearStatecreatingsavings: (state) => {
      state.creatingsavings = null;
      state.authenticatingcreatingsavings = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreatingSavings.pending, (state) => {
        console.log("creatingsavings pending...");
        state.authenticatingcreatingsavings = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        CreatingSavings.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("creatingsavings.fulfilled payload:", action.payload);
          state.authenticatingcreatingsavings = false;
          state.authenticated = true;
          state.creatingsavings = action.payload;
        }
      )
      .addCase(CreatingSavings.rejected, (state, action) => {
        console.log("creatingsavings rejected:", action.payload);
        state.authenticatingcreatingsavings = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatecreatingsavings } = CreatingSavingsSlice.actions;

export const CreatingSavingsSelector = (state: {
  creatingsavings: CreatingSavingsState;
}) => state.creatingsavings;

export default CreatingSavingsSlice.reducer;
