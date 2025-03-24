import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobileTransferInstitution } from "../Apis/MobileTransferInstitution";

interface MobileTransferInstitutionState {
  mobiletransferinstitution: any | null;
  authenticatingmobiletransferinstitution: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsmobiletransferinstitution: any;
}

const initialState: MobileTransferInstitutionState = {
  mobiletransferinstitution: null,
  authenticatingmobiletransferinstitution: false,
  authenticated: false,
  isError: false,
  errorsmobiletransferinstitution: null,
};

export const MobileTransferInstitutionSlice = createSlice({
  name: "mobiletransferinstitution",
  initialState,
  reducers: {
    clearStatemobiletransferinstitution: (state) => {
      state.mobiletransferinstitution = null;
      state.authenticatingmobiletransferinstitution = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsmobiletransferinstitution = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(MobileTransferInstitution.pending, (state) => {
        console.log("mobiletransferinstitution pending...");
        state.authenticatingmobiletransferinstitution = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsmobiletransferinstitution = null;
      })
      .addCase(
        MobileTransferInstitution.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "mobiletransferinstitution.fulfilled payload:",
            action.payload
          );
          state.authenticatingmobiletransferinstitution = false;
          state.authenticated = true;
          state.mobiletransferinstitution = action.payload;
        }
      )
      .addCase(MobileTransferInstitution.rejected, (state, action) => {
        console.log("mobiletransferinstitution rejected:", action.payload);
        state.authenticatingmobiletransferinstitution = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsmobiletransferinstitution = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatemobiletransferinstitution } =
  MobileTransferInstitutionSlice.actions;

export const MobileTransferInstitutionSelector = (state: {
  mobiletransferinstitution: MobileTransferInstitutionState;
}) => state.mobiletransferinstitution;

export default MobileTransferInstitutionSlice.reducer;
