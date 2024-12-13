import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Modal,
  Pressable
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Connection from "../../assets/Conection.svg";
import Cardwiremi from "../../assets/cardwiremi.svg";
import Chip from "../../assets/Chip.svg";
import Coloredcarat from "../../assets/coloredcarat.svg";
import Sendheader from "../../assets/sendheading.svg";
import Cardcopy from "../../assets/cardcopy.svg";
import Actions from "../../assets/actions.svg";
import { StatusBar } from "expo-status-bar";
import GradientBackground from "@/components/GradientBackground";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MyCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(true);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const [reduce, setReduce] = useState<boolean>(true);

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

  const colors = [
    "rgba(5, 179, 250, 0.6)",
    "rgba(5, 179, 250, 0.6)",
    "#105CE2",
    "rgba(5, 179, 250, 0.4)"
  ];
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
                    router.push("/Cards/ChangeCardPin");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Change card pin</Text>
                </Pressable>
              </View>
              <View style={{ borderBottomColor: "#8080808C", padding: 10 }}>
                <Pressable
                  onPress={() => {
                    router.push("/Cards/DeactivateCard");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Deactivate card</Text>
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
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Cards/CreateCard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">My virtual card</Text>
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
              console.log("sodiq");
            }}
          >
            <Actions />
          </Pressable>
        </View>
        {full ? (
          <View style={{ paddingHorizontal: 5 }}>
            <GradientBackground colors={colors}>
              <View
                style={{ height: height * 0.32 }}
                className="flex-col p-5 justify-between"
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-1">
                    <Chip />
                    <Connection />
                  </View>
                  <Cardwiremi />
                </View>
                <View className="flex-col items-center">
                  <Text className="text-white text-[32px] font-bold">
                    2345 3454 4567 5678
                  </Text>
                  <Text className="text-white">Expires 02/20</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-white">SUSAN SHEIDU</Text>
                </View>
              </View>
            </GradientBackground>
          </View>
        ) : (
          <View
            className="flex-row"
            style={{
              paddingHorizontal: 0,
              backgroundColor: "#F0F5FF",
              borderRadius: 10
            }}
          >
            <GradientBackground reduce={reduce} colors={colors}>
              <View></View>
            </GradientBackground>
            <View className="flex-col pl-4 gap-6 pt-6">
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Card number
                </Text>
                <View className="flex-row gap-3">
                  <Text className="text-[14px] font-bold">
                    2467 7896 1234 9870
                  </Text>
                  <Cardcopy />
                </View>
              </View>
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Expiry date
                </Text>
                <Text className="text-[14px] font-bold">02/26</Text>
              </View>
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  CVV
                </Text>
                <Text className="text-[14px] font-bold">123</Text>
              </View>
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Card pin
                </Text>
                <Text className="text-[14px] font-bold">1234</Text>
              </View>
            </View>
          </View>
        )}
        <View className="items-center">
          <View
            style={{
              backgroundColor: "#105CE21A",
              width: width * 0.3,
              height: height * 0.04,
              borderRadius: 8
            }}
            className="flex-row items-center justify-center"
          >
            {full ? (
              <Pressable onPress={() => setFull(!full)}>
                <Text style={{ color: "#105CE2" }}>Show details</Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => setFull(!full)}>
                <Text style={{ color: "#105CE2" }}>Hide details</Text>
              </Pressable>
            )}
            <Coloredcarat />
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-darktext text-[14px] font-bold">
            Recent Transactions
          </Text>
          <Text className="text-buttonprimary text-[12px]">See all</Text>
        </View>
        <View style={{ maxHeight: height * 0.8 }}>
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
                    <Sendheader />
                    <View className="flex-col gap-1 justify-center items-start">
                      <Text className="text-[14px] text-darktext font-bold">
                        Transfer to Mike Doe
                      </Text>
                      <Text className="text-[12px] text-transdate">
                        Sep 2nd, 7:45am
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col justify-center items-center">
                    <Text className="text-[14px] text-darktext">$90</Text>
                    <Text className="text-[12px] text-successtrans">
                      Successful
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
    </ScrollView>
  );
};

export default MyCard;
