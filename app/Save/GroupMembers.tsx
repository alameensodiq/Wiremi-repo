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
import SendMoneyWiremi from "../../assets/sendmoneywiremi.svg";
import Filter from "../../assets/filter.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import Card from "../../assets/historycard.svg";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const GroupMembers = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const DATA = [
    {
      title: "Group Admin",
      data: ["Apple"]
    },
    {
      title: "Members",
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
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save/GroupSavingsSummary")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Group members</Text>
          <Text></Text>
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
                        Sheidu Susan
                      </Text>
                      <Text className="text-[12px] text-transdate">
                        W12345990098
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col justify-center items-start">
                    <Text style={{color:'#1A1A1A'}} className="text-[14px] font-bold">$450.09</Text>
                  </View>
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-[14px] text-buttonprimary font-bold">
                {title}
              </Text>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 26
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

export default GroupMembers;
