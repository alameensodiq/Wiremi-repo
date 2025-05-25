import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Receipt } from "../Apis/Receipt";

interface ReceiptState {
  receipt: any | null;
  authenticatingreceipt: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsreceipt: any;
}

const initialState: ReceiptState = {
  receipt: null,
  authenticatingreceipt: false,
  authenticated: false,
  isError: false,
  errorsreceipt: null,
};

export const ReceiptSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {
    clearStatereceipt: (state) => {
      state.receipt = null;
      state.authenticatingreceipt = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsreceipt = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Receipt.pending, (state) => {
        console.log("Receipt pending...");
        state.authenticatingreceipt = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsreceipt = null;
      })
      .addCase(Receipt.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Receipt.fulfilled payload:", action.payload);
        state.authenticatingreceipt = false;
        state.authenticated = true;
        state.receipt = action.payload;
      })
      .addCase(Receipt.rejected, (state, action) => {
        console.log("Receipt rejected:", action.payload);
        state.authenticatingreceipt = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsreceipt = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatereceipt } = ReceiptSlice.actions;

export const ReceiptSelector = (state: { receipt: ReceiptState }) =>
  state.receipt;

export default ReceiptSlice.reducer;
