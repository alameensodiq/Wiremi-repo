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
  import SuccessLand from "../../assets/forgetsuccesland.png";
  import Forgotsuccess from "../../assets/forgotsuccess.svg";
  import Eng from "../../assets/success.gif";
  import LottieView from "lottie-react-native";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
  
  const CardDepositSuccess = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    return (
      <View className="flex-1 ">
        <View
          className="flex-1 bg-white"
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
                style={{ height: height * 0.7}}
                className="flex-col items-center justify-center gap-6"
              >
                <View className="flex-col gap-3">
                <Forgotsuccess />
                <Text style={{color: '#1E1B39'}} className="text text-[18px] font-bold">
                  Successful
                </Text>
                </View>
                <Text className="text-forgotsuccesslight text-[13px]">
                Your deposit of $500 was successful .
                </Text>
              </View>
  
              <View className="items-center justify-between flex-row p-4">
                <ShortBlueButton
                  title="Done"
                  color1
                  onPress={() => router.push('/Dashboard')}
                />
                <ShortWhiteButton
                  title="View receipt"
                  color1
                  onPress={() => router.push('/Dashboard')}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  };
  
  export default CardDepositSuccess;
  