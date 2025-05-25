import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Cards from "../../assets/cards.svg";
import Interac from "../../assets/interac.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Bank from "../../assets/bank.svg";
import Ewallet from "../../assets/ewallet.svg";
import MobileMoney from "../../assets/mobilemoney.svg";
import Request from "../../assets/request.svg";
import Rightcarat from "../../assets/rightcarat.svg";
import { useAppContext } from "@/Context/useAppContext";

const ListofDeposits = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
    const { theme } = useAppContext();
  return (
    <View // style={{ backgroundColor: "#ffffff" }} 
    className={`${
      theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
    }`}>
      <StatusBar hidden={false}   style={`${theme === "dark" ? "light" : "dark"}`}/>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.01,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/(PersonalAccount)")}
          >
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}>Deposit</Text>
          <Text></Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/TransactionDeposit/CardDepositDetails')}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Cards />
              </View>
              {/* <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>Cards</Text> */}
              <View className="items-start">
                <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>
                  Cards deposit
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Instant deposit 3.9% + 0.5
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/InteracDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Interac />
              </View>
              <View className="items-start">
                <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>
                  Interac e-transfer{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Get up to $10,000 within 1 hour
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/Banks")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Bank />
              </View>
              <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>Banks</Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/Ewallets")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Ewallet />
              </View>
              <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>
                E-wallets
              </Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/MobileMoney")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <MobileMoney />
              </View>
              <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>
                Mobile Money
              </Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/RequestDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Request />
              </View>
              <Text className={`${
                  theme === "dark"
                    ? "text-[14px] font-bold text-[#ffffff]"
                    : "text-black text-[14px] font-bold"
                }`}>
                Request Money
              </Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

export default ListofDeposits;
