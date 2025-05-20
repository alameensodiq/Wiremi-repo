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
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import Driver from "../../assets/kycdriver.svg";
  import Card from "../../assets/kyccard.svg";
  import Passport from "../../assets/kycpassport.svg";
  import Residency from "../../assets/kycresidency.svg";
  import RightCarat from "../../assets/rightcarat.svg";
import { useAppContext } from "@/Context/useAppContext";
  
  const KycCertificates = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
      const { theme } = useAppContext();
  
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
        className={`${
          theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
        }`} 
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
                onPress={() => router.push("/Profiles/ProfileKycAddress")}
              >
                <Back style={{ backgroundColor: theme ? "#ffffff" : "" }} />
              </TouchableOpacity>
              <Text className={`${
                    theme === "dark"
                      ? "text-[20px] text-[#ffffff]"
                      : "text-[20px] text-pagetitle"
                  }`}>Update KYC info</Text>
              <Text></Text>
            </View>
            <View className="flex-col justify-between">
              <Text
                className="text-[16px] font-bold"
                style={{ color:theme === "dark" ? "#ffffff" : "#00091E" }}
              >
                We need a picture of any of your selected ID
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/Profiles/DriverLicense")}>
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Driver />
                  <Text className="text-[16px]" style={{ color:theme === "dark" ? "#ffffff" : "#0A0A0A" }}>
                  Driver’s liscense
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/Profiles/IdCard")}>
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Card />
                  <Text className="text-[16px]" style={{ color:theme === "dark" ? "#ffffff" : "#0A0A0A" }}>
                  ID Card
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/Profiles/Passport")}
            >
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Passport />
                  <Text className="text-[16px]" style={{ color:theme === "dark" ? "#ffffff" : "#0A0A0A" }}>
                  Passport 
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/Profiles/Residency")}>
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Residency />
                  <Text className="text-[16px]" style={{ color:theme === "dark" ? "#ffffff" : "#0A0A0A" }}>
                  Residency permit card
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default KycCertificates;
  