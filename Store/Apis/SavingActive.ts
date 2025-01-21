import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the shape of the API response
interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}


interface SavingInstancesPayload {
  router: (value: any) => void;
}
// Define the shape of the error response
interface RejectValue {
  error: string;
  status?: number;
}

// Thunk implementation
export const SavingActive = createAsyncThunk<
  APIResponse,
  SavingInstancesPayload,
  { rejectValue: RejectValue }
>(
  "saveactive", // Action type name
  async ({router}, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    try {
      const response = await axios.get<APIResponse>(
        `${BASE_URL}api/account/activesavings/`,
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
      console.log(e, "error Creatings")
      if (e.response) {
        const { data, status } = e.response;
        // console.error("Error response data:", data);
    
        // Show error message if available
        // setShow(data.message || "An error occurred.");
        
        if (status === 401) {
          // setIsVisible(false);
          router("/SignInPage");
        }
    
        // Return error details for further processing
        return thunkAPI.rejectWithValue({
          error: data.message || "Failed to process the request.",
        });
      } else {
        // Handle network or unexpected errors
        console.error("Unexpected error:", e);
        // setShow(e.message || "An unexpected error occurred.");
        return thunkAPI.rejectWithValue({
          error: e.message || "Failed to connect to the server."
        });
      }
    }
  }
);
