import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar as RNStatusBar,
    Dimensions,
    Platform,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import Cards from "../../assets/cards.svg";
  import Rightcarat from "../../assets/rightcarat.svg";

const CardDeposits = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.back()}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Cards</Text>
          <Text></Text>
        </View>
       <TouchableOpacity onPress={() => router.push('/TransactionDeposit/CardDepositDetails')}>
       <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <Cards />
            </View>
            <View className="items-start">
              <Text className="text-[14px] font-bold text-black">Cards deposit</Text>
              <Text className="text-[10px] text-deposistsub">Fund with card to get $50</Text>
            </View>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
       </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default CardDeposits