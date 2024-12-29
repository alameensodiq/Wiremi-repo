import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface AccountantPayload {
  account_type?: string;
  subscription_plan?: string;
  payment_method?: string;
  user_phone: string;
  business_name?: string;
  industry_type?: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const AccountRegister = createAsyncThunk<
  APIResponse,
  AccountantPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "accountregister",
  async (
    {
      account_type,
      subscription_plan,
      payment_method,
      user_phone,
      business_name,
      industry_type,
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    // const accessToken = sessionStorage.getItem("token");
    console.log(user_phone);
    console.log(
      "Request Data:",
      user_phone,
      account_type,
      subscription_plan,
      payment_method,
      business_name,
      industry_type
    );

    try {
      const response = await axios.post<APIResponse>(
        `${BASE_URL}accounts/register`,
        {
          account_type,
          subscription_plan: subscription_plan ? subscription_plan : "",
          payment_method,
          user_phone,
          business_name,
          industry_type,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
      // console.log(e.message, "account error");
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
);
