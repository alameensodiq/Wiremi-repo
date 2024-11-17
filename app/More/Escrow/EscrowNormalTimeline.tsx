import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView
} from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../../assets/whiteback.svg";
import Escrowtick from "../../../assets/escrowtick.svg";
import EscrowCircle from "../../../assets/escrowcircle.svg";
import Double from "../../../assets/doublecarat.svg";
import Right from "../../../assets/rightcarat.svg";
import { useRouter } from "expo-router";
import BlueSignInButton from "@/components/BlueSignInButton";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import { BottomSheet } from "@/components/Bottom";
import WhiteSignInButton from "@/components/WhiteSignInButton";

type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };

const EscrowNormalTimeline = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [showbutton, setShowbutton] = useState<boolean>(false);
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const datas = [
    {
      id: 1,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 2,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 3,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 4,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 5,
      name: "Option 1",
      amount: "$1700"
    }
  ];

  const handleCloseModal = () => {
    ref.current?.close();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-buttonprimary"
    >
      <StatusBar hidden={false} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
        <View
          className="bg-white"
          style={{ height: height, position: "relative" }}
        >
          <View
            style={{
              height: height * 0.25,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02,
              gap: height * 0.02
            }}
            className="bg-buttonprimary"
          >
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/More/Escrow/NormalSummary")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-white">Active</Text>
              <Text></Text>
            </View>
            <View className="flex-col gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-[14px]">Client ID</Text>
                <Text className="text-white text-[16px] font-bold">
                  WI883662831
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-[14px]">Client name</Text>
                <Text className="text-white text-[16px] font-bold">
                  Biola Moses
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-[14px]">Start date</Text>
                <Text className="text-white text-[16px] font-bold">
                  23/19/2024
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-[14px]">Crypto amount</Text>
                <Text className="text-white text-[16px] font-bold">
                  500 USDT
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-col mt-10">
            <View className="flex-row justify-center">
              <Text style={{ color: "#32354A", fontSize: 14 }}>
                Delivery time remaining
              </Text>
            </View>
            <View className="flex-row justify-between items-center mt-2 px-10">
              <View className="flex-col gap-1">
                <Text
                  style={{ color: "#00091E" }}
                  className="font-bold text-[16px]"
                >
                  02
                </Text>
                <Text style={{ color: "#413D43" }} className="text-[16px]">
                  Days
                </Text>
              </View>
              <View className="flex-col gap-1">
                <Text
                  style={{ color: "#00091E" }}
                  className="font-bold text-[16px]"
                >
                  08
                </Text>
                <Text style={{ color: "#413D43" }} className="text-[16px]">
                  Hrs
                </Text>
              </View>
              <View className="flex-col gap-1">
                <Text
                  style={{ color: "#00091E" }}
                  className="font-bold text-[16px]"
                >
                  50
                </Text>
                <Text style={{ color: "#413D43" }} className="text-[16px]">
                  Mins
                </Text>
              </View>
              <View className="flex-col gap-1">
                <Text
                  style={{ color: "#00091E" }}
                  className="font-bold text-[16px]"
                >
                  02
                </Text>
                <Text style={{ color: "#413D43" }} className="text-[16px]">
                  Secs
                </Text>
              </View>
            </View>
            <View className="flex-row justify-center mt-10">
              <Text style={{ color: "#32354A", fontSize: 14 }}>Timeline</Text>
            </View>
            <View className="flex-row justify-start px-6">
              <View className="flex-col items-center">
                <Escrowtick />
                <View className="bg-buttonprimary h-[70px] w-[1px]" />
                <Escrowtick />
                <View className="bg-buttonprimary h-[70px] w-[1px]" />
                <Escrowtick />
                <View
                  style={{ backgroundColor: "#EBEBEB" }}
                  className="h-[70px] w-[1px]"
                />
                <EscrowCircle />
              </View>
              <View className="flex-col gap-[45px] pl-2">
                <View>
                  <Text style={{ color: "#32354A" }} className="text-[14px]">
                    Transaction started
                  </Text>
                  <Text style={{ color: "#6e6e6e" }} className="text-[16px]">
                    May 2, 2022 at 7:30 PM
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#32354A" }} className="text-[14px]">
                    Payment completed
                  </Text>
                  <Text style={{ color: "#6e6e6e" }} className="text-[16px]">
                    May 2, 2022 at 7:30 PM
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#32354A" }} className="text-[14px]">
                    Shipped
                  </Text>
                  <Text style={{ color: "#6e6e6e" }} className="text-[16px]">
                    May 2, 2022 at 7:30 PM
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#32354A" }} className="text-[14px]">
                    Accepted/Rejected
                  </Text>
                  <Text style={{ color: "#6e6e6e" }} className="text-[16px]">
                    May 2, 2022 at 7:30 PM
                  </Text>
                </View>
              </View>
            </View>
            {showbutton ? (
              <View
                style={{ height: height * 0.14 }}
                className="items-end justify-between flex-row px-3"
              >
                <ShortBlueButton
                  title="Accept"
                  color1
                  onPress={() => ref?.current?.open()}
                />
                <ShortWhiteButton
                  title="Reject"
                  color1
                  onPress={() => console.log("sodiq")}
                />
              </View>
            ) : (
              <Pressable onPress={() => setShowbutton(true)}>
                <View className="flex-row justify-center items-center mt-10">
                  <View className="flex-row items-center">
                    <Double />
                    <View className="ml-3">
                      <Text style={{ fontSize: 16, color: "#00091E" }}>
                        Contact merchant
                      </Text>
                      <Text style={{ fontSize: 13, color: "#6e6e6e" }}>
                        Via whatsapp, sms or phone call
                      </Text>
                    </View>
                    <View className="ml-5">
                      <Right />
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          </View>
        </View>
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Accept escrow
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>Are you sure you want to accept this escrow </Text>
              <Text>transaction?.</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Continue"
                onPress={() => {
                  handleCloseModal();
                  router.push("/More/Escrow/NormalTimelineSuccess");
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default EscrowNormalTimeline;
