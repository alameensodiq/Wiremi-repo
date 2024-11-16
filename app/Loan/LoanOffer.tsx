import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  SectionList,
  FlatList
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Actions from "../../assets/actions.svg";
import Decrease from "../../assets/Arrowdown.svg";
import EditInstance from "../../assets/editinstance.svg";
import SaveWithdraw from "../../assets/savewithdraw.svg";
import SaveHistory from "../../assets/savehistory.svg";
import Drop from "../../assets/calendardrop.svg";
import Cakecalendar from "../../assets/cakecalendar.svg";
import Rightdrop from "../../assets/rightdrop.svg";
import Lightdown from "../../assets/lightdown.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-gifted-charts";
import { BottomSheet } from "@/components/Bottom";
import BlueSignInButton from "@/components/BlueSignInButton";
import WhiteSignInButton from "@/components/WhiteSignInButton";
import Warning from "../../assets/lightwarning.svg";
import PieChart from "react-native-pie-chart";
import Rightcarat from "../../assets/rightcaratblue.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const LoanOffer = () => {
  const [selectedCircle, setSelectedCircle] = useState(1);
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [color, setColor] = useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const ref6 = useRef<BottomSheetRef>(null);
  const ref7 = useRef<BottomSheetRef>(null);
  const router = useRouter();
  const data = [
    { value: 150 },
    { value: 880 },
    { value: 590 },
    { value: 700 },
    { value: 80 },
    { value: 190 },
    { value: 450 }
  ];
  const widthAndHeight = 180;
  const series = [721, 120, 123, 189, 150];
  const sliceColor = ["#00CD32", "#F8FDEE", "#FECC31", "#FF6600", "#FE0000"];
  const data2 = [
    { value: 0 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 50 }
  ];

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const DATA = [
    {
      title: "22nd May, 2024",
      data: ["Apple", "Banana", "Orange", "Mango"]
    },
    {
      title: "22nd May, 2024",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];

  const options = [
    {
      id: 1,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 2,
      name: "Option 2",
      amount: "$1100"
    },
    {
      id: 3,
      name: "Option 3",
      amount: "$800"
    },
    {
      id: 4,
      name: "Option 4",
      amount: "$1000"
    },
    {
      id: 5,
      name: "Option 5",
      amount: "$1200"
    }
  ];
  const handlePress = (index: any) => {
    setSelectedCircle(index);
  };

  return (
    <View
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        // className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.back()}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Loan</Text>
          <Text></Text>
        </View>
        <View
          className="flex-row mb-4 mt-4"
          style={{
            backgroundColor: "#F2F4F7",
            height: height * 0.05,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Pressable
            className="flex-row items-center"
            onPress={() => setColor(true)}
            style={{
              width: width * 0.45,
              height: height * 0.047,
              borderRadius: 6,
              backgroundColor: color ? "#FFFFFF" : "#F2F4F7",
              borderColor: color ? "#105CE2" : "#F2F4F7",
              borderWidth: color ? 2 : 0,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: color ? "#105CE2" : "#98A2B3" }}>
              Loan apply
            </Text>
          </Pressable>
          <Pressable
            className="flex-row items-center"
            onPress={() => setColor(false)}
            style={{
              width: width * 0.45,
              height: height * 0.047,
              borderRadius: 6,
              backgroundColor: !color ? "#FFFFFF" : "#F2F4F7",
              borderColor: !color ? "#105CE2" : "#F2F4F7",
              borderWidth: !color ? 2 : 0,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: !color ? "#105CE2" : "#98A2B3" }}>
              Loan history
            </Text>
          </Pressable>
        </View>
        {color ? (
          <View className="pt-6 flex-col gap-10">
            <View className="flex-row justify-start">
              <Text className="text-[16px]" style={{ color: "#413D43" }}>
                Below are your loan offers
              </Text>
            </View>
            <View className="w-[90%] flex-col">
              <FlatList
                data={options}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  const isSelected = selectedCircle === item.id;

                  return (
                    <Pressable onPress={() => setSelectedCircle(item.id)}>
                      <View
                        className={`${
                          isSelected
                            ? "bg-buttonprimary w-[120] h-[120] rounded-[65px] flex-row items-center justify-center"
                            : "bg-white w-[100] h-[100] text-[12px] rounded-[65px] flex-row items-center justify-center shadow-sm"
                        }`}
                        style={
                          !isSelected
                            ? {
                                // Apply custom shadow for non-selected items
                                shadowColor: "#0A0A0A", // Shadow color
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.04, // Shadow transparency
                                shadowRadius: 4, // Shadow blur radius
                                elevation: 4 // For Android shadow support
                              }
                            : null
                        }
                      >
                        <Text
                          className={`${
                            isSelected
                              ? "text-white text-[16px]"
                              : "text-[12px]"
                          }`}
                        >
                          {item?.amount}
                        </Text>
                      </View>
                    </Pressable>
                  );
                }}
                contentContainerStyle={{ alignItems: "center" }}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                style={{ maxHeight: 150 }}
              />
              <View className="flex-row items-center justify-center] w-[100%] mt-4">
                <View
                  style={{ backgroundColor: "#F8F6F6", height: height * 0.1 }}
                  className="w-[100%] flex-col justify-start items-start rounded-[10px] pl-2 pt-4"
                >
                  <View className="flex-row gap-2 items-center">
                    <Text style={{ color: "#9FA0A2" }}>Select loan terms</Text>
                    <Lightdown />
                  </View>
                  <Text
                    className="mt-2 text-[14px]"
                    style={{ color: "#00091E" }}
                  >
                    6 months payment
                  </Text>
                </View>
              </View>
              <View
                style={{ borderBottomColor: "#EBEBEB" }}
                className="flex-col gap-2 items-start mt-4 border-b-1 pb-6"
              >
                <View className="flex-row items-center  justify-between w-[50%]">
                  <Text style={{ color: "#5F5F5F" }}>Interest</Text>
                  <Text style={{ color: "#5F5F5F" }}>$1,000</Text>
                </View>
                <View className="flex-row items-center justify-between w-[50%]">
                  <Text style={{ color: "#5F5F5F" }}>Total amount due</Text>
                  <Text style={{ color: "#5F5F5F" }}>$6,000</Text>
                </View>
              </View>
              <View className="flex-row items-center mt-3 gap-2 pt-3">
                <Warning />
                <Text style={{ color: "#606162" }} className="text-[14px]">
                  Offer valid for 24 hours
                </Text>
              </View>
              <View
                style={{ height: height * 0.2 }}
                className="items-end justify-between flex-row p-1"
              >
                <ShortBlueButton
                  title="Accept"
                  color1
                  onPress={() => router.push("/Loan/LoanAccepted")}
                />
                <ShortWhiteButton
                  title="Reject"
                  color1
                  onPress={() => console.log("sodiq")}
                />
              </View>
            </View>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: height * 0.8, paddingTop: 10 }}
          >
            <SectionList
              scrollEnabled={false}
              sections={DATA}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View className="flex-col gap-3 mt-1">
                  <View className="flex-row justify-between px-1">
                    <Text
                      style={{ color: "#00091E", fontSize: 16 }}
                      className="font-bold"
                    >
                      $200
                    </Text>
                    <View
                      style={{
                        backgroundColor: "#00A85A1A",
                        width: 100,
                        height: 30,
                        borderRadius: 8
                      }}
                      className="flex-row items-center justify-center"
                    >
                      <Pressable
                        onPress={() => router.push("/Loan/LoanDetails")}
                      >
                        <Text
                          className="text-[12px]"
                          style={{ color: "#00A85A" }}
                        >
                          Closed
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                  <View
                    style={{
                      width: width * 0.94,
                      height: height * 0.02,
                      backgroundColor: "#DBD4D4",
                      borderRadius: 6
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.4,
                        height: height * 0.02,
                        backgroundColor: "#105CE2",
                        borderRadius: 6
                      }}
                    ></View>
                  </View>
                  <View className="flex-row justify-start items-center">
                    <Text style={{ color: "#606162" }}>6 of 6 Payments</Text>
                  </View>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text className="text-[12px" style={{ color: "#2A94F4" }}>
                  {title}
                </Text>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1
                  }}
                />
              )}
              SectionSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    marginTop: 20
                  }}
                />
              )}
            />
          </ScrollView>
        )}
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Delete Plan
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>Terminating this plan permanently comes with a 5%</Text>
              <Text>charge. We charge this amount to help discipline you</Text>
              <Text>financially.</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Continue"
                onPress={() => {
                  handleCloseModal();
                  router.push("/Save/Delete");
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default LoanOffer;
