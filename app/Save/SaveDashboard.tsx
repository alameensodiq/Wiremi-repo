import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";

const SaveDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Save</Text>
          <Text></Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SaveDashboard;
