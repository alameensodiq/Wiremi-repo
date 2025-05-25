import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Momo from "../../assets/momo.svg";
import Mobile from "../../assets/mobile.svg";
import Rightcarat from "../../assets/rightcarat.svg";
import { useAppDispatch } from "@/Store/ConfigureStore";
import { clearStatemomodeposit } from "@/Store/Reducers/MomoDeposit";
import { clearStatesummary } from "@/Store/Reducers/Summary";
import { useAppContext } from "@/Context/useAppContext";

const MobileMoney = () => {
  const { theme } = useAppContext();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearStatemomodeposit());
    dispatch(clearStatesummary());
  }, []);
  return (
    <View
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar
        hidden={false}
        style={`${theme === "dark" ? "light" : "dark"}`}
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/TransactionDeposit")}>
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text
            className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}
          >
            Mobile money
          </Text>
          <Text></Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/MomoDetails")}
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
                <Momo />
              </View>
              <View className="items-start">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[14px] font-bold  text-[#ffffff]"
                      : "text-[14px] font-bold text-black"
                  }`}
                >
                  Momo USSD
                </Text>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[10px]  text-[#ffffff]"
                      : "text-[10px] text-deposistsub"
                  }`}
                >
                  Manual deposit 1% Charges
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/MobilemoneyDetails")}
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
                <Mobile />
              </View>
              <View className="items-start">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[14px] font-bold  text-[#ffffff]"
                      : "text-[14px] font-bold text-black"
                  }`}
                >
                  Mobile money
                </Text>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[10px]  text-[#ffffff]"
                      : "text-[10px] text-deposistsub"
                  }`}
                >
                  Instant deposit 2.1% Charges
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default MobileMoney;
