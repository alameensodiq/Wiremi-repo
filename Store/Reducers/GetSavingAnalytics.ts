import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetSavingAnalytics } from "../Apis/GetSavingAnalytics";

interface GetSavingAnalyticsState {
  getsavinganalytics: any | null;
  authenticatinggetsavinganalytics: boolean;
  authenticated: boolean;
  isError: boolean;
  errorsanalytics: any;
}

const initialState: GetSavingAnalyticsState = {
  getsavinganalytics: null,
  authenticatinggetsavinganalytics: false,
  authenticated: false,
  isError: false,
  errorsanalytics: null
};

export const GetSavingAnalyticsSlice = createSlice({
  name: "getsavinganaytics",
  initialState,
  reducers: {
    clearStategetsavinganalytics: (state) => {
      state.getsavinganalytics = null;
      state.authenticatinggetsavinganalytics = false;
      state.authenticated = false;
      state.isError = false;
      state.errorsanalytics = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetSavingAnalytics.pending, (state) => {
        console.log("GetSavingAnalytics pending...");
        state.authenticatinggetsavinganalytics = true;
        state.authenticated = false;
        state.isError = false;
        state.errorsanalytics = null;
      })
      .addCase(
        GetSavingAnalytics.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("GetSavingAnalytics.fulfilled payload:", action.payload);
          state.authenticatinggetsavinganalytics = false;
          state.authenticated = true;
          state.getsavinganalytics = action.payload;
        }
      )
      .addCase(GetSavingAnalytics.rejected, (state, action) => {
        console.log("GetSavingAnalytics rejected:", action.payload);
        state.authenticatinggetsavinganalytics = false;
        state.authenticated = false;
        state.isError = true;
        state.errorsanalytics = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStategetsavinganalytics } = GetSavingAnalyticsSlice.actions;

export const GetSavingSelector = (state: {
  getsavinganalytics: GetSavingAnalyticsState;
}) => state.getsavinganalytics;

export default GetSavingAnalyticsSlice.reducer;
