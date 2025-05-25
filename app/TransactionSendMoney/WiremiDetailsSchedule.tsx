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
import Ladypics from "../../assets/ladypics.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TextLabelBox from "@/components/TextLabelBox";
import TextLabelBoxBarcode from "@/components/TextLabelBoxBarcode";
import { useAppContext } from "@/Context/useAppContext";

const WiremiDetailsSchedule = () => {
  const { theme } = useAppContext();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
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
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/TransactionSendMoney")}
          >
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}>Wiremi user</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            placeholder="Enter amount 0.00"
          />
        </View>
        <View className="flex-col gap-2">
          <View className="items-center justify-center">
            <TextLabelBoxBarcode
              label="Wiremi ID"
              placeholder="Enter wiremi ID"
            />
          </View>
          <View className="justify-start">
            <View
              style={{ paddingHorizontal: 10 }}
              className="flex-row items-start justify-end gap-2"
            >
              <Ladypics />
              <Text className="text-buttonprimary">Susan Sheidu</Text>
            </View>
          </View>
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Schedule time"
            placeholder="Enter schedule time"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Schedule date"
            placeholder="Enter schedule date"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Narration"
            placeholder="Enter narration (optional)"
          />
        </View>
        <View
          style={{ height: height * 0.1 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() =>
              router.push("/TransactionSendMoney/WiremiSummarySchedule")
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WiremiDetailsSchedule;
