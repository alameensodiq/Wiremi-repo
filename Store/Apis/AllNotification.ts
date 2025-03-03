import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the shape of the API response
interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

// Define the shape of the error response
interface RejectValue {
  error: string;
  status?: number;
}

interface NotificationPayload {
  notificationSearch: string;
  router: (value: any) => void;
}

// Thunk implementation
export const AllNotification = createAsyncThunk<
  APIResponse,
  NotificationPayload,
  { rejectValue: RejectValue } 
>(
  "allnotification", // Action type name
  async ({notificationSearch, router}, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    console.log(notificationSearch, "notificationSearch")

    try {
      const response = await axios.get<APIResponse>(`${BASE_URL}notifications/search/?search=${notificationSearch}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Return the API response data
      return response.data;
    } catch (error: any) {
      // setIsVisible(true)
      // setShow(e.response.message)
      if (error.response && error.response.status === 401) {
        // setIsVisible(false)
        await AsyncStorage.removeItem("token");
        router("/Auth/SignInPage");
      }
      // Reject the thunk with error details
      return thunkAPI.rejectWithValue({
        error: error.response?.data?.message || error.message || "Failed to connect to the server.",
        status: error.response?.status,
      });
    }
  }
);
