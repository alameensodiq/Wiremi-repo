import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";

import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CreateCard = () => {
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
          <TouchableOpacity onPress={() => router.push("/(PersonalAccount)/VirtualCard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Create virtual card
          </Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransparentSelectButton
            label="Card type"
            placeholder="Select card type"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Transaction pin"
            placeholder="Enter your transaction pin"
          />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/Cards/CardSuccess")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateCard;
