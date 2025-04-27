import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Ladypics from "../../assets/ladypics.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import TextLabelBoxBarcode from "@/components/TextLabelBoxBarcode";
import { Summary } from "@/Store/Apis/Summary";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShortBlueButton from "@/components/ShortBlueButton";
import { BottomSheet } from "@/components/Bottom";
import FourDigits from "@/components/FourDigits";
import SixDigits from "@/components/SixDigits";
import SixDigitsPin from "@/components/SixDigitsPin";
import { WiremiTransaction } from "@/Store/Apis/WiremiTransaction";
import { clearStatesummary } from "@/Store/Reducers/Summary";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const WiremiDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show2, setShow2] = useState("");
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [show3, setShow3] = useState("");
  const ref = useRef<BottomSheetRef>(null);
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));

  const handleCloseModal = () => {
    ref.current?.close();
  };

  useEffect(() => {
    const fetchCountry = async () => {
      const ownercountry = await AsyncStorage.getItem("country"); // ✅ Wait for the Promise
      setCountry(ownercountry || ""); // ✅ Ensure it's always a string
    };

    fetchCountry();
    dispatch(clearStatesummary());
  }, []);

  console.log(pin);

  const { summary, authenticatingsummary, errors } = useAppSelector(
    (state) => state.summary
  );

  const {
    wiremitransaction,
    authenticatingwiremitransaction,
    errorswiremitransaction
  } = useAppSelector((state) => state.wiremitransaction);

  const [wiremidetails, setwiremidetails] = useState({
    amount: "",
    wiremiId: "",
    narration: ""
  });

  const onChange = (name: string, value: any) => {
    console.log(value);
    setwiremidetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // const onChangepin = (value: string, index: number) => {
  //   setPin((prevPin) => {
  //     const newPin = [...prevPin]; // Copy the existing array
  //     newPin[index] = value; // Update only the specific index
  //     return newPin; // Set the new state
  //   });
  // };

  const onChangenarration = (value: string) => {
    setwiremidetails((prevState) => ({
      ...prevState,
      narration: value
    }));
  };

  useEffect(() => {
    if (wiremidetails?.wiremiId?.length > 10) {
      dispatch(
        Summary({
          amount: wiremidetails?.amount,
          country: country,
          type: "WIREMI_TRANSFER",
          receiver_account_id: wiremidetails?.wiremiId,
          router: router.push,
          transfer: "true",
          setIsVisible: setIsVisible,
          setShow: setShow
        })
      );
    }
  }, [wiremidetails?.wiremiId, country, wiremidetails?.amount]);

  useEffect(() => {
    if (
      pin?.join("").length === 6 &&
      wiremidetails?.amount &&
      wiremidetails?.wiremiId &&
      summary?.receiver
    ) {
      ref?.current?.close();
      dispatch(
        WiremiTransaction({
          amount: wiremidetails?.amount,
          recipient_account_number: wiremidetails?.wiremiId,
          pin: pin.join(""),
          router: router.push,
          setIsVisible: setIsVisible3,
          setShow: setShow3
        })
      );
    }
  }, [summary?.receiver, wiremidetails?.wiremiId, wiremidetails?.amount, pin]);

  const handlePinChange = (newPin: string) => {
    if (newPin === "backspace") {
      setPin((prevPin) => prevPin.slice(0, -1)); // Remove last character
    } else {
      setPin((prevPin) => [...prevPin, newPin]); // Add new digit
    }
  };

  const handleKeypadPress = (num: string) => {
    const nextIndex = pin.findIndex((input) => input === ""); // Find next empty field

    if (num === "backspace") {
      // Handle backspace
      const updatedPin = [...pin];
      const lastIndex = updatedPin.findLastIndex((digit) => digit !== ""); // Find last filled field
      if (lastIndex !== -1) {
        updatedPin[lastIndex] = "";
        setPin(updatedPin);
      }
    } else if (nextIndex !== -1) {
      // Fill next empty field
      const updatedPin = [...pin];
      updatedPin[nextIndex] = num;
      setPin(updatedPin);
    }
  };

  useEffect(() => {
    if (wiremitransaction?.status) {
      setPin(Array(6).fill(""));
      router.push(
        `/TransactionSendMoney/WiremiSuccess?amount=${wiremidetails?.amount}`
      );
    }
  }, [wiremitransaction?.status]);
  return (
    <View // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-3"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            // keyboardShouldPersistTaps="handled"
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={isVisible3}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => setIsVisible3(false)}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  {/* <View className="flex-col">
                              {errors?.error?.map((item: any) => {
                                <Text>{item}</Text>
                              })}
                              </View> */}
                  {errorswiremitransaction?.error &&
                    typeof errorswiremitransaction.error === "object" &&
                    !Array.isArray(errorswiremitransaction.error) &&
                    Object.keys(errorswiremitransaction.error).map(
                      (key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(errorswiremitransaction.error[key])
                            ? errorswiremitransaction.error[key].join(", ") // Handle arrays by joining the elements
                            : errorswiremitransaction.error[key]}{" "}
                        </Text>
                      )
                    )}
                  {errorswiremitransaction?.error &&
                    typeof errorswiremitransaction.error !== "object" && (
                      <Text className="mb-3">
                        {errorswiremitransaction.error}
                      </Text>
                    )}
                  <ShortBlueButton
                    title="Close"
                    onPress={() => setIsVisible3(false)}
                  />
                </View>
              </Pressable>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isVisible2}
            >
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
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() =>
                  router.push("/TransactionSendMoney/TransferMoney")
                }
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Wiremi user</Text>
              <Text></Text>
            </View>
            <View className="items-center justify-center">
              <TransactionTextLabel
                label="Amount"
                placeholder="Enter amount 0.00"
                onChangeText={(value: number) => onChange("amount", value)}
              />
            </View>
            <View className="flex-col gap-2">
              <View className="items-center justify-center">
                <TextLabelBoxBarcode
                  label="Wiremi ID"
                  placeholder="Enter wiremi ID"
                  onChangeText={(value: number) => onChange("wiremiId", value)}
                />
              </View>
              <View className="justify-start">
                <View
                  style={{ paddingHorizontal: 10 }}
                  className="flex-row items-start justify-end gap-2"
                >
                  <Ladypics />
                  <Text className="text-buttonprimary">
                    {summary?.receiver?.first_name}{" "}
                    {summary?.receiver?.last_name}
                  </Text>
                </View>
              </View>
            </View>
            <View className="items-center justify-center">
              <TextLabelBox
                label="Narration"
                placeholder="Enter narration (optional)"
                value={wiremidetails?.narration}
                both
                onChangeText={(value: any) => onChangenarration(value)}
              />
            </View>
            {authenticatingwiremitransaction ? (
              <View className="flex-row justify-center items-center">
                <ActivityIndicator
                  color={"#105CE2"}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            ) : (
              <View
                style={{ height: height * 0.1 }}
                className="items-center justify-center"
              >
                <BlueSignInButton
                  title="Proceed"
                  // onPress={() => router.push("/TransactionSendMoney/WiremiSummary")}
                  onPress={() => {
                    if (!wiremidetails?.amount) {
                      setIsVisible2(true);
                      setShow2("Input Amount to Proceed");
                      return;
                    }
                    ref?.current?.open();
                  }}
                />
              </View>
            )}

            <BottomSheet height={580} ref={ref}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "rgba(235, 235, 235, 1)",
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 20
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(30, 27, 57, 1)",
                      fontSize: 19,
                      fontWeight: "bold"
                    }}
                  >
                    Enter PIN
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: 20
                  }}
                >
                  {/* <View
                style={{
                  backgroundColor: "rgba(243, 244, 245, 1)",
                  borderRadius: 10,
                  padding: 15,
                  width: "70%",
                  alignItems: "center"
                }}
              > */}
                  <SixDigitsPin pin={pin} onChangeText={handlePinChange} />
                  {/* </View> */}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: 20
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(243, 244, 245, 1)",
                      borderRadius: 10,
                      padding: 15,
                      width: "90%",
                      alignItems: "center",
                      gap: 10
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10
                      }}
                    >
                      {["1", "2", "3"].map((num) => (
                        <TouchableOpacity
                          key={num}
                          onPress={() => handleKeypadPress(num)}
                        >
                          <Text
                            style={{
                              width: width * 0.25,
                              borderWidth: 2,
                              height: height * 0.09,
                              fontSize: 22,
                              fontWeight: "600",
                              textAlign: "center",
                              textAlignVertical: "center",
                              backgroundColor: "white",
                              borderRadius: 12,
                              color: "black",
                              borderColor: "rgba(242, 244, 245, 1)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: height * 0.012 // Helps with vertical centering on iOS
                            }}
                          >
                            {num}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10
                      }}
                    >
                      {["4", "5", "6"].map((num) => (
                        <TouchableOpacity
                          key={num}
                          onPress={() => handleKeypadPress(num)}
                        >
                          <Text
                            style={{
                              width: width * 0.25,
                              borderWidth: 2,
                              height: height * 0.09,
                              fontSize: 22,
                              fontWeight: "600",
                              textAlign: "center",
                              textAlignVertical: "center",
                              backgroundColor: "white",
                              borderRadius: 12,
                              color: "black",
                              borderColor: "rgba(242, 244, 245, 1)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: height * 0.012 // Helps with vertical centering on iOS
                            }}
                          >
                            {num}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10
                      }}
                    >
                      {["7", "8", "9"].map((num) => (
                        <TouchableOpacity
                          key={num}
                          onPress={() => handleKeypadPress(num)}
                        >
                          <Text
                            style={{
                              width: width * 0.25,
                              borderWidth: 2,
                              height: height * 0.09,
                              fontSize: 22,
                              fontWeight: "600",
                              textAlign: "center",
                              textAlignVertical: "center",
                              backgroundColor: "white",
                              borderRadius: 12,
                              color: "black",
                              borderColor: "rgba(242, 244, 245, 1)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: height * 0.012 // Helps with vertical centering on iOS
                            }}
                          >
                            {num}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10
                      }}
                    >
                      <TouchableOpacity
                        //   key={num}
                        onPress={() => handleKeypadPress("0")}
                      >
                        <Text
                          style={{
                            width: width * 0.5,
                            borderWidth: 2,
                            height: height * 0.09,
                            fontSize: 22,
                            fontWeight: "600",
                            textAlign: "center",
                            textAlignVertical: "center",
                            backgroundColor: "white",
                            borderRadius: 12,
                            color: "black",
                            borderColor: "rgba(242, 244, 245, 1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: height * 0.012 // Helps with vertical centering on iOS
                          }}
                        >
                          0
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleKeypadPress("backspace")}
                        style={{
                          width: width * 0.25,
                          borderWidth: 2,
                          height: height * 0.09,
                          backgroundColor: "white",
                          borderRadius: 12,
                          borderColor: "rgba(242, 244, 245, 1)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: height * 0.012
                        }}
                      >
                        <Back />
                      </TouchableOpacity>
                      {/* ))} */}
                    </View>
                  </View>
                </View>
              </View>
            </BottomSheet>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default WiremiDetails;
