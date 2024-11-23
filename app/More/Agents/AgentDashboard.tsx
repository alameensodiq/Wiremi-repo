import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  SectionList,
  ScrollView,
  Pressable
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Sendheader from "../../../assets/sendheading.svg";
import Whitecarat from "../../../assets/whitecarat.svg";
import AgentFundwallet from "../../../assets/agentfundwallet.svg";
import AgentDeposit from "../../../assets/agentdepositwallet.svg";
import AgentTransfer from "../../../assets/agenttransfer.svg";
import AgentWithdrawal from "../../../assets/agentwithdrawal.svg";
import Ladypics from "../../../assets/ladypics.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Royal from "../../../assets/royalbank.svg";
import Chase from "../../../assets/chase.svg";
import BankAmerica from "../../../assets/bankamerica.svg";
import HSBC from "../../../assets/hsbc.svg";
import TDBANK from "../../../assets/tdbank.svg";
import Scotia from "../../../assets/scotiabank.svg";
import BMO from "../../../assets/bmo.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import Wire from "../../../assets/wire.svg";
import TuitionProfile from "../../../assets/tuitionprofile.svg";
import GradientBackground from "@/components/GradientBackground";
import TextLabelBoxBarcode from "@/components/TextLabelBoxBarcode";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const AgentDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const router = useRouter();

  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);

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

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

  const handleCloseModal4 = () => {
    ref4.current?.close();
  };

  const colors = [
    "rgba(5, 179, 250, 0.6)",
    "rgba(5, 179, 250, 0.6)",
    "#105CE2",
    "rgba(5, 179, 250, 0.4)"
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
        className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/More")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Agents</Text>
          <Text></Text>
        </View>
        <View style={{ height: height * 0.9 }}>
          <View className="flex-col" style={{ height: height * 0.4 }}>
            <View className="my-3 flex-row justify-center">
              <GradientBackground colors={colors}>
                <View className="p-10 flex-col gap-10">
                  <View className="flex-row justify-start items-center">
                    <View
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        width: 145,
                        height: 23
                      }}
                      className="rounded-[10px] flex-row justify-center items-center"
                    >
                      <Text className="text-[10px] text-white font-bold">
                        Agent ID - WI906526782
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <View className="flex-col gap-1">
                      <Text
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: 12
                        }}
                      >
                        Wallet Balance
                      </Text>
                      <Text
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: 14
                        }}
                      >
                        $146.00
                      </Text>
                    </View>
                    <View className="flex-col  items-start">
                      <Pressable onPress={() => router.push('/More/Agents/AgentCommissions')}>
                      <View className="flex-row gap-2">
                        <Text
                          style={{
                            color: "rgba(255, 255, 255, 1)",
                            fontSize: 12
                          }}
                        >
                          Commissions
                        </Text>
                        <Whitecarat />
                      </View>
                      </Pressable>
                      <Text
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: 14
                        }}
                      >
                        $16.00
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Pressable
                      onPress={() =>
                        router.push("/More/Agents/AgentFundWallet")
                      }
                    >
                      <View className="flex-col justify-center items-center">
                        <AgentFundwallet />
                        <Text className="text-[12px] text-white">
                          Fund wallet
                        </Text>
                      </View>
                    </Pressable>
                    <Pressable onPress={() => ref2?.current?.open()}>
                      <View className="flex-col justify-center items-center">
                        <AgentDeposit />
                        <Text className="text-[12px] text-white">Deposit</Text>
                      </View>
                    </Pressable>
                    <Pressable onPress={() => ref3?.current?.open()}>
                    <View className="flex-col justify-center items-center">
                      <AgentWithdrawal />
                      <Text className="text-[12px] text-white">Withdrawal</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={() => ref4?.current?.open()}>
                    <View className="flex-col justify-center items-center">
                      <AgentTransfer />
                      <Text className="text-[12px] text-white">Transfer</Text>
                    </View>
                    </Pressable>
                  </View>
                </View>
              </GradientBackground>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-darktext text-[14px] font-bold">
                Recent Transactions
              </Text>
              <Pressable onPress={() => router.push('/More/Agents/AgentTransactions')}>
              <Text className="text-buttonprimary text-[12px]">See all</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ height: height * 0.4, paddingTop: 10 }}>
            <SectionList
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
        </View>
        <BottomSheet height={400} ref={ref2}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Deposit
              </Text>
            </View>
            <View className="flex-col gap-2">
              <View className="items-center justify-center">
                <TextLabelBoxBarcode
                  label="Wiremi ID"
                  placeholder="Enter wiremi ID"
                />
              </View>
              <View className="justify-start">
                <View
                  style={{ paddingHorizontal: 10 }}
                  className="flex-row items-start justify-end gap-2"
                >
                  <Ladypics />
                  <Text className="text-buttonprimary">Susan Sheidu</Text>
                </View>
              </View>
            </View>
            <View className="items-center justify-center">
              <TextLabelBox
                label="Amount"
                placeholder="Enter amount"
              />
            </View>
            <View
              style={{ height: height * 0.1 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push("/More/Agents/AgentDepositSummary")}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={400} ref={ref3}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Withdrawal
              </Text>
            </View>
            <View className="flex-col gap-2">
              <View className="items-center justify-center">
                <TextLabelBoxBarcode
                  label="Wiremi ID"
                  placeholder="Enter wiremi ID"
                />
              </View>
              <View className="justify-start">
                <View
                  style={{ paddingHorizontal: 10 }}
                  className="flex-row items-start justify-end gap-2"
                >
                  <Ladypics />
                  <Text className="text-buttonprimary">Susan Sheidu</Text>
                </View>
              </View>
            </View>
            <View className="items-center justify-center">
              <TextLabelBox
                label="Amount"
                placeholder="Enter amount"
              />
            </View>
            <View
              style={{ height: height * 0.1 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push("/More/Agents/AgentWithdrawalSummary")}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={400} ref={ref4}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Withdrawal
              </Text>
            </View>
            <View className="flex-col gap-2">
              <View className="items-center justify-center">
                <TextLabelBoxBarcode
                  label="Wiremi ID"
                  placeholder="Enter wiremi ID"
                />
              </View>
              <View className="justify-start">
                <View
                  style={{ paddingHorizontal: 10 }}
                  className="flex-row items-start justify-end gap-2"
                >
                  <Ladypics />
                  <Text className="text-buttonprimary">Susan Sheidu</Text>
                </View>
              </View>
            </View>
            <View className="items-center justify-center">
              <TextLabelBox
                label="Amount"
                placeholder="Enter amount"
              />
            </View>
            <View
              style={{ height: height * 0.1 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push("/More/Agents/AgentTransferSummary")}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default AgentDashboard;
