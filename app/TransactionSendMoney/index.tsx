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
import Downcarat from "../../assets/caratdownpayment.svg";
import MobileMoney from "../../assets/mobilemoney.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import Wire from "../../assets/wire.svg";
import DirectTransfer from "../../assets/directtransfer.svg";
import Doawithdrawal from "../../assets/doawithdrawal.svg";
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

const ListSendMoney = () => {
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
          <TouchableOpacity onPress={() => router.push("/(PersonalAccount)")}>
            <Back />
          </TouchableOpacity>
          {/* <Text className="text-[20px] text-pagetitle">Send money</Text> */}
          <Text className="text-[20px] text-pagetitle">Payments</Text>
          <Text></Text>
        </View>
        {/* <TouchableOpacity onPress={() => ref.current?.open()}>
          <View
            style={{
              paddingHorizontal: width * 0.03
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
                <SendMoneyAccount />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Bank account{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Transfer funds anytime from your bank account
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionSendMoney/WiremiDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
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
                  Wiremi{" "} User
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Instant & Free
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionSendMoney/MobileMoneySend")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
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
                <MobileMoney />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Mobile money{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Easily transfer your funds anytime
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ref2.current?.open()}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
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
                <Scheduletransfer />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Schedule transfer{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Send money automatically with ease
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity> */}
        <View>
          <View className="flex flex-row justify-start mb-3">
            <Text className="text-[rgba(0, 9, 30, 1)]  text-[14px] font-bold">
              Make payment from
            </Text>
          </View>
          <TouchableOpacity onPress={() => ref.current?.open()}>
            <View
              style={{
                paddingHorizontal: width * 0.03
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
                    Wiremi wallet
                  </Text>
                </View>
              </View>
              <View className="flex flex-row gap-2 items-center">
                <Text className="text-[rgba(10, 10, 10, 1)]  text-[16px] font-bold">
                  $23,400
                </Text>
                <Downcarat />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <View className="flex flex-row items-start mb-6">
            <Text className="text-['rgba(0, 9, 30, 1)'] text-[16px] font-bold">
              Select payment mode
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
              className="gap-2"
            >
              <TouchableOpacity onPress={() => ref2.current?.open()}>
                <View
                  style={{
                    paddingHorizontal: width * 0.03
                  }}
                  className="flex-row justify-between items-center mb-2"
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
                        Pay with wiremi
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        Make payment for goods & services
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Rightcarat />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  router.push("/TransactionSendMoney/TransferMoney")
                }
              >
                <View
                  style={{
                    paddingHorizontal: width * 0.03
                  }}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row gap-3 items-center mb-2">
                    <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    >
                      <Transfermoneypayment />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Transfer Money
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
              <TouchableOpacity
                onPress={() =>
                {
                  router.push("/More/Withdraw")
                }
                }
              >
                <View
                  style={{
                    paddingHorizontal: width * 0.03
                  }}
                  className="flex-row justify-between items-center mb-2"
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
                      <Doawithdrawal />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Do a withdrawal
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        make a withdrawal from your account
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Rightcarat />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // ref2.current?.open()
                }}
              >
                <View
                  style={{
                    paddingHorizontal: width * 0.03
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
                      <Requestmoneypayment />
                    </View>
                    <View className="items-start">
                      <Text className="text-[14px] font-bold text-black">
                        Request Money
                      </Text>
                      <Text className="text-[10px] text-deposistsub">
                        request and receive money from someone
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
        {/* <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "#000000"
          }}
        > */}
        {/* <BottomSheet height={290} ref={ref}>
          <View style={{ padding: 20, gap: 15 }}>
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
                  router.push("/TransactionSendMoney/DirectTransferDetails");
                  handleCloseModal();
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
                  router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal();
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
        </BottomSheet> */}
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
                      <SendMoneyWiremi/>
                    </View>
                    <Text style={{ color: "rgba(65, 61, 67, 1)", fontSize: 16 }}>
                      Wiremi wallet
                    </Text>
                  </View>
                  <Text className="text-['rgba(153, 153, 153, 1)'] text-[14px]">$ 99,923,923,400</Text>
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
        {/* </BottomSheetModal> */}
      </SafeAreaView>
    </View>
  );
};

export default ListSendMoney;
