import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { SafeAreaView } from "react-native-safe-area-context";


const VirtualCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View style={{height: height * 0.7}} className="gap-2">
          <View className="flex-col items-start gap-2">
            <Text className="font-bold text-[14px] text-primary">Wiremi Virtual Card Specifications</Text>
            <Text className="text-[12px] font-bold text-primary">Card Details</Text>
            <View className="flex-col items-start bg-buttonprimary p-4 rounded-[8px] w-[90%]">
              <Text className="text-[12px] text-white"> Creation Fee: $5</Text>
              <Text className="text-[12px] text-white">Validity: 2 Years</Text>
              <Text className="text-[12px] text-white">Activation: Immediate (usable upon creation)</Text>
              <Text className="text-[12px] text-white">Transaction Limit: $10,000 per transaction</Text>
              <Text className="text-[12px] text-white"> Maximum Balance: $100,000</Text>
              <Text className="text-[12px] text-white">
                Minimum Balance: $1 (initial deposit from creation fee)
              </Text>
            </View>
          </View>
          <View className="flex-col items-start gap-2 mt-2">
            <Text className="text-[12px] font-bold text-primary">Fee Structure</Text>
            <Text className="text-[12px] text-primary">Funding Fees:</Text>
            <View className="flex-col items-start bg-buttonprimary p-4 rounded-[8px] w-[90%]">
              <Text className="text-[12px] text-white">$1.50 for transactions $1-$999</Text>
              <Text className="text-[12px] text-white">$1.50 for transactions $1-$999</Text>
              <Text className="text-[12px] text-white"> 2% for transactions $1,000+</Text>
            </View>
          </View>
          <View className="flex-col items-start gap-2">
            <Text className="text-[12px] font-bold text-primary">Monthly Maintenance: $0.80/month</Text>
            <Text className="text-[12px] text-primary"> 
              Termination: Automatic closure after 5 failed authentication
              attempts
            </Text>
          </View>
          <View className="flex-col items-start gap-2">
            <Text className="font-bold text-[12px] text-primary">Competitive Advantages</Text>
            <View className="flex-col items-start bg-buttonprimary p-4 rounded-[8px] w-[90%]">
              <Text className="text-[12px] text-white">Instant usability</Text>
              <Text className="text-[12px] text-white">Low entry cost</Text>
              <Text className="text-[12px] text-white">High transaction and balance limits</Text>
              <Text className="text-[12px] text-white">Flexible funding options</Text>
              <Text className="text-[12px] text-white">Minimal monthly maintenance fee</Text>
            </View>
          </View>
        </View>
        <View className="items-center justify-center">
          <BlueSignInButton
            title="Proceed"
            onPress={() => {
              router.push("/Cards/Virtual");
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VirtualCard;
