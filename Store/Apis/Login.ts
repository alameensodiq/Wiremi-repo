import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface LoginPayload {
  pin: string;
  account_id: string;
  device_id: string;
  setIsVisible: (value: boolean) => void;
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
>("login", async ({ pin, account_id, device_id, setIsVisible }, thunkAPI) => {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  console.log(pin, account_id, device_id);
  // const accessToken = sessionStorage.getItem("token");

  try {
    const response = await axios.post<APIResponse>(
      `${BASE_URL}auth/login`,
      {
        // pin: "111111",
        // account_id: "WI082400003",
        pin,
        account_id,
        // device_id,
        device_id:"30242e13-3f4e-42b6-a558-aae98cad4844"
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
    AsyncStorage.setItem("Wiremi_Id", account_id);
    AsyncStorage.setItem("Pin_code", pin);
    // AsyncStorage.setItem("Wiremi_Id", "WI082400003");
    // AsyncStorage.setItem("Pin_code", "111111");

    return response.data;
  } catch (e: any) {
    setIsVisible(true);
    console.log(e, "error Creatings");
    if (e.response) {
      const { data, status } = e.response;
      // console.error("Error response data:", data);

      // Show error message if available

      if (status === 401) {
        setIsVisible(false);
        // router("/SignInPage");
      }

      // Return error details for further processing
      return thunkAPI.rejectWithValue({
        error: data.message || "Failed to process the request.",
      });
    } else {
      // Handle network or unexpected errors
      console.error("Unexpected error:", e);
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
});
