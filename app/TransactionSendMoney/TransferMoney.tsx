import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import SendMoneyAccount from "../../assets/sendmoneyaccount.svg";
import SendMoneyWiremi from "../../assets/sendmoneywiremi.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Scheduletransfer from "../../assets/scheduletransfer.svg";
import Rightcarat from "../../assets/rightcarat.svg";
import LocalTransfer from "../../assets/localtransfer.svg";
import InterTransfer from "../../assets/intertransfer.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import Wire from "../../assets/wire.svg";
import DirectTransfer from "../../assets/directtransfer.svg";
import UBA from "../../assets/uba.svg";
import Transfermoneypayment from "../../assets/transferpayment.svg";
import Requestmoneypayment from "../../assets/requestmoneypayment.svg";
import TuitionPayment from "../../assets/tuitionpayment.svg";
import MerchantPayment from "../../assets/merchantpayment.svg";
import Paypalpayment from "../../assets/paypalpayment.svg";
import Mobilemoneypayment from "../../assets/mobilepayment.svg";
import BankPayment from "../../assets/bankpayment.svg";
import CardPayment from "../../assets/cardpayment.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const TransferMoney = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/TransactionSendMoney")}
          >
            <Back />
          </TouchableOpacity>
          {/* <Text className="text-[20px] text-pagetitle">Send money</Text> */}
          <Text className="text-[20px] text-pagetitle">Transfer Money</Text>
          <Text></Text>
        </View>

        <View>
          <View className="flex flex-row items-start mb-6">
            <Text className="text-['rgba(0, 9, 30, 1)'] text-[16px] font-bold">
              Select transfer mode
            </Text>
          </View>
          <View className="items-center">
            <View
              style={{
                backgroundColor: "rgba(247, 247, 247, 1)",
                borderRadius: 10,
                width: width * 0.93,
                paddingTop: 5,
                paddingBottom: 20
              }}
              className="gap-3"
            >
              <TouchableOpacity onPress={() => router.push('/TransactionSendMoney/WiremiDetails')}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    >
                      <SendMoneyWiremi />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Wiremi transfer
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        make transfer to another wiremi users
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Rightcarat />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                router.push('/TransactionSendMoney/LocalandInternational')
              }}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    >
                      <LocalTransfer />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Local transfers
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        make transfer to any other bank accounts
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Rightcarat />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  router.push('/TransactionSendMoney/LocalandInternational')
              }}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    >
                      <InterTransfer />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        International Transfer
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        make transfer to some outside your region{" "}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Rightcarat />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-5">
          <View className="flex flex-row justify-between items-center mb-6">
            <Text className="text-['rgba(0, 9, 30, 1)'] text-[16px] font-bold">
              Recent transfers
            </Text>
            <Text className="text-['rgba(153, 153, 153, 1)'] text-[16px]">
              See all
            </Text>
          </View>
          <View className="items-center">
            <View
              style={{
                backgroundColor: "rgba(247, 247, 247, 1)",
                borderRadius: 10,
                width: width * 0.93,
                paddingTop: 5,
                paddingBottom: 20
              }}
              className="gap-3"
            >
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Andy Denesik
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        23243453
                      </Text>
                    </View>
                  </View>
                  <View>
                    <UBA />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Andy Denesik
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        23243453
                      </Text>
                    </View>
                  </View>
                  <View>
                    <UBA />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Andy Denesik
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        23243453
                      </Text>
                    </View>
                  </View>
                  <View>
                    <UBA />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(240, 240, 240, 1)"
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center">
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Andy Denesik
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        23243453
                      </Text>
                    </View>
                  </View>
                  <View>
                    <UBA />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomSheet height={290} ref={ref2}>
          <View style={{ padding: 20, gap: 15 }}>
            <View className="items-start flex-col">
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(0, 9, 30, 1)",
                  fontWeight: "bold"
                }}
              >
                Select payment type
              </Text>
              <Text style={{ color: "rgba(153, 153, 153, 1)", fontSize: 14 }}>
                Select option to pay from
              </Text>
            </View>
            {/* <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select transfer type
              </Text>
              <CheckBox
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View> */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  router.push("/More/Tuition");
                  handleCloseModal2();
                }}
              >
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <TuitionPayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Tuition payment
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal2();
                }}
              >
                <View className="items-center flex-row gap-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <MerchantPayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Merchant payment
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={430} ref={ref}>
          <View style={{ padding: 20, gap: 15 }}>
            <View className="items-start flex-col">
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(0, 9, 30, 1)",
                  fontWeight: "bold"
                }}
              >
                Make Payment From
              </Text>
              <Text style={{ color: "rgba(153, 153, 153, 1)", fontSize: 14 }}>
                Select option to pay from
              </Text>
            </View>
            {/* <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select transfer type
              </Text>
              <CheckBox
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View> */}
            <View className="gap-3">
              <TouchableOpacity
                onPress={() => {
                  handleCloseModal();
                }}
              >
                <View className="items-center flex-row justify-between gap-4">
                  <View className="flex-row items-center gap-2">
                    <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    >
                      <SendMoneyWiremi />
                    </View>
                    <Text
                      style={{ color: "rgba(65, 61, 67, 1)", fontSize: 16 }}
                    >
                      Wiremi wallet
                    </Text>
                  </View>
                  <Text className="text-['rgba(153, 153, 153, 1)'] text-[14px]">
                    $ 99,923,923,400
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal();
                }}
              >
                <View className="items-center flex-row gap-4 justify-start">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <CardPayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Cards (credit/debit)
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal();
                }}
              >
                <View className="items-center flex-row gap-4 justify-start">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <BankPayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Bank account
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal();
                }}
              >
                <View className="items-center flex-row gap-4 justify-start">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Mobilemoneypayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Mobile money
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal();
                }}
              >
                <View className="items-center flex-row gap-4 justify-start">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Paypalpayment />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>Paypal</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={290} ref={ref3}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text>Close</Text>
            </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Transfer type
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select transfer type
              </Text>
              <CheckBox
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  router.push("/TransactionSendMoney/DirectTransferSchedule");
                  handleCloseModal3();
                }}
              >
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <DirectTransfer />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Direct transfer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/TransactionSendMoney/BankWireDetailsSchedule");
                  handleCloseModal3();
                }}
              >
                <View className="items-center flex-row gap-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Wire />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Bank Wire
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default TransferMoney;
