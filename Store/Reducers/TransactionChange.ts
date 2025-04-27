import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionChange } from "../Apis/TransactionChange";

interface TransactionChangeState {
  transactionchange: any | null;
  authenticatingtransactionchange: boolean;
  authenticated: boolean;
  isError: boolean;
  errorstransactionchange: any;
}

const initialState: TransactionChangeState = {
    transactionchange: null,
  authenticatingtransactionchange: false,
  authenticated: false,
  isError: false,
  errorstransactionchange: null,
};

export const TransactionChangeSlice = createSlice({
  name: "transactionchange",
  initialState,
  reducers: {
    clearStatetransactionchange: (state) => {
      state.transactionchange = null;
      state.authenticatingtransactionchange = false;
      state.authenticated = false;
      state.isError = false;
      state.errorstransactionchange = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(TransactionChange.pending, (state) => {
        console.log("transactionchange pending...");
        state.authenticatingtransactionchange = true;
        state.authenticated = false;
        state.isError = false;
        state.errorstransactionchange = null;
      })
      .addCase(TransactionChange.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("transactionchange.fulfilled payload:", action.payload);
        state.authenticatingtransactionchange = false;
        state.authenticated = true;
        state.transactionchange = action.payload;
      })
      .addCase(TransactionChange.rejected, (state, action) => {
        console.log("transactionchange rejected:", action.payload);
        state.authenticatingtransactionchange = false;
        state.authenticated = false;
        state.isError = true;
        state.errorstransactionchange = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatetransactionchange } = TransactionChangeSlice.actions;

export const TransactionChangeSelector = (state: {
    transactionchange: TransactionChangeState;
}) => state.transactionchange;

export default TransactionChangeSlice.reducer;
