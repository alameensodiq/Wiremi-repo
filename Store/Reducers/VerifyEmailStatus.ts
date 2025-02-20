import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VerifyEmailStatus } from "../Apis/VerifyEmailStatus";

interface VerifyEmailStatusState {
  verifyemailstatus: any | null;
  authenticatingverifyemailstatus: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsverifyemailstatus: { error: string; status?: number } | null;
}

const initialState: VerifyEmailStatusState = {
  verifyemailstatus: null,
  authenticatingverifyemailstatus: false,
  authenticated: false,
  isError: false,
  errorsverifyemailstatus: null,
};

export const VerifyEmailStatusSlice = createSlice({
  name: "verifyemailstatus",
  initialState,
  reducers: {
    clearStateverifyemailstatus: (state) => {
      state.verifyemailstatus = null;
      state.authenticatingverifyemailstatus = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsverifyemailstatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(VerifyEmailStatus.pending, (state) => {
        console.log("Accountverifyemailstatus pending...");
        state.authenticatingverifyemailstatus = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsverifyemailstatus = null;
      })
      .addCase(
        VerifyEmailStatus.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "Accountverifyemailstatus.fulfilled payload:",
            action.payload
          );
          state.authenticatingverifyemailstatus = false;
          state.authenticated = true;
          state.verifyemailstatus = action.payload;
        }
      )
      .addCase(VerifyEmailStatus.rejected, (state, action) => {
        console.log("Accountverifyemailstatus rejected:", action.payload);
        state.authenticatingverifyemailstatus = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsverifyemailstatus = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStateverifyemailstatus } = VerifyEmailStatusSlice.actions;

export const EmailVerifySelector = (state: {
  verifyemailstatus: VerifyEmailStatusState;
}) => state.verifyemailstatus;

export default VerifyEmailStatusSlice.reducer;
