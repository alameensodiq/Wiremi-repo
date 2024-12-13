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
import Acceptedsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";

const LoanPayment = () => {
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
            <Text className="text-[20px] text-pagetitle">Loan repayment</Text>
            <Text></Text>
          </View>
          <View
            style={{ height: height * 0.7 }}
            className="flex-col items-center justify-center gap-2"
          >
            <Acceptedsuccess />
            <Text className="text-lighttextblack text-[18px] font-bold">
              Successful!
            </Text>
            <View className="flex-col items-center justify-center">
              <Text className="text-forgotsuccesslight text-[13px]">
                Your payment of $900 was successful
              </Text>
            </View>
          </View>

          <View className="items-center">
            <BlueSignInButton
              title="View loan details"
              onPress={() => router.push("/Loan/LoanOffer")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoanPayment;
