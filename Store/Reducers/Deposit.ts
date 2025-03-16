import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {Deposit }  from "../Apis/Deposit";

interface DepositState {
  deposit: any | null;
  authenticatingdeposit: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: DepositState = {
  deposit: null,
  authenticatingdeposit: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const DepositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    clearStatedeposit: (state) => {
      state.deposit = null;
      state.authenticatingdeposit = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Deposit.pending, (state) => {
        console.log("deposit pending...");
        state.authenticatingdeposit = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(Deposit.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("deposit.fulfilled payload:", action.payload);
        state.authenticatingdeposit = false;
        state.authenticated = true;
        state.deposit = action.payload;
      })
      .addCase(Deposit.rejected, (state, action) => {
        console.log("deposit rejected:", action.payload);
        state.authenticatingdeposit = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatedeposit } = DepositSlice.actions;

export const DepositSelector = (state: {
  deposit: DepositState;
}) => state.deposit; 

export default DepositSlice.reducer;
