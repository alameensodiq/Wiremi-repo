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
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { BottomSheet } from "@/components/Bottom";
import { useRef, useState } from "react";
import SearchLabelBox from "@/components/SearchLabelBox";
import TetherCrypto from "../../../assets/tethercrypto.svg";
import TronCrypto from "../../../assets/troncrypto.svg";
import SolanaCrypto from "../../../assets/solanacrypto.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Down from "../../../assets/down.svg";
import SwapIcon from "../../../assets/swapicon.svg";
import USD from "../../../assets/usd.svg";
import { CheckBox } from "@rneui/themed";
type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CryptoConvert = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [selectedIndex, setIndex] = useState(0);
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
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

  const data2 = [
    {
      id: "1",
      name: "USD Dollar(USD)",
      image: <USD />
    },
    {
      id: "2",
      name: "NGN Naira(NGN)",
      image: <USD />
    },
    {
      id: "3",
      name: "Great British Pounds(GBP)",
      image: <USD />
    },
    {
      id: "4",
      name: "Canadian Dollar(CAD)",
      image: <USD />
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
          <Text className="text-[20px] text-pagetitle font-bold">Convert</Text>
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
                <View className="flex-row items-center gap-1">
                  <TetherCrypto />
                  <View className="flex-col gap-2">
                    <View className="flex-row items-center">
                      <Text className="text-[14px]">USDT</Text>
                      <Down />
                    </View>
                    <Text className="text-[10px]" style={{ color: "#777A7E" }}>
                      Tether USDT
                    </Text>
                  </View>
                </View>
              </View>
              <View className="items-end gap-2">
                <View className="flex-row gap-1">
                  <Text style={{ color: "#606162" }}>Balance=200 SOL</Text>
                  <Text style={{ color: "#105CE2" }}>Max</Text>
                </View>
                <Text>201 USD</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ref2.current?.open()}>
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
                <View className="flex-row items-center">
                  <USD />
                  <View className="flex-col gap-2">
                    <View className="flex-row items-center">
                      <Text className="text-[14px]">USDollars</Text>
                      <Down />
                    </View>
                    {/* <Text className="text-[12px]" style={{ color: "#777A7E" }}>
                        Tether USDT
                      </Text> */}
                  </View>
                </View>
              </View>
              <View className="items-end" style={{ marginTop: height * 0.04 }}>
                <Text>201 USD</Text>
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
            title="Convert now"
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
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
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
        <BottomSheet height={550} ref={ref2}>
          <View style={{ padding: 20, gap: 30 }}>
            {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                My Accounts
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select primary account</Text>
              <CheckBox
                checked={selectedIndex === 20}
                onPress={() => setIndex(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data2}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
                      handleCloseModal2();
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <View className="flex-col gap-2">
                        <View className="flex-row items-center">
                          {item?.image}
                          <Text className="text-[14px] font-bold">
                            {item?.name}
                          </Text>
                        </View>
                        <View className="flex-row">
                          <Text
                            className="text-[12px] ml-4"
                            style={{ color: "#105CE2" }}
                          >
                            Active
                          </Text>
                        </View>
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={selectedIndex === index}
                          onPress={() => setIndex(index)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  gap: 20
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CryptoConvert;
