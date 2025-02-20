import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface EmailVerifyCodePayload {
    email: string;
    otp: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const EmailVerifyCode = createAsyncThunk<
  APIResponse,
  EmailVerifyCodePayload,
  { rejectValue: { error: string; status?: number } }
>(
  "emailverifycode",
  async (
    {
        email,
        otp
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    // const accessToken = sessionStorage.getItem("token");
    console.log(email);
    console.log(
      "Request Data:",
      email
    );

    try {
      const response = await axios.post<APIResponse>(
        `${BASE_URL}users/email/verify`,
        {
            email,otp
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
