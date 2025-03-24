import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobileTransfer } from "../Apis/MobileTransfer";

interface MobileTransferState {
  mobiletransfer: any | null;
  authenticatingmobiletransfer: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsmobiletransfer: any;
}

const initialState: MobileTransferState = {
  mobiletransfer: null,
  authenticatingmobiletransfer: false,
  authenticated: false,
  isError: false,
  errorsmobiletransfer: null,
};

export const MobileTransferSlice = createSlice({
  name: "mobiletransfer",
  initialState,
  reducers: {
    clearStatemobiletransfer: (state) => {
      state.mobiletransfer = null;
      state.authenticatingmobiletransfer = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsmobiletransfer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(MobileTransfer.pending, (state) => {
        console.log("mobiletransfer pending...");
        state.authenticatingmobiletransfer = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsmobiletransfer = null;
      })
      .addCase(
        MobileTransfer.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("mobiletransfer.fulfilled payload:", action.payload);
          state.authenticatingmobiletransfer = false;
          state.authenticated = true;
          state.mobiletransfer = action.payload;
        }
      )
      .addCase(MobileTransfer.rejected, (state, action) => {
        console.log("mobiletransfer rejected:", action.payload);
        state.authenticatingmobiletransfer = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsmobiletransfer = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatemobiletransfer } = MobileTransferSlice.actions;

export const MobileTransferSelector = (state: {
  mobiletransfer: MobileTransferState;
}) => state.mobiletransfer;

export default MobileTransferSlice.reducer;
