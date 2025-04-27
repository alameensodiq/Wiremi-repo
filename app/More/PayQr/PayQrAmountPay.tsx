import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import Payqr from "../../../assets/payqrlogo.svg";
import Barcode from "../../../assets/Payqrscan.svg";
import Wiremi from "../../../assets/wiremipayqr.svg";
import Redrightcarat from "../../../assets/redrightcarat.svg";
import Fingerprint from "../../../assets/fingerprint.svg";
import FourDigits from "@/components/FourDigits";
import { StatusBar } from "expo-status-bar";
import { BottomSheet } from "@/components/Bottom";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PayQrAmountPay = () => {
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
          <TouchableOpacity onPress={() => router.push("/More/PayQr")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Pay QR</Text>
          <Text></Text>
        </View>
        <View
          style={{ height: height * 0.83 }}
          className="flex-col  justify-between pt-10"
        >
          <View className="flex-col justify-between gap-10">
            <View className="flex-col justify-between gap-1 items-center">
              <Payqr />
              <Text style={{ color: "#242329", fontSize: 16 }}>
                Scan QR Code
              </Text>
              <Text style={{ color: "#413D43", fontSize: 13 }}>
                Scan this qr code to make your payment.
              </Text>
            </View>
            <View className="flex-row items-center justify-center">
              <Barcode />
            </View>
            <View className="flex-col">
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Fees</Text>
                <Text className="text-darktext font-bold">$0.40</Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Tax</Text>
                <Text className="text-darktext font-bold">$0.20</Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Transaction type
                </Text>
                <Text className="text-darktext font-bold">Shopping</Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Created on
                </Text>
                <Text className="text-darktext font-bold">11th June,2023</Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Total amount
                </Text>
                <Text className="text-buttonprimary  font-bold">$500</Text>
              </View>
            </View>
          </View>
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton title="Pay" onPress={() => ref.current?.open()} />
          </View>
        </View>
        <BottomSheet height={450} ref={ref}>
          <View style={{ padding: 20, gap: 5 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center justify-center gap-2 flex-col">
              <Text className="mb-2" style={{ fontSize: 13, color: "#606162" }}>
                Enter a transactin pin
              </Text>
              <FourDigits />
            </View>
            <View className="flex-col gap-8 px-8 mt-2">
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      1
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      2
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      3
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      4
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      5
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      6
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      7
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      8
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      9
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <View>
                  <Fingerprint />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/PayQr/PayQrSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      0
                    </Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Redrightcarat />
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PayQrAmountPay;
