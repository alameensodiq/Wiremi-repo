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
  details?: any
}

interface HistorySavingsPayload {
  id: number;
  router: (value: any) => void;
  // setIsVisible: (value: boolean) => void;
}

// Thunk implementation
export const HistorySavings = createAsyncThunk<
  APIResponse,
  HistorySavingsPayload,
  { rejectValue: { error: string; status?: number; details?: any } }
>(
  "historysaving", // Action type name
  async ({ id, router }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    console.log(id, "id");

    try {
      const response = await axios.get<APIResponse>(
        `${BASE_URL}api/account/savings/transactions/${id}/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Return the API response data
      return response.data;
    } catch (e: any) {
      // setIsVisible(true)
      console.log(e, "error Creatings");
      if (e.response) {
        const { data, status } = e.response;
        // console.error("Error response data:", data);

        // Show error message if available
        // setShow(data.message || "An error occurred.");

        if (status === 401) {
          // setIsVisible(false);
          await AsyncStorage.removeItem("token");
          router("/Auth/SignInPage");
        }

        // Return error details for further processing
        return thunkAPI.rejectWithValue({
          error: data.message || "Failed to process the request.",
          details: data
        });
      } else {
        // Handle network or unexpected errors
        console.error("Unexpected error:", e);
        // setShow(e.message || "An unexpected error occurred.");
        return thunkAPI.rejectWithValue({
          error: e.message || "Failed to connect to the server.",
        });
      }
    }
  }
);

// https://backendapp.wiremi.ca/api/account/savings/transactions/168/
