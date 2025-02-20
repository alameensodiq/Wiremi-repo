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

interface VerifyEmailStatusPayload {
  email: string;
}

// Thunk implementation
export const VerifyEmailStatus = createAsyncThunk<
  APIResponse,
  VerifyEmailStatusPayload,
  { rejectValue: RejectValue }
>(
  "verifyemailstatus", // Action type name
  async ({ email }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    console.log(email, "verifyemailstatus");

    try {
      const response = await axios.get<APIResponse>(
        `${BASE_URL}users/email/status/${email}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // Return the API response data
      return response.data;
    } catch (error: any) {
      // setIsVisible(true)
      // setShow(e.response.message)
      if (error.response && error.response.status === 401) {
        // setIsVisible(false)
        // router("/SignInPage");
      }
      // Reject the thunk with error details
      return thunkAPI.rejectWithValue({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to connect to the server.",
        status: error.response?.status,
      });
    }
  }
);
