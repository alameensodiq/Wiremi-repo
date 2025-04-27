import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KycAddress } from "../Apis/KycAddress";

interface KycAddressState {
  kycaddress: any | null;
  authenticatingkycaddress: boolean;
  authenticated: boolean;
  isError: boolean;
  errorskycaddress: any;
}

const initialState: KycAddressState = {
  kycaddress: null,
  authenticatingkycaddress: false,
  authenticated: false,
  isError: false,
  errorskycaddress: null,
};

export const KycAddressSlice = createSlice({
  name: "kycaddress",
  initialState,
  reducers: {
    clearStatekycaddress: (state) => {
      state.kycaddress = null;
      state.authenticatingkycaddress = false;
      state.authenticated = false;
      state.isError = false;
      state.errorskycaddress = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(KycAddress.pending, (state) => {
        console.log("kycaddress pending...");
        state.authenticatingkycaddress = true;
        state.authenticated = false;
        state.isError = false;
        state.errorskycaddress = null;
      })
      .addCase(KycAddress.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("kycaddress.fulfilled payload:", action.payload);
        state.authenticatingkycaddress = false;
        state.authenticated = true;
        state.kycaddress = action.payload;
      })
      .addCase(KycAddress.rejected, (state, action) => {
        console.log("kycaddress rejected:", action.payload);
        state.authenticatingkycaddress = false;
        state.authenticated = false;
        state.isError = true;
        state.errorskycaddress = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatekycaddress } = KycAddressSlice.actions;

export const KycAddressSelector = (state: {
  kycaddress: KycAddressState;
}) => state.kycaddress;

export default KycAddressSlice.reducer;
