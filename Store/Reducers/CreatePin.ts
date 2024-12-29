import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreatePin } from "../Apis/CreatePin";

interface CreatePinState {
  createpins: any | null;
  authenticatingcreatepins: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: CreatePinState = {
  createpins: null,
  authenticatingcreatepins: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const CreatePinSlice = createSlice({
  name: "createpin",
  initialState,
  reducers: {
    clearState: (state) => {
      state.createpins = null;
      state.authenticatingcreatepins = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreatePin.pending, (state) => {
        console.log("CreatePin pending...");
        state.authenticatingcreatepins = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(CreatePin.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("CreatePin.fulfilled payload:", action.payload);
        state.authenticatingcreatepins = false;
        state.authenticated = true;
        state.createpins = action.payload;
      })
      .addCase(CreatePin.rejected, (state, action) => {
        console.log("CreatePin rejected:", action.payload);
        state.authenticatingcreatepins = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearState } = CreatePinSlice.actions;

export const AccountRegisterSelector = (state: {
  createpins: CreatePinState;
}) => state.createpins;

export default CreatePinSlice.reducer;
