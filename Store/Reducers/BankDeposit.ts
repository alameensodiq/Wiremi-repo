import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankDeposit } from "../Apis/BankDeposit";

interface BankDepositState {
  bankdeposit: any | null;
  authenticatingbankdeposit: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: BankDepositState = {
  bankdeposit: null,
  authenticatingbankdeposit: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const BankDepositSlice = createSlice({
  name: "bankdeposit",
  initialState,
  reducers: {
    clearStatebankdeposit: (state) => {
      state.bankdeposit = null;
      state.authenticatingbankdeposit = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BankDeposit.pending, (state) => {
        console.log("bankdeposit pending...");
        state.authenticatingbankdeposit = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(BankDeposit.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("bankdeposit.fulfilled payload:", action.payload);
        state.authenticatingbankdeposit = false;
        state.authenticated = true;
        state.bankdeposit = action.payload;
      })
      .addCase(BankDeposit.rejected, (state, action) => {
        console.log("bankdeposit rejected:", action.payload);
        state.authenticatingbankdeposit = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatebankdeposit } = BankDepositSlice.actions;

export const BankDepositSelector = (state: {
  bankdeposit: BankDepositState;
}) => state.bankdeposit; 

export default BankDepositSlice.reducer;
