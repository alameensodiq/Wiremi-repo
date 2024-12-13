import {
  View,
  Text,
  SectionList,
  Dimensions,
  StatusBar as RNStatusBar,
  Pressable
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import Filter from "../../assets/filter.svg";
import Back from "../../assets/Back.svg";
import Tesla from "../../assets/tesladetails.svg";
import Arrow from "../../assets/greenarrowup.svg";

const StockHistory = () => {
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
            <TouchableOpacity onPress={() => router.push("/Invest/InvestDashboard")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Stocks</Text>
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
                <Pressable onPress={() => router.push("/Invest/BuyandSell")}>
                  <View className="flex-col gap-2">
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center gap-2">
                        <Tesla />
                        <View className="flex-col">
                          <Text>Tesla Inc</Text>
                          <Text style={{ color: "#9CA9A3", fontSize: 12 }}>
                            2 Shares $230.74
                          </Text>
                        </View>
                      </View>
                      <View className="flex-col justify-center items-center">
                        <Text className="text-[14px] text-darktext font-bold">
                          $261.48
                        </Text>
                        <View className="flex-row">
                          <Text
                            style={{ color: "#00A85A", fontSize: 12 }}
                            className="text-[10px]"
                          >
                            2.3%
                          </Text>
                          <Arrow />
                        </View>
                      </View>
                    </View>
                    <View className="flex-row justify-end">
                      <View
                        style={{ width: width * 0.8, height: height * 0.001 }}
                        className="bg-faintline"
                      ></View>
                    </View>
                  </View>
                </Pressable>
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

export default StockHistory;
