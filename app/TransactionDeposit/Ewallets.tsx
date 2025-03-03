import {
    View,
    Text,
    StatusBar as RNStatusBar,
    Dimensions,
    Platform,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Wise from "../../assets/wise.svg";
  import Paypal from "../../assets/paypal.svg";
  import Venmo from "../../assets/venmo.svg";
  import Applepay from "../../assets/applepay.svg";
  import Googlepay from "../../assets/googlepay.svg";
  import Rightcarat from "../../assets/rightcarat.svg";

const Ewallets = () => {
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
        paddingHorizontal: width * 0.03
      }}
      className="gap-8"
    >
      <View className="flex-row justify-between items-center mb-1">
        <TouchableOpacity onPress={() => router.push('/TransactionDeposit')}>
          <Back />
        </TouchableOpacity>
        <Text className="text-[20px] text-pagetitle">E-wallets</Text>
        <Text></Text>
      </View>
      <View
        style={{
          paddingHorizontal: width * 0.03
        }}
        className="flex-row justify-between items-center"
      >
        <TouchableOpacity onPress={() => router.push('/TransactionDeposit/EwalletCreditCard')}>
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
            <Wise />
          </View>
          <View className="items-start">
            <Text className="text-[14px] font-bold text-black">Wise</Text>
            <Text className="text-[10px] text-deposistsub">Get up to $10,000 within 1 hour</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View>
          <Rightcarat />
        </View>
      </View>
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
            <Paypal />
          </View>
          <View className="items-start">
            <Text className="text-[14px] font-bold text-black">Paypal</Text>
            <Text className="text-[10px] text-deposistsub">Get up to $10,000 within 1 hour</Text>
          </View>
        </View>
        <View>
          <Rightcarat />
        </View>
      </View>
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
            <Venmo />
          </View>
          <View className="items-start">
            <Text className="text-[14px] font-bold text-black">Venmo</Text>
            <Text className="text-[10px] text-deposistsub">Get up to $10,000 within 1 hour</Text>
          </View>
        </View>
        <View>
          <Rightcarat />
        </View>
      </View>
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
            <Applepay />
          </View>
          <View className="items-start">
            <Text className="text-[14px] font-bold text-black">Apple pay</Text>
            <Text className="text-[10px] text-deposistsub">Get up to $10,000 within 1 hour</Text>
          </View>
        </View>
        <View>
          <Rightcarat />
        </View>
      </View>
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
            <Googlepay />
          </View>
          <View className="items-start">
            <Text className="text-[14px] font-bold text-black">Google pay</Text>
            <Text className="text-[10px] text-deposistsub">Get up to $10,000 within 1 hour</Text>
          </View>
        </View>
        <View>
          <Rightcarat />
        </View>
      </View>
    </SafeAreaView>
  </View>
  )
}

export default Ewallets