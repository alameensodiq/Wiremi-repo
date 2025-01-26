import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardTransactionPayload {
  id: string;
  startdate?: Date;
  enddate?: Date;
  page?: number;
  router: (value: any) => void;
}

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
  details?: any;
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Thunk implementation
export const CardTransactions = createAsyncThunk<
  APIResponse,
  CardTransactionPayload,
  { rejectValue: RejectValue }
>(
  "cardtransactions", // Action type name
  async ({ id, startdate, enddate, page, router }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Accessing the environment variable
    const accessToken = await AsyncStorage.getItem("token");
    const today = new Date();
    const formattedStartDate =
      startdate ||
      formatDate(new Date(today.getFullYear(), today.getMonth(), 1)); // First day of the current month
    const formattedEndDate = enddate || formatDate(today);
    console.log(formattedEndDate)
    try {
      const response = await axios.get<APIResponse>(
        // `${BASE_URL}payments/issuingCard/${id}/transactions?startdate=${startdate}&end_date=${enddate}&page=1&page_size=10`,
        `${BASE_URL}payments/issuingCard/${id}/transactions?start_date=2024-09-23&end_date=${formattedEndDate}&page=${
          page ? page : 1
        }&page_size=100`,
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
          router("/SignInPage");
        }

        // Return error details for further processing
        return thunkAPI.rejectWithValue({
          error: data.message || "Failed to process the request.",
          details: data,
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
