import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetGroupSaving } from "../Apis/GetGroupSaving";

interface GetGroupSavingState {
  getgroupsaving: any | null;
  authenticatinggetgroupsaving: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: GetGroupSavingState = {
  getgroupsaving: null,
  authenticatinggetgroupsaving: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const GetGroupSavingSlice = createSlice({
  name: "getgroupsaving",
  initialState,
  reducers: {
    clearStategetgroupsaving: (state) => {
      state.getgroupsaving = null;
      state.authenticatinggetgroupsaving = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetGroupSaving.pending, (state) => {
        console.log("GetGroupSaving pending...");
        state.authenticatinggetgroupsaving = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        GetGroupSaving.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("GetGroupSaving.fulfilled payload:", action.payload);
          state.authenticatinggetgroupsaving = false;
          state.authenticated = true;
          state.getgroupsaving = action.payload;
        }
      )
      .addCase(GetGroupSaving.rejected, (state, action) => {
        console.log("GetGroupSaving rejected:", action.payload);
        state.authenticatinggetgroupsaving = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStategetgroupsaving } = GetGroupSavingSlice.actions;

export const GetGroupSavingSelector = (state: {
  getgroupsaving: GetGroupSavingState;
}) => state.getgroupsaving;

export default GetGroupSavingSlice.reducer;
