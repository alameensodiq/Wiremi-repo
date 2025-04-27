import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface KycAddressPayload {
  address: string;
  postalCode: string;
  country: string;
  city: string;
  state: string;
  router: (value: any) => void;
  setIsVisible: (value: boolean) => void;
  setShow: any;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const KycAddress = createAsyncThunk<
  APIResponse,
  KycAddressPayload,
  { rejectValue: { error: string; status?: number; details?: any } }
>(
  "kycaddress",
  async ({ address, postalCode, country, city, state }, thunkAPI) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const accessToken = await AsyncStorage.getItem("token");
    // const accessToken = sessionStorage.getItem("token");
    console.log("Request Data:", address, postalCode, country, city, state);

    try {
      const response = await axios.post<APIResponse>(
        `${BASE_URL}kyc/address`,
        { address, postalCode, country, city, state },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
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
