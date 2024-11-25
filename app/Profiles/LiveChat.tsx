import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
  TextInput
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/whiteback.svg";
import BigChat from "../../assets/BigChat.svg";
import Ladypics from "../../assets/ladypics.svg";
import Filelive from "../../assets/filelive.svg";
import Gallery from "../../assets/gallerylive.svg";
import Ellipse from "../../assets/ellipselive.svg";
import { useRouter } from "expo-router";

const LiveChat = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const router = useRouter();

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
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-buttonprimary">
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
              <TouchableOpacity onPress={() => router.push("/Profiles/HelpSupport")}>
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-white">Live chat</Text>
              <Text></Text>
            </View>
            <View>
              <BigChat />
              <View className="mt-2">
                <Text className="text-[16px] text-white font-bold">
                  Hi there!
                </Text>
                <Text className="text-[12px] text-white">
                  Welcome to Wiremi live chat. How can we help you
                </Text>
                <Text className="text-[12px] text-white">today?</Text>
              </View>
            </View>
          </View>
          <View className="flex-col mt-10 px-4">
            <View className="flex-row items-center gap-2">
              <Ladypics width={50} height={50} />
              <View className="flex-col">
                <Text style={{ color: "#777A7E" }} className="text-[12px]">
                  Joe Smith
                </Text>
                <Text style={{ color: "#989AAF" }} className="text-[10px]">
                  1 min
                </Text>
              </View>
            </View>
            <View className="flex-row justify-start items-center mt-2">
              <View
                style={{
                  backgroundColor: "#F3F3F4",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10
                }}
                className="w-[65%] h-[66px] flex-col p-3"
              >
                <Text style={{color:'#242329'}} className="text-[12px]">Hello, is there something we can</Text>
                <Text style={{color:'#242329'}} className="text-[12px]">help you with today?</Text>
              </View>
            </View>
            <View className="flex-row justify-end items-center mt-2">
              <View
                style={{
                  backgroundColor: "#105CE2",
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10
                }}
                className="w-[65%] h-[66px] flex-col p-3"
              >
                <Text style={{color:'#FFFFFF'}} className="text-[12px]">Hello, is there something we can</Text>
                <Text style={{color:'#FFFFFF'}} className="text-[12px]">help you with today?</Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between gap-5 items-center absolute bottom-2 px-2">
                <TextInput placeholder="Write a reply......."  style={{backgroundColor:'#EFEFF0', width: width * 0.6, height: height * 0.05, borderRadius: 10, paddingLeft: 10}} />
                <Filelive />
                <Gallery/>
                <Ellipse/>
            </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LiveChat;
