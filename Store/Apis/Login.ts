import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface LoginPayload {
  pin: string;
  account_id: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const Login = createAsyncThunk<
  APIResponse,
  LoginPayload,
  { rejectValue: { error: string; status?: number } }
>("login", async ({ pin, account_id }, thunkAPI) => {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  // const accessToken = sessionStorage.getItem("token");

  try {
    const response = await axios.post<APIResponse>(
      `${BASE_URL}auth/login`,
      {
        pin: "111111",
        account_id: "WI082400003",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Axios Response:", response.data);

    // if (!response.data.status) {
    //   // If the API returned an error status
    //   return thunkAPI.rejectWithValue({
    //     error: response.data.message || "An error occurred.",
    //     status: response.status,
    //   });
    // }
    // AsyncStorage.setItem("Wiremi_Id", account_id);
    // AsyncStorage.setItem("Pin_code", pin);
    AsyncStorage.setItem("Wiremi_Id", "WI082400003");
    AsyncStorage.setItem("Pin_code", "111111");

    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue({
      error: e.message || "Failed to connect to the server."
    });
  }
});
