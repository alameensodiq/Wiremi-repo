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
import Loantick from "../../assets/loantick.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-gifted-charts";
import { BottomSheet } from "@/components/Bottom";
import BlueSignInButton from "@/components/BlueSignInButton";
import WhiteSignInButton from "@/components/WhiteSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Loans = () => {
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
    <ScrollView
      style={{ backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: color ? 0 : width * 0.03
        }}
        // className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.back()}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Loans</Text>
          <Text></Text>
        </View>
        <View className="flex-row justify-center">
          <View
            className="flex-row mb-4 mt-4"
            style={{
              backgroundColor: "#F2F4F7",
              height: height * 0.05,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "space-between",
              width: width * 0.9
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
        </View>
        {color ? (
          <View className="pt-6 flex-col justify-between gap-10 position: relative">
            <View style={{ height: height * 0.45 }} className="flex-col">
              <View
                style={{ paddingHorizontal: width * 0.03 }}
                className="flex-col items-center"
              >
                <Text className="text-[14px]" style={{ color: "#00091E" }}>
                  Using the loan calculatior and moving to the next step
                </Text>
                <Text className="text-[14px]" style={{ color: "#00091E" }}>
                  won’t affect your credit score.
                </Text>
              </View>
              <View
                style={{ paddingHorizontal: width * 0.03 }}
                className="flex-col"
              >
                <View className="flex-col gap-3 mt-1">
                  <View className="flex-row justify-between px-1">
                    <Text style={{ color: "#00091E", fontSize: 16 }}>
                      I want to borrow
                    </Text>

                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 16 }}
                    >
                      $200
                    </Text>
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
                  <View className="flex-row justify-between items-center">
                    <Text style={{ color: "#606162" }}>$200</Text>
                    <Text style={{ color: "#606162" }}>$6000</Text>
                  </View>
                </View>
                <View className="flex-col gap-3 mt-1">
                  <View className="flex-row justify-between px-1">
                    <Text style={{ color: "#00091E", fontSize: 16 }}>
                      I want to pay in
                    </Text>

                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 16 }}
                    >
                      6 Months
                    </Text>
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
                  <View className="flex-row justify-between items-center">
                    <Text style={{ color: "#606162" }}>1</Text>
                    <Text style={{ color: "#606162" }}>24 Months</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: height * 0.3,
                bottom: height * 0.1,
                zIndex: 100,
                paddingHorizontal: width * 0.05
              }}
              className="flex-col  justify-center items-center  position: absolute"
            >
              <View
                className="bg-white"
                style={{
                  height: height * 0.3,
                  width: width * 0.9,
                  borderColor: "#EBEBEB",
                  borderWidth: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: 20
                }}
              >
                <View className="flex-row justify-between">
                  <Text className="text-[15px]" style={{ color: "#00091E" }}>
                    In total you’ll pay
                  </Text>
                  <Text className="text-buttonprimary text-[18px] font-bold">
                    $1200
                  </Text>
                </View>
                <View className="flex-col mt-5">
                  <View className="flex-row gap-2 w-[70%]">
                    <Loantick />
                    <Text>
                      <Text className="font-bold text-[12px]">$1,200</Text> plus{" "}
                      <Text className="font-bold text-[12px]">$145.19</Text> in
                      interest
                    </Text>
                  </View>
                  <View className="flex-row gap-2  w-[70%] mt-1">
                    <Loantick />
                    <Text>
                      <Text className="font-bold text-[12px] leading-5">5</Text>
                      monthly payments of{" "}
                      <Text className="font-bold text-[12px] leading-5">
                        $75.75
                      </Text>{" "}
                      and{" "}
                      <Text className="font-bold text-[12px] leading-5">1</Text>{" "}
                      final payment of{" "}
                      <Text className="font-bold text-[12px] leading-5">
                        $75.61
                      </Text>
                    </Text>
                  </View>
                  <View className="flex-row gap-2 w-[70%] mt-1">
                    <Loantick />
                    <Text>
                      <Text className="font-bold text-[12px]">$15.8% APR,</Text>
                      no added fees
                    </Text>
                  </View>
                  <View className="flex-col justify-center items-center mt-5">
                    <Text style={{ color: "#A1A6AB" }} className="text-[12px]">
                      Using the loan calculator and moving to the next step
                      won’t{" "}
                    </Text>
                    <Text style={{ color: "#A1A6AB" }} className="text-[12px]">
                      affect your credit score.
                    </Text>
                  </View>
                </View>
              </View>
              <View className="items-center mt-5">
                <BlueSignInButton
                  color1
                  title="Proceed"
                  onPress={() => router.push("/Loan/ApplicationSummary")}
                />
              </View>
            </View>
            <View
              className="bg-buttonprimary"
              style={{
                height: height * 0.3,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            ></View>
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
    </ScrollView>
  );
};

export default Loans;
