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

const MoreList = () => {
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
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">More</Text>
          <Text></Text>
        </View>
        <View className="flex-row items-center justify-between">
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
            <Text>Flight</Text>
          </View>
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
        <View className="flex-row items-center justify-start">
          <View className="flex-col gap-1 justify-center items-center mr-8">
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
          <View className="flex-col gap-1 justify-center items-center mr-8">
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MoreList;
