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
import DirectDeposit from "../../assets/directdeposit.svg";
import LinkBank from "../../assets/linkbank.svg";
import Rightcarat from "../../assets/rightcarat.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Banks = () => {
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
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push('/TransactionDeposit')}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Banks</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/TransactionDeposit/BankDepositDetails')}>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <DirectDeposit />
            </View>
            <View className="items-start">
              <Text className="text-[14px] font-bold text-black">
                Direct deposit
              </Text>
              <Text className="text-[10px] text-deposistsub">
                Add money from your bank account
              </Text>
            </View>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => router.push('/TransactionDeposit/LinkBankDetails')}>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <LinkBank />
            </View>
            <View className="items-start">
              <Text className="text-[14px] font-bold text-black">
                Link bank account
              </Text>
              <Text className="text-[10px] text-deposistsub">
                Link any of your bank account for easy transactions
              </Text>
            </View>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

export default Banks;
