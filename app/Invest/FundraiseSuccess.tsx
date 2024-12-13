import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";

const FundraiseSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <View className="flex-1 bg-white">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          className="justify-between"
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingTop: height * 0.02
          }}
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Invest/FundraiseInput")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">
              Apply for fund raise
            </Text>
            <Text></Text>
          </View>
          <View
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
            className="flex-1  justify-between gap-6"
          >
            <View className="flex-row justify-center items-center"></View>
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-6"
            >
              <View className="flex-col gap-3">
                <Forgotsuccess />
                <Text
                  style={{ color: "#1E1B39" }}
                  className="text text-[18px] font-bold"
                >
                  Successful
                </Text>
              </View>
              <View className="flex-col justify-center items-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                you have successfully applied for a project. We
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                will review and get back to you as soon as we can
                </Text>
              </View>
            </View>

            <View
              style={{ height: height * 0.2 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Done"
                onPress={() => router.push("/Invest/Project")}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default FundraiseSuccess;
