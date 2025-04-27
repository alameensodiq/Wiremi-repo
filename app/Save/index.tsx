import {
  View,
  Text,
  TouchableOpacity,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView,
  Pressable,
  ActivityIndicator
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Decrease from "../../assets/decerease.svg";
import Increase from "../../assets/increase.svg";
import RightCarat from "../../assets/rightcarat.svg";
import Arrow from "../../assets/greenarrowup.svg";
import CreateSavings from "@/components/CreateSavings";
import CreateSavingsBlue from "@/components/CreateSavingsBlue";
import PieChart from "react-native-pie-chart";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStatesavedashboard } from "@/Store/Reducers/SavingDashboard";
import { SavingDashboard } from "@/Store/Apis/SavingDashboard";
import { SavingActive } from "@/Store/Apis/SavingActive";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";
import { clearStatemainwallet } from "@/Store/Reducers/Mainwallet";
import { clearStateusertransactions } from "@/Store/Reducers/UserTransactions";
import { clearStatecreatingsavings } from "@/Store/Reducers/CreateSavings";
import { clearStatecreategroupsavings } from "@/Store/Reducers/CreateGroupSavings";
import { clearStategetsavinganalytics } from "@/Store/Reducers/GetSavingAnalytics";
import { clearStategetsaving } from "@/Store/Reducers/GetSaving";

const SaveDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const widthAndHeight = 180;

  const { savedashboard, authenticatingsavedashboard } = useAppSelector(
    (state) => state.savedashboard
  );

  console.log(savedashboard);

  const { saveactive, authenticatingsaveactive } = useAppSelector(
    (state) => state.saveactive
  );

  console.log(saveactive?.data);

  const distribution = savedashboard?.data?.distribution || {};
  const series = [
    distribution?.regular ?? 0,
    distribution?.recurrent ?? 0,
    distribution?.block ?? 0,
    distribution?.group ?? 0
  ];

  const validIndices = series
    .map((value, index) => (value > 0 ? index : null))
    .filter((index) => index !== null);

  const sliceColor = ["#105CE2", "#617102", "#017963", "#7106B3"];

  const validSeries = validIndices.map((index) => series[index]);
  const validSliceColor = validIndices.map((index) => sliceColor[index]);

  if (validSeries.length === 0) {
    console.warn("PieChart series is empty or sums to zero.");
  }
  const series2 = [721, 100];
  const sliceColor2 = ["#105CE2", "#E9EBF3"];

  const series3 = [721, 100];
  const sliceColor3 = ["#105CE2", "#E9EBF3"];

  const data = savedashboard?.data?.growth_data
    ? savedashboard?.data?.growth_data.slice(-4).map((item: any) => ({
        value: item?.amount ?? 0 // Default to 0 if `amount` is undefined
      }))
    : [];

  const date = savedashboard?.data?.growth_data
    ? savedashboard?.data?.growth_data.slice(-4).map((item: any) => ({
        value: item?.date ?? 0 // Default to 0 if `amount` is undefined
      }))
    : [];

  console.log(date);
  // const data = [{ value: 0 }, { value: 80 }, { value: 90 }, { value: 170 }];

  useEffect(() => {
    dispatch(SavingDashboard({ router: router.push }));
    dispatch(SavingActive({ router: router.push }));
    dispatch(clearStatemainwallet());
    dispatch(clearStateusertransactions());
    dispatch(clearStatecreatingsavings());
    dispatch(clearStatecreategroupsavings());
    dispatch(clearStategetsavinganalytics());
    dispatch(clearStategetsaving());

    return () => {
      // dispatch(clearStatesavedashboard());
      // dispatch(clearStatesaveactive());
    };
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight
        }}
      >
        {!savedashboard?.data?.growth_data &&
          !savedashboard?.data?.distribution &&
          !saveactive?.data && (
            <View
              style={{ height: height, width: width, flex: 1 }}
              className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
            >
              <ActivityIndicator size={200} color="#ffffff" />
            </View>
          )}
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="gap-6"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/(PersonalAccount)")}>
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
              ${savedashboard?.data?.total_amount}
            </Text>
            <View className="flex-row gap-2 items-center">
              <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                +${savedashboard?.data?.monthly_gain}
              </Text>
              <View className="flex-row">
                <Text style={{ color: "#00A85A" }} className="text-[10px]">
                  {savedashboard?.data?.monthly_gain_percentage}%
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
              onPress={() => router.push("/Save/CreateSavingsList")}
            />
            <CreateSavingsBlue
              title="Simulate savings"
              onPress={() => console.log('yes')}
              // onPress={() => router.push("/Save/SimulateSavings")}
            />
          </View>
          <View className="flex-row items-center gap-2">
            {validSeries.length > 0 ? (
              <PieChart
                widthAndHeight={widthAndHeight}
                series={validSeries}
                sliceColor={validSliceColor}
                coverRadius={0.65}
              />
            ) : (
              <Text>No data available for the chart.</Text>
            )}
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
                    <Text className="text-[14px] font-bold">
                      {savedashboard?.data?.distribution?.regular}%
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#617102",
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
                    <Text className="text-[14px] font-bold">
                      {savedashboard?.data?.distribution?.recurrent}%
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex-row justify-between">
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#017963",
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
                    <Text className="text-[14px] font-bold">
                      {savedashboard?.data?.distribution?.block}%
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#7106B3",
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
                    <Text className="text-[14px] font-bold">
                      {savedashboard?.data?.distribution?.group}%
                    </Text>
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
            {date?.map((item: any, index: number) => (
              <Text className="text-[12px]" key={index}>
                {item?.value}
              </Text>
            ))}
            {/* <Text className="text-[12px]">1M</Text>
            <Text className="text-[12px]">3M</Text>
            <Text className="text-[12px]">6M</Text>
            <Text className="text-[12px]">1Y</Text>
            <Text className="text-[12px]">ALL TIME</Text> */}
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
            <Pressable onPress={() => router.push("/Save/SavingInstance")}>
              <Text className="text-buttonprimary">See all</Text>
            </Pressable>
          </View>
          {saveactive?.data && saveactive?.data["today"][0] && (
            <Pressable
              onPress={() => router.push(`/Save/RegularSavingsSummary?id=${1}`)}
              className="flex-row items-center justify-between pl-3"
            >
              <View className="flex-row gap-1">
                <PieChart
                  widthAndHeight={70}
                  series={[
                    saveactive?.data["today"][0]?.progress,
                    100 - saveactive?.data["today"][0]?.progress
                  ]}
                  sliceColor={sliceColor2}
                  coverRadius={0.65}
                />
                <View className="flex-col gap-1">
                  <View className="flex-row gap-1">
                    <Text className="text-[14px]" style={{ color: "#413D43" }}>
                      {saveactive?.data["today"][0]?.name}
                    </Text>
                    <Text className="text-[14px]" style={{ color: "#00091E" }}>
                      -${saveactive?.data["today"][0]?.amount}
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                      +${saveactive?.data["today"][0]?.amount}
                    </Text>
                    {/* <View className="flex-row">
                      <Text
                        style={{ color: "#00A85A" }}
                        className="text-[10px]"
                      >
                        2.3%
                      </Text>
                      <Arrow />
                    </View> */}
                  </View>
                </View>
              </View>
              <RightCarat />
            </Pressable>
          )}
          {saveactive?.data && saveactive?.data["today"][1] && (
            <Pressable
              onPress={() => router.push(`/Save/RegularSavingsSummary?id=${2}`)}
              className="flex-row items-center justify-between pl-3"
            >
              <View className="flex-row gap-1">
                <PieChart
                  widthAndHeight={70}
                  series={[
                    saveactive?.data["today"][1]?.progress,
                    100 - saveactive?.data["today"][1]?.progress
                  ]}
                  sliceColor={sliceColor3}
                  coverRadius={0.65}
                />
                <View className="flex-col gap-1">
                  <View className="flex-row gap-1">
                    <Text className="text-[14px]" style={{ color: "#413D43" }}>
                      {saveactive?.data["today"][1]?.name}
                    </Text>
                    <Text className="text-[14px]" style={{ color: "#00091E" }}>
                      -${saveactive?.data["today"][1]?.amount}
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                      +${saveactive?.data["today"][1]?.amount}
                    </Text>
                    {/* <View className="flex-row">
                      <Text
                        style={{ color: "#00A85A" }}
                        className="text-[10px]"
                      >
                        2.3%
                      </Text>
                      <Arrow />
                    </View> */}
                  </View>
                </View>
              </View>
              <RightCarat />
            </Pressable>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SaveDashboard;
