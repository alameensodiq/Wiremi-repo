import { Platform } from "react-native";
import * as Application from "expo-application";

export async function getDeviceId() {
  if (Platform.OS === "ios") {
    return await Application.getIosIdForVendorAsync();
  } else {
    return Application.getAndroidId();
  }
}

//npx expo install expo@latest

