import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllwallet } from "../Apis/GetAllwallet";

interface GetAllwalletState {
  getallwallets: any | null;
  authenticatinggetallwallets: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsgetallwallets: any;
}

const initialState: GetAllwalletState = {
  getallwallets: null,
  authenticatinggetallwallets: false,
  authenticated: false,
  isError: false,
  errorsgetallwallets: null
};

export const GetAllwalletSlice = createSlice({
  name: "getallwallets",
  initialState,
  reducers: {
    clearStategetallwallets: (state) => {
      state.getallwallets = null;
      state.authenticatinggetallwallets = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsgetallwallets = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllwallet.pending, (state) => {
        console.log("getallwallets pending...");
        state.authenticatinggetallwallets = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsgetallwallets = null;
      })
      .addCase(
        GetAllwallet.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("getallwallets.fulfilled payload:", action.payload);
          state.authenticatinggetallwallets = false;
          state.authenticated = true;
          state.getallwallets = action.payload;
        }
      )
      .addCase(GetAllwallet.rejected, (state, action) => {
        console.log("getallwallets rejected:", action.payload);
        state.authenticatinggetallwallets = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsgetallwallets = action.payload || {
          error: "Unknown error occurred."
        };
      });
  }
});

export const { clearStategetallwallets } = GetAllwalletSlice.actions;

export const GetAllwalletSelector = (state: {
  getallwallets: GetAllwalletState;
}) => state.getallwallets;

export default GetAllwalletSlice.reducer;
