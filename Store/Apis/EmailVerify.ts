import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface EmailVerifyPayload {
    email: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const EmailVerify = createAsyncThunk<
  APIResponse,
  EmailVerifyPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "emailverify",
  async (
    {
        email
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
        `${BASE_URL}users/email/send`,
        {
            email
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
