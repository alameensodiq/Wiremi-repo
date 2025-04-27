import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  TextInput
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import Card from "../../../assets/flightcard.svg";
import MasterCard from "../../../assets/mastercard.svg";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";

const FlightPayment = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/More/Flight/FlightDetailsAmount")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Payment</Text>
          <Text></Text>
        </View>
        <View className="flex-col justify-center px-4">
          <View
            style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
            className="flex-col justify-center items-center gap-3 pb-4"
          >
            <Card />
            <Text style={{ color: "#051000" }}>Card Details</Text>
            <View className="flex-col items-center">
              <Text style={{ color: "#909D8A" }} className="text-[11px]">
                To successfully pay for your ticket, kindly make payment using a{" "}
              </Text>
              <Text style={{ color: "#909D8A" }} className="text-[11px]">
                valid credit card
              </Text>
            </View>
          </View>
          <View
            style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
            className="flex-row justify-between py-6"
          >
            <Text className="text-buttonprimary">Amount to pay</Text>
            <Text className="text-buttonprimary">$360.00</Text>
          </View>
          <View className="flex-col mt-10">
            <View className="flex-col gap-2">
              <Text style={{ fontSize: 14, color: "#505050" }}>
                Card number
              </Text>
              <TextInput
                placeholder="0000 0000 0000 0000"
                style={{ backgroundColor: "#F1F2F4", position: "relative" }}
                className="relative w-[100%] h-[50px] rounded-[5px] pl-10"
              />
              <MasterCard
                style={{ position: "absolute", right: 10, bottom: 15 }}
              />
            </View>
            <View className="flex-row justify-between">
              <View className="flex-col gap-2 mt-2 w-[50%]">
                <Text style={{ fontSize: 14, color: "#505050" }}>
                  Expiry date
                </Text>
                <TextInput
                  placeholder="02/27"
                  style={{ backgroundColor: "#F1F2F4" }}
                  className="relative w-[80%] h-[50px] rounded-[5px] pl-7"
                />
              </View>
              <View className="flex-col gap-2 mt-2 w-[50%]">
                <Text style={{ fontSize: 14, color: "#505050" }}>CVV</Text>
                <TextInput
                  placeholder="000"
                  style={{ backgroundColor: "#F1F2F4", position: "relative" }}
                  className="relative w-[80%] h-[50px] rounded-[5px] pl-10"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="items-center pt-20">
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/More/Flight/FlightSuccess")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FlightPayment;
