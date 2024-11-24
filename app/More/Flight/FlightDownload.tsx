import {
  View,
  Text,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Back from "../../../assets/Back.svg";
import { useRouter } from "expo-router";
import FlightLogo from "../../../assets/flightlogo.svg";
import FlightDownloading from "../../../assets/flightdownload.svg";
import Download from "../../../assets/download.svg";
import Arik from "../../../assets/arik.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { Image } from "expo-image";
import Pics from "../../../assets/pics.svg";

const FlightDownload = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [number, setNumber] = useState<number>(0);
  const router = useRouter();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/More/Flight/FlightSuccess")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Download</Text>
          <Text></Text>
        </View>
        <View className="flex-row justify-start items-center">
          <Pics />
          <View>
            <Text className="text-buttonprimary text-[12px]">Hello,</Text>
            <Text className="text-buttonprimary text-[14px]">Sheidu Susan</Text>
          </View>
        </View>
        <View className="flex-col mt-10 pb-4">
          <View className="flex-row justify-between items-center mt-3 px-20">
            <View className="flex-row items-center">
              <Arik />
              <View className="flex-col">
                <Text style={{ color: "#242329", fontSize: 12 }}>Arik air</Text>
                <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                  LA23146278
                </Text>
              </View>
            </View>
            <View className="flex-col">
              <Text style={{ color: "#105CE2", fontSize: 12 }}>3 seats</Text>
              <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                7 hours 20 minutes
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center px-3 mt-3">
            <View className="flex-col justify-between gap-2">
              <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
              <Text style={{ color: "#413D43", fontSize: 12 }}>BNA</Text>
              <Text style={{ color: "#6E6E6E", fontSize: 10 }}>Banda Aceh</Text>
            </View>
            <View className="flex-col gap-1 items-center">
              <View className="flex-row items-center gap-2">
                <Text style={{ color: "#777A7E" }}>--------------</Text>
                <FlightLogo />
                <Text style={{ color: "#777A7E" }}>--------------</Text>
              </View>
              <View>
                <Text style={{ color: "#A4A0A0", fontSize: 10 }}>
                  7 hours 20 minutes
                </Text>
              </View>
            </View>
            <View className="flex-col justify-between gap-2">
              <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
              <Text style={{ color: "#413D43", fontSize: 12 }}>BNB</Text>
              <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                Banda Badru
              </Text>
            </View>
          </View>
          <View className="flex-row justify-center items-center gap-5 mt-2">
            <View className="flex-col justify-between items-center">
              <Text style={{ color: "#C6C6CB" }}>Airline</Text>
              <Text style={{ color: "#6E6E6E" }}>Arik air</Text>
            </View>
            <View
              style={{
                height: height * 0.04,
                width: 1,
                backgroundColor: "#606162"
              }}
            ></View>
            <View className="flex-col justify-between items-center">
              <Text style={{ color: "#C6C6CB" }}>Flight No</Text>
              <Text style={{ color: "#6E6E6E" }}>LA 21</Text>
            </View>
            <View
              style={{
                height: height * 0.04,
                width: 1,
                backgroundColor: "#606162"
              }}
            ></View>
            <View className="flex-col justify-between items-center">
              <Text style={{ color: "#C6C6CB" }}>Class</Text>
              <Text style={{ color: "#6E6E6E" }}>Economy</Text>
            </View>
          </View>
        </View>
        <View className="flex-col items-center justify-center">
          <FlightDownloading />
          <Pressable onPress={() => router.push('/More/Flight/FlightReceipt')}>
            <View
              style={{
                borderColor: "#105CE2",
                borderWidth: 1,
                borderRadius: 5,
                width: width * 0.5,
                height: height * 0.05
              }}
              className="flex-row justify-center items-center mt-10"
            >
              <Text className="text-buttonprimary">Download ticket</Text>
              <Download />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FlightDownload;
