import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../../assets/whiteback.svg";
import Dashboardeye from "../../../assets/dashboardeye.svg";
import Send from "../../../assets/sendcrypto.svg";
import Receive from "../../../assets/receivecrypto.svg";
import Swap from "../../../assets/swapcrypto.svg";
import Convert from "../../../assets/convertcrypto.svg";
import TetherCrypto from "../../../assets/tethercrypto.svg";
import TronCrypto from "../../../assets/troncrypto.svg";
import SolanaCrypto from "../../../assets/solanacrypto.svg";
import { Image } from "expo-image";
import { FlatList } from "react-native";
import { BottomSheet } from "@/components/Bottom";
import SearchLabelBox from "@/components/SearchLabelBox";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CryptoDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const data = [
    {
      id: "1",
      name: "Tether USDT",
      percent: "4,498 USDT",
      number: "$4,500.08",
      increase: "+3.89%",
      image: <TetherCrypto />
    },
    {
      id: "2",
      name: "TRON",
      percent: "10,498 TRX",
      number: "$4,500.08",
      increase: "+3.89%",
      image: <TronCrypto />
    },
    {
      id: "3",
      name: "Solana",
      percent: "200 SOL",
      number: "$723.12",
      increase: "+3.89%",
      image: <SolanaCrypto />
    },
    {
      id: "4",
      name: "Tether USDT",
      percent: "4,498 USDT",
      number: "$4,500.08",
      increase: "+3.89%",
      image: <TetherCrypto />
    },
    {
      id: "5",
      name: "TRON",
      percent: "10,498 TRX",
      number: "$4,500.08",
      increase: "+3.89%",
      image: <TronCrypto />
    },
    {
      id: "6",
      name: "Solana",
      percent: "200 SOL",
      number: "$723.12",
      increase: "+3.89%",
      image: <SolanaCrypto />
    },
    {
      id: "7",
      name: "Solana",
      percent: "200 SOL",
      number: "$723.12",
      increase: "+3.89%",
      image: <SolanaCrypto />
    }
  ];

  return (
    <View style={{ backgroundColor: "#2A94F4" }} className="flex-1">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight
        }}
        className="gap-6"
      >
        <View
          style={{
            backgroundColor: "#2A94F4",
            height: height * 0.3,
            paddingHorizontal: width * 0.03
          }}
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/More/MoreList")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px]" style={{ color: "#ffffff" }}>
              Crypto
            </Text>
            <Text></Text>
          </View>
          <View
            style={{ height: height * 0.15 }}
            className="flex-col items-center justify-center"
          >
            <Text style={{ color: "#ffffff" }}>Total wallet balance</Text>
            <View className="flex-row gap-2 items-center">
              <Text className="text-white text-[24px] font-bold">
                $6,950.00
              </Text>
              <Dashboardeye />
            </View>
          </View>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => router.push("/More/Crypto/CryptoSend")}
            >
              <View className="flex-col gap-1 items-center">
                <Send />
                <Text className="text-white text-[14px]">Send</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ref.current?.open()}>
              <View className="flex-col gap-1 items-center">
                <Receive />
                <Text className="text-white text-[14px]">Receive</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/More/Crypto/CryptoSwap")}
            >
              <View className="flex-col gap-1 items-center">
                <Swap />
                <Text className="text-white text-[14px]">Swap</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/More/Crypto/CryptoConvert")}
            >
              <View className="flex-col gap-1 items-center">
                <Convert />
                <Text className="text-white text-[14px]">Convert</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: height * 0.7,
            paddingTop: height * 0.02,
            paddingHorizontal: width * 0.03,
            gap: 20
          }}
        >
          <View className="flex-row justify-between">
            <Text style={{ color: "#00091e" }} className="font-bold">
              Assets
            </Text>
            <Text style={{ color: "#105CE2" }} className="text-[14px]">
              See all
            </Text>
          </View>
          <View style={{ height: height * 0.5 }}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <View className="flex-row justify-between">
                  <View className="flex-row gap-1 items-center">
                    {item?.image}
                    <View className="flex-col">
                      <Text className="text-[14px] font-bold">
                        {item?.name}
                      </Text>
                      <Text
                        className="text-[12px]"
                        style={{ color: "#606162" }}
                      >
                        {item?.percent}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col items-end">
                    <Text className="text-[14px] font-bold">
                      {item?.number}
                    </Text>
                    <Text className="text-[10px]" style={{ color: "#00A85A" }}>
                      {item?.increase}
                    </Text>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                gap: 30
              }}
            />
          </View>
        </View>
        <BottomSheet height={750} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Select token
              </Text>
            </View>
            <View>
              <SearchLabelBox placeholder="Search" />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/More/Crypto/CryptoReceiveBarcode");
                      handleCloseModal();
                    }}
                  >
                    <View className="flex-row justify-between gap-4">
                      <View className="flex-row gap-1 items-center">
                        {item?.image}
                        <View className="flex-col">
                          <Text className="text-[14px] font-bold">
                            {item?.name}
                          </Text>
                          <Text
                            className="text-[12px]"
                            style={{ color: "#606162" }}
                          >
                            {item?.percent}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-col items-end">
                        <Text className="text-[14px] font-bold">
                          {item?.number}
                        </Text>
                        <Text
                          className="text-[10px]"
                          style={{ color: "#00A85A" }}
                        >
                          {item?.increase}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  gap: 30
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default CryptoDashboard;
