import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankWithdrawalInstitution } from "../Apis/BankWithdrawalInstitution";

interface BankWithdrawalInstitutionState {
  bankwithdrawalinstitution: any | null;
  authenticatingbankwithdrawalinstitution: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsbankwithdrawalinstitution: any;
}

const initialState: BankWithdrawalInstitutionState = {
    bankwithdrawalinstitution: null,
  authenticatingbankwithdrawalinstitution: false,
  authenticated: false,
  isError: false,
  errorsbankwithdrawalinstitution: null,
};

export const BankWithdrawalInstitutionSlice = createSlice({
  name: "bankwithdrawalinstitution",
  initialState,
  reducers: {
    clearStatebankwithdrawalinstitution: (state) => {
      state.bankwithdrawalinstitution = null;
      state.authenticatingbankwithdrawalinstitution = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsbankwithdrawalinstitution = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BankWithdrawalInstitution.pending, (state) => {
        console.log("bankwithdrawalinstitution pending...");
        state.authenticatingbankwithdrawalinstitution = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsbankwithdrawalinstitution = null;
      })
      .addCase(
        BankWithdrawalInstitution.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "bankwithdrawalinstitution.fulfilled payload:",
            action.payload
          );
          state.authenticatingbankwithdrawalinstitution = false;
          state.authenticated = true;
          state.bankwithdrawalinstitution = action.payload;
        }
      )
      .addCase(BankWithdrawalInstitution.rejected, (state, action) => {
        console.log("banktransferinstitution rejected:", action.payload);
        state.authenticatingbankwithdrawalinstitution = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsbankwithdrawalinstitution = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatebankwithdrawalinstitution } =
BankWithdrawalInstitutionSlice.actions;

export const BankWithdrawalInstitutionSelector = (state: {
  bankwithdrawalinstitution: BankWithdrawalInstitutionState;
}) => state.bankwithdrawalinstitution;

export default BankWithdrawalInstitutionSlice.reducer;
