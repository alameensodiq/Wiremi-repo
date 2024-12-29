import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleNotification } from "../Apis/SingleNotification";

interface SingleNotificationState {
  singlenotification: any | null;
  authenticatingsinglenotification: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: SingleNotificationState = {
  singlenotification: null,
  authenticatingsinglenotification: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const SingleNotificationSlice = createSlice({
  name: "singlenotification",
  initialState,
  reducers: {
    clearStatesinglenotification: (state) => {
      state.singlenotification = null;
      state.authenticatingsinglenotification = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SingleNotification.pending, (state) => {
        console.log("singlenotification pending...");
        state.authenticatingsinglenotification = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        SingleNotification.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("singlenotification.fulfilled payload:", action.payload);
          state.authenticatingsinglenotification = false;
          state.authenticated = true;
          state.singlenotification = action.payload;
        }
      )
      .addCase(SingleNotification.rejected, (state, action) => {
        console.log("singlenotification rejected:", action.payload);
        state.authenticatingsinglenotification = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStatesinglenotification } = SingleNotificationSlice.actions;

export const SinglenotificationSelector = (state: {
  singlenotification: SingleNotificationState;
}) => state.singlenotification;

export default SingleNotificationSlice.reducer;
