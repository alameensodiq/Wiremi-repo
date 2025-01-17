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

interface GetSavingPayload {
  id: number;
}

// Thunk implementation
export const GetSaving = createAsyncThunk<
  APIResponse,
  GetSavingPayload,
  { rejectValue: RejectValue } 
>(
  "getsaving", // Action type name
  async ({id}, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");

    console.log(id, "id")

    try {
      const response = await axios.get<APIResponse>(`${BASE_URL}api/account/savings/${id}/`, {
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
