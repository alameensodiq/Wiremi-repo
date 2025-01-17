import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllwithdrawalBanks } from "../Apis/AllwithdrawalBanks";

interface AllwithdrawalBanksState {
  allwithdrawalbanks: any | null;
  authenticatingallwithdrawalbanks: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: AllwithdrawalBanksState = {
  allwithdrawalbanks: null,
  authenticatingallwithdrawalbanks: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const AllwithdrawalBanksSlice = createSlice({
  name: "allwithdrawalbanks",
  initialState,
  reducers: {
    clearStateallwithdrawalbanks: (state) => {
      state.allwithdrawalbanks = null;
      state.authenticatingallwithdrawalbanks = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AllwithdrawalBanks.pending, (state) => {
        console.log("allwithdrawalbanks pending...");
        state.authenticatingallwithdrawalbanks = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        AllwithdrawalBanks.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("allwithdrawalbanks.fulfilled payload:", action.payload);
          state.authenticatingallwithdrawalbanks = false;
          state.authenticated = true;
          state.allwithdrawalbanks = action.payload;
        }
      )
      .addCase(AllwithdrawalBanks.rejected, (state, action) => {
        console.log("allwithdrawalbanks rejected:", action.payload);
        state.authenticatingallwithdrawalbanks = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStateallwithdrawalbanks } = AllwithdrawalBanksSlice.actions;

export const AllwithdrawalBanksSelector = (state: {
  allwithdrawalbanks: AllwithdrawalBanksState;
}) => state.allwithdrawalbanks;

export default AllwithdrawalBanksSlice.reducer;
