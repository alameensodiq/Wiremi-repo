import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import Tesla from "../../assets/tesladetails.svg";
import BlueSignInButton from "@/components/BlueSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const StockDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Invest")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Invest</Text>
          <Text></Text>
        </View>
        <View>
            <View className="flex-col items-start">
                <Tesla />
                <Text>Tesla, Inc</Text>
                <Text className="text-[14px] text-black font-bold">$240.74</Text>
                <View className="flex-row items-center gap-2">
                    <Text className="text-[#00A85A] text-[12px]">+0.48 (1.20%)</Text>
                    <Text>Today</Text>
                </View>

            </View>
          <View className="flex-row justify-center items-center mt-4">
            <BlueSignInButton
              title="Buy"
              onPress={() => {
                router.push("/Invest/BuyStock");
              }}
            />
          </View>
        </View>
        <View className="flex-col gap-3">
          <Text className="text-[14px] text-black">
            About Tesla, Inc (TSLA)
          </Text>
          <View className="flex-col items-start">
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              Tesla, Inc. is an American electric vehicle and clean{" "}
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              energy company founded in 2003 by engineers{" "}
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              Martin Eberhard and Marc Tarpenning. However, Elon
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              Musk, who joined later in 2004, is often associated
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              with the company's rapid growth and innovation.{" "}
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              Tesla is best known for its electric cars, like the Models
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              , Model 3, Model X, and Model Y, which are{" "}
            </Text>
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              ,designed to promote sustainable energy use.
            </Text>
          </View>
        </View>
        <View className="flex-col gap-3">
          <Text className="text-[14px] text-black">
          Stats
          </Text>
          <View className="flex-col items-start gap-1">
            <View className="flex-row justify-between gap-4 items-center">
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Open</Text>
                    <Text className="text-[14px] text-black font-bold">229.30</Text>

                </View>
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Volume</Text>
                    <Text className="text-[14px] text-black font-bold">13.30M</Text>

                </View>

            </View>
            <View className="flex-row justify-between gap-4 items-center">
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Open</Text>
                    <Text className="text-[14px] text-black font-bold">229.30</Text>

                </View>
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Volume</Text>
                    <Text className="text-[14px] text-black font-bold">13.30M</Text>

                </View>

            </View>
            <View className="flex-row justify-between gap-4 items-center">
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Open</Text>
                    <Text className="text-[14px] text-black font-bold">229.30</Text>

                </View>
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Volume</Text>
                    <Text className="text-[14px] text-black font-bold">13.30M</Text>

                </View>

            </View>
            <View className="flex-row justify-between gap-4 items-center">
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Open</Text>
                    <Text className="text-[14px] text-black font-bold">229.30</Text>

                </View>
                <View className="flex-row justify-between items-center w-[45%] py-2 border-b-[#EBEBEB] border-b-[1px]">
                    <Text>Volume</Text>
                    <Text className="text-[14px] text-black font-bold">13.30M</Text>

                </View>

            </View>

          </View>
        </View>
        <View className="flex-col justify-center items-center mt-6">
            <Text className="text-[10px] text-[#777A7E]">Investments can go down as well as up. Brokerage services are provided by</Text>
            <Text className="text-[10px] text-[#777A7E]">the following US traded securities including fractional trading</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default StockDetails;
