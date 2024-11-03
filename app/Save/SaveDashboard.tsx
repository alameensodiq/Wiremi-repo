import {
  View,
  Text,
  TouchableOpacity,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Arrow from "../../assets/greenarrowup.svg";
import Decrease from "../../assets/decerease.svg";
import Increase from "../../assets/increase.svg";
import RightCarat from "../../assets/rightcarat.svg";
import CreateSavings from "@/components/CreateSavings";
import CreateSavingsBlue from "@/components/CreateSavingsBlue";
import PieChart from "react-native-pie-chart";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const SaveDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const widthAndHeight = 180;
  const series = [721, 120, 123, 189];
  const sliceColor = ["#105CE2", "#617102", "#017963", "#7106B3"];
  const series2 = [721, 100];
  const sliceColor2 = ["#105CE2", "#E9EBF3"];
  const data = [{ value: 0 }, { value: 80 }, { value: 90 }, { value: 70 }];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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
            <Text className="text-[20px] text-pagetitle">Save</Text>
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
            <Text className="text-buttonprimary text-[12px]">
              Total Amount Saved
            </Text>
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
              <View className="flex-row items-center">
                <View
                  style={{
                    height: height * 0.01,
                    width: width * 0.02,
                    backgroundColor: "#6E6E6E",
                    borderRadius: 10
                  }}
                ></View>
                <Text style={{ color: "#6E6E6E" }} className="text-[10px] ml-2">
                  Gained in 1 month
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center p-1 justify-between">
            <CreateSavings
              title="Create savings"
              onPress={() => router.push('/Save/CreateSavingsList')}
            />
            <CreateSavingsBlue
              title="Simulate savings"
              onPress={() => router.push('/Save/SimulateSavings')}
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
              <View className="flex-row justify-between">
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
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
                        Regular
                      </Text>
                      <Decrease />
                    </View>
                    <Text className="text-[14px] font-bold">22%</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
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
                        Recurrent
                      </Text>
                      <Increase />
                    </View>
                    <Text className="text-[14px] font-bold">29%</Text>
                  </View>
                </View>
              </View>
              <View className="flex-row justify-between">
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
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
                        Block
                      </Text>
                      <Increase />
                    </View>
                    <Text className="text-[14px] font-bold">17%</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
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
                        Group
                      </Text>
                      <Decrease />
                    </View>
                    <Text className="text-[14px] font-bold">32%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: height * 0.35 }}>
          <LineChart
            data={data}
            areaChart
            width={width}
            height={height * 0.25}
            spacing={140}
            startFillColor="#105CE200"
            startOpacity={0.08}
            endFillColor="#105CE2"
            endOpacity={0.1}
            rulesColor={"#ffffff"}
            curved
            color="#105CE2"
            thickness={3}
            hideDataPoints
            hideOrigin
            hideYAxisText
            xAxisColor={"#dddada"}
            yAxisColor={"#ffffff"}
          />
          <View
            style={{ paddingHorizontal: width * 0.03 }}
            className="flex-row items-center justify-between"
          >
            <Text className="text-[12px]">1M</Text>
            <Text className="text-[12px]">3M</Text>
            <Text className="text-[12px]">6M</Text>
            <Text className="text-[12px]">1Y</Text>
            <Text className="text-[12px]">ALL TIME</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="gap-6"
        >
          <View className="flex-row justify-between">
            <Text className="text-[16px]">My saving instances</Text>
            <Text className="text-buttonprimary">See all</Text>
          </View>
          <View className="flex-row items-center justify-between pl-3">
            <View className="flex-row gap-1">
              <PieChart
                widthAndHeight={70}
                series={series2}
                sliceColor={sliceColor2}
                coverRadius={0.65}
              />
              <View className="flex-col gap-1">
                <View className="flex-row gap-1">
                  <Text className="text-[14px]" style={{ color: "#413D43" }}>
                    Tuition
                  </Text>
                  <Text className="text-[14px]" style={{ color: "#00091E" }}>
                    -$423
                  </Text>
                </View>
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
            </View>
            <RightCarat />
          </View>
          <View className="flex-row items-center justify-between pl-3">
            <View className="flex-row gap-1">
              <PieChart
                widthAndHeight={70}
                series={series2}
                sliceColor={sliceColor2}
                coverRadius={0.65}
              />
              <View className="flex-col gap-1">
                <View className="flex-row gap-1">
                  <Text className="text-[14px]" style={{ color: "#413D43" }}>
                    Tuition
                  </Text>
                  <Text className="text-[14px]" style={{ color: "#00091E" }}>
                    -$423
                  </Text>
                </View>
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
            </View>
            <RightCarat />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SaveDashboard;
