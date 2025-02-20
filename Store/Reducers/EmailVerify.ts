import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmailVerify } from "../Apis/EmailVerify";

interface EmailVerifyState {
  emailverify: any | null;
  authenticatingemailverify: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsemailverify: { error: string; status?: number } | null;
}

const initialState: EmailVerifyState = {
  emailverify: null,
  authenticatingemailverify: false,
  authenticated: false,
  isError: false,
  errorsemailverify: null,
};

export const EmailVerifySlice = createSlice({
  name: "emailverify",
  initialState,
  reducers: {
    clearStateemailverify: (state) => {
      state.emailverify = null;
      state.authenticatingemailverify = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsemailverify = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(EmailVerify.pending, (state) => {
        console.log("Accountemailverify pending...");
        state.authenticatingemailverify = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsemailverify = null;
      })
      .addCase(EmailVerify.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Accountemailverify.fulfilled payload:", action.payload);
        state.authenticatingemailverify = false;
        state.authenticated = true;
        state.emailverify = action.payload;
      })
      .addCase(EmailVerify.rejected, (state, action) => {
        console.log("Accountemailverify rejected:", action.payload);
        state.authenticatingemailverify = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsemailverify = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateemailverify } = EmailVerifySlice.actions;

export const EmailVerifySelector = (state: { emailverify: EmailVerifyState }) =>
  state.emailverify;

export default EmailVerifySlice.reducer;
