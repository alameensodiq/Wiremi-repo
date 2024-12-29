import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface PinPayload {
    id: number;
  pin: string;
  
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const CreatePin = createAsyncThunk<
  APIResponse,
  PinPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "createpin",
  async (
    {
        pin,
        id
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    // const accessToken = sessionStorage.getItem("token");
    console.log(pin);
    console.log(
      "Request Data:",
      pin
    );

    try {
      const response = await axios.patch<APIResponse>(
        `${BASE_URL}accounts/${id}/pin`,
        {pin
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Axios Account Response Pin:", response.data);

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
