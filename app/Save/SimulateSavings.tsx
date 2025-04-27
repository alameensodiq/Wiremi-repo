import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Calendar from "../../assets/calendar.svg";
import Memorycard from "../../assets/memorycard.svg";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WhiteSignInButton from "@/components/WhiteSignInButton";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const SimulateSavings = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [selectedIndex, setIndex] = useState(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const ref6 = useRef<BottomSheetRef>(null);
  const ref7 = useRef<BottomSheetRef>(null);
  const router = useRouter();

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
  const handleCloseModal3 = () => {
    ref3.current?.close();
  };
  const handleCloseModal4 = () => {
    ref4.current?.close();
  };
  const handleCloseModal5 = () => {
    ref5.current?.close();
  };
  const handleCloseModal6 = () => {
    ref6.current?.close();
  };
  const handleCloseModal7 = () => {
    ref7.current?.close();
  };

  const data = [
    {
      id: "1",
      name: "Daily",
      image: <Calendar />
    },
    {
      id: "2",
      name: "Weekly",
      image: <Calendar />
    },
    {
      id: "3",
      name: "Monthly",
      image: <Calendar />
    }
  ];

  const data2 = [
    {
      id: "1",
      name: "Regular",
      image: <Memorycard />
    },
    {
      id: "2",
      name: "Recurrent",
      image: <Memorycard />
    },
    {
      id: "3",
      name: "Block",
      image: <Memorycard />
    },
    {
      id: "4",
      name: "Group",
      image: <Memorycard />
    }
  ];

  const data3 = [
    {
      id: "1",
      name: "Expected amount",
      amount: "$2,500.00"
    },
    {
      id: "2",
      name: "Total saved",
      amount: "$1,500.00"
    },
    {
      id: "3",
      name: "Late savings (10)",
      amount: "$1,000.00"
    },
    {
      id: "4",
      name: "Late savings fine",
      amount: "$200.00"
    },
    {
      id: "5",
      name: "Savings duration",
      amount: "10 Months"
    },
    {
      id: "6",
      name: "Interest earned",
      amount: "$100.00"
    }
  ];
  return (
    <ScrollView 
    // style={{ backgroundColor: "#ffffff" }}
     showsVerticalScrollIndicator={false} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Savings Simulation</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Savings type"
              placeholder="Select savings type"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Interval"
              placeholder="Select Interval"
            />
          </View>
        </TouchableOpacity>
        <View className="pt-10" style={{ paddingHorizontal: 10 }}>
          <View className="flex-col items-center justify-center">
            <Text style={{ color: "#00091E" }} className="text-[14px]">
              See below to know how your savings amount has been
            </Text>
            <Text style={{ color: "#00091E" }} className="text-[14px]">
              simulated
            </Text>
          </View>
          <View className="flex-col gap-4 mt-5">
            <View className="flex-row justify-between">
              <Text style={{ color: "#413D43", fontSize: 14 }}>
                Amount to Save
              </Text>
              <Text
                style={{ color: "#00091E", fontSize: 16 }}
                className="font-bold"
              >
                $2,500.00
              </Text>
            </View>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.02,
                backgroundColor: "#DBD4D4",
                borderRadius: 6
              }}
            >
              <View style={{
                width: width * 0.4,
                height: height * 0.02,
                backgroundColor: "#105CE2",
                borderRadius: 6
              }}></View>
            </View>
          </View>
          <View className="flex-col gap-4 mt-5">
            <View className="flex-row justify-between">
              <Text style={{ color: "#413D43", fontSize: 14 }}>
                Duration
              </Text>
              <Text
                style={{ color: "#00091E", fontSize: 16 }}
                className="font-bold"
              >
                10 months
              </Text>
            </View>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.02,
                backgroundColor: "#DBD4D4",
                borderRadius: 6
              }}
            >
              <View style={{
                width: width * 0.4,
                height: height * 0.02,
                backgroundColor: "#105CE2",
                borderRadius: 6
              }}></View>
            </View>
          </View>
          <View className="flex-col gap-4 mt-5">
            <View className="flex-row justify-between">
              <Text style={{ color: "#413D43", fontSize: 14 }}>
              No of possible late savings
              </Text>
              <Text
                style={{ color: "#00091E", fontSize: 16 }}
                className="font-bold"
              >
                10
              </Text>
            </View>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.02,
                backgroundColor: "#DBD4D4",
                borderRadius: 6
              }}
            >
              <View style={{
                width: width * 0.4,
                height: height * 0.02,
                backgroundColor: "#105CE2",
                borderRadius: 6
              }}></View>
            </View>
          </View>
          <View className="flex-col gap-4 mt-5">
            <View className="flex-row justify-between">
              <Text style={{ color: "#413D43", fontSize: 14 }}>
              Approximate interest rate
              </Text>
              <Text
                style={{ color: "#00091E", fontSize: 16 }}
                className="font-bold"
              >
                1.5%
              </Text>
            </View>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.02,
                backgroundColor: "#DBD4D4",
                borderRadius: 6
              }}
            >
              <View style={{
                width: width * 0.4,
                height: height * 0.02,
                backgroundColor: "#105CE2",
                borderRadius: 6
              }}></View>
            </View>
          </View>
          <View className="flex-col gap-4 mt-5">
            <View className="flex-row justify-between">
              <Text style={{ color: "#413D43", fontSize: 14 }}>
              Maximum no of people
              </Text>
              <Text
                style={{ color: "#00091E", fontSize: 16 }}
                className="font-bold"
              >
                100
              </Text>
            </View>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.02,
                backgroundColor: "#DBD4D4",
                borderRadius: 6
              }}
            >
              <View style={{
                width: width * 0.4,
                height: height * 0.02,
                backgroundColor: "#105CE2",
                borderRadius: 6
              }}></View>
            </View>
          </View>
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Simulate"
            onPress={() => ref3.current?.open()}
          />
        </View>
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 10 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Interval
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select Interval</Text>
              <CheckBox
                checked={selectedIndex === 20}
                onPress={() => setIndex(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
                      handleCloseModal();
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <View className="flex-row items-center gap-2">
                        {item?.image}
                        <Text className="text-[14px] font-bold">
                          {item?.name}
                        </Text>
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={selectedIndex === index}
                          onPress={() => setIndex(index)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  gap: 5
                }}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={400} ref={ref2}>
          <View style={{ padding: 20, gap: 10 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Schedule transfer
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select Interval</Text>
              <CheckBox
                checked={selectedIndex === 20}
                onPress={() => setIndex(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data2}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      // if (index === 0) {
                      //   ref3.current?.open();
                      // }
                      // if (index === 1) {
                      //   ref4.current?.open();
                      // }
                      // if (index === 2) {
                      //   ref5.current?.open();
                      // }
                      // if (index === 3) {
                      //   ref7.current?.open();
                      // }
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
                      handleCloseModal2();
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <View className="flex-row items-center gap-2">
                        {item?.image}
                        <Text className="text-[14px] font-bold">
                          {item?.name}
                        </Text>
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={selectedIndex === index}
                          onPress={() => setIndex(index)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  gap: 5
                }}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={620} ref={ref3}>
          <View style={{ padding: 20, gap: 10 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Preview
              </Text>
            </View>
            <View className="items-start">
              <Text className="text-[14px]" style={{ color: "#777A7E" }}>
                Below is your expected savings return
              </Text>
            </View>
            <View style={{ height: height * 0.37 }} className="flex-col gap-1">
              <FlatList
                data={data3}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      handleCloseModal2();
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <Text
                        className="text-[16px]"
                        style={{ color: "#606162" }}
                      >
                        {item?.name}
                      </Text>
                      <Text
                        className="text-[18px] font-bold"
                        style={{ color: "#00091E" }}
                      >
                        {item?.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  gap: 20
                }}
              />
              <View
                className="flex-row justify-between"
                style={{
                  borderTopColor: "#EBEBEB",
                  paddingTop: 10,
                  borderTopWidth: 2
                }}
              >
                <Text className="text-[16px]" style={{ color: "#606162" }}>
                  Total saved
                </Text>
                <Text className="text-[18px] font-bold text-buttonprimary">
                  $2,300
                </Text>
              </View>
            </View>
            <View style={{ gap: 20, paddingTop: 10 }}>
              <BlueSignInButton
                title="Proceed to Save"
                onPress={() => {
                  handleCloseModal3();
                  router.push("/Save/CreateSavingsList");
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal3();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SimulateSavings;
