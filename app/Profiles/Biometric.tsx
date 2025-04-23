import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import Confirm from "../../assets/Confirm.svg";
import NotConfirm from "../../assets/Notconfirm.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Biometric = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [biomet, setBiomet] = useState<string | null>(null);

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const biometric = await AsyncStorage.getItem("biometric");
        if (biometric) setBiomet(biometric);
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };
    fetchStoredData();
  }, []);
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
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Biometrics</Text>
          <Text></Text>
        </View>
        <View className="flex-1 relative  justify-start gap-2">
          <View className="flex-col justify-start items-start pb-10">
            <Text className="text-black text-[16px] font-bold">
              Turn on biometrics scan
            </Text>
          </View>
          <View className="flex-row items-center justify-between p-2">
            <View className="flex-row gap-1 items-center">
              <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                Yes
              </Text>
            </View>
            {biomet === "yes" ? (
              <Confirm />
            ) : (
              <NotConfirm
                onPress={async () => {
                  const newValue = "yes";
                  setBiomet(newValue);
                  await AsyncStorage.setItem("biometric", newValue);
                }}
              />
            )}
          </View>
          <View className="flex-row items-center justify-between p-2">
            <View className="flex-row gap-1 items-center">
              <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                No
              </Text>
            </View>
            {biomet === "no" ? (
              <Confirm />
            ) : (
              <NotConfirm
                onPress={async () => {
                  const newValue = "no";
                  setBiomet(newValue);
                  await AsyncStorage.setItem("biometric", newValue);
                }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Biometric;
