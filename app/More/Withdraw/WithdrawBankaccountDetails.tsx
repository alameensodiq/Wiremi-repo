import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  FlatList,
  Pressable,
  Modal,
  KeyboardAvoidingView
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Royal from "../../../assets/royalbank.svg";
import Chase from "../../../assets/chase.svg";
import BankAmerica from "../../../assets/bankamerica.svg";
import Barclays from "../../../assets/barclays.svg";
import HSBC from "../../../assets/hsbc.svg";
import TDBANK from "../../../assets/tdbank.svg";
import Scotia from "../../../assets/scotiabank.svg";
import BMO from "../../../assets/bmo.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStatesummary } from "@/Store/Reducers/Summary";
import { clearStateaccountname } from "@/Store/Reducers/AccountName";
import { clearStatesupportedcountries } from "@/Store/Reducers/SupportedCountries";
import { SupportedCountries } from "@/Store/Apis/SupportedCountries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SixDigitsPin from "@/components/SixDigitsPin";
import { TextInput } from "react-native";
import { BankWithdrawalInstitution } from "@/Store/Apis/BankWithdrawalInstitution";
import ShortBlueButton from "@/components/ShortBlueButton";
import { ScrollView } from "react-native";
import { AccountName } from "@/Store/Apis/AccountName";
import { ActivityIndicator } from "react-native";
import { Summary } from "@/Store/Apis/Summary";
import { BankWithdrawal } from "@/Store/Apis/BankWithdrawal";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const WithdrawBankaccountDetails = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery3, setSearchQuery3] = useState("");
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const handleCloseModal = () => {
    ref.current?.close();
  };
  const ref2 = useRef<BottomSheetRef>(null);
  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
  const ref3 = useRef<BottomSheetRef>(null);
  const handleCloseModal3 = () => {
    ref3.current?.close();
  };
  const ref4 = useRef<BottomSheetRef>(null);
  const handleCloseModal4 = () => {
    ref4.current?.close();
  };
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(10000000000);
  const [selectedIndex3, setIndex3] = React.useState<number>(10000000000);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [show3, setShow3] = useState("");
  const [isVisible4, setIsVisible4] = useState<boolean>(false);
  const [show4, setShow4] = useState("");
  const [isVisible5, setIsVisible5] = useState<boolean>(false);
  const [show5, setShow5] = useState("");
  const [isVisible6, setIsVisible6] = useState<boolean>(false);
  const [show6, setShow6] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [showreason, setShowreason] = useState(false);

  const [bank, setBank] = useState({
    name: "",
    code: ""
  });
  const [countries, setcountries] = useState({
    name: "",
    code: ""
  });
  const [bankdetails, setbankdetails] = useState({
    amount: "",
    account_number: "",
    reason: ""
  });

  const onChange = (name: string, value: any) => {
    console.log(value);
    setbankdetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onChangeAccountnumber = (value: string) => {
    setbankdetails((prevState) => ({
      ...prevState,
      account_number: value
    }));
  };

  const { summary, authenticatingsummary, errors } = useAppSelector(
    (state) => state.summary
  );

  console.log(summary);

  const {
    supportedcountries,
    authenticatingsupportedcountries,
    errorssupportedcountries
  } = useAppSelector((state) => state.supportedcountries);

  const {
    bankwithdrawalinstitution,
    authenticatingbankwithdrawalinstitution,
    errorsbankwithdrawalinstitution
  } = useAppSelector((state) => state.bankwithdrawalinstitution);

  const { accountname, authenticatingaccountname, errorsaccountname } =
    useAppSelector((state) => state.accountname);
  console.log(accountname);

  const { bankwithdrawal, authenticatingbankwithdrawal, errorsbankwithdrawal } =
    useAppSelector((state) => state.bankwithdrawal);
  console.log(bankwithdrawal);

  useEffect(() => {
    dispatch(clearStatesummary());
    dispatch(clearStateaccountname());
    dispatch(clearStatesupportedcountries());
    dispatch(
      SupportedCountries({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
    const fetchCountry = async () => {
      const ownercountry = await AsyncStorage.getItem("country"); // ✅ Wait for the Promise
      setCountry(ownercountry || ""); // ✅ Ensure it's always a string
    };

    fetchCountry(); // Call the async function
    return () => {
      dispatch(clearStatesummary());
      dispatch(clearStateaccountname());
      dispatch(clearStatesupportedcountries());
    };
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    if (summary?.receiver) {
      if (ref3) {
        ref3?.current?.open();
      }
    }
  }, [summary?.receiver]);

  useEffect(() => {
    if (countries?.code) {
      dispatch(
        BankWithdrawalInstitution({
          router: router.push,
          setIsVisible: setIsVisible3,
          setShow: setShow3,
          code: countries?.code
        })
      );
    }
  }, [countries?.code]);

  useEffect(() => {
    if (bank?.code && bankdetails?.account_number?.length >= 10) {
      dispatch(
        AccountName({
          router: router.push,
          setIsVisible: setIsVisible4,
          setShow: setShow4,
          bankCode: bank?.code,
          accountNumber: bankdetails?.account_number
        })
      );
    }
  }, [bank?.code, bankdetails?.account_number]);

  useEffect(() => {
    if (pin?.join("").length === 6) {
      ref4?.current?.close();
      dispatch(
        BankWithdrawal({
          amount: Number(bankdetails?.amount),
          bank_code: bank?.code,
          account_number: bankdetails?.account_number,
          reason: bankdetails?.reason,
          country: country,
          router: router.push,
          name: bank?.name,
          pin: pin.join(""),
          meta: {
            scheme: "BANKACCOUNT",
            counterparty: {
              name: accountname?.data?.account_name
            }
          },
          setIsVisible: setIsVisible5,
          setShow: setShow5
        })
      );
      // setPin([])
    }
  }, [pin]);

  useEffect(() => {
    if (bankwithdrawal?.status) {
      setPin(Array(6).fill(""));
      router.replace(
        `/More/Withdraw/WithdrawReceipt?amount=${bankwithdrawal?.data?.amount}&fee=${bankwithdrawal?.data?.fee}&currency=${bankwithdrawal?.data?.currency}&receivername=${bankwithdrawal?.data?.counterparty?.account_name}&receiverbank=${bankwithdrawal?.data?.counterparty?.bank_name}&receivernumber=${bankwithdrawal?.data?.counterparty?.account_number}&type=${bankwithdrawal?.data?.type}&date=${bankwithdrawal?.data?.updated_at}&status=${bankwithdrawal?.data?.status}&reference=${bankwithdrawal?.data?.reference}&reason=${bankwithdrawal?.data?.reason}`
      );
    }
  }, [bankwithdrawal?.status]);

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

  const data2 = supportedcountries?.data;

  const filteredData = data2?.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const data3 = bankwithdrawalinstitution?.data;

  const filteredData3 = data3?.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery3.toLowerCase())
  );

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
                  {errorssupportedcountries?.error &&
                    typeof errorssupportedcountries.error === "object" &&
                    !Array.isArray(errorssupportedcountries.error) &&
                    Object.keys(errorssupportedcountries.error).map(
                      (key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(errorssupportedcountries.error[key])
                            ? errorssupportedcountries.error[key].join(", ") // Handle arrays by joining the elements
                            : errorssupportedcountries.error[key]}{" "}
                        </Text>
                      )
                    )}
                  {errorssupportedcountries?.error &&
                    typeof errorssupportedcountries.error !== "object" && (
                      <Text className="mb-3">
                        {errorssupportedcountries.error}
                      </Text>
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
                  {errorsbankwithdrawalinstitution?.error &&
                    typeof errorsbankwithdrawalinstitution.error === "object" &&
                    !Array.isArray(errorsbankwithdrawalinstitution.error) &&
                    Object.keys(errorsbankwithdrawalinstitution.error).map(
                      (key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(
                            errorsbankwithdrawalinstitution.error[key]
                          )
                            ? errorsbankwithdrawalinstitution.error[key].join(
                                ", "
                              ) // Handle arrays by joining the elements
                            : errorsbankwithdrawalinstitution.error[key]}{" "}
                        </Text>
                      )
                    )}
                  {errorsbankwithdrawalinstitution?.error &&
                    typeof errorsbankwithdrawalinstitution.error !==
                      "object" && (
                      <Text className="mb-3">
                        {errorsbankwithdrawalinstitution.error}
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
              visible={isVisible4}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => setIsVisible4(false)}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  {/* <View className="flex-col">
                                          {errors?.error?.map((item: any) => {
                                            <Text>{item}</Text>
                                          })}
                                          </View> */}
                  {errorsaccountname?.error &&
                    typeof errorsaccountname.error === "object" &&
                    !Array.isArray(errorsaccountname.error) &&
                    Object.keys(errorsaccountname.error).map((key, index) => (
                      <Text key={index}>
                        {key}:{" "}
                        {Array.isArray(errorsaccountname.error[key])
                          ? errorsaccountname.error[key].join(", ") // Handle arrays by joining the elements
                          : errorsaccountname.error[key]}{" "}
                      </Text>
                    ))}
                  {errorsaccountname?.error &&
                    typeof errorsaccountname.error !== "object" && (
                      <Text className="mb-3">{errorsaccountname.error}</Text>
                    )}
                  <ShortBlueButton
                    title="Close"
                    onPress={() => setIsVisible4(false)}
                  />
                </View>
              </Pressable>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isVisible5}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => setIsVisible5(false)}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  {/* <View className="flex-col">
                                          {errors?.error?.map((item: any) => {
                                            <Text>{item}</Text>
                                          })}
                                          </View> */}
                  {errorsbankwithdrawal?.error &&
                    typeof errorsbankwithdrawal.error === "object" &&
                    !Array.isArray(errorsbankwithdrawal.error) &&
                    Object.keys(errorsbankwithdrawal.error).map(
                      (key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(errorsbankwithdrawal.error[key])
                            ? errorsbankwithdrawal.error[key].join(", ") // Handle arrays by joining the elements
                            : errorsbankwithdrawal.error[key]}{" "}
                        </Text>
                      )
                    )}
                  {errorsbankwithdrawal?.error &&
                    typeof errorsbankwithdrawal.error !== "object" && (
                      <Text className="mb-3">{errorsbankwithdrawal.error}</Text>
                    )}
                  <ShortBlueButton
                    title="Close"
                    onPress={() => setIsVisible5(false)}
                  />
                </View>
              </Pressable>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isVisible6}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => setIsVisible6(false)}
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
                    onPress={() => setIsVisible6(false)}
                  />
                </View>
              </Pressable>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showreason}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => setShowreason(false)}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  <Text className="mb-3">You must add a Narration</Text>
                  <ShortBlueButton
                    title="Close"
                    onPress={() => setShowreason(false)}
                  />
                </View>
              </Pressable>
            </Modal>
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/TransactionSendMoney")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Bank account</Text>
              <Text></Text>
            </View>
            <View className="items-center justify-center">
              <TransactionTextLabel
                label="Amount"
                placeholder="Enter amount 0.00"
                onChangeText={(value: number) => onChange("amount", value)}
              />
            </View>
            <TouchableOpacity onPress={() => ref2?.current?.open()}>
              <View className="items-center justify-center">
                <TransparentSelectButton
                  label="Country"
                  placeholder={
                    countries?.name ? countries?.name : "Select Country"
                  }
                  onPress={() => ref2?.current?.open()}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ref.current?.open()}>
              <View className="items-center justify-center">
                <TransparentSelectButton
                  label="Destination bank"
                  placeholder={
                    bank?.name ? bank?.name : "Select destination bank"
                  }
                  onPress={() => ref?.current?.open()}
                />
              </View>
            </TouchableOpacity>
            <View>
              <View className="items-center justify-center">
                <TextLabelBox
                  number
                  label="Account number"
                  placeholder="Enter account number"
                  onChangeText={(value: any) => onChangeAccountnumber(value)}
                />
              </View>
              <View className="justify-end flex-row items-center pr-2">
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                />
                <Text style={{ color: "#105CE2" }}>
                  {" "}
                  {accountname?.data?.account_name}
                </Text>
              </View>
            </View>
            <View className="items-center justify-center">
              <TextLabelBox
                label="Narration"
                placeholder="Enter narration (optional)"
                onChangeText={(value: any) => onChange("reason", value)}
              />
            </View>
            {authenticatingsummary || authenticatingbankwithdrawal ? (
              <View className="flex-row justify-center items-center">
                <ActivityIndicator
                  color={"#105CE2"}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            ) : (
              <View
                style={{ height: height * 0.2 }}
                className="items-center justify-center"
              >
                <BlueSignInButton
                  title="Proceed"
                  onPress={() => {
                    if (!bankdetails?.reason) {
                      setShowreason(true);
                    } else {
                      dispatch(
                        Summary({
                          amount: bankdetails?.amount,
                          country: country,
                          type: "BANK_WITHDRAWAL",
                          router: router.push,
                          transfer: "true",
                          setIsVisible: setIsVisible6,
                          setShow: setShow6
                        })
                      );
                    }
                  }}
                />
              </View>
            )}

            <BottomSheet height={650} ref={ref}>
              <View style={{ padding: 20, gap: 30, paddingBottom: 50 }}>
                {/* <Text>Bottom Sheet Content</Text>
                                          <TouchableOpacity onPress={handleCloseModal}>
                                            <Text>Close</Text>
                                          </TouchableOpacity> */}
                <View className="items-center">
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#2A94F4",
                      fontWeight: "bold"
                    }}
                  >
                    Select Bank
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <TextInput
                    style={{ color: "#606162" }}
                    value={searchQuery3}
                    onChangeText={(text) => setSearchQuery3(text)}
                    placeholder="Search for Bank"
                  />
                  {/* <CheckBox
                                            checked={selectedIndex === 20}
                                            onPress={() => setIndex(20)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                          /> */}
                </View>
                <View style={{ height: height * 0.47 }}>
                  <FlatList
                    data={filteredData3}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => {
                          console.log(item?.name);
                          setIndex3(index);
                          setBank((prev) => ({
                            ...prev, // Spread the previous state correctly
                            name: item?.name, // Update the "country" property,
                            code: item?.code
                          }));
                          handleCloseModal();
                        }}
                      >
                        <View className="flex-row justify-between gap-3">
                          <View className="flex-col gap-2">
                            <View className="flex-row items-center">
                              {/* {item?.image} */}
                              <Text className="text-[14px] font-bold">
                                {item?.name}
                              </Text>
                            </View>
                            {/* <View className="flex-row">
                                                      <Text
                                                        className="text-[12px] ml-4"
                                                        style={{ color: "#105CE2" }}
                                                      >
                                                        Active
                                                      </Text>
                                                    </View> */}
                          </View>
                          <View className="flex-col items-end">
                            <CheckBox
                              checked={
                                selectedIndex3 === index ||
                                bank?.code === item?.code
                              }
                              // onPress={() => setIndex(index)}
                              onPress={() => {
                                console.log(item?.name);
                                setIndex3(index);
                                setBank((prev) => ({
                                  ...prev, // Spread the previous state correctly
                                  name: item?.name, // Update the "country" property,
                                  code: item?.code
                                }));
                                handleCloseModal();
                              }}
                              checkedIcon="dot-circle-o"
                              uncheckedIcon="circle-o"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyExtractor={(item, index) =>
                      item.code || index.toString()
                    }
                    contentContainerStyle={{
                      gap: 0,
                      paddingBottom: 50
                    }}
                  />
                </View>
              </View>
            </BottomSheet>
            <BottomSheet height={550} ref={ref2}>
              <View style={{ padding: 20, gap: 30, paddingBottom: 50 }}>
                {/* <Text>Bottom Sheet Content</Text>
                                              <TouchableOpacity onPress={handleCloseModal}>
                                                <Text>Close</Text>
                                              </TouchableOpacity> */}
                <View className="items-center">
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#2A94F4",
                      fontWeight: "bold"
                    }}
                  >
                    Countries
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <TextInput
                    style={{ color: "#606162" }}
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    placeholder="Search for Country"
                  />
                  {/* <CheckBox
                                                checked={selectedIndex === 20}
                                                onPress={() => setIndex(20)}
                                                checkedIcon="dot-circle-o"
                                                uncheckedIcon="circle-o"
                                              /> */}
                </View>
                <View style={{ height: height * 0.47 }}>
                  <FlatList
                    data={filteredData}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => {
                          console.log(item?.name);
                          setIndex(index);
                          setcountries((prev) => ({
                            ...prev, // Spread the previous state correctly
                            name: item?.name, // Update the "country" property,
                            code: item?.code
                          }));
                          handleCloseModal2();
                        }}
                      >
                        <View className="flex-row justify-between gap-3">
                          <View className="flex-col gap-2">
                            <View className="flex-row items-center">
                              {/* {item?.image} */}
                              <Text className="text-[14px] font-bold">
                                {item?.name}
                              </Text>
                            </View>
                            {/* <View className="flex-row">
                                                          <Text
                                                            className="text-[12px] ml-4"
                                                            style={{ color: "#105CE2" }}
                                                          >
                                                            Active
                                                          </Text>
                                                        </View> */}
                          </View>
                          <View className="flex-col items-end">
                            <CheckBox
                              checked={
                                selectedIndex === index ||
                                countries?.code === item?.code
                              }
                              // onPress={() => setIndex(index)}
                              onPress={() => {
                                console.log(item?.name);
                                setIndex(index);
                                setcountries((prev) => ({
                                  ...prev, // Spread the previous state correctly
                                  name: item?.name, // Update the "country" property,
                                  code: item?.code
                                }));
                                handleCloseModal2();
                              }}
                              checkedIcon="dot-circle-o"
                              uncheckedIcon="circle-o"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyExtractor={(item, index) =>
                      item.code || index.toString()
                    }
                    contentContainerStyle={{
                      gap: 0,
                      paddingBottom: 50
                    }}
                  />
                </View>
              </View>
            </BottomSheet>
            <BottomSheet height={540} ref={ref3}>
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
                    Transfer type
                  </Text>
                  <Text className="text-darktext font-bold">
                    Bank Withdrawal
                  </Text>
                </View>
                {/* <View
                            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                            className="flex-row items-center justify-between p-3"
                          >
                            <Text className="text-lighttextdark font-[14px]">Total</Text>
                            <Text className="text-buttonprimary font-[14px]">$500</Text>
                          </View> */}
                <View className="items-center justify-center mb-4">
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => {
                      ref3?.current?.close();
                      setTimeout(() => {
                        ref4?.current?.open();
                      }, 500);
                    }}
                    // onPress={() => router.push("/TransactionDeposit/MomoSuccess")}
                  />
                </View>
              </ScrollView>
            </BottomSheet>
            <BottomSheet height={580} ref={ref4}>
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

export default WithdrawBankaccountDetails;
