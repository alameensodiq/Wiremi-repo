import {
  View,
  Text,
  TouchableOpacity,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Decrease from "../../assets/decerease.svg";
import Increase from "../../assets/increase.svg";
import Apple from "../../assets/appleinvest.svg";
import Arrow from "../../assets/greenarrowup.svg";
import CreateSavings from "@/components/CreateSavings";
import CreateSavingsBlue from "@/components/CreateSavingsBlue";
import PieChart from "react-native-pie-chart";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import InvestNow from "@/components/InvestNow";
import ApplyFundraise from "@/components/ApplyFundraise";

const InvestDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const widthAndHeight = 180;
  const series = [721, 120, 123];
  const sliceColor = ["#105CE2", "#012461", "#7106B3"];
  const series2 = [721, 100];
  const sliceColor2 = ["#105CE2", "#E9EBF3"];
  const data = [{ value: 0 }, { value: 80 }, { value: 90 }];

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
    <View
      // showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight
        }}
      >
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="gap-6"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/Dashboard")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Investment</Text>
            <Text></Text>
          </View>
          <View
            style={{
              height: height * 0.15,
              width: width * 0.93,
              borderRadius: 10,
              borderColor: "#EBEBEB",
              borderWidth: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5
            }}
          >
            <Text className="text-buttonprimary text-[12px]">My Portfolio</Text>
            <Text className="font-bold text-[20px] text-buttonprimary">
              $11,300.05
            </Text>
            <View className="flex-row gap-2 items-center">
              <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                +$180.33
              </Text>
              <View className="flex-row">
                <Text style={{ color: "#00A85A" }} className="text-[10px]">
                  2.3%
                </Text>
                <Arrow />
              </View>
            </View>
          </View>
          <View className="flex-row items-center p-1 justify-between">
            <InvestNow
              title="Invest now"
              onPress={() => router.push("/Invest/Investing")}
            />
            <ApplyFundraise
              title="Apply for fundraise"
              onPress={() => router.push("/Invest/FundraiseInput")}
            />
          </View>
          <View className="flex-row items-center gap-2">
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.65}
            />
            <View className="flex-col gap-3">
              <View className="flex-col gap-2 justify-between">
                <TouchableOpacity
                  onPress={() => router.push("/Invest/StockHistory")}
                >
                  <View className="flex-row items-center gap-2">
                    <View
                      style={{
                        height: 50,
                        width: 10,
                        backgroundColor: "#105CE2",
                        borderRadius: 2
                      }}
                    ></View>
                    <View className="flex-col">
                      <View className="flex-row items-center">
                        <Text
                          style={{ color: "#7B7B7B" }}
                          className="text-[14px]"
                        >
                          Stocks
                        </Text>
                        <Decrease />
                      </View>
                      <Text className="text-[14px] font-bold">
                        42% ($1,300)
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push("/Invest/StockHistory")}
                >
                  <View className="flex-row items-center gap-2">
                    <View
                      style={{
                        height: 50,
                        width: 10,
                        backgroundColor: "#012461",
                        borderRadius: 2
                      }}
                    ></View>
                    <View className="flex-col">
                      <View className="flex-row items-center">
                        <Text
                          style={{ color: "#7B7B7B" }}
                          className="text-[14px]"
                        >
                          ETF’s
                        </Text>
                        <Increase />
                      </View>
                      <Text className="text-[14px] font-bold">25% ($900)</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push("/Invest/StockHistory")}
                >
                  <View className="flex-row items-center gap-2">
                    <View
                      style={{
                        height: 50,
                        width: 10,
                        backgroundColor: "#7507E3",
                        borderRadius: 2
                      }}
                    ></View>
                    <View className="flex-col">
                      <View className="flex-row items-center">
                        <Text
                          style={{ color: "#7B7B7B" }}
                          className="text-[14px]"
                        >
                          Wire ventures
                        </Text>
                        <Increase />
                      </View>
                      <Text className="text-[14px] font-bold">33% ($800)</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: width * 0.03,
            height: height
          }}
          className="gap-6 mt-3"
        >
          <View className="flex-row justify-between">
            <Text className="text-[16px]">Recent investments</Text>
            <Text className="text-buttonprimary">See all</Text>
          </View>
          <View
            // showsVerticalScrollIndicator={false}
            style={{
              height: height * 0.2,
              marginTop: 20,
              paddingHorizontal: 20
            }}
          >
            <FlatList
              data={datas}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => router.push("/Invest/BuyandSell")}
                >
                  <View
                    className="flex-col gap-2"
                    style={{
                      borderBottomColor: "#EBEBEB",
                      borderBottomWidth: 1,
                      paddingBottom: 15
                    }}
                  >
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row gap-1 items-start">
                        <Apple />
                        <View className="flex-col gap-2 items-start">
                          <Text
                            className="text-[12px]"
                            style={{ color: "#00091E" }}
                          >
                            Apple (Apple Inc)
                          </Text>
                          <Text
                            className="text-[12px]"
                            style={{ color: "#6E6E6E" }}
                          >
                            3 Shares $284.90
                          </Text>
                        </View>
                      </View>
                      <View className="flex-col justify-end items-end">
                        <Text>$1,230.74</Text>
                        <View className="flex-row">
                          <Text
                            style={{ color: "#00A85A" }}
                            className="text-[10px]"
                          >
                            2.3%
                          </Text>
                          <Arrow />
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              // contentContainerStyle={{
              //     gap: 30
              //   }}
              ItemSeparatorComponent={() => <View style={{ marginTop: 30 }} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default InvestDashboard;
