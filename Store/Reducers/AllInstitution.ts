import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllInstitution } from "../Apis/AllInstitution";

interface AllInstitutionState {
  allinstitution: any | null;
  authenticatingallinstitution: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: AllInstitutionState = {
  allinstitution: null,
  authenticatingallinstitution: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const AllInstitutionSlice = createSlice({
  name: "allinstitution",
  initialState,
  reducers: {
    clearStateallinstitution: (state) => {
      state.allinstitution = null;
      state.authenticatingallinstitution = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AllInstitution.pending, (state) => {
        console.log("allinstitution pending...");
        state.authenticatingallinstitution = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        AllInstitution.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("allinstitution.fulfilled payload:", action.payload);
          state.authenticatingallinstitution = false;
          state.authenticated = true;
          state.allinstitution = action.payload;
        }
      )
      .addCase(AllInstitution.rejected, (state, action) => {
        console.log("allinstitution rejected:", action.payload);
        state.authenticatingallinstitution = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateallinstitution } = AllInstitutionSlice.actions;

export const AllInstitutionSelector = (state: {
  allinstitution: AllInstitutionState;
}) => state.allinstitution;

export default AllInstitutionSlice.reducer;
