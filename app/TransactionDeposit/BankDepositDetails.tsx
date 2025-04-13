import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import PayName from "../../assets/payname.svg";
import PayNumber from "../../assets/paynumber.svg";
import BankHouse from "../../assets/bankhouse.svg";
import Copyname from "../../assets/copyname.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import { BottomSheet } from "@/components/Bottom";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { BankDeposit } from "@/Store/Apis/BankDeposit";
import ShortBlueButton from "@/components/ShortBlueButton";
import { clearStatebankdeposit } from "@/Store/Reducers/BankDeposit";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const BankDepositDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show2, setShow2] = useState("");

  const [amount, setAmount] = useState("");

  const { bankdeposit, authenticatingbankdeposit, errors } = useAppSelector(
    (state) => state.bankdeposit
  );

  console.log(bankdeposit);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleOpen = () => {
    if (ref?.current) {
      ref?.current?.open();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearStatebankdeposit());
    };
  }, []);

  const onChange = (name: string, value: any) => {
    console.log(value);
    setAmount(value);
  };

  useEffect(() => {
    if (bankdeposit?.status) {
      handleOpen();
      // router.replace("/TransactionDeposit/BankDepositSuccess");
    }
  }, [bankdeposit?.status]);

  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.01
        }}
        className="gap-2"
      >
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible(false);
              ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
              {errors?.error?.map((item: any) => {
                <Text>{item}</Text>
              })}
              </View> */}
              {errors?.error &&
                typeof errors.error === "object" &&
                !Array.isArray(errors.error) &&
                Object.keys(errors.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errors.error[key])
                      ? errors.error[key].join(", ") // Handle arrays by joining the elements
                      : errors.error[key]}{" "}
                  </Text>
                ))}
              {errors?.error && typeof errors.error !== "object" && (
                <Text className="mb-3">{errors.error}</Text>
              )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible(false);
                  ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={isVisible2}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible2(false);
              ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              <View className="flex-col">
                <Text>{show2}</Text>
              </View>

              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible2(false);
                  ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <View
          style={{
            flex: 1,
            paddingHorizontal: width * 0.01
          }}
          className="gap-1"
        >
          <View
            style={{ width: width * 0.63 }}
            className="flex-row justify-between items-center mb-1"
          >
            <TouchableOpacity
              onPress={() => router.push("/TransactionDeposit/Banks")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Direct deposit</Text>
          </View>
          <View className="items-center justify-center mb-2">
            <TransactionTextLabel
              label="Amount"
              onChangeText={(value: number) => onChange("amount", value)}
              placeholder="Enter amount 0.00"
            />
          </View>
          {authenticatingbankdeposit ? (
            <View className="flex-row justify-center items-center mb-2">
              <ActivityIndicator
                color={"#105CE2"}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ) : (
            <View className="items-center justify-center">
              <BlueSignInButton
                title="Proceed"
                onPress={() => {
                  if (!amount) {
                    setIsVisible2(true);
                    setShow2("Input Amount to Proceed");
                    return;
                  }
                  dispatch(
                    BankDeposit({
                      router: router.push,
                      setIsVisible: setIsVisible,
                      setShow: setShow
                    })
                  );
                  // handleOpen();
                  // ref?.current?.open();
                }}
              />
            </View>
          )}

          <BottomSheet height={640} ref={ref}>
            <ScrollView
              style={{
                // flex: 1,
                // marginTop: statusBarHeight,
                paddingHorizontal: width * 0.03
              }}
              className="gap-6"
            >
              <View className="flex-row justify-center items-center mb-1">
                {/* <TouchableOpacity
                onPress={() =>
                  router.push("/TransactionDeposit/BankDepositDetails")
                }
              >
                <Back />
              </TouchableOpacity> */}
                <Text className="text-[20px] text-pagetitle">
                  Transaction Summary
                </Text>
                <Text></Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Amount</Text>
                <Text className="text-darktext font-[14px]">{amount}</Text>
              </View>
              {/* <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Fees</Text>
              <Text className="text-darktext font-[14px]">$0.00</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Tax</Text>
              <Text className="text-darktext font-[14px]">$0.00</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">
                Deposit type
              </Text>
              <Text className="text-darktext font-bold">Bank deposit</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-3"
            >
              <Text className="text-lighttextdark font-[14px]">Total</Text>
              <Text className="text-buttonprimary font-[14px]">$500</Text>
            </View> */}
              <View className="flex-col gap-1 items-start">
                <Text className="text-dark font-bold">Deposit:</Text>
                <Text className="text-lighttextdark">
                  Make your payment to the account number generated below
                </Text>
              </View>
              <View
                style={{
                  borderColor: "#105CE2B2",
                  height: height * 0.24,
                  borderWidth: 2,
                  borderRadius: 10,
                  backgroundColor: "#105CE2B2",
                  opacity: 0.4,
                  paddingVertical: height * 0.02,
                  paddingHorizontal: width * 0.04
                }}
                className="flex-col items-start"
              >
                <Text
                  style={{ color: "#000000", fontWeight: "bold" }}
                  className="font-[12px]"
                >
                  Bank account details:
                </Text>
                <View className="flex-row gap-2 items-center">
                  <BankHouse />
                  <View className="gap-1">
                    <Text className="font-[10px]">Bank name</Text>
                    <Text style={{ color: "#000000", fontWeight: "bold" }}>
                      {bankdeposit?.data?.bank_name}
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-2 items-center">
                  <PayNumber />
                  <View className="gap-1">
                    <Text className="font-[10px]">Account number</Text>
                    <Text style={{ color: "#000000", fontWeight: "bold" }}>
                      {bankdeposit?.data?.account_number}
                    </Text>
                  </View>
                  <Copyname />
                </View>
                <View className="flex-row gap-2 items-center">
                  <PayName />
                  <View className="gap-1">
                    <Text className="font-[10px]">Account name</Text>
                    <Text style={{ color: "#000000", fontWeight: "bold" }}>
                      {bankdeposit?.data?.account_name}
                    </Text>
                  </View>
                </View>
              </View>
              {/* {authenticatingbankdeposit ? (
                <View className="flex-row justify-center items-center mb-2">
                  <ActivityIndicator
                    color={"#105CE2"}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              ) :
               ( */}
              <View className="items-center justify-center mb-2">
                <BlueSignInButton
                  title="I have transferred"
                  onPress={() => {
                    // if (!amount) {
                    //   setIsVisible(true);
                    //   setShow("Emergency fund percentage must not exceed 7");
                    //   return;
                    // }

                    // dispatch(
                    //   BankDeposit({
                    //     router: router.push,
                    //     setIsVisible: setIsVisible,
                    //     setShow: setShow
                    //   })
                    // );
                    router.replace(`/TransactionDeposit/BankDepositSuccess?amount=${amount}`);
                  }}
                  // router.push("/TransactionDeposit/BankDepositSuccess")
                  // onPress={() => router.push('/TransactionDeposit/BankDepositVerify')}
                />
              </View>
              {/* )} */}
            </ScrollView>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BankDepositDetails;
