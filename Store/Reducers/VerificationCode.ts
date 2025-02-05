import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VerificationCode } from "../Apis/VerificationCode";

interface VerificationCodeState {
  verification: any | null;
  authenticatingverification: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: VerificationCodeState = {
  verification: null,
  authenticatingverification: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const VerificationCodeSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    clearStateverification: (state) => {
      state.verification = null;
      state.authenticatingverification = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(VerificationCode.pending, (state) => {
        console.log("verification pending...");
        state.authenticatingverification = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        VerificationCode.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("verification.fulfilled payload:", action.payload);
          state.authenticatingverification = false;
          state.authenticated = true;
          state.verification = action.payload;
        }
      )
      .addCase(VerificationCode.rejected, (state, action) => {
        console.log("verification rejected:", action.payload);
        state.authenticatingverification = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateverification } = VerificationCodeSlice.actions;

export const AccountRegisterSelector = (state: {
  verification: VerificationCodeState;
}) => state.verification;

export default VerificationCodeSlice.reducer;
