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
import Back from "../../../assets/Back.svg";
import Arrow from "../../../assets/greenarrowup.svg";
import PieChart from "react-native-pie-chart";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const AgentCommissions = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const widthAndHeight = 180;
  const series = [721, 120, 123];
  const sliceColor = ["#105CE2", "#617102", "#017963"];
  const series2 = [721, 100];
  const sliceColor2 = ["#105CE2", "#E9EBF3"];
  const data = [{ value: 0 }, { value: 80 }, { value: 90 }];
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
            <TouchableOpacity
              onPress={() => router.push("/More/Agents/AgentDashboard")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Statistics</Text>
            <Text></Text>
          </View>
          <View
            style={{
              height: height * 0.15,
              width: width * 0.93,
              flexDirection: "column",
              justifyContent: "center",
              gap: 5
            }}
          >
            <Text className="text-black text-[14px]">Commissions earned</Text>
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
          <View className="flex-col items-center gap-2">
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.65}
            />
          </View>
          <View className="flex-col gap-3">
            <View className="flex-row justify-between">
              <View className="flex-row items-center gap-2">
                <View
                  style={{
                    height: 15,
                    width: 16,
                    backgroundColor: "#105CE2",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#ffffff",
                      borderRadius: 20
                    }}
                  ></View>
                </View>
                <View className="flex-row items-center">
                  <Text style={{ color: "#7B7B7B" }} className="text-[12px]">
                    Deposits ($3.40)
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View
                  style={{
                    height: 15,
                    width: 16,
                    backgroundColor: "#617102",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#ffffff",
                      borderRadius: 20
                    }}
                  ></View>
                </View>
                <View className="flex-row items-center">
                  <Text style={{ color: "#7B7B7B" }} className="text-[12px]">
                  Withdrawals ($1.40)
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View
                  style={{
                    height: 15,
                    width: 16,
                    backgroundColor: "#017963",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#ffffff",
                      borderRadius: 20
                    }}
                  ></View>
                </View>
                <View className="flex-row items-center">
                  <Text style={{ color: "#7B7B7B" }} className="text-[12px]">
                    Transfer ($3.40)
                  </Text>
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default AgentCommissions;
