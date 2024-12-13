import {
  View,
  Text,
  SectionList,
  Dimensions,
  StatusBar as RNStatusBar
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import Filter from "../../assets/filter.svg";
import Back from "../../assets/Back.svg";
import Lonely from "../../assets/lonely.svg";
import Dollar from "../../assets/dollarinvest.svg";
import Profile from "../../assets/profileinvest.svg";
import Days from "../../assets/daysinvest.svg";

const SeeallMainProject = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const router = useRouter();

  const DATA = [
    {
      title: "Today",
      data: ["Apple", "Banana", "Orange", "Mango", "Banana"]
    },
    {
      title: "Tomorrow",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View>
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/Invest/Project")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Wire ventures</Text>
            <Text></Text>
          </View>
          <View className="flex-row">
            <NotificationSearchLabel placeholder="Search" />
            <Filter />
          </View>
          <View style={{ height: height * 0.9, paddingTop: 10 }}>
            <SectionList
              sections={DATA}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View className="flex-row justify-between">
                  <Lonely />
                  <View
                    style={{ width: width * 0.6 }}
                    className="flex-col w-[70%] gap-2"
                  >
                    <Text className="text-[16px] text-black font-bold">
                      Tech revolution
                    </Text>
                    <View
                      style={{
                        width: width * 0.6,
                        height: height * 0.01,
                        backgroundColor: "#DBD4D4",
                        borderRadius: 6
                      }}
                    >
                      <View
                        style={{
                          width: width * 0.4,
                          height: height * 0.01,
                          backgroundColor: "#105CE2",
                          borderRadius: 6
                        }}
                      ></View>
                    </View>
                    <View className="flex-row justify-between pl-2">
                      <View className="flex-row">
                        <Dollar />
                        <Text>65%</Text>
                      </View>
                      <View className="flex-row">
                        <Profile />
                        <Text>65%</Text>
                      </View>
                      <View className="flex-row">
                        <Days />
                        <Text>65%</Text>
                      </View>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <Text className="text-[#6E6E6E] text-[12px]">
                        $1,200 out of $40,000
                      </Text>
                      <Text className="text-buttonprimary text-[12px]">
                        View details
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text className="text-[12px] text-sectionheader">{title}</Text>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 16
                  }}
                />
              )}
              SectionSeparatorComponent={() => (
                <View
                  style={{
                    height: 26
                  }}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SeeallMainProject;
