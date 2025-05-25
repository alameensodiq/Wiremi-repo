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
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import { useAppContext } from "@/Context/useAppContext";

const MobileMoneySuccessSchedule = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { theme } = useAppContext();
  return (
    <View className="flex-1 ">
      <View
        style={{ backgroundColor: theme === "dark" ? "#000000" : "#ffffff" }}
        className="flex-1"
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
              <Text
                className={`${
                  theme === "dark"
                    ? "text-[13px] text-[#ffffff]"
                    : "text-forgotsuccesslight text-[13px]"
                }`}
              >
                Your transfer of $500 was successful .
              </Text>
            </View>

            <View className="items-center justify-between flex-row p-4">
              <ShortBlueButton
                title="Done"
                color1
                onPress={() =>
                  router.push(
                    "/TransactionSendMoney/MobileMoneySummarySchedule"
                  )
                }
              />
              <ShortWhiteButton
                title="View receipt"
                color1
                onPress={() =>
                  router.push(
                    "/TransactionSendMoney/MobileMoneyReceiptSchedule"
                  )
                }
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MobileMoneySuccessSchedule;
