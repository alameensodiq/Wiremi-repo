import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useAppContext } from "@/Context/useAppContext";

const UpgradeSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { theme } = useAppContext();

  return (
    <View className="flex-1 ">
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
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Profiles/UpgradeDuration")}
            >
              <Back />
            </TouchableOpacity>
            <Text
              className={`${
                theme === "dark"
                  ? "text-[20px] font-bold text-[#ffffff]"
                  : "text-black text-[20px] font-bold"
              }`}
            >
              Upgrade account
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
                  style={{ color: theme === "dark" ? "#ffffff" : "#1E1B39" }}
                  className="text text-[18px] font-bold"
                >
                  Successful
                </Text>
              </View>
              <View className="flex-col justify-center items-center">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[13px] text-[#ffffff]"
                      : "text-forgotsuccesslight text-[13px]"
                  }`}
                >
                  You have successfully upgraded your subscription
                </Text>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[13px] text-[#ffffff]"
                      : "text-forgotsuccesslight text-[13px]"
                  }`}
                >
                  plan to wiremi lite
                </Text>
              </View>
            </View>

            <View
              style={{ height: height * 0.13 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="View Details"
                onPress={() => router.push("/Profile")}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default UpgradeSuccess;
