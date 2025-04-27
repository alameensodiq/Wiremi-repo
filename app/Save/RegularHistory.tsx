import {
  View,
  Text,
  ImageBackground,
//   SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import SearchLabelBox from "@/components/SearchLabelBox";
import Card from '../../assets/historycard.svg'
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const RegularHistory = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const DATA = [
    {
      title: "Today",
      data: ["Apple", "Banana", "Orange", "Mango"]
    },
    {
      title: "Tomorrow",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];
  return (
    <View // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Save/RegularSavingsSummary")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">History</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <SearchLabelBox placeholder="Search" />
        </View>
        <View style={{ height: height * 0.72 }}>
        <SectionList
            scrollEnabled={false}
            sections={DATA}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View className="flex-col gap-2">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-1">
                    <Card />
                    <View className="flex-col gap-1 justify-center items-start">
                      <Text className="text-[14px] text-darktext font-bold">
                      Regular savings
                      </Text>
                      <Text className="text-[12px] text-transdate">
                      Withdrawal from Susan plan 
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col justify-center items-start">
                    <Text className="text-[14px] text-successtrans">$90</Text>
                    <Text className="text-[12px] text-darktext">
                    10:30am
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-end">
                  <View
                    style={{ width: width * 0.8, height: height * 0.001 }}
                    className="bg-faintline"
                  ></View>
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
      </SafeAreaView>
    </View>
  );
};

export default RegularHistory;
