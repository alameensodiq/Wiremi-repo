import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountName } from "../Apis/AccountName";

interface AccountNameState {
  accountname: any | null;
  authenticatingaccountname: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsaccountname: any;
}

const initialState: AccountNameState = {
  accountname: null,
  authenticatingaccountname: false,
  authenticated: false,
  isError: false,
  errorsaccountname: null,
};

export const AccountNameSlice = createSlice({
  name: "accountname",
  initialState,
  reducers: {
    clearStateaccountname: (state) => {
      state.accountname = null;
      state.authenticatingaccountname = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsaccountname = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AccountName.pending, (state) => {
        console.log("accountname pending...");
        state.authenticatingaccountname = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsaccountname = null;
      })
      .addCase(AccountName.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("accountname.fulfilled payload:", action.payload);
        state.authenticatingaccountname = false;
        state.authenticated = true;
        state.accountname = action.payload;
      })
      .addCase(AccountName.rejected, (state, action) => {
        console.log("accountname rejected:", action.payload);
        state.authenticatingaccountname = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsaccountname = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStateaccountname } = AccountNameSlice.actions;

export const AccountNameSelector = (state: {
  accountname: AccountNameState;
}) => state.accountname;

export default AccountNameSlice.reducer;
