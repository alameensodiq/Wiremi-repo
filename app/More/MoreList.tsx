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
  FlatList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import Crypto from "../../assets/crypto.svg";
import Escrow from "../../assets/escrow.svg";
import Flight from "../../assets/flight.svg";
import Withdraw from "../../assets/withdraw.svg";
import Payqr from "../../assets/payqr.svg";
import Swap from "../../assets/swap.svg";
import Agents from "../../assets/agents.svg";
import Tuition from "../../assets/Tuition.svg";
import { BottomSheet } from "@/components/Bottom";
import BlueSignInButton from "@/components/BlueSignInButton";
import WhiteSignInButton from "@/components/WhiteSignInButton";


type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MoreList = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
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
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">More</Text>
          <Text></Text>
        </View>
        <View className="flex-row px-2 items-center justify-between">
          <TouchableOpacity
            onPress={() => router.push("/More/Crypto/CryptoDashboard")}
          >
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Crypto width={70} height={70} />
              </View>
              <Text>Crypto</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/More/Escrow/EscrowDashboard")}
          >
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Escrow width={70} height={70} />
              </View>
              <Text>Escrow</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/More/Flight/FlightDashboard")}>
          <View className="flex-col gap-1 justify-center items-center">
            <View
              style={{
                width: 70, // Set the width according to the icon size
                height: 70, // Set the height according to the icon size
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 50,
                shadowColor: "#0A0A0A",
                shadowOffset: { width: 0, height: 0.58 },
                shadowOpacity: 0.17,
                shadowRadius: 1.16,
                elevation: 2 // For Android
              }}
            >
              <Flight width={70} height={70} />
            </View>
            <Text>Travel</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/More/Withdraw/WithdrawList")}
          >
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Withdraw width={70} height={70} />
              </View>
              <Text>Withdraw</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row px-2 items-center justify-between">
          <TouchableOpacity onPress={() => router.push("/More/PayQr/PayQrScan")}>
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Payqr width={70} height={70} />
              </View>
              <Text>Pay QR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/More/Swap/SwapDashboard")}>
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Swap width={70} height={70} />
              </View>
              <Text>Swap</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ref?.current?.open()}>
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Agents width={70} height={70} />
              </View>
              <Text>Agents</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/More/Tuition/TuitionDashboard")}>
            <View className="flex-col gap-1 justify-center items-center">
              <View
                style={{
                  width: 70, // Set the width according to the icon size
                  height: 70, // Set the height according to the icon size
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 0.58 },
                  shadowOpacity: 0.17,
                  shadowRadius: 1.16,
                  elevation: 2 // For Android
                }}
              >
                <Tuition width={70} height={70} />
              </View>
              <Text>Tuition</Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Become Agent
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>To become an agent, you need a minimum of $100</Text>
              <Text>deposit on your agent account to start operations.</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Pay now"
                onPress={() => {
                  handleCloseModal();
                  router.push("/More/Agents")
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MoreList;
