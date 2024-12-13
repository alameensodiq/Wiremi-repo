import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  SectionList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import Filter from "../../../assets/filter.svg";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import FlightLogo from "../../../assets/flightlogo.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const AllFlights = () => {
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
      data: ["Apple", "Banana", "Orange", "Mango", "Banana"]
    },
    {
      title: "Tomorrow",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1 px-2">
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
          <TouchableOpacity onPress={() => router.push("/More/Flight/FlightDashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">All flights</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <NotificationSearchLabel placeholder="Search" />
          <Filter />
        </View>
        <View style={{ height: height * 0.72 }}>
          <SectionList
            sections={DATA}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View>
                <View className="flex-row justify-between items-center px-3 mt-3">
                  <View className="flex-col justify-between gap-2">
                    <Text style={{ color: "#6E6E6E", fontSize: 13 }}>
                      07:00AM
                    </Text>
                    <Text style={{ color: "#413D43", fontSize: 12 }}>BNA</Text>
                    <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                      Banda Aceh
                    </Text>
                  </View>
                  <View className="flex-col gap-1 items-center">
                    <View className="flex-row items-center gap-2">
                      <Text style={{ color: "#777A7E" }}>--------------</Text>
                      <FlightLogo />
                      <Text style={{ color: "#777A7E" }}>--------------</Text>
                    </View>
                    <View>
                      <Text style={{ color: "#A4A0A0", fontSize: 10 }}>
                        7 hours 20 minutes
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col justify-between gap-2">
                    <Text style={{ color: "#6E6E6E", fontSize: 13 }}>
                      07:00AM
                    </Text>
                    <Text style={{ color: "#413D43", fontSize: 12 }}>BNB</Text>
                    <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                      Banda Badru
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-center items-center gap-5 mt-2">
                  <View className="flex-col justify-between items-center">
                    <Text style={{ color: "#C6C6CB" }}>Airline</Text>
                    <Text style={{ color: "#6E6E6E" }}>Arik air</Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.04,
                      width: 1,
                      backgroundColor: "#606162"
                    }}
                  ></View>
                  <View className="flex-col justify-between items-center">
                    <Text style={{ color: "#C6C6CB" }}>Flight No</Text>
                    <Text style={{ color: "#6E6E6E" }}>LA 21</Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.04,
                      width: 1,
                      backgroundColor: "#606162"
                    }}
                  ></View>
                  <View className="flex-col justify-between items-center">
                    <Text style={{ color: "#C6C6CB" }}>Class</Text>
                    <Text style={{ color: "#6E6E6E" }}>Economy</Text>
                  </View>
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

export default AllFlights;
