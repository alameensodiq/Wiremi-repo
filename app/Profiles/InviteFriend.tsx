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
import Copy from "../../assets/copy.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import BlueSignInButton from "@/components/BlueSignInButton";
import Back from "../../assets/Back.svg";

const InviteFriend = () => {
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
            <TouchableOpacity onPress={() => router.push("/Profile")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Invite a friend</Text>
            <Text></Text>
          </View>
          <View
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
            className="flex-1  justify-between gap-6"
          >
            <View className="flex-row justify-center items-center"></View>
            <View
              style={{ height: height * 0.7 }}
              className="flex-col  justify-center gap-6"
            >
              <View className="flex-col items-start justify-center">
                <Text className="text-[18px] text-buttonprimary font-bold">
                  Invite a friend and get $5 - $200
                </Text>
                <Text className="text-[18px] text-buttonprimary font-bold">
                  cashback
                </Text>
              </View>
              <View className="flex-col items-start justify-center">
                <Text style={{ color: "#777A7E" }} className="text-[12px]">
                  Each time a friend signs up with your refferal code, you
                  receive a
                </Text>
                <Text style={{ color: "#777A7E" }} className="text-[12px]">
                  cashback instantly.
                </Text>
              </View>
              <View className="flex-col items-center justify-center">
                  <Text className="text-[14px] text-buttonprimary">Refferal code</Text>
                  <View className="flex-row justify-center gap-1">
                       <Text className="text-[14px] text-buttonprimary font-bold">4567890</Text>
                       <Copy />
                  </View>
              </View>
            </View>

            <View
              style={{ height: height * 0.2 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Share invite link"
                onPress={() => console.log("share")}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default InviteFriend;
