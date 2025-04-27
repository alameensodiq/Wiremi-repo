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
  import Stocks from "../../assets/stocks.svg";
  import Etf from "../../assets/etf.svg";
  import Wire from "../../assets/wireventures.svg";
  import { SafeAreaView } from "react-native-safe-area-context";
  import RightCarat from "../../assets/rightcarat.svg";
  
  const Investing = () => {
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
                onPress={() => router.push("/Invest")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Invest</Text>
              <Text></Text>
            </View>
            <View className="flex-col justify-between">
              <Text
                className="text-[16px] font-bold"
                style={{ color: "#00091E" }}
              >
                Select any of these investments
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/Invest/Stocks")}>
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Stocks />
                  <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                  Stocks 
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/Invest/Stocks")}>
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Etf />
                  <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                  ETF’s
                  </Text>
                </View>
                <RightCarat />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/Invest/Stocks")}
            >
              <View className="flex-row items-center justify-between p-5">
                <View className="flex-row gap-1 items-center">
                  <Wire />
                  <Text className="text-[16px]" style={{ color: "#0A0A0A" }}>
                  Wire ventures  
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
  
  export default Investing;
  