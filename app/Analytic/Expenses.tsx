import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import PieChart from "react-native-pie-chart";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Expenses = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const series2 = [721, 100];
  const sliceColor2 = ["#8502B3", "#E9EBF3"];
  const series3 = [721, 100];
  const sliceColor3 = ["#105CE2", "#E9EBF3"];
  const series4 = [721, 100];
  const sliceColor4 = ["#2A94F4", "#E9EBF3"];
  const series5 = [721, 100];
  const sliceColor5 = ["#024949", "#E9EBF3"];
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/(PersonalAccount)/Analytics")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Expenses</Text>
          <Text></Text>
        </View>
        <View className="flex-row justify-start">
            <Text style={{color:'#606162'}} className="text-[16px]">Below are your expenses list over the month</Text>
          </View>
        <View className="flex-col justify-center gap-6">
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
                    Food
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                    12 transactions
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{color:'#6E6E6E'}}>$146,950.00</Text>
          </View>
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
                  Shopping
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                    8 transactions
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{color:'#6E6E6E'}}>$146,950.00</Text>
          </View>
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
                  Entertainment
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                    18 transactions
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{color:'#6E6E6E'}}>$6,950.00</Text>
          </View>
          <View className="flex-row items-center justify-between pl-3">
            <View className="flex-row gap-1">
              <PieChart
                widthAndHeight={70}
                series={series5}
                sliceColor={sliceColor5}
                coverRadius={0.65}
              />
              <View className="flex-col gap-1">
                <View className="flex-row gap-1">
                  <Text className="text-[14px]" style={{ color: "#413D43" }}>
                  Travels
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Text style={{ color: "#6E6E6E" }} className="text-[10px]">
                    18 transactions
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{color:'#6E6E6E'}}>$11,950.00</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Expenses;
