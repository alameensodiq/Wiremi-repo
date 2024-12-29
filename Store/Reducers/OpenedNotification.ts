import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenedNotification } from "../Apis/OpenedNotification";

interface OpenedNotificationState {
  openednotification: any | null;
  authenticatingopenednotification: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: OpenedNotificationState = {
  openednotification: null,
  authenticatingopenednotification: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const OpenedNotificationSlice = createSlice({
  name: "openednotification",
  initialState,
  reducers: {
    clearStateopenednotification: (state) => {
      state.openednotification = null;
      state.authenticatingopenednotification = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(OpenedNotification.pending, (state) => {
        console.log("openednotification pending...");
        state.authenticatingopenednotification = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        OpenedNotification.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("openednotification.fulfilled payload:", action.payload);
          state.authenticatingopenednotification = false;
          state.authenticated = true;
          state.openednotification = action.payload;
        }
      )
      .addCase(OpenedNotification.rejected, (state, action) => {
        console.log("openednotification rejected:", action.payload);
        state.authenticatingopenednotification = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateopenednotification } = OpenedNotificationSlice.actions;

export const OpenedNotificationSelector = (state: {
  openednotification: OpenedNotificationState;
}) => state.openednotification;

export default OpenedNotificationSlice.reducer;
