import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankTransferInstitution } from "../Apis/BankTransferInstitution";

interface BankTransferInstitutionState {
  banktransferinstitution: any | null;
  authenticatingbanktransferinstitution: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsbanktransferinstitution: any;
}

const initialState: BankTransferInstitutionState = {
  banktransferinstitution: null,
  authenticatingbanktransferinstitution: false,
  authenticated: false,
  isError: false,
  errorsbanktransferinstitution: null,
};

export const BankTransferInstitutionSlice = createSlice({
  name: "banktransferinstitution",
  initialState,
  reducers: {
    clearStatebanktransferinstitution: (state) => {
      state.banktransferinstitution = null;
      state.authenticatingbanktransferinstitution = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsbanktransferinstitution = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BankTransferInstitution.pending, (state) => {
        console.log("banktransferinstitution pending...");
        state.authenticatingbanktransferinstitution = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsbanktransferinstitution = null;
      })
      .addCase(
        BankTransferInstitution.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "banktransferinstitution.fulfilled payload:",
            action.payload
          );
          state.authenticatingbanktransferinstitution = false;
          state.authenticated = true;
          state.banktransferinstitution = action.payload;
        }
      )
      .addCase(BankTransferInstitution.rejected, (state, action) => {
        console.log("banktransferinstitution rejected:", action.payload);
        state.authenticatingbanktransferinstitution = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsbanktransferinstitution = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatebanktransferinstitution } =
  BankTransferInstitutionSlice.actions;

export const BankTransferInstitutionSelector = (state: {
  banktransferinstitution: BankTransferInstitutionState;
}) => state.banktransferinstitution;

export default BankTransferInstitutionSlice.reducer;
