import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Constants from "expo-constants";
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

// Thunk implementation
export const UserTransactions = createAsyncThunk<
  APIResponse,
  void,
  { rejectValue: RejectValue } 
>(
  "usertransactions", // Action type name
  async (_, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    try {
      const response = await axios.get<APIResponse>(`${BASE_URL}auth/transactions/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Return the API response data
      return response.data;
    } catch (error: any) {
      // Reject the thunk with error details
      return thunkAPI.rejectWithValue({
        error: error.response?.data?.message || error.message || "Failed to connect to the server.",
        status: error.response?.status,
      });
    }
  }
);
