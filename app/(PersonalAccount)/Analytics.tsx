import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  Dimensions,
  StatusBar as RNStatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Actions from "../../assets/actions.svg";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Analyticprofile from "../../assets/analyticprofile.svg";
import Caratdown from "../../assets/bluecaratdown.svg";
import Arrowup from "../../assets/arrowup.svg";
import PieChart from "react-native-pie-chart";
import RightCarat from "../../assets/rightcarat.svg";
import Investment from "../../assets/investment.svg";
import Savings from "../../assets/savings.svg";
import Expenses from "../../assets/expenses.svg";

const Analytics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const widthAndHeight = 140;
  const series = [121, 220, 589];
  const sliceColor = ["#105CE2", "#00091E", "#7106B3"];
  const series2 = [721, 100];
  const sliceColor2 = ["#8502B3", "#E9EBF3"];
  const series3 = [721, 100];
  const sliceColor3 = ["#00091E", "#E9EBF3"];
  const series4 = [721, 100];
  const sliceColor4 = ["#2A94F4", "#E9EBF3"];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            paddingTop: height * 0.03,
            alignItems: "flex-end"
          }}
          onPress={() => setIsVisible(false)}
        >
          <View
            style={{
              width: "40%",
              backgroundColor: "white",
              borderRadius: 10
            }}
          >
            <View>
              <View
                style={{
                  borderBottomColor: "#8080808C",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                <Pressable
                  onPress={() => {
                    router.push("/Analytic/SetBudget");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Set budget</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-1"
      >
        <View className="flex-row justify-between items-center mb-1">
          <Text />
          <Text className="text-[20px] text-pagetitle">Analytics</Text>
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
              console.log("sodiq");
            }}
          >
            <Actions />
          </Pressable>
        </View>
        <View className="flex-row justify-center items-center">
          <View
            style={{
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderStyle: "solid",
              padding: 10,
              width: width * 0.9,
              height: height * 0.08,
              borderRadius: 10
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-2">
              <Analyticprofile />
              <View className="flex-col">
                <Text className="text-dark">Total income</Text>
                <Text className="text-[11px]" style={{ color: "#777A7E" }}>
                  WI2663783729
                </Text>
              </View>
            </View>
            <Text style={{ color: "#6e6e6e", fontSize: 16 }}>$146,950.00</Text>
          </View>
        </View>
        <View className="flex-col mt-2 gap-2">
          <Text className="text-black text-[14px]">My Budget (status bar)</Text>
          <View
            style={{
              backgroundColor: "#E9EDF5",
              width: width * 0.93,
              height: height * 0.03,
              borderRadius: 10
            }}
          >
            <View
              style={{
                backgroundColor: "#105CE2",
                width: width * 0.33,
                height: height * 0.03,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
              }}
            ></View>
          </View>
          <Text style={{ color: "#606162" }}>Spent $1,200 out of $4,000</Text>
        </View>
        <View className="flex-row justify-center items-center">
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              borderStyle: "solid",
              padding: 10,
              width: width * 0.9,
              height: height * 0.07,
              borderRadius: 10
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-2">
              <View className="flex-row items-center gap-1">
                <Text className="text-dark font-bold">Your expenses</Text>
                <Text className="text-[11px]" style={{ color: "#00A85A" }}>
                  2.30%
                </Text>
                <Arrowup />
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-buttonprimary text-[14px]">Monthly</Text>
              <Caratdown />
            </View>
          </View>
        </View>
        <View className="flex-col items-center justify-center gap-1">
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.65}
          />
        </View>
        <View className="flex-col">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-1">
              <Investment />
              <Text>Investments - $390.47</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Savings />
              <Text>Savings - $611.22</Text>
            </View>
          </View>
          <View className="flex-row justify-start items-center mt-1">
            <View className="flex-row items-center gap-1">
              <Expenses />
              <Text>Investments - $390.47</Text>
            </View>
          </View>
        </View>
        <View className="gap-3">
          <View className="flex-row justify-between">
            <Text className="text-[16px]">Recent expenses</Text>
          </View>
          <Pressable onPress={() => router.push("/Save/SaveDashboard")}>
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
                      Savings
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                      12 transactions
                    </Text>
                  </View>
                </View>
              </View>
              <RightCarat />
            </View>
          </Pressable>
          <Pressable onPress={() => router.push('/Invest/InvestDashboard')}>
          <View className="flex-row items-center justify-between pl-3">
            <View className="flex-row gap-1">
              <PieChart
                widthAndHeight={70}
                series={series3}
                sliceColor={sliceColor3}
                coverRadius={0.65}
              />
              <View className="flex-col gap-1">
                <View className="flex-row gap-1">
                  <Text className="text-[14px]" style={{ color: "#413D43" }}>
                    Investments
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                    12 transactions
                  </Text>
                </View>
              </View>
            </View>
            <RightCarat />
          </View>
          </Pressable>
          <Pressable onPress={() => router.push('/Analytic/Expenses')}>
            <View className="flex-row items-center justify-between pl-3">
              <View className="flex-row gap-1">
                <PieChart
                  widthAndHeight={70}
                  series={series4}
                  sliceColor={sliceColor4}
                  coverRadius={0.65}
                />
                <View className="flex-col gap-1">
                  <View className="flex-row gap-1">
                    <Text className="text-[14px]" style={{ color: "#413D43" }}>
                      Expenses
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                      12 transactions
                    </Text>
                  </View>
                </View>
              </View>
              <RightCarat />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Analytics;
