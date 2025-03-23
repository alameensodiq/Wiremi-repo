import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WiremiTransaction } from "../Apis/WiremiTransaction";
interface WiremiTransactionState {
  wiremitransaction: any | null;
  authenticatingwiremitransaction: boolean;
  authenticated: boolean;
  isError: boolean;
  errorswiremitransaction: any;
}

const initialState: WiremiTransactionState = {
  wiremitransaction: null,
  authenticatingwiremitransaction: false,
  authenticated: false,
  isError: false,
  errorswiremitransaction: null,
};

export const WiremiTransactionSlice = createSlice({
  name: "wiremitransaction",
  initialState,
  reducers: {
    clearStatewiremitransaction: (state) => {
      state.wiremitransaction = null;
      state.authenticatingwiremitransaction = false;
      state.authenticated = false;
      state.isError = false;
      state.errorswiremitransaction = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(WiremiTransaction.pending, (state) => {
        console.log("wiremitransaction pending...");
        state.authenticatingwiremitransaction = true;
        state.authenticated = false;
        state.isError = false;
        state.errorswiremitransaction = null;
      })
      .addCase(
        WiremiTransaction.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("wiremitransaction.fulfilled payload:", action.payload);
          state.authenticatingwiremitransaction = false;
          state.authenticated = true;
          state.wiremitransaction = action.payload;
        }
      )
      .addCase(WiremiTransaction.rejected, (state, action) => {
        console.log("wiremitransaction rejected:", action.payload);
        state.authenticatingwiremitransaction = false;
        state.authenticated = false;
        state.isError = true;
        state.errorswiremitransaction = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatewiremitransaction } = WiremiTransactionSlice.actions;

export const WiremiTransactionSelector = (state: {
  wiremitransaction: WiremiTransactionState;
}) => state.wiremitransaction;

export default WiremiTransactionSlice.reducer;
