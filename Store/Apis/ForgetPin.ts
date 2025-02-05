import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface ForgetPinPayload {
    telephone: string;
    otp:string;
    pin:string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const ForgetPin = createAsyncThunk<
  APIResponse,
  ForgetPinPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "forgetpin",
  async (
    {
        telephone,pin,otp
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    // const accessToken = sessionStorage.getItem("token");
    console.log(telephone);
    console.log(
      "Request Data:",
      telephone
    );

    const cleanedTelephone = telephone.trim();
    const formattedTelephone = cleanedTelephone.startsWith("+")
  ? cleanedTelephone
  : `+${cleanedTelephone}`;

    try {
      const response = await axios.patch<APIResponse>(
        `${BASE_URL}accounts/resetpin/${formattedTelephone}`,
        {
            pin, otp
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
