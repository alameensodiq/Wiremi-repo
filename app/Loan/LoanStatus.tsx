import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
//   import { SafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Acceptedsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Pending from "../../assets/pendingsuccess.svg";
import Approved from "../../assets/approvedsuccess.svg";

const LoanStatus = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [status, setStatus] = useState("approved");
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
            <Text className="text-[20px] text-pagetitle">Loan Status</Text>
            <Text></Text>
          </View>
          {status === "pending" ? (
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-2"
            >
              <Pending />
              <Text className="text-lighttextblack text-[18px] font-bold">
                Pending
              </Text>
              <View className="flex-col items-center justify-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                  Your loan application is still under review, Check
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  back again.
                </Text>
              </View>
            </View>
          ) : status === "rejected" ? (
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-2"
            >
              <Acceptedsuccess />
              <Text className="text-lighttextblack text-[18px] font-bold">
                Rejected
              </Text>
              <View className="flex-col items-center justify-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                  Your loan application has been reviewed and you
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  do not have any loan offer. Try again in 30 days.
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-2"
            >
              <Approved />
              <Text className="text-lighttextblack text-[18px] font-bold">
                Approved
              </Text>
              <View className="flex-col items-center justify-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                  Your loan application has been approved. Click
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  on the button below to view your various loan
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  offers
                </Text>
              </View>
            </View>
          )}

          <View className="items-center">
            <BlueSignInButton title={status !== 'approved' ? "Back" :  "View loan offers"} onPress={() => {
                if(status !== 'approved'){
                    router.push('/Loan')
                } else {
                    router.push('/Loan/LoanOffer')
                }
            }} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoanStatus;
