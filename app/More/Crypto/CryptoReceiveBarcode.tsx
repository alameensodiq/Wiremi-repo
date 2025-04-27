import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import TetherCrypto from "../../../assets/tethercrypto.svg";
import TronCrypto from "../../../assets/troncrypto.svg";
import SolanaCrypto from "../../../assets/solanacrypto.svg";
import Barcode from "../../../assets/receivebarcode.svg";
import Copy from "../../../assets/copycrypto.svg";
import Share from "../../../assets/share.svg";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CryptoReceiveBarcode = () => {
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
          <Text className="text-[20px] text-pagetitle font-bold">Receive</Text>
          <Text></Text>
        </View>
        <View>
          <View className="flex-col justify-center">
            <Text
              className="font-bold text-[18px] mb-5"
              style={{ color: "#00091E" }}
            >
              Receive USDT
            </Text>
            <View>
              <Text style={{ color: "#606162" }} className="text-[10px]">
                You can only send Tether USDT tokens in USDT network to this
                address, or{" "}
              </Text>
              <Text style={{ color: "#606162" }} className="text-[10px]">
                you might lose your funds.
              </Text>
            </View>
          </View>
          <View
            style={{ height: height * 0.5 }}
            className="flex-col justify-center items-center gap-4"
          >
            <View className="gap-4">
              <Barcode />
              <Text style={{ width: width * 0.5 }}>
                3537484894949$43424526&&3553476437643887434398
              </Text>
            </View>
            <View className="flex-row gap-3">
              <View
                style={{
                  backgroundColor: "#2A94F4",
                  width: width * 0.2,
                  height: height * 0.04,
                  borderRadius: 10
                }}
                className="items-center flex-row justify-center gap-1"
              >
                <Copy />
                <Text className="text-white">Copy</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#2A94F4",
                  width: width * 0.2,
                  height: height * 0.04,
                  borderRadius: 10
                }}
                className="items-center flex-row justify-center gap-1"
              >
                <Share />
                <Text className="text-white">Share</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CryptoReceiveBarcode;
