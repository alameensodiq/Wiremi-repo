import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
//   import { SafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Acceptedsuccess from "../../assets/acceptedsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import SixDigits from "@/components/SixDigits";

const LoanAccepted = () => {
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
          paddingTop: height * 0.02,
           backgroundColor: "white"
        }}
      >
        <View
          style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
          className="flex-1  justify-between gap-6"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.back()}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">
              Loan Accepted
            </Text>
            <Text></Text>
          </View>
          <View
            style={{ height: height * 0.7 }}
            className="flex-col items-center justify-center gap-2"
          >
            <Acceptedsuccess />
            <Text className="text-lighttextblack text-[18px] font-bold">
              Loan accepted
            </Text>
            <View className="flex-col items-center justify-center">
              <Text className="text-forgotsuccesslight text-[13px]">
                You have successfully accepted your loan offer
              </Text>
              <Text className="text-forgotsuccesslight text-[13px]">
                and the amount will be disbursed to your within 2
              </Text>
              <Text className="text-forgotsuccesslight text-[13px]">
                working day
              </Text>
            </View>
          </View>

          <View className="items-center">
            <BlueSignInButton title="Back" onPress={() => router.back()} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoanAccepted;
