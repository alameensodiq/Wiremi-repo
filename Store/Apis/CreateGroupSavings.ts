import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Redirect } from "expo-router";
// import {EXPO_PUBLIC_API_URL} from "@env";

interface CreateGroupSavingsPayload {
  goal_name: string;
  saving_interval: string;
  amount_per_interval?: number;
  duration: number;
  Payout_type: string;
  penalty_percentage: number;
  status: string;
  saving_type: string;
  Payout_duration:string;
  router: (value: any) => void;
  setIsVisible: (value: boolean) => void;
  setShow?: any;
  number_of_members: number;
  participants: Array<string>;
  adminParticipants: Array<string>;
  type: string;
}

interface APIResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const CreateGroupSavings = createAsyncThunk<
  APIResponse,
  CreateGroupSavingsPayload,
  { rejectValue: { error: string; status?: number; details?: any } }
>(
  "creatinggroupsavings",
  async (
    {
      goal_name,
      amount_per_interval,
      duration,
      saving_interval,
      Payout_type,
      penalty_percentage,
      status,
      saving_type,
      router,
      setIsVisible,
      setShow,
      number_of_members,
      Payout_duration,
      participants,
      type,
      adminParticipants
    },
    thunkAPI
  ) => {
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const accessToken = await AsyncStorage.getItem("token");
    console.log(accessToken);
    console.log(
      "Request Data:",
      goal_name,
      amount_per_interval,
      duration,
      saving_interval,
      Payout_type,
      penalty_percentage,
      status,
      saving_type,
      number_of_members,
      router,
      setIsVisible,
      Payout_duration,
      participants,
      type,
      adminParticipants
    );

    try {
      const response = await axios.post<APIResponse>(
        `${BASE_URL}api/account/group-savings/`,
        {
          goal_name,
          amount_per_interval,
          duration,
          saving_interval,
          Payout_type,
          penalty_percentage,
          status,
          saving_type,
          number_of_members,
          Payout_duration,
          participants,
          type,
          adminParticipants
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
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
      setIsVisible(true)
      console.log(e, "error Creatings")
      if (e.response) {
        const { data, status } = e.response;
        // console.error("Error response data:", data);
    
        // Show error message if available
        setShow(data.message || "An error occurred.");
        
        if (status === 401) {
          setIsVisible(false);
          router("/SignInPage");
        }
    
        // Return error details for further processing
        return thunkAPI.rejectWithValue({
          error: data.message || "Failed to process the request.",
          details: data
        });
      } else {
        // Handle network or unexpected errors
        console.error("Unexpected error:", e);
        setShow(e.message || "An unexpected error occurred.");
        return thunkAPI.rejectWithValue({
          error: e.message || "Failed to connect to the server."
        });
      }
    }
  }
);
