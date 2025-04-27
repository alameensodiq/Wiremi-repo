import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpgradingPlan } from "../Apis/UpgradingPlan";

interface UpgradingPlanState {
  upgradingplan: any | null;
  authenticatingupgradingplan: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsupgradingplan: any;
}

const initialState: UpgradingPlanState = {
  upgradingplan: null,
  authenticatingupgradingplan: false,
  authenticated: false,
  isError: false,
  errorsupgradingplan: null,
};

export const UpgradingPlanSlice = createSlice({
  name: "upgradingplan",
  initialState,
  reducers: {
    clearStateupgradingplan: (state) => {
      state.upgradingplan = null;
      state.authenticatingupgradingplan = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsupgradingplan = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpgradingPlan.pending, (state) => {
        console.log("upgradingplan pending...");
        state.authenticatingupgradingplan = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsupgradingplan = null;
      })
      .addCase(UpgradingPlan.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("upgradingplan.fulfilled payload:", action.payload);
        state.authenticatingupgradingplan = false;
        state.authenticated = true;
        state.upgradingplan = action.payload;
      })
      .addCase(UpgradingPlan.rejected, (state, action) => {
        console.log("upgradingplan rejected:", action.payload);
        state.authenticatingupgradingplan = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsupgradingplan = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStateupgradingplan } = UpgradingPlanSlice.actions;

export const UpgradingPlanSelector = (state: {
  upgradingplan: UpgradingPlanState;
}) => state.upgradingplan;

export default UpgradingPlanSlice.reducer;
