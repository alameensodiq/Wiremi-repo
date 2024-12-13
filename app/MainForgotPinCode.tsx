import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Back from "../assets/Back.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import SelectAndText from "@/components/SelectAndText";

const MainForgotPinCode = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <StatusBar hidden={false} style="dark"  />
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
            <TouchableOpacity onPress={() => router.push('/SignInPage')}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[18px] font-bold">
              Reset PinCode
            </Text>
            <Text className="text-lighttextblack text-[14px]">
              Enter your phone number to receive OTP for pincode reset.
            </Text>
          </View>
          <View className="items-center">
            <SelectAndText />
          </View>
          <View className="items-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push('/MainForgotSixDigitPinCode')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainForgotPinCode;
