import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface UnfreezeCardPayload {
  id: string;
  
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const UnfreezeCard = createAsyncThunk<
  APIResponse,
  UnfreezeCardPayload,
  { rejectValue: { error: string; status?: number } }
>(
  "freezecard",
  async ({ id }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const accessToken = await AsyncStorage.getItem("token");
    console.log("Request Data:", id);

    try {
      const response = await axios.patch<APIResponse>(
        `${BASE_URL}payments/issuingCard/${id}/unfreeze`,
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
