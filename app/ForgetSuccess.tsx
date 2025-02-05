import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Forgotsuccess from "../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import SixDigits from "@/components/SixDigits";
import { useAppDispatch } from "@/Store/ConfigureStore";
import { clearStateforgetpin } from "@/Store/Reducers/ForgetPin";

const ForgetSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();



  useEffect(() => {
      dispatch(clearStateforgetpin())
  },[])
  return (
    <View className="flex-1 ">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        className="justify-between"
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02
        }}
      >
        <View
          style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
          className="flex-1  justify-between gap-6"
        >
          <View className="flex-row justify-center items-center">
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
          </View>
          <View
            style={{ height: height * 0.7 }}
            className="flex-col items-center justify-center gap-2"
          >
            <Forgotsuccess />
            <Text className="text-lighttextblack text-[18px] font-bold">
              Successful!
            </Text>
            <Text className="text-forgotsuccesslight text-[13px]">
              Your login pincode has been reset successfully.
            </Text>
          </View>

          <View className="items-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push("/SignInPage")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgetSuccess;
