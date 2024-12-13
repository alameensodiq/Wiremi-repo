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
import { SafeAreaView } from "react-native-safe-area-context";
import Warning from "../../assets/warning.svg";
import Tick from "../../assets/tick.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const DeactivateCard = () => {
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
          <TouchableOpacity onPress={() => router.push("/Cards/MyCard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Deactivate card</Text>
          <Text></Text>
        </View>
        <View className="flex-col justify-between" style={{height: height * 0.7}}>
          <View className="flex-col">
            <View
              style={{ height: height * 0.2 }}
              className="flex-col gap-2 items-center justify-center"
            >
              <Warning />
              <Text className="text-[14px] font-bold">Warning</Text>
            </View>
            <View className="items-start mb-4">
              <Text style={{ color: "#606162" }}>
                Your card number 2467 78** **** 9870, deactivating
              </Text>
              <Text style={{ color: "#606162" }}>your card will prevent</Text>
            </View>
            <View className="flex-col">
              <View className="flex-row gap-2 mb-6">
                <Tick />
                <Text className="text-[14px] font-bold">Card payments</Text>
              </View>
              <View className="flex-row gap-2">
                <Tick />
                <Text className="text-[14px] font-bold">
                  Online subscriptions
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center justify-between flex-row">
            <ShortWhiteButton
              title="Cancel"
              color1
              onPress={() => console.log("sodiq")}
            />
            <ShortBlueButton
              title="Deactivate"
              color1
              onPress={() => router.push("/Cards/DeactivateSuccess")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DeactivateCard;
