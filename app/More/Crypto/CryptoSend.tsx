import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  FlatList
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { BottomSheet } from "@/components/Bottom";
import TetherCrypto from "../../../assets/tethercrypto.svg";
import TronCrypto from "../../../assets/troncrypto.svg";
import SolanaCrypto from "../../../assets/solanacrypto.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CryptoSend = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
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
    <View // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
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
            onPress={() => router.push("/More/Crypto")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Send</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Crypto asset"
              placeholder="Select crypto asset"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Address"
            placeholder="Enter or press and hold to paste address"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Amount" placeholder="Enter amount" />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Send"
            onPress={() => router.push("/More/Crypto/CryptoSendSummary")}
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
                  <TouchableOpacity onPress={() => handleCloseModal()}>
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

export default CryptoSend;
