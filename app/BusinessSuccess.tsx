import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Forgotsuccess from "../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import SixDigits from "@/components/SixDigits";
import { ImageBackground } from "react-native";
import LandingPageImage from "../assets/LandingScreen.png";

const BusinessSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={LandingPageImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          className="justify-between"
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingTop: height * 0.02
          }}
        >
          <View
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
            className="flex-1  justify-between gap-6"
          >
            <View className="flex-row justify-center items-center"></View>
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-2"
            >
              <Text className="text-white text-[18px] font-bold">
                Successful
              </Text>
              <Text className="text-white text-[13px]">
                Welcome Susan Sheidu
              </Text>
              <Text className="text-white text-[9px]">
                Proceed to enjoy all the benefits our platform has to offer.
              </Text>
            </View>

            <View className="items-center">
              <BlueSignInButton
                title="Proceed to Dashboard"
                color1
                onPress={() => console.log('Dashboard')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BusinessSuccess;
