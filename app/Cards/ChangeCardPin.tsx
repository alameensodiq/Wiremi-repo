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
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import CardDigits from "@/components/CardDigits";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ChangeCardPin = () => {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
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
            onPress={() => router.push("/(PersonalAccount)/VirtualCard")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Change card pin</Text>
          <Text></Text>
        </View>
        <View className="items-start justify-center">
          <Text className="text-[14px] font-bold">
            Please enter your card pin to verify it’s you.
          </Text>
        </View>
        <View className="flex-col items-start">
          <Text
            className="text-textblack text-[13px]"
            style={{ marginBottom: height * 0.01 }}
          >
            Enter card pin
          </Text>
          <CardDigits />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/Cards/ConfirmChangePin")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ChangeCardPin;
