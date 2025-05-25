import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "@/Context/useAppContext";

const TransactionChangePinSuccess = () => {
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
            <Text></Text>
            <Text
              className={`${
                theme === "dark"
                  ? "text-[20px] text-[#ffffff]"
                  : "text-[20px] text-pagetitle"
              }`}
            >
              Change pin
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
                      ? " text-[13px] text-[#ffffff]"
                      : "text-forgotsuccesslight text-[13px]"
                  }`}
                >
                  Your transaction pin has been changed
                </Text>
                <Text
                  className={`${
                    theme === "dark"
                      ? " text-[13px] text-[#ffffff]"
                      : "text-forgotsuccesslight text-[13px]"
                  }`}
                >
                  successfully.
                </Text>
              </View>
            </View>

            <View
              style={{ height: height * 0.2 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Back to Profile"
                onPress={() => {
                  router.push("/Profile");
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TransactionChangePinSuccess;
