import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  Share
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Copy from "../../assets/copy.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import BlueSignInButton from "@/components/BlueSignInButton";
import Back from "../../assets/Back.svg";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import * as Clipboard from "expo-clipboard";
import Invite from '../../assets/invitelogo.svg'

const InviteFriend = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
  }, []);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);

  const handleCopy = (referral: string) => {
    const referenceString =
      typeof referral === "string" ? referral : referral?.[0] || "";
    Clipboard.setString(referenceString);
  };

  const shareInvite = async () => {
    try {
      const result = await Share.share({
        message: `Join me on this app! 🚀\nHere’s my referral code ${accountdetails?.user?.referral_code}`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via: ${result.activityType}`);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
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
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03, paddingTop: height * 0.05 }}
            className="flex-1  justify-between gap-6"
          >
            <View style={{position:'relative'}} className="flex-row justify-center items-center t-40">
              <Image
                source={{ uri: accountdetails?.user?.profile_image }}
                style={{ width: 150, height: 150, borderRadius: 50, marginTop: 20 }}
              />
              <Invite style={{position:'absolute', top: -20, left: 50}} />
              <View style={{position:'absolute', right: 70}} className="bg-buttonprimary rounded-tr-ten rounded-b-ten  w-[60] h-[30] flex-row justify-center items-center bottom-0">
                <Text className="text-white">{accountdetails?.base_currency}10</Text>
              </View>
            </View>
            <View
              style={{ height: height * 0.4 }}
              className="flex-col  justify-center gap-6"
            >
              <View className="flex-col items-start justify-center">
                <Text className="text-[18px] text-buttonprimary font-bold">
                  Invite a friend and get {accountdetails?.base_currency}5 - {accountdetails?.base_currency}200
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
                <Text className="text-[14px] text-buttonprimary">
                  Refferal code
                </Text>
                <View className="flex-row justify-center gap-1">
                  <Text className="text-[14px] text-buttonprimary font-bold">
                    {accountdetails?.user?.referral_code}
                  </Text>
                  <Pressable
                    onPress={() =>
                      handleCopy(accountdetails?.user?.referral_code)
                    }
                  >
                    <Copy />
                  </Pressable>
                </View>
              </View>
            </View>
            <View
              style={{ height: height * 0.05 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Share invite link"
                onPress={shareInvite}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default InviteFriend;
