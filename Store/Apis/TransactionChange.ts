import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Redirect } from "expo-router";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface TransactionChangePayload {
  //   goal_name: string;
  //   saving_interval: string;
  //   amount_per_interval?: number;
  //   duration: number;
  //   emergency_fund_percentage: number;
  //   penalty_percentage: number;
  //   status: string;
  //   saving_type: string;
  //   schedule: string;
  pin: string;
  oldpin: string;
  router: (value: any) => void;
  setIsVisible: (value: boolean) => void;
  setShow: any;
  //   schedule_info: any
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const TransactionChange = createAsyncThunk<
  APIResponse,
  TransactionChangePayload,
  { rejectValue: { error: string; status?: number; details?: any } }
>(
  "transactionchange",
  async (
    {
      //   goal_name,
      //   amount_per_interval,
      //   duration,
      //   saving_interval,
      //   emergency_fund_percentage,
      //   penalty_percentage,
      //   status,
      //   saving_type,
      //   schedule,
      router,
      setIsVisible,
      setShow,
      pin,
      oldpin,
      //   schedule_info
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const accessToken = await AsyncStorage.getItem("token");
    console.log(accessToken);
    console.log(
      "Request Data:",
      //   goal_name,
      //   amount_per_interval,
      //   duration,
      //   saving_interval,
      //   emergency_fund_percentage,
      //   penalty_percentage,
      //   status,
      //   saving_type,
      //   schedule,
      router,
      setIsVisible
    );

    try {
      const response = await axios.patch<APIResponse>(
        `${BASE_URL}accounts/changetranspin`,
        { pin, oldpin },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Axios Account Response:", response.data);

      //   if (!response.data.status) {
      //     // If the API returned an error status
      //     return thunkAPI.rejectWithValue({
      //       error: response.data.message || "An error occurred.",
      //       status: response.status,
      //     });
      //   }

      return response.data;
    } catch (e: any) {
      setIsVisible(true);
      console.log(e, "error Creatings");
      if (e.response) {
        const { data, status } = e.response;
        // console.error("Error response data:", data);

        // Show error message if available
        setShow(data.message || "An error occurred.");

        if (status === 401) {
          setIsVisible(false);
          await AsyncStorage.removeItem("token");
          router("/Auth/SignInPage");
        }

        // Return error details for further processing
        return thunkAPI.rejectWithValue({
          error: data.message || "Failed to process the request.",
          details: data,
        });
      } else {
        // Handle network or unexpected errors
        console.error("Unexpected error:", e);
        setShow(e.message || "An unexpected error occurred.");
        return thunkAPI.rejectWithValue({
          error: e.message || "Failed to connect to the server.",
        });
      }
    }
  }
);
