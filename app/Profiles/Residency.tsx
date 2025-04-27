import {
    View,
    Text,
    TouchableOpacity,
    StatusBar as RNStatusBar,
    Dimensions,
    ScrollView
  } from "react-native";
  import React from "react";
  import { StatusBar } from "expo-status-bar";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Scan from "../../assets/scan.svg";
  import Capture from "../../assets/capture.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  
  const Residency = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
  
    const widthAndHeight = 180;
    const series = [721, 120, 123, 189];
    const sliceColor = ["#105CE2", "#617102", "#017963", "#7106B3"];
    const series2 = [721, 100];
    const sliceColor2 = ["#105CE2", "#E9EBF3"];
    const data = [{ value: 0 }, { value: 80 }, { value: 90 }, { value: 70 }];
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{ backgroundColor: "#ffffff" }}
        className="flex-1"
      >
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight
          }}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="gap-6"
          >
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/Profiles/KycCertificates")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Update KYC info</Text>
              <Text></Text>
            </View>
            <View className="flex-col justify-between">
              <Text
                className="text-[16px] font-bold"
                style={{ color: "#00091E" }}
              >
                Upload residence permit
              </Text>
            </View>
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed",   
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center items-center gap-2">
                  <Capture/>
                  <Text className="text-buttonprimary text-[14px]">Capture the front of your residence permit</Text>
              </View>
              <View style={{width: 120, height: 40, borderRadius: 10}} className="flex-row justify-center items-center  bg-buttonprimary">
                  <Scan/>
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed",   
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center items-center gap-2">
                  <Capture/>
                  <Text className="text-buttonprimary text-[14px]">Capture the back of your residence permit</Text>
              </View>
              <View style={{width: 120, height: 40, borderRadius: 10}} className="flex-row justify-center items-center  bg-buttonprimary">
                  <Scan/>
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed",   
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center  gap-2">
                  <Capture/>
                  <View className="flex-col justify-center items-center">
                  <Text className="text-buttonprimary text-[14px]">Take a picture of you holding your </Text>
                  <Text className="text-buttonprimary text-[14px]">residence permit</Text>
                  </View>
              </View>
              <View style={{width: 120, height: 40, borderRadius: 10}} className="flex-row justify-center items-center  bg-buttonprimary">
                  <Scan/>
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
              </View>
            </View>
            <View className="pt-20 flex-row justify-center">
              <BlueSignInButton
                title="Proceed"
                  onPress={() => router.push('/Profiles/ResidencySuccess')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default Residency;
  