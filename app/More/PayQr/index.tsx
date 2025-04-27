import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import Payqr from "../../../assets/payqrlogo.svg";
import Barcode from "../../../assets/Payqrscan.svg";
import Wiremi from "../../../assets/wiremipayqr.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PayQrScan = () => {
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
    <ScrollView // style={{ backgroundColor: "#ffffff" }} 
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
          <TouchableOpacity onPress={() => router.push("/More")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Pay QR</Text>
          <Text></Text>
        </View>
        <View
          style={{ height: height * 0.83 }}
          className="flex-col items-center justify-between pt-20"
        >
          <View className="flex-col justify-between gap-20 items-center">
            <View className="flex-col justify-between gap-1 items-center">
              <Payqr />
              <Text style={{ color: "#242329", fontSize: 16 }}>
                Scan QR Code
              </Text>
              <Text style={{ color: "#413D43", fontSize: 13 }}>
                Scan this qr code to make your payment.
              </Text>
            </View>
            <Pressable onPress={() => router.push('/More/PayQr/PayQrAmount')}>
            <Barcode/>
            </Pressable>
          </View>
          <Wiremi/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PayQrScan;
