import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportedCountries } from "../Apis/SupportedCountries";

interface SupportedCountriesState {
  supportedcountries: any | null;
  authenticatingsupportedcountries: boolean;
  authenticated: boolean;
  isError: boolean;
  errorssupportedcountries: any;
}

const initialState: SupportedCountriesState = {
  supportedcountries: null,
  authenticatingsupportedcountries: false,
  authenticated: false,
  isError: false,
  errorssupportedcountries: null,
};

export const SupportedCountriesSlice = createSlice({
  name: "supportedcountries",
  initialState,
  reducers: {
    clearStatesupportedcountries: (state) => {
      state.supportedcountries = null;
      state.authenticatingsupportedcountries = false;
      state.authenticated = false;
      state.isError = false;
      state.errorssupportedcountries = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SupportedCountries.pending, (state) => {
        console.log("supportedcountries pending...");
        state.authenticatingsupportedcountries = true;
        state.authenticated = false;
        state.isError = false;
        state.errorssupportedcountries = null;
      })
      .addCase(
        SupportedCountries.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("supportedcountries.fulfilled payload:", action.payload);
          state.authenticatingsupportedcountries = false;
          state.authenticated = true;
          state.supportedcountries = action.payload;
        }
      )
      .addCase(SupportedCountries.rejected, (state, action) => {
        console.log("supportedcountries rejected:", action.payload);
        state.authenticatingsupportedcountries = false;
        state.authenticated = false;
        state.isError = true;
        state.errorssupportedcountries = action.payload || {
          error: "Unknown error occurred.",
        };
      });
  },
});

export const { clearStatesupportedcountries } = SupportedCountriesSlice.actions;

export const SupportedCountriesSelector = (state: {
  supportedcountries: SupportedCountriesState;
}) => state.supportedcountries;

export default SupportedCountriesSlice.reducer;
