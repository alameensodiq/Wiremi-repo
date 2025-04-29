import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountDetails } from "../Apis/AccountDetails";

interface AccountDetailsState {
  accountdetails: any | null;
  authenticatingaccountdetails: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsaccountdetails: any;
}

const initialState: AccountDetailsState = {
  accountdetails: null,
  authenticatingaccountdetails: false,
  authenticated: false,
  isError: false,
  errorsaccountdetails: null
};

export const AccountDetailsSlice = createSlice({
  name: "accountdetails",
  initialState,
  reducers: {
    clearStateaccountdetails: (state) => {
      state.accountdetails = null;
      state.authenticatingaccountdetails = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsaccountdetails = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AccountDetails.pending, (state) => {
        console.log("accountdetails pending...");
        state.authenticatingaccountdetails = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsaccountdetails = null;
      })
      .addCase(
        AccountDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("accountdetails.fulfilled payload:", action.payload);
          state.authenticatingaccountdetails = false;
          state.authenticated = true;
          state.accountdetails = action.payload;
        }
      )
      .addCase(AccountDetails.rejected, (state, action) => {
        console.log("accountdetails rejected:", action.payload);
        state.authenticatingaccountdetails = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsaccountdetails = action.payload || {
          error: "Unknown error occurred."
        };
      });
  }
});

export const { clearStateaccountdetails } = AccountDetailsSlice.actions;

export const AccountDetailsSelector = (state: {
  accountdetails: AccountDetailsState;
}) => state.accountdetails;

export default AccountDetailsSlice.reducer;
