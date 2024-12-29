import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountRegister } from "../Apis/AccountRegister";

interface AccountRegisterState {
  accountusers: any | null;
  authenticatingaccountusers: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: AccountRegisterState = {
  accountusers: null,
  authenticatingaccountusers: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const AccountRegisterSlice = createSlice({
  name: "accountusers",
  initialState,
  reducers: {
    clearState: (state) => {
      state.accountusers = null;
      state.authenticatingaccountusers = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AccountRegister.pending, (state) => {
        console.log("AccountUser pending...");
        state.authenticatingaccountusers = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(AccountRegister.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("AccountUser.fulfilled payload:", action.payload);
        state.authenticatingaccountusers = false;
        state.authenticated = true;
        state.accountusers = action.payload;
      })
      .addCase(AccountRegister.rejected, (state, action) => {
        console.log("AccountUser rejected:", action.payload);
        state.authenticatingaccountusers = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearState } = AccountRegisterSlice.actions;

export const AccountRegisterSelector = (state: { accountusers: AccountRegisterState }) =>
  state.accountusers;

export default AccountRegisterSlice.reducer;
