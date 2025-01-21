import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateGroupSavings } from "../Apis/CreateGroupSavings";

interface CreateGroupSavingsState {
  creategroupsavings: any | null;
  authenticatingcreategroupsavings: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: CreateGroupSavingsState = {
  creategroupsavings: null,
  authenticatingcreategroupsavings: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const CreateGroupSavingsSlice = createSlice({
  name: "creategroupsavings",
  initialState,
  reducers: {
    clearStatecreategroupsavings: (state) => {
      state.creategroupsavings = null;
      state.authenticatingcreategroupsavings = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateGroupSavings.pending, (state) => {
        console.log("CreateGroupSavings pending...");
        state.authenticatingcreategroupsavings = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        CreateGroupSavings.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("CreateGroupSavings.fulfilled payload:", action.payload);
          state.authenticatingcreategroupsavings = false;
          state.authenticated = true;
          state.creategroupsavings = action.payload;
        }
      )
      .addCase(CreateGroupSavings.rejected, (state, action) => {
        console.log("creategroupsavings rejected:", action.payload);
        state.authenticatingcreategroupsavings = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatecreategroupsavings } = CreateGroupSavingsSlice.actions;

export const CreateGroupSavingsSelector = (state: {
  creategroupsavings: CreateGroupSavingsState;
}) => state.creategroupsavings;

export default CreateGroupSavingsSlice.reducer;
