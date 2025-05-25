import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "@/Context/useAppContext";

const BankDepositVerify = () => {
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
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/TransactionDeposit/Banks")}
          >
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text
            className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}
          >
            Verifying
          </Text>
          <Text></Text>
        </View>
        <View
          style={{ height: height * 0.5 }}
          className="justify-center items-center"
        >
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "font-[14px] text-lighttextdark"
            }`}
          >
            We are verifying your payment and you will get
          </Text>
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "font-[14px] text-lighttextdark"
            }`}
          >
            notified in few seconds once confirmed.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BankDepositVerify;
