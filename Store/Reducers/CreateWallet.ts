import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateWallet } from "../Apis/CreateWallet";

interface CreateWalletState {
  createwallet: any | null;
  authenticatingcreatewallet: boolean;
  authenticated: boolean;
  isError: boolean;
  errorscreatewallet: any;
}

const initialState: CreateWalletState = {
  createwallet: null,
  authenticatingcreatewallet: false,
  authenticated: false,
  isError: false,
  errorscreatewallet: null
};

export const CreateWalletSlice = createSlice({
  name: "createwallet",
  initialState,
  reducers: {
    clearStatecreatewallet: (state) => {
      state.createwallet = null;
      state.authenticatingcreatewallet = false;
      state.authenticated = false;
      state.isError = false;
      state.errorscreatewallet = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateWallet.pending, (state) => {
        console.log("createwallet pending...");
        state.authenticatingcreatewallet = true;
        state.authenticated = false;
        state.isError = false;
        state.errorscreatewallet = null;
      })
      .addCase(
        CreateWallet.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("createwallet.fulfilled payload:", action.payload);
          state.authenticatingcreatewallet = false;
          state.authenticated = true;
          state.createwallet = action.payload;
        }
      )
      .addCase(CreateWallet.rejected, (state, action) => {
        console.log("createwallet rejected:", action.payload);
        state.authenticatingcreatewallet = false;
        state.authenticated = false;
        state.isError = true;
        state.errorscreatewallet = action.payload || {
          error: "Unknown error occurred."
        };
      });
  }
});

export const { clearStatecreatewallet } = CreateWalletSlice.actions;

export const CreateWalletSelector = (state: {
  createwallet: CreateWalletState;
}) => state.createwallet;

export default CreateWalletSlice.reducer;
