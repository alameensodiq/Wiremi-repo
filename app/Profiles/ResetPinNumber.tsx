import {
    View,
    Text,
    SafeAreaView,
    StatusBar as RNStatusBar,
    Dimensions,
    TouchableOpacity,
    Pressable
  } from "react-native";
  import React from "react";
  import SixDigits from "@/components/SixDigits";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import { StatusBar } from "expo-status-bar";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  
  const ResetPinNumber = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    return (
      <View className="flex-1 ">
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
            style={{ paddingHorizontal: 8 }}
            className="flex-1  justify-start gap-6"
          >
            <View className="flex-row justify-between items-center">
              <TouchableOpacity
                onPress={() => router.push("/Profiles/ResetPin")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[18px] text-textblack font-bold">
              Reset pin
              </Text>
              <Text></Text>
            </View>
            <View className="flex-col items-start justify-center gap-2">
              <Text className="text-textblack text-[16px] font-bold">
                Phone Number Verification
              </Text>
              <Text style={{ color: "#6E7073" }} className="text-[12px]">
                Verify your phone number
              </Text>
            </View>
            <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
              <Text
                className="text-textblack text-[12px]"
                style={{ marginBottom: height * 0.01 }}
              >
                Enter the 6 (Six) digit OTP code sent to your Phone numbe
              </Text>
              <SixDigits />
            </View>
  
            <View className="items-center">
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push("/Profiles/ResetPinConfirm")}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default ResetPinNumber;
  