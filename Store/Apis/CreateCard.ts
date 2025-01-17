import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface CreateCardPayload {
  currency: string;
  type: string;
  auto_approve: boolean;
  brand: string;
  card_pin: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const CreateCards = createAsyncThunk<
  APIResponse,
  CreateCardPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "createcard",
  async ({ currency, type, auto_approve, brand, card_pin }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const accessToken = await AsyncStorage.getItem("token");
    console.log("Request Data:", currency, type, auto_approve, brand, card_pin);

    try {
      const response = await axios.post<APIResponse>(
        `${BASE_URL}payments/issuingCard`,
        {
          currency,
          type,
          auto_approve,
          brand,
          card_pin,
        },
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
      // console.log(e.message, "account error");
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
);
