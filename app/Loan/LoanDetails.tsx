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
import Ontrack from "../../assets/ontrack.svg";
import Notify from "../../assets/loannotify.svg";
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

const LoanDetails = () => {
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

  const datas = [
    {
      id: 1,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 2,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 3,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 4,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 5,
      name: "Option 1",
      amount: "$1700"
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
          <TouchableOpacity
            onPress={() => router.push("/Loan/ApplicationSummary")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Loan Details</Text>
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
          <View
            style={{ height: height * 0.8, paddingTop: 10 }}
            className="pt-6 flex-col justify-between gap-6 position: relative"
          >
            <View
              className="flex-col justify-center items-center"
              style={{
                backgroundColor: "#105CE20A",
                height: height * 0.1,
                width: width * 0.93
              }}
            >
              <Text style={{ color: "#5F5F5F" }} className="text-[14px]">
                Total left to pay
              </Text>
              <Text style={{ color: "#32354A" }} className="text-[16px]">
                $2,500 out of $4,000
              </Text>
            </View>
            <View className="flex-col gap-1">
              <View
                style={{
                  width: width * 0.93,
                  height: height * 0.07,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  // Shadow properties
                  shadowColor: "#0A0A0A",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.05,
                  shadowRadius: 4,
                  elevation: 4,
                  paddingHorizontal: 30
                }}
                className="flex-row items-center justify-between"
              >
                <Text style={{ color: "#777A7E" }} className="text-[12px]">
                  Avg on time repayment rate
                </Text>
                <Text className="text-[12px] text-buttonprimary">88.89%</Text>
              </View>
              <View className="flex-row justify-end items-center">
                <View
                  className="flex-row justify-center items-center"
                  style={{
                    backgroundColor: "#00A85A",
                    width: 82,
                    height: 19,
                    borderRadius: 10,
                    gap: 1
                  }}
                >
                  <Ontrack />
                  <Text className="text-white text-[12px]">On track</Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-1">
                <Notify />
                <View className="flex-col gap-1">
                  <Text style={{ color: "#606162", fontSize: 12 }}>
                    Next upcoming payment
                  </Text>
                  <Text style={{ color: "#413D43", fontSize: 12 }}>
                    Tuesday 25th May, 2024
                  </Text>
                </View>
              </View>
              <View className="flex-col items-center">
                <Pressable onPress={() => ref?.current?.open()}>
                  <View
                    style={{
                      backgroundColor: "#105CE233",
                      width: 74,
                      height: 26,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text className="text-[12px] text-buttonprimary">
                      Pay now
                    </Text>
                  </View>
                </Pressable>
                <Text className="text-buttonprimary text-[14px] font-bold">
                  $900
                </Text>
              </View>
            </View>
            <View
              style={{ borderBottomColor: "#EBEBEB", height: height * 0.06 }}
              className="flex-row gap-2 w-[90%] border-b-1"
            >
              <Loantick />
              <Text className="leading-5">5 of 8 payments made</Text>
            </View>
            <View style={{height: height * 0.5}} className="mt-2">
              <View className="flex-row justify-start items-center mb-2">
                <Text style={{ color: "#777A7E" }} className="text-[12px]">
                  Payment history
                </Text>
              </View>
              <FlatList
                data={datas}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View className="flex-row justify-between">
                    <Text style={{ color: "#606162" }} className="text-[14px]">
                      May 23rd, 2024
                    </Text>
                    <View className="flex-col items-start">
                      <Text
                        style={{ color: "#00091E" }}
                        className="text-[14px]"
                      >
                        $900
                      </Text>
                      {/* <Text style={{color:'#00A85A'}}>Paid</Text> */}
                      <Text
                        style={{ color: "#00091E" }}
                        className="text-[12px]"
                      >
                        Paid late
                      </Text>
                    </View>
                  </View>
                )}
                // contentContainerStyle={{
                //     gap: 30
                //   }}
                ItemSeparatorComponent={() => (
                  <View style={{ marginTop: 10 }} />
                )}
              />
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
                      <Pressable onPress={() => setColor(true)}>
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
                Pay now
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>Accepting to pay now will deduct a sum of $900 from </Text>
              <Text>your account giving you a longer time to prepare for</Text>
              <Text>your next payment. Note that paying your loan earlier</Text>
              <Text>will enhance your credit score point. </Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Pay now"
                onPress={() => {
                  handleCloseModal();
                  router.push("/Loan/LoanPayment");
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

export default LoanDetails;
