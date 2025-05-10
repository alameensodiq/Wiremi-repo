import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { router } from "expo-router"; // ✅ Import router

interface LoginPayload {
  pin: string;
  account_id: string;
  device_id: string;
  setIsVisible: (value: boolean) => void;
  router: (href: Parameters<typeof router.push>[0]) => void; // ✅ Correctly typed
}

interface APIResponse {
  status: boolean;
  message: string;
  access_token?: string;
}

export const Login = createAsyncThunk<
  APIResponse,
  LoginPayload,
  { rejectValue: { error: string; status?: number } }
>("login", async ({ pin, account_id, device_id, setIsVisible, router }, thunkAPI) => {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  console.log(pin, account_id, device_id);

  try {
    const response = await axios.post<APIResponse>(
      `${BASE_URL}auth/login`,
      {
                // pin: "111111",
        // account_id: "WI082400003",
        //         device_id:"30242e13-3f4e-42b6-a558-aae98cad4844",
        pin,
        account_id,
        // device_id,
            // account_id:"WI082400121",
        device_id:"B15C0D33-9C3C-4E39-8CBF-E2D307411DE7"
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Axios Response:", response.data);

    const accessToken = response?.data?.access_token;
    console.log(accessToken);

    // if (accessToken) {
    //   await AsyncStorage.multiSet([
    //     ["token", accessToken],
    //     ["Wiremi_Id", account_id],
    //     ["Pin_code", pin],
    //   ]);
      
    //   await AsyncStorage.getItem("token"); // Ensures AsyncStorage writes are completed
      
    //   // setTimeout(() => {
    //     router("/(PersonalAccount)/Dashboard");
    //   // }, 0);

    // } else {
    //   console.error("Access token is missing in API response");
    //   return thunkAPI.rejectWithValue({
    //     error: "Access token is missing",
    //   });
    // }

    return response.data;
  } catch (e: any) {
    setIsVisible(true);
    console.log(e, "error Creating");

    if (e.response) {
      const { data, status } = e.response;

      if (status === 401) {
        await AsyncStorage.removeItem("token");
        setIsVisible(false);
      }

      return thunkAPI.rejectWithValue({
        error: data.message || "Failed to process the request.",
      });
    } else {
      console.error("Unexpected error:", e);
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to connect to the server.",
      });
    }
  }
});
