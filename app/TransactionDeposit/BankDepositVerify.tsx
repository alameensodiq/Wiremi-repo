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

const BankDepositVerify = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
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
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Verifying</Text>
          <Text></Text>
        </View>
        <View style={{height: height * 0.5}} className="justify-center items-center">
            <Text className="font-[14px] text-lighttextdark">We are verifying your payment and you will get</Text>
            <Text className="font-[14px] text-lighttextdark">notified in few seconds once confirmed.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BankDepositVerify;
