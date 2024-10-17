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
  import Plus from "../../assets/plus.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import TransactionTextLabel from "@/components/TransactionTextLabel";
  import TransparentSelectButton from "@/components/TransparentSelectButton";
  
  const MobilemoneyDetails = () => {
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
            <TouchableOpacity
              onPress={() => router.push("/TransactionDeposit/MobileMoney")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Mobile money</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount $0.00"
            />
          </View>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Institute"
              placeholder="Select Institute"
            />
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push('/TransactionDeposit/MobileSummary')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default MobilemoneyDetails;
  