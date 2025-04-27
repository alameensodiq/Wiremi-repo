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
import { useRef, useState } from "react";
import Confirm from "../../assets/Confirm.svg";
import NotConfirm from "../../assets/Notconfirm.svg";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Theme = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { theme, setTheme } = useAppContext();
  // const [theme, setTheme ] = useState("")
  const handleSelectTheme = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
  };

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
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Theme</Text>
          <Text></Text>
        </View>
        <View className="flex-1 relative  justify-start gap-2">
          <View className="flex-col justify-start items-start pb-10">
            <Text className="text-black text-[16px] font-bold">
              Select your preferred theme
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleSelectTheme("light")}>
            <View className="flex-row items-center justify-between p-2">
              <View className="flex-row gap-1 items-center">
                <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                  Light mode
                </Text>
              </View>
              {theme === "light" ? <Confirm /> : <NotConfirm />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectTheme("dark")}>
            <View className="flex-row items-center justify-between p-2">
              <View className="flex-row gap-1 items-center">
                <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                  Dark mode
                </Text>
              </View>
              {theme === "dark" ? <Confirm /> : <NotConfirm />}
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Theme;
