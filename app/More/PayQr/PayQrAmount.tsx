import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Payqrprofile from "../../../assets/payqrprofile.svg";
import Wiremi from "../../../assets/wiremipayqr.svg";
import { StatusBar } from "expo-status-bar";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import BlueSignInButton from "@/components/BlueSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PayQrAmount = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const router = useRouter();

  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
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
          <TouchableOpacity onPress={() => router.push("/More/PayQr/PayQrScan")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Pay QR</Text>
          <Text></Text>
        </View>
        <View
          style={{ height: height * 0.83 }}
          className="flex-col items-center justify-between pt-10"
        >
          <View className="flex-col gap-2">
            <View className="flex-row justify-start items-start gap-2">
                <Payqrprofile/>
                <View className="flex-col">
                    <Text className="text-buttonprimary">Recipient name</Text>
                    <Text style={{color:'#242329'}}>Cocacola Beverages Limited</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-start gap-2">
                <Payqrprofile/>
                <View className="flex-col">
                    <Text className="text-buttonprimary">Address</Text>
                    <Text style={{color:'#242329'}}>No 32, first east road</Text>
                </View>
            </View>
            <View className="items-center justify-center">
              <TransactionTextLabel
                label="Amount"
                placeholder="Enter amount $0.00"
              />
            </View>
            <View
              style={{ height: height * 0.2 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push("/More/PayQr/PayQrAmountPay")}
              />
            </View>
          </View>

          <Wiremi />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PayQrAmount;
