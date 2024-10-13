import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import SixDigits from "@/components/SixDigits";
import { ImageBackground } from "react-native";
import SuccessLand from "../assets/forgetsuccesland.png";
import Eng from "../assets/success.gif";
import LottieView from "lottie-react-native";

const BusinessSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={SuccessLand}
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
              {/* <FastImage
                style={{ width: width * 0.4, height: height * 0.1 }}
                source={{
                  uri: "../assets/success.gif",
                  // headers: { Authorization: "someAuthToken" },
                  priority: FastImage.priority.normal
                }}
                resizeMode={FastImage.resizeMode.contain}
              /> */}
              <Image
                source={Eng}
                style={{ width: 100, height: 100, zIndex: 1000 }}
                resizeMode="contain"
              />
              {/* <LottieView
                style={{ height: 150, width: 550, marginTop: -60 }}
                // ref={animationRef}
                source={require("../assets/success.gif")}
                // onAnimationFinish={handleAnimationFinish}
                autoPlay
                loop={false}
              /> */}
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
                onPress={() => router.push('/Dashboard')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BusinessSuccess;
