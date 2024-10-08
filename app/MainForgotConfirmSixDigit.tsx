import {
  View,
  Text,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import SixDigits from "@/components/SixDigits";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../assets/Back.svg";

const MainForgotConfirmSixDigit = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
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
          style={{ paddingHorizontal: 8 }}
          className="flex-1  justify-start gap-6"
        >
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => router.push("/MainForgotSixDigitPinCode")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[16px] font-bold">
              Confirm your pincode in order to login again
            </Text>
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Enter pincode
            </Text>
            <SixDigits />
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Confirm pincode
            </Text>
            <SixDigits />
          </View>

          <View className="items-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push('/ForgetSuccess')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainForgotConfirmSixDigit;
