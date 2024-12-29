import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllNotification } from "../Apis/AllNotification";

interface AllNotificationState {
  allnotification: any | null;
  authenticatingallnotification: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: AllNotificationState = {
    allnotification: null,
  authenticatingallnotification: false,
  authenticated: false,
  isError: false,
  errors: null,
};

export const AllNotificationSlice = createSlice({
  name: "allnotification",
  initialState,
  reducers: {
    clearStateallnotification: (state) => {
      state.allnotification = null;
      state.authenticatingallnotification = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AllNotification.pending, (state) => {
        console.log("allnotification pending...");
        state.authenticatingallnotification = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(AllNotification.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("allnotification.fulfilled payload:", action.payload);
        state.authenticatingallnotification = false;
        state.authenticated = true;
        state.allnotification = action.payload;
      })
      .addCase(AllNotification.rejected, (state, action) => {
        console.log("allnotification rejected:", action.payload);
        state.authenticatingallnotification = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  },
});

export const { clearStateallnotification } = AllNotificationSlice.actions;

export const AllnotificationSelector = (state: {
    allnotification: AllNotificationState;
}) => state.allnotification;

export default AllNotificationSlice.reducer;
