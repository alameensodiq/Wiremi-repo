import {
    View,
    Text,
    StatusBar as RNStatusBar,
    Dimensions,
    TouchableOpacity,
    Image
  } from "react-native";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from "expo-status-bar";
  import { useRouter } from "expo-router";
  import Forgotsuccess from "../../assets/forgotsuccess.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import Back from "../../assets/Back.svg";
  
  const ResidencySuccess = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    return (
      <View className="flex-1 ">
        <View className="flex-1 bg-white">
          <StatusBar hidden={false} style="dark" />
          <SafeAreaView
            className="justify-between"
            style={{
              flex: 1,
              marginTop: statusBarHeight,
              paddingTop: height * 0.02
            }}
          >
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/Profiles/Residency")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Update KYC info</Text>
              <Text></Text>
            </View>
            <View
              style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
              className="flex-1  justify-between gap-6"
            >
              <View className="flex-row justify-center items-center"></View>
              <View
                style={{ height: height * 0.7 }}
                className="flex-col items-center justify-center gap-6"
              >
                <View className="flex-col gap-3">
                  <Forgotsuccess />
                  <Text
                    style={{ color: "#1E1B39" }}
                    className="text text-[18px] font-bold"
                  >
                    Successful
                  </Text>
                </View>
                <View className="flex-col justify-center items-center">
                  <Text className="text-forgotsuccesslight text-[13px]">
                  Your ID document has been uploaded successfully
                  </Text>
                  <Text className="text-forgotsuccesslight text-[13px]">
                  and you will be notified once it has been
                  </Text>
                  <Text className="text-forgotsuccesslight text-[13px]">
                  approved. 
                  </Text>
                </View>
              </View>
  
              <View
                style={{ height: height * 0.11 }}
                className="items-center justify-center"
              >
                <BlueSignInButton
                  title="Back to Profile"
                  onPress={() => router.push("/Profile")}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  };
  
  export default ResidencySuccess;
  