import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Constants from 'expo-constants';

interface RegisterUserPayload {
  telephone: string;
  country: string;
  first_name: string;
  last_name: string;
  email: string;
  phoneCode: string;
  code?: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const RegisterUser = createAsyncThunk<
  APIResponse,  // Type of data returned on success
  RegisterUserPayload,  // Type of payload that is sent with the action
  { rejectValue: { error: string; status?: number } }  // Type for rejection value
>(
  "register",  // Name of the action
  async (
    { telephone, country, first_name, last_name, email, code, phoneCode },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const sanitizedTelephone = telephone.startsWith("0")
      ? telephone.slice(1)
      : telephone;
      console.log(`${phoneCode}${sanitizedTelephone}`)

      // const real =
      // country === "Nigeria"
      //   ? `+234${sanitizedTelephone}`
      //   : country === "United States of America"
      //   ? `+1${sanitizedTelephone}`
      //   : sanitizedTelephone;
    // console.log("Base URL:", BASE_URL);
    // console.log("Request Data:", { telephone, country, first_name, last_name, email, code });

    try {
      // Make the API call to register user
      const response = await axios.post<APIResponse>(
        `${BASE_URL}users/register`,  // Make sure the URL is correct
        { telephone: sanitizedTelephone, country, first_name, last_name, email, code },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Axios Response:", response.data);

      // Check if the response is successful
      // if (!response.data.status) {
      //   // If the API returns a failed status, reject the promise
      //   return thunkAPI.rejectWithValue({
      //     error: response.data.message || "An error occurred.",
      //     status: response.status,
      //   });
      // }

      // Return the successful response data
      return response.data;
    } catch (e: any) {
      // Handle errors from Axios
      // if (axios.isAxiosError(e) && e.response) {
      //   console.error("Axios Error Response:", e.response.data);
      //   return thunkAPI.rejectWithValue({
      //     error: e.response.data?.message || "Failed to process request.",
      //     status: e.response.status,
      //   });
      // }

      // Handle network or other errors
      // console.error("Axios Error:", e.message);
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
);
