import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankWithdrawal } from "../Apis/BankWithdrawal";

interface BankWithdrawalState {
  bankwithdrawal: any | null;
  authenticatingbankwithdrawal: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsbankwithdrawal: any;
}

const initialState: BankWithdrawalState = {
  bankwithdrawal: null,
  authenticatingbankwithdrawal: false,
  authenticated: false,
  isError: false,
  errorsbankwithdrawal: null,
};

export const BankWithdrawalSlice = createSlice({
  name: "bankwithdrawal",
  initialState,
  reducers: {
    clearStatebankwithdrawal: (state) => {
      state.bankwithdrawal = null;
      state.authenticatingbankwithdrawal = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsbankwithdrawal = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BankWithdrawal.pending, (state) => {
        console.log("bankwithdrawal pending...");
        state.authenticatingbankwithdrawal = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsbankwithdrawal = null;
      })
      .addCase(
        BankWithdrawal.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("bankwithdrawal.fulfilled payload:", action.payload);
          state.authenticatingbankwithdrawal = false;
          state.authenticated = true;
          state.bankwithdrawal = action.payload;
        }
      )
      .addCase(BankWithdrawal.rejected, (state, action) => {
        console.log("bankwithdrawal rejected:", action.payload);
        state.authenticatingbankwithdrawal = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsbankwithdrawal = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatebankwithdrawal } = BankWithdrawalSlice.actions;

export const BankWithdrawalSelector = (state: {
  bankwithdrawal: BankWithdrawalState;
}) => state.bankwithdrawal;

export default BankWithdrawalSlice.reducer;
