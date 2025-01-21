import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditSavingsPayout } from "../Apis/EditSavingsPayout";

interface EditSavingsPayoutState {
  editsavingspayout: any | null;
  authenticatingeditsavingspayout: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: any;
}

const initialState: EditSavingsPayoutState = {
  editsavingspayout: null,
  authenticatingeditsavingspayout: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const EditSavingsPayoutSlice = createSlice({
  name: "editsavingspayout",
  initialState,
  reducers: {
    clearStateeditsavingspayout: (state) => {
      state.editsavingspayout = null;
      state.authenticatingeditsavingspayout = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(EditSavingsPayout.pending, (state) => {
        console.log("editsavingspayout pending...");
        state.authenticatingeditsavingspayout = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        EditSavingsPayout.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("editsavingspayout.fulfilled payload:", action.payload);
          state.authenticatingeditsavingspayout = false;
          state.authenticated = true;
          state.editsavingspayout = action.payload;
        }
      )
      .addCase(EditSavingsPayout.rejected, (state, action) => {
        console.log("editsavingspayout rejected:", action.payload);
        state.authenticatingeditsavingspayout = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateeditsavingspayout } = EditSavingsPayoutSlice.actions;

export const SavingsPayoutSelector = (state: {
  editsavingspayout: EditSavingsPayoutState;
}) => state.editsavingspayout;

export default EditSavingsPayoutSlice.reducer;
