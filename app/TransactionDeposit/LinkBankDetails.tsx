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
  import BlueSignInButton from "@/components/BlueSignInButton";
  import TransactionTextLabel from "@/components/TransactionTextLabel";
  import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "@/Context/useAppContext";
  
  const LinkBankDetails = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
     const { theme } = useAppContext();
    return (
      <View className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}>
        <StatusBar hidden={false}   style={`${theme === "dark" ? "light" : "dark"}`}/>
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
            <TouchableOpacity onPress={() => router.push('/TransactionDeposit/Banks')}>
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
            </TouchableOpacity>
            <Text className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}>Link bank account</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount 0.00"
            />
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Link bank account"
              onPress={() => router.push('/TransactionDeposit/ExistingBankDetails')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default LinkBankDetails;
  