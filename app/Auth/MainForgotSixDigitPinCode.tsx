import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Back from "../../assets/Back.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import SixDigits from "@/components/SixDigits";
import { clearStateverification } from "@/Store/Reducers/VerificationCode";
import { useAppSelector } from "@/Store/ConfigureStore";

const MainForgotSixDigitPinCode = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [pin, setPin] = useState("");
  const { phone } = useLocalSearchParams();
  console.log(phone);

  const onChangepin = (value: string) => {
    setPin(value);
  };

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
            <TouchableOpacity onPress={() => router.push("/Auth/MainForgotPinCode")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[18px] font-bold">
              Phone Number Verification
            </Text>
            <Text className="text-lighttextblack text-[14px]">
              Verify your phone number to reset pincode
            </Text>
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Enter the 6 (Six) digit OTP code sent to your Phone number
            </Text>
            <SixDigits onChangeText={(value: string) => onChangepin(value)} />
          </View>

          <View className="items-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() =>
                router.push(
                  `/Auth/MainForgotConfirmSixDigit?phone=${phone}&otp=${pin}`
                )
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainForgotSixDigitPinCode;
