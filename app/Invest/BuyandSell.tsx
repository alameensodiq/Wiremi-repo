import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import Tesla from "../../assets/tesladetails.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import { LineChart } from "react-native-gifted-charts";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const BuyandSell = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };
  const [number, setNumber] = useState<number>(0);
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const data = [{ value: 0 }, { value: 80 }, { value: 90 }, { value: 70 }];
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Invest")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">TSLA</Text>
          <Text></Text>
        </View>
        <View>
          <View className="flex-col gap-3 items-center">
            <View className="flex-col gap-2 items-center">
              <Text className="text-[18px]">Overview</Text>
              <Tesla />
            </View>
            <View className="flex-col items-center gap-1">
              <Text className="text-[16px]">Tesla, Inc</Text>
              <Text className="text-[18px] text-black font-bold">$240.74</Text>
              <Text className="text-[#00A85A] text-[12px]">+0.48 (1.20%)</Text>
            </View>
          </View>
          <View style={{ height: height * 0.35, marginTop: 40 }}>

              <FlatList
                data={datas}
                //   keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <Pressable onPress={() => setNumber(index + 1)}>
                    <View
                      className="flex-col items-center pb-1 justify-center"
                      style={{
                        backgroundColor:
                          number === index + 1 ? "rgba(16, 92, 226, 0.06)" : "",
                          borderRadius: 20,
                          height: 30,
                          width: 30
                      }}
                    >
                      <Text
                        style={{
                          color: number === index + 1 ? "#105CE2" : "#606162"
                        }}
                      >
                        {index + 1}D
                      </Text>
                    </View>
                  </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  gap: 30,
                  paddingLeft: 20
                }}
                ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
              />
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
              //   hideYAxisText
              xAxisColor={"#dddada"}
              yAxisColor={"#ffffff"}
            />
            <View
              style={{ paddingHorizontal: width * 0.03 }}
              className="flex-row items-center justify-between"
            >
              <Text className="text-[12px]">8:00am</Text>
              <Text className="text-[12px]">9:00am</Text>
              <Text className="text-[12px]">10:00am</Text>
              <Text className="text-[12px]">11:00am</Text>
              <Text className="text-[12px]">12:00pm</Text>
            </View>
          </View>
          <View className="items-center justify-between flex-row p-4 mt-20">
            <ShortBlueButton
              title="Buy"
              color1
              onPress={() => router.push("/Invest/BuyStock")}
            />
            <ShortBlueButton
              title="Sell"
              color1
              black
              onPress={() => router.push("/Invest/SellStock")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BuyandSell;
