import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import { BottomSheet } from "@/components/Bottom";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CardDepositDetails = () => {
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
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            // onPress={() => router.push("/TransactionDeposit/CardDeposits")}
            onPress={() => router.push("/TransactionDeposit")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Card deposit</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            placeholder="Enter amount $0.00"
          />
        </View>
        <View className="items-center justify-center">
          <BlueSignInButton
            title="Proceed"
            onPress={
              () => ref?.current?.open()
              // router.push("/TransactionDeposit/TransactionSummary")
            }
          />
        </View>
        <BottomSheet height={570} ref={ref}>
          <View
            style={{
              marginTop: statusBarHeight,
              paddingHorizontal: width * 0.03
            }}
            className="gap-6"
          >
            <View className="flex-row justify-center items-center mb-1">
              {/* <TouchableOpacity onPress={() => router.back()}>
                <Back />
              </TouchableOpacity> */}
              <Text className="text-[20px] text-pagetitle">
                Transaction Summary
              </Text>
              <Text></Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Amount</Text>
              <Text className="text-darktext font-[14px]">$500</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Fees</Text>
              <Text className="text-darktext font-[14px]">$0.00</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Tax</Text>
              <Text className="text-darktext font-[14px]">$0.00</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">
                Deposit type
              </Text>
              <Text className="text-darktext font-bold">Card deposit</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Amount</Text>
              <Text className="text-buttonprimary font-[14px]">$500</Text>
            </View>
            <View className="items-center justify-center">
              <BlueSignInButton
                title="Proceed"
                onPress={() => {
                  handleCloseModal();
                  router.push("/TransactionDeposit/CreditCard");
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default CardDepositDetails;
