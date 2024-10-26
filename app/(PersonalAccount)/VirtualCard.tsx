import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Cards from "../../../assets/cards.svg";
import Virtual from "../../assets/virtualcard.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";

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
        <View className="flex-row justify-between items-center mb-1">
          {/* <TouchableOpacity
              onPress={() => router.push("/Dashboard")}
            >
              <Back />
            </TouchableOpacity> */}
          <Text></Text>
          <Text className="text-[20px] text-pagetitle">Virtual Cards</Text>
          <Text></Text>
        </View>
        <View>
          <Text style={{ color: "#00091E" }} className="text-[14px]">
            Create your own virtual card for easy transactions
          </Text>
        </View>
          <View style={{ height: height * 0.6 }} className="items-center">
            <Virtual />
          </View>
      

        <View className="items-center justify-center">
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/Cards/CreateCard")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VirtualCard;
