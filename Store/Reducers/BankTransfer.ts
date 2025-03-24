import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankTransfer } from "../Apis/BankTransfer";

interface BankTransferState {
  banktransfer: any | null;
  authenticatingbanktransfer: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsbanktransfer: any;
}

const initialState: BankTransferState = {
  banktransfer: null,
  authenticatingbanktransfer: false,
  authenticated: false,
  isError: false,
  errorsbanktransfer: null,
};

export const BankTransferSlice = createSlice({
  name: "banktransfer",
  initialState,
  reducers: {
    clearStatebanktransfer: (state) => {
      state.banktransfer = null;
      state.authenticatingbanktransfer = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsbanktransfer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BankTransfer.pending, (state) => {
        console.log("banktransfer pending...");
        state.authenticatingbanktransfer = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsbanktransfer = null;
      })
      .addCase(BankTransfer.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("banktransfer.fulfilled payload:", action.payload);
        state.authenticatingbanktransfer = false;
        state.authenticated = true;
        state.banktransfer = action.payload;
      })
      .addCase(BankTransfer.rejected, (state, action) => {
        console.log("banktransfer rejected:", action.payload);
        state.authenticatingbanktransfer = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsbanktransfer = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatebanktransfer } = BankTransferSlice.actions;

export const BankTransferSelector = (state: {
  banktransfer: BankTransferState;
}) => state.banktransfer;

export default BankTransferSlice.reducer;
