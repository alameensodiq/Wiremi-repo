import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRef } from "react";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NormalSummary = () => {
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
        className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/More/Escrow/NormalSuccess")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Details</Text>
          <Text></Text>
        </View>
        <View className="flex-row items-center justify-start p-3">
          <Text className="text-lighttextdark font-[14px]">Summary</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Client ID</Text>
          <Text className="text-darktext font-bold">WI342782899</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Client name</Text>
          <Text className="text-darktext font-bold">Biola Moses</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Days left</Text>
          <Text className="text-darktext font-bold">5 days</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Payment type</Text>
          <Text className="text-darktext font-bold">Paypal</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Fee</Text>
          <Text className="text-darktext font-bold">$3.00</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Amount</Text>
          <Text className="text-darktext font-bold">$497.00</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Total</Text>
          <Text className="text-buttonprimary  font-bold">$500</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Status</Text>
          <View
            style={{
              backgroundColor: "#105CE233",
              width: width * 0.15,
              height: height * 0.03,
              borderRadius: 10
            }}
            className="flex-row items-center justify-center"
          >
            <Text className="text-buttonprimary text-[12px] font-bold">
              Active
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center pt-20">
          <BlueSignInButton
            title="View transaction timeline"
            onPress={() => router.push('/More/Escrow/EscrowNormalTimeline')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NormalSummary;
