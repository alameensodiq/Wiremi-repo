import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllPlans } from "../Apis/GetAllPlans";

interface GetAllPlansState {
  getallplans: any | null;
  authenticatinggetallplans: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsgetallplans: any;
}

const initialState: GetAllPlansState = {
  getallplans: null,
  authenticatinggetallplans: false,
  authenticated: false,
  isError: false,
  errorsgetallplans: null,
};

export const GetAllPlansSlice = createSlice({
  name: "getallplans",
  initialState,
  reducers: {
    clearStategetallplans: (state) => {
      state.getallplans = null;
      state.authenticatinggetallplans = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsgetallplans = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllPlans.pending, (state) => {
        console.log("getallplans pending...");
        state.authenticatinggetallplans = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsgetallplans = null;
      })
      .addCase(GetAllPlans.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("getallplans.fulfilled payload:", action.payload);
        state.authenticatinggetallplans = false;
        state.authenticated = true;
        state.getallplans = action.payload;
      })
      .addCase(GetAllPlans.rejected, (state, action) => {
        console.log("getallplans rejected:", action.payload);
        state.authenticatinggetallplans = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsgetallplans = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStategetallplans } = GetAllPlansSlice.actions;

export const GetAllPlansSelector = (state: { getallplans: GetAllPlansState }) =>
  state.getallplans;

export default GetAllPlansSlice.reducer;
