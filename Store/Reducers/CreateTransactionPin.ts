import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateTransactionPins } from "../Apis/CreateTransactionPin";

interface CreateTransactionPinsState {
  createtransactionpin: any | null;
  authenticatingcreatetransactionpin: boolean;
  authenticated: boolean;
  isError: boolean;
  errorscreatetransactionpin: any;
}

const initialState: CreateTransactionPinsState = {
  createtransactionpin: null,
  authenticatingcreatetransactionpin: false,
  authenticated: false,
  isError: false,
  errorscreatetransactionpin: null,
};

export const CreateTransactionPinsSlice = createSlice({
  name: "createtransactionpin",
  initialState,
  reducers: {
    clearStatecreatetransactionpin: (state) => {
      state.createtransactionpin = null;
      state.authenticatingcreatetransactionpin = false;
      state.authenticated = false;
      state.isError = false;
      state.errorscreatetransactionpin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateTransactionPins.pending, (state) => {
        console.log("createtransactionpin pending...");
        state.authenticatingcreatetransactionpin = true;
        state.authenticated = false;
        state.isError = false;
        state.errorscreatetransactionpin = null;
      })
      .addCase(
        CreateTransactionPins.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log(
            "createtransactionpin.fulfilled payload:",
            action.payload
          );
          state.authenticatingcreatetransactionpin = false;
          state.authenticated = true;
          state.createtransactionpin = action.payload;
        }
      )
      .addCase(CreateTransactionPins.rejected, (state, action) => {
        console.log("createtransactionpin rejected:", action.payload);
        state.authenticatingcreatetransactionpin = false;
        state.authenticated = false;
        state.isError = true;
        state.errorscreatetransactionpin = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatecreatetransactionpin } =
  CreateTransactionPinsSlice.actions;

export const CreateTransactionPinsSelector = (state: {
  createtransactionpin: CreateTransactionPinsState;
}) => state.createtransactionpin;

export default CreateTransactionPinsSlice.reducer;
