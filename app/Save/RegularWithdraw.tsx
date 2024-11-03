import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";

import TextLabelBox from "@/components/TextLabelBox";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "@/components/Bottom";
import WhiteSignInButton from "@/components/WhiteSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const RegularWithdraw = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save/RegularSavingsSummary")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Withdraw</Text>
          <Text></Text>
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
            onPress={() => ref.current?.open()}
          />
        </View>
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Emergency Fund
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>This is a one time withdrawal. You will no longer be</Text>
              <Text>entitled to withdraw any amount from your savings</Text>
              <Text>instance</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Continue"
                onPress={() => {
                  handleCloseModal();
                  router.push('/Save/RegularWithdrawSuccess')
                }}
              />
              <WhiteSignInButton title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }} />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default RegularWithdraw;
