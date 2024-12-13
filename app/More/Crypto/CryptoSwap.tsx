import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { BottomSheet } from "@/components/Bottom";
import { useRef } from "react";
import SearchLabelBox from "@/components/SearchLabelBox";
import TetherCrypto from "../../../assets/tethercrypto.svg";
import TronCrypto from "../../../assets/troncrypto.svg";
import SolanaCrypto from "../../../assets/solanacrypto.svg";
import Solana from "../../../assets/solanacryto.svg";
import Down from "../../../assets/down.svg";
import SwapIcon from "../../../assets/swapicon.svg";
type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CryptoSwap = () => {
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
    <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/More/Crypto/CryptoDashboard")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle font-bold">
            Swap Assets
          </Text>
          <Text></Text>
        </View>
        <View className="flex-col gap-2" style={{ position: "relative" }}>
          <TouchableOpacity onPress={() => ref.current?.open()}>
            <View
              style={{
                height: height * 0.14,
                width: width * 0.9,
                borderRadius: 20,
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1
              }}
              className="flex-row justify-between p-6 items-center"
            >
              <View className="flex-col">
                <Text style={{ color: "#606162" }} className="text-[12px]">
                  Send
                </Text>
                <View className="flex-row items-center gap-4">
                  <Solana />
                  <View className="flex-col gap-2">
                    <View className="flex-row items-center">
                      <Text className="text-[18px] font-bold">SOL</Text>
                      <Down />
                    </View>
                    <Text className="text-[12px]" style={{ color: "#777A7E" }}>
                      Solana
                    </Text>
                  </View>
                </View>
              </View>
              <View className="items-end gap-2">
                <View className="flex-row gap-1">
                  <Text style={{ color: "#606162" }}>Balance=200 SOL</Text>
                  <Text style={{ color: "#105CE2" }}>Max</Text>
                </View>
                <View
                  style={{
                    borderColor: "#D7D8DF",
                    height: 15,
                    borderWidth: 5,
                    width: 12,
                    borderRadius: 10
                  }}
                  className="items-center justify-center"
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      height: 13,
                      width: 10,
                      borderRadius: 10
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ref.current?.open()}>
            <View
              style={{
                height: height * 0.14,
                width: width * 0.9,
                borderRadius: 20,
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1
              }}
              className="flex-row justify-between p-6 items-center"
            >
              <View className="flex-col">
                <Text style={{ color: "#606162" }} className="text-[12px]">
                  Receive
                </Text>
                <View className="flex-row items-center gap-4">
                  <TetherCrypto />
                  <View className="flex-col gap-2">
                    <View className="flex-row items-center">
                      <Text className="text-[18px] font-bold">Tether</Text>
                      <Down />
                    </View>
                    <Text className="text-[12px]" style={{ color: "#777A7E" }}>
                      Tether USDT
                    </Text>
                  </View>
                </View>
              </View>
              <View className="items-end" style={{ marginTop: height * 0.04 }}>
                <View
                  style={{
                    borderColor: "#D7D8DF",
                    height: 15,
                    borderWidth: 5,
                    width: 12,
                    borderRadius: 10
                  }}
                  className="items-center justify-center"
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      height: 13,
                      width: 10,
                      borderRadius: 10
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              top: height * 0.1,
              position: "absolute",
              left: width * 0.36
            }}
            onPress={() => ref.current?.open()}
          >
            <SwapIcon />
          </TouchableOpacity>
        </View>

        <View
          style={{ height: height * 0.8 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Swap now"
            onPress={() => ref.current?.open()}
          />
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
    </ScrollView>
  );
};

export default CryptoSwap;
