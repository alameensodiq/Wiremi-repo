import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTransactions } from "../Apis/UserTransactions";

interface UsertransactionsState {
  usertransactions: any | null;
  authenticatingusertransactions: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: UsertransactionsState = {
  usertransactions: null,
  authenticatingusertransactions: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const UserTransactionsSlice = createSlice({
  name: "usertransactions",
  initialState,
  reducers: {
    clearStateusertransactions: (state) => {
      state.usertransactions = null;
      state.authenticatingusertransactions = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserTransactions.pending, (state) => {
        state.authenticatingusertransactions = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        UserTransactions.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.authenticatingusertransactions = false;
          state.authenticated = true;
          state.usertransactions = action.payload;
        }
      )
      .addCase(UserTransactions.rejected, (state, action) => {
        state.authenticatingusertransactions = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStateusertransactions } = UserTransactionsSlice.actions;

export const UsertransactionsSelector = (state: { usertransactions: UsertransactionsState }) =>
  state.usertransactions;

export default UserTransactionsSlice.reducer;
