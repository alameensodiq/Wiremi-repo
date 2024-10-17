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

const ExistingBankDetails = () => {
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
            onPress={() => router.push("/TransactionDeposit/LinkBankDetails")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Link bank account</Text>
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
            label="Linked account"
            placeholder="Select from linked accounts"
          />
        </View>
        <View className="justify-start">
          <View style={{paddingHorizontal: 10}} className="flex-row items-start justify-end gap-2">
            <Plus/>
            <Text className="text-buttonprimary">Add account</Text>
          </View>
        </View>
        <View style={{height: height * 0.5}} className="items-center justify-center">
          <BlueSignInButton
            title="Proceed"
            onPress={() => console.log("link bank acccount")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ExistingBankDetails;
