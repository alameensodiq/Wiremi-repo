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
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import { BottomSheet } from "@/components/Bottom";
import TextLabelBox from "@/components/TextLabelBox";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { Summary } from "@/Store/Apis/Summary";
import ShortBlueButton from "@/components/ShortBlueButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MomoDeposit } from "@/Store/Apis/MomoDeposit";
import { clearStatemomodeposit } from "@/Store/Reducers/MomoDeposit";
import { clearStatesummary } from "@/Store/Reducers/Summary";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MomoDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState("");
  const [trans, setTrans] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show2, setShow2] = useState("");

  const [amount, setAmount] = useState("");

  const { summary, authenticatingsummary, errors } = useAppSelector(
    (state) => state.summary
  );

  const onChange = (name: string, value: any) => {
    console.log(value);
    setAmount(value);
  };

  const onChangeTrans = (name: string, value: any) => {
    console.log(value);
    setTrans(value);
  };

  console.log(summary);

  useEffect(() => {
    const fetchCountry = async () => {
      const ownercountry = await AsyncStorage.getItem("country"); // ✅ Wait for the Promise
      setCountry(ownercountry || ""); // ✅ Ensure it's always a string
    };

    fetchCountry(); // Call the async function

    if (summary?.amount && amount) {
      ref.current?.open();
    }
  }, [summary?.amount]);

  console.log(country);

  const { momodeposit, authenticatingmomodeposit } = useAppSelector(
    (state) => state.momodeposit
  );

  useEffect(() => {
    if (momodeposit?.status) {
      router.replace("/TransactionDeposit/MomoSuccess");
    }
    return () => {
      dispatch(clearStatemomodeposit());
      dispatch(clearStatesummary());
    };
  }, [momodeposit?.status]);

  const handleCloseModal = () => {
    ref.current?.close();
  };
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
            onPress={() => setIsVisible(false)}
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
                onPress={() => setIsVisible(false)}
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
            onPress={() => setIsVisible2(false)}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              <View className="flex-col">
                <Text>{show2}</Text>
              </View>

              <ShortBlueButton
                title="Close"
                onPress={() => setIsVisible2(false)}
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
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/TransactionDeposit/MobileMoney")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Momo USSD</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center mb-2">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount $0.00"
              onChangeText={(value: number) => onChange("amount", value)}
            />
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => {
                if (!amount) {
                  setIsVisible2(true);
                  setShow2("Input Amount to Proceed");
                  return;
                }
                if (country !== "Cameroon") {
                  setIsVisible2(true);
                  setShow2("Only Cameroon can use this service");
                  return;
                }

                dispatch(
                  Summary({
                    amount: amount,
                    country: country,
                    type: "MANUEL_MOMO_TOPUP",
                    router: router.push,
                    setIsVisible: setIsVisible,
                    setShow: setShow
                  })
                );
              }}
              // onPress={() => router.push("/TransactionDeposit/MomoSummary")}
              // onPress={() => ref?.current?.open()}
            />
          </View>
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
                onPress={() => router.push("/TransactionDeposit/MomoDetails")}
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
                <Text className="text-darktext font-[14px]">
                  {summary?.currency}
                  {summary?.amount}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Fees</Text>
                <Text className="text-darktext font-[14px]">
                  {summary?.currency}
                  {summary?.fee}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Tax</Text>
                <Text className="text-darktext font-[14px]">
                  {summary?.currency}
                  {summary?.tax}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Deposit type
                </Text>
                <Text className="text-darktext font-bold">Momo USSD</Text>
              </View>
              <View
                style={{ height: height * 0.2 }}
                className="items-center justify-center"
              >
                <TextLabelBox
                  label="Transaction reference"
                  placeholder="Enter transaction reference"
                  onChangeText={(value: any) => onChangeTrans("trans", value)}
                />
              </View>
              {/* <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Total</Text>
            <Text className="text-buttonprimary font-[14px]">$500</Text>
          </View> */}
              <View className="items-center justify-center mb-4">
                {authenticatingmomodeposit ? (
                  <View className="flex-row justify-center items-center">
                    <ActivityIndicator
                      color={"#105CE2"}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                ) : (
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => {
                      dispatch(
                        MomoDeposit({
                          amount,
                          trans,
                          router: router.push,
                          setIsVisible: setIsVisible,
                          setShow: setShow
                        })
                      );
                    }}
                    // onPress={() => router.push("/TransactionDeposit/MomoSuccess")}
                  />
                )}
              </View>
            </ScrollView>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MomoDetails;
