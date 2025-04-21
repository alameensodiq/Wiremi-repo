import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobileWithdrawInstitution } from "../Apis/MobileWithdrawInstitution";

interface MobileWithdrawInstitutionState {
  mobilewithdrawinstitution: any | null;
  authenticatingmobilewithdrawinstitution: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsmobilewithdrawinstitution: any;
}

const initialState: MobileWithdrawInstitutionState = {
  mobilewithdrawinstitution: null,
  authenticatingmobilewithdrawinstitution: false,
  authenticated: false,
  isError: false,
  errorsmobilewithdrawinstitution: null
};

export const MobileWithdrawInstitutionSlice = createSlice({
  name: "mobilewithdrawinstitution",
  initialState,
  reducers: {
    clearStatemobilewithdrawinstitution: (state) => {
      state.mobilewithdrawinstitution = null;
      state.authenticatingmobilewithdrawinstitution = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsmobilewithdrawinstitution = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(MobileWithdrawInstitution.pending, (state) => {
        console.log("mobilewithdrawinstitution pending...");
        state.authenticatingmobilewithdrawinstitution = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsmobilewithdrawinstitution = null;
      })
      .addCase(
        MobileWithdrawInstitution.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "mobilewithdrawinstitution.fulfilled payload:",
            action.payload
          );
          state.authenticatingmobilewithdrawinstitution = false;
          state.authenticated = true;
          state.mobilewithdrawinstitution = action.payload;
        }
      )
      .addCase(MobileWithdrawInstitution.rejected, (state, action) => {
        console.log("mobilewithdrawinstitution rejected:", action.payload);
        state.authenticatingmobilewithdrawinstitution = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsmobilewithdrawinstitution = action.payload || {
          error: "Unknown error occurred."
        };
      });
  }
});

export const { clearStatemobilewithdrawinstitution } =
  MobileWithdrawInstitutionSlice.actions;

export const MobileWithdrawInstitutionSelector = (state: {
  mobiletransferinstitution: MobileWithdrawInstitutionState;
}) => state.mobiletransferinstitution;

export default MobileWithdrawInstitutionSlice.reducer;
