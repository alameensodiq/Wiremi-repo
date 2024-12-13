import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/whiteback.svg";
import Left from "../../assets/leftredcarat.svg";
import Tesla from "../../assets/tesla.svg";
import { useRouter } from "expo-router";
import BlueSignInButton from "@/components/BlueSignInButton";

const BuyStock = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const router = useRouter();

  const datas = [
    {
      id: 1,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 2,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 3,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 4,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 5,
      name: "Option 1",
      amount: "$1700"
    }
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-buttonprimary"
    >
      <StatusBar hidden={false} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
        <View
          className="bg-white"
          style={{ height: height, position: "relative" }}
        >
          <View
            style={{
              height: height * 0.33,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              gap: height * 0.02,
              backgroundColor: "rgba(16, 92, 226, 0.2)",
              //   opacity: 0.2,
              zIndex: 2
            }}
          >
            <View
              style={{
                height: height * 0.25,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: width * 0.05,
                paddingTop: height * 0.02,
                gap: height * 0.02,
                zIndex: 5
              }}
              className="bg-buttonprimary"
            >
              <View className="flex-row justify-between items-center mb-1">
                <TouchableOpacity
                  onPress={() => router.push("/Profiles/HelpSupport")}
                >
                  <Back />
                </TouchableOpacity>
                <Text className="text-[20px] text-white">Buy Tesla</Text>
                <Text></Text>
              </View>
              <View className="flex-col justify-between gap-6 mt-6 px-10">
                <View className="flex-row justify-between items-center">
                  <Text className="text-[18px] text-white">USD</Text>
                  <Text className="text-[25px] text-white">67</Text>
                </View>
                <View>
                  <Text className="text-[13px] text-white">
                    Balance $146.18
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row items-center justify-between px-10">
              <View className="flex-row items-center gap-2">
                <Tesla />
                <Text className="text-buttonprimary text-[14px]">
                  You will receive
                </Text>
              </View>
              <Text className="text-buttonprimary text-[14px] font-bold">
                2 shares
              </Text>
            </View>
          </View>
          <View className="flex-col items-center mt-20 px-4">
                <View className="flex-row justify-between gap-20">
                    <Text className="text-black text-[14px] font-bold">1</Text>
                    <Text className="text-black text-[14px] font-bold">2</Text>
                    <Text className="text-black text-[14px] font-bold">3</Text>
                </View>
                <View className="flex-row justify-between gap-20 mt-1">
                    <Text className="text-black text-[14px] font-bold">4</Text>
                    <Text className="text-black text-[14px] font-bold">5</Text>
                    <Text className="text-black text-[14px] font-bold">6</Text>
                </View>
                <View className="flex-row justify-between gap-20 mt-1">
                    <Text className="text-black text-[14px] font-bold">7</Text>
                    <Text className="text-black text-[14px] font-bold">8</Text>
                    <Text className="text-black text-[14px] font-bold">9</Text>
                </View>
                <View className="flex-row justify-between gap-20 mt-1">
                    <Text className="text-black text-[14px] font-bold">.</Text>
                    <Text className="text-black text-[14px] font-bold">0</Text>
                    <Left />
                </View>
          </View>
          <View className="flex-row justify-center items-center mt-10">
            <BlueSignInButton
              title="Buy for $67.23 "
              onPress={() => {
                router.push("/Invest/BuySuccess");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default BuyStock;
