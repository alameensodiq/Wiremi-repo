import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface AccountantPayload {
  name: string;
  email: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const Login = createAsyncThunk<
  APIResponse, 
  AccountantPayload, 
  { rejectValue: { error: string; status?: number } }
>(
  "login",
  async ({ name,email}, thunkAPI) => {
    // const BASE_URL = process.env.REACT_APP_BASE_URL;
    // const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}admin/create-accountant`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name, email}),
      });

      const data: APIResponse = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue({
          error: data.message || "An error occurred.",
          status: response.status,
        });
      }

    //   if (data.status) {
    //     toast.success(data.message);
    //   } else {
    //     toast.error(data.message);
    //   }
    AsyncStorage.setItem("token", data?.data?.token);
      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
);
