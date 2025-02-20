import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmailVerifyCode } from "../Apis/Emailverifycode";

interface EmailVerifyCodeState {
  emailverifycode: any | null;
  authenticatingemailverifycode: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsemailverifycode: { error: string; status?: number } | null;
}

const initialState: EmailVerifyCodeState = {
  emailverifycode: null,
  authenticatingemailverifycode: false,
  authenticated: false,
  isError: false,
  errorsemailverifycode: null,
};

export const EmailVerifyCodeSlice = createSlice({
  name: "emailverifycode",
  initialState,
  reducers: {
    clearStateemailverifycode: (state) => {
      state.emailverifycode = null;
      state.authenticatingemailverifycode = false;
      state.authenticated = false;
      state.isError = false;
      state.emailverifycode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(EmailVerifyCode.pending, (state) => {
        console.log("AccountEmailVerifyCode  pending...");
        state.authenticatingemailverifycode = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsemailverifycode = null;
      })
      .addCase(
        EmailVerifyCode.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "AccountEmailVerifyCode .fulfilled payload:",
            action.payload
          );
          state.authenticatingemailverifycode = false;
          state.authenticated = true;
          state.emailverifycode = action.payload;
        }
      )
      .addCase(EmailVerifyCode.rejected, (state, action) => {
        console.log("AccountEmailVerifyCode  rejected:", action.payload);
        state.authenticatingemailverifycode = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsemailverifycode = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStateemailverifycode } = EmailVerifyCodeSlice.actions;

export const EmailVerifyCodeSelector = (state: {
  emailverifycode: EmailVerifyCodeState;
}) => state.emailverifycode;

export default EmailVerifyCodeSlice.reducer;
