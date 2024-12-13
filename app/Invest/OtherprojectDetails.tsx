import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Back from "../../assets/whiteback.svg";
import { useRouter } from "expo-router";
import BlueSignInButton from "@/components/BlueSignInButton";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import { BottomSheet } from "@/components/Bottom";
import WhiteSignInButton from "@/components/WhiteSignInButton";
import { ImageBackground } from "expo-image";
import projectimage from "../../assets/projectimage.png";


type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const OtherprojectDetails = () => {
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
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <ImageBackground
        source={projectimage}
        style={{ height: height * 0.5 }}
        contentFit="cover"
      >
        <StatusBar hidden={false} style="light" />
        <View
          style={{
            height: height * 0.25,
            paddingHorizontal: width * 0.05,
            paddingTop: height * 0.04,
            gap: height * 0.02
          }}
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Invest/Project")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-white">Wire ventures</Text>
            <Text></Text>
          </View>
          {/* <View className="flex-col gap-2">
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
              </View> */}
        </View>
      </ImageBackground>

      <View
        className="bg-white"
        style={{
          height: height * 0.7,
          position: "relative",
          paddingHorizontal: width * 0.02,
          gap: 10
        }}
      >
        <View className="flex-col justify-center gap-2 items-start mt-10">
          <View className="flex-col justify-center items-start">
            <Text style={{ color: "#606162" }} className="text-[14px]">
              Industry
            </Text>
            <Text
              style={{ color: "#00091E" }}
              className="text-[16px] font-bold"
            >
              Education & Health
            </Text>
          </View>
          <View className="flex-col justify-center items-start">
            <Text style={{ color: "#606162" }} className="text-[14px]">
              Project type
            </Text>
            <Text
              style={{ color: "#00091E" }}
              className="text-[16px] font-bold"
            >
              Equity
            </Text>
          </View>
          <View className="flex-col justify-center items-start">
            <Text style={{ color: "#606162" }} className="text-[14px]">
              Minimum engagement
            </Text>
            <Text
              style={{ color: "#00091E" }}
              className="text-[16px] font-bold"
            >
              $45
            </Text>
          </View>
          <View className="flex-col justify-center items-start">
            <Text style={{ color: "#606162" }} className="text-[14px]">
              Growth projection
            </Text>
            <Text
              style={{ color: "#00091E" }}
              className="text-[16px] font-bold"
            >
              450%
            </Text>
          </View>
          <View className="flex-col justify-center items-start">
            <Text
              style={{ color: "#00091E" }}
              className="text-[16px] font-bold"
            >
              About this project
            </Text>

            <View style={{ width: width * 0.9 }}>
              <Text style={{ color: "#606162" }} className="text-[14px]">
                Our project is dedicated to providing essential support for
                children suffering from severe stunting in developing countries,
                a critical issue that has long-term consequences on a child's
                physical and cognitive development.
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-col gap-2 px-2 mt-4">
          <View className="flex-row justify-between">
            <Text className="text-[rgba(45, 45, 46, 1)] text-[14px]">
              Gross yield
            </Text>
            <Text className="text-buttonprimary text-[16px]">12.90%</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[rgba(45, 45, 46, 1)] text-[14px]">
              Expected return on investment
            </Text>
            <Text className="text-buttonprimary text-[16px]">12.90%</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[rgba(45, 45, 46, 1)] text-[14px]">
              Days remaining
            </Text>
            <Text className="text-buttonprimary text-[16px]">23 days</Text>
          </View>
        </View>

        <View className="items-center justify-between flex-row p-4 mt-4">
          <ShortBlueButton
            title="Invest"
            color1
            onPress={() =>
              router.push("/Invest/InvestPage")
            }
          />
          <ShortWhiteButton
            title="Donate"
            color1
            onPress={() => router.push("/Invest/DonatePage")}
          />
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
                router.push("/More/Escrow/DigitalTimelineSuccess");
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
    </ScrollView>
  );
};

export default OtherprojectDetails;
