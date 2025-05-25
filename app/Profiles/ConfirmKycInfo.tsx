import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import SixDigits from "@/components/SixDigits";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "@/Context/useAppContext";

const ConfirmKycInfo = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { theme } = useAppContext();
  return (
    <View
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar
        hidden={false}
        style={`${theme === "dark" ? "light" : "dark"}`}
      />
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
            <TouchableOpacity
              onPress={() => router.push("/Profiles/ProfileKyc")}
            >
              <Back
                style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
              />
            </TouchableOpacity>
            <Text
              className={`${
                theme === "dark"
                  ? "text-[18px]  font-bold text-[#ffffff]"
                  : "text-[18px] text-textblack font-bold"
              }`}
            >
              Update KYC info
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text
              className={`${
                theme === "dark"
                  ? "text-[16px] font-bold text-[#ffffff]"
                  : "text-textblack text-[16px] font-bold"
              }`}
            >
              Phone Number Verification
            </Text>
            <Text
              style={{ color: theme === "dark" ? "[#ffffff]" : "#6E7073" }}
              className="text-[12px]"
            >
              Verify your phone number
            </Text>
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className={`${
                theme === "dark"
                  ? "ttext-[12px] text-[#ffffff]"
                  : "text-textblack text-[12px]"
              }`}
              style={{ marginBottom: height * 0.01 }}
            >
              Enter the 6 (Six) digit OTP code sent to your Phone numbe
            </Text>
            <SixDigits />
          </View>

          <View className="items-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push("/Profiles/ProfileKycAddress")}
            />
            <View
              style={{ borderBottomColor: "#105CE2" }}
              className="mt-2 text-buttonprimary border-b-1"
            >
              {/* <Pressable onPress={() => router.push("/Profiles/KycResetCode")}> */}
              <Text className="text-buttonprimary">Resend code</Text>
              {/* </Pressable> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ConfirmKycInfo;
