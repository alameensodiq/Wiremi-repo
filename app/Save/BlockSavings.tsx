import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Calendar from "../../assets/calendar.svg";
import Cards from "../../assets/savingscard.svg";
import Bank from "../../assets/savingsbank.svg";
import Momo from "../../assets/savingsmomo.svg";
import Wiremi from "../../assets/savingswiremi.svg";
import { FlatList } from "react-native";
import SearchLabelBox from "@/components/SearchLabelBox";
import Royal from "../../assets/royalbank.svg";
import Chase from "../../assets/chase.svg";
import BankAmerica from "../../assets/bankamerica.svg";
import Barclays from "../../assets/barclays.svg";
import HSBC from "../../assets/hsbc.svg";
import TDBANK from "../../assets/tdbank.svg";
import Scotia from "../../assets/scotiabank.svg";
import BMO from "../../assets/bmo.svg";
import { CreatingSavings } from "@/Store/Apis/CreateSavings";
import ShortBlueButton from "@/components/ShortBlueButton";
import { clearStatesavedashboard } from "@/Store/Reducers/SavingDashboard";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";
import { AllwithdrawalBanks } from "@/Store/Apis/AllwithdrawalBanks";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { SavingDashboard } from "@/Store/Apis/SavingDashboard";
import { SavingActive } from "@/Store/Apis/SavingActive";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const BlockSavings = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [selectedIndex, setIndex] = useState(0);
  const [show, setShow] = useState("");
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [savingcreate, setSavingscreate] = useState({
    goal_name: "",
    saving_interval: "",
    amount_per_interval: 0,
    duration: 0,
    emergency_fund_percentage: 0,
    penalty_percentage: 0,
    status: "active",
    saving_type: "block",
    schedule: "",
    schedule_info: {
      bankName: ""
    }
  });
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const ref6 = useRef<BottomSheetRef>(null);
  const ref7 = useRef<BottomSheetRef>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

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

  const { creatingsavings, authenticatingcreatingsavings, errors } =
    useAppSelector((state) => state.creatingsavings);

  console.log(
    creatingsavings,
    errors?.error,
    "................................."
  );

  const { allwithdrawalbanks, authenticatingallwithdrawalbanks } =
    useAppSelector((state) => state.allwithdrawalbanks);

  console.log(allwithdrawalbanks);

  useEffect(() => {
    dispatch(clearStatesavedashboard());
    dispatch(clearStatesaveactive());
    dispatch(AllwithdrawalBanks({ router: router.push, page }));
    if (creatingsavings?.status) {
      router.push("/Save/SaveDashboard");
    }
    if (creatingsavings?.status === false) {
      setIsVisible(true);
    }
    return () => {
      dispatch(SavingDashboard({ router: router.push }));
      dispatch(SavingActive());
    };
  }, [creatingsavings, page]);

  console.log(isVisible);

  const onChange = (name: string, value: any) => {
    console.log(value);
    setSavingscreate((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const onChangeSchedule = (name: string, value: any) => {
    console.log(value);
    setSavingscreate((prev: any) => ({
      ...prev,
      schedule_info: {
        ...prev.schedule_info, // Preserve existing keys in schedule_info
        [name]: value // Add or update the key-value pair
      }
    }));
  };

  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const data = [
    {
      id: "1",
      name: "daily",
      image: <Calendar />
    },
    {
      id: "2",
      name: "weekly",
      image: <Calendar />
    },
    {
      id: "3",
      name: "monthly",
      image: <Calendar />
    }
  ];

  const data2 = [
    {
      id: "1",
      name: "Wiremi",
      image: <Wiremi />
    },
    {
      id: "2",
      name: "Momo",
      image: <Momo />
    },
    {
      id: "3",
      name: "Bank",
      image: <Bank />
    },
    {
      id: "4",
      name: "Cards",
      image: <Cards />
    }
  ];

  console.log(
    creatingsavings,
    errors?.error,
    "................................."
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.05
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
        <KeyboardAvoidingView className="gap-2">
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Save/CreateSavingsList")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Block Savings</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Name"
              onChangeText={(value: any) => onChange("goal_name", value)}
              placeholder="Enter savings name"
            />
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              onChangeText={(value: number) =>
                onChange("amount_per_interval", value)
              }
              placeholder="Enter amount $0.00"
            />
          </View>
          <TouchableOpacity onPress={() => ref.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                label="Interval"
                onPress={() => ref.current?.open()}
                placeholder={
                  savingcreate?.saving_interval !== ""
                    ? savingcreate?.saving_interval
                    : "Select Interval"
                }
              />
            </View>
          </TouchableOpacity>
          <View className="items-center justify-center">
            <TextLabelBox
              number
              onChangeText={(value: any) => onChange("duration", value)}
              label="Duration"
              placeholder="Enter duration(months)"
            />
          </View>
          <TouchableOpacity onPress={() => ref2.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                onPress={() => ref2.current?.open()}
                label="Schedule transfer"
                placeholder={
                  savingcreate?.schedule !== ""
                    ? savingcreate?.schedule
                    : "Select schedule transfer"
                }
              />
            </View>
          </TouchableOpacity>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Late savings fine"
              placeholder="Enter late savings fine"
              number
              onChangeText={(value: any) =>
                onChange("penalty_percentage", value)
              }
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Emergency fund percentage"
              placeholder="Select emergency fund %"
              number
              onChangeText={(value: any) =>
                onChange("emergency_fund_percentage", value)
              }
            />
          </View>
          {authenticatingcreatingsavings ? (
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
                // onPress={() => router.push("/Save/RegularSavingsSummary")}
                onPress={() => {
                  const {
                    goal_name,
                    saving_interval,
                    amount_per_interval,
                    duration,
                    emergency_fund_percentage,
                    penalty_percentage,
                    status,
                    saving_type,
                    schedule,
                    schedule_info
                  } = savingcreate || {};
                  const parsedAmountPerInterval = Number(amount_per_interval);
                  const parsedDuration = Number(duration);
                  const parsedEmergencyFundPercentage = Number(
                    emergency_fund_percentage
                  );
                  const parsedPenaltyPercentage = Number(penalty_percentage);
                  const isNumber = (value: any) =>
                    !isNaN(value) && typeof value === "number";
                  if (
                    goal_name &&
                    saving_interval &&
                    isNumber(parsedAmountPerInterval) &&
                    isNumber(parsedDuration) &&
                    isNumber(parsedEmergencyFundPercentage) &&
                    isNumber(parsedPenaltyPercentage) &&
                    status &&
                    saving_type &&
                    schedule
                  ) {
                    if (parsedEmergencyFundPercentage > 7) {
                      setIsVisible(true);
                      setShow("Emergency fund percentage must not exceed 7");
                      return;
                    }
                    dispatch(
                      CreatingSavings({
                        goal_name,
                        saving_interval,
                        amount_per_interval: parsedAmountPerInterval,
                        duration: parsedDuration,
                        emergency_fund_percentage:
                          parsedEmergencyFundPercentage,
                        penalty_percentage: parsedPenaltyPercentage,
                        status,
                        saving_type,
                        schedule,
                        schedule_info,
                        router: router.push,
                        setIsVisible: setIsVisible,
                        setShow: setShow
                      })
                    );
                  } else {
                    console.log(
                      "Error: Please ensure all fields are valid and filled."
                    );
                  }
                }}
              />
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
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
                <Pressable
                  onPress={() => {
                    setSavingscreate((prev) => ({
                      ...prev, // Spread the previous state correctly
                      saving_interval: item?.name // Update the "country" property
                    }));
                    setIndex(index);
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
                        checked={
                          selectedIndex === index ||
                          item?.name === savingcreate?.saving_interval
                        }
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                    </View>
                  </View>
                </Pressable>
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
                    if (index === 0) {
                      ref3.current?.open();
                      setIndex(index);
                    }
                    if (index === 1) {
                      ref4.current?.open();
                      setIndex(index);
                      setSavingscreate((prev) => ({
                        ...prev, // Spread the previous state correctly
                        schedule: item?.name // Update the "country" property
                      }));
                    }
                    if (index === 2) {
                      ref5.current?.open();
                      setIndex(index);
                      setSavingscreate((prev) => ({
                        ...prev, // Spread the previous state correctly
                        schedule: item?.name // Update the "country" property
                      }));
                    }
                    if (index === 3) {
                      ref7.current?.open();
                      setIndex(index);
                      setSavingscreate((prev) => ({
                        ...prev, // Spread the previous state correctly
                        schedule: item?.name // Update the "country" property
                      }));
                    }
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
      <BottomSheet height={240} ref={ref3}>
        <View style={{ padding: 20, gap: 10 }}>
          {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Wiremi ID
            </Text>
          </View>
          <View style={{ height: height * 0.5 }} className="flex-col">
            <View className="items-center justify-center mb-3">
              <TextLabelBox
                label="Wiremi ID"
                both
                onChangeText={(value: any) => onChange("schedule", value)}
                placeholder="Enter Wiremi ID"
              />
            </View>
            <BlueSignInButton title="Ok" onPress={() => handleCloseModal3()} />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet height={240} ref={ref4}>
        <View style={{ padding: 20, gap: 10 }}>
          {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Momo
            </Text>
          </View>
          <View style={{ height: height * 0.5 }} className="flex-col">
            <View className="items-center justify-center mb-3">
              <TextLabelBox
                label="Momo number"
                placeholder="Enter Momo number"
                both
                onChangeText={(value: any) =>
                  onChangeSchedule("momonumber", value)
                }
              />
            </View>
            <BlueSignInButton title="Ok" onPress={() => handleCloseModal4()} />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet height={340} ref={ref5}>
        <View style={{ padding: 20, gap: 10 }}>
          {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Bank
            </Text>
          </View>
          <View style={{ height: height * 0.5 }} className="flex-col gap-2">
            <TouchableOpacity onPress={() => ref6.current?.open()}>
              <View className="items-center justify-center">
                <TransparentSelectButton
                  onPress={() => ref6.current?.open()}
                  label="Bank name"
                  placeholder={
                    savingcreate?.schedule_info?.bankName
                      ? savingcreate?.schedule_info?.bankName
                      : "Select bank name"
                  }
                />
              </View>
            </TouchableOpacity>
            <View className="items-center justify-center mb-3">
              <TextLabelBox
                label="Account number"
                placeholder="Enter account number"
                number
                onChangeText={(value: any) =>
                  onChangeSchedule("accountnumber", value)
                }
              />
            </View>
            <BlueSignInButton title="Ok" onPress={() => handleCloseModal5()} />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet height={750} ref={ref6}>
        <View style={{ padding: 20, gap: 30 }}>
          {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Select bank accounts
            </Text>
          </View>
          <View>
            <SearchLabelBox placeholder="Search" />
          </View>
          <View style={{ height: height * 0.78 }} className="gap-4">
            <FlatList
              data={allwithdrawalbanks?.data || []}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSavingscreate((prev: any) => ({
                      ...prev,
                      schedule_info: {
                        ...prev.schedule_info, // Preserve existing keys in schedule_info
                        bankName: item?.name // Add or update the key-value pair
                      }
                    }));
                    handleCloseModal6();
                  }}
                >
                  <View className="items-center flex-row gap-2 mb-2">
                    <Royal />
                    <Text style={{ color: "#413D43", fontSize: 16 }}>
                      {item?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              onEndReached={handleEndReached}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={(item: any) => item?.code}
              contentContainerStyle={{
                gap: 50,
                paddingHorizontal: width * 0.03
              }}
            />
            {/* <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <Royal />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        Royal Bank of Canada
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <Chase />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        Chase
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <BankAmerica />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        Bank of America
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <Barclays />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        Barclays
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <HSBC />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>HSBC</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <TDBANK />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        TD Bank
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <Scotia />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        Scotia Bank
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCloseModal6()}>
                    <View className="items-center flex-row gap-4 mb-4">
                      <BMO />
                      <Text style={{ color: "#413D43", fontSize: 16 }}>BMO</Text>
                    </View>
                  </TouchableOpacity> */}
          </View>
        </View>
      </BottomSheet>
      <BottomSheet height={340} ref={ref7}>
        <View style={{ padding: 20, gap: 10 }}>
          {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Cards
            </Text>
          </View>
          <View style={{ height: height * 0.5 }} className="flex-col gap-2">
            {/* <TouchableOpacity onPress={() => ref7.current?.open()}> */}
            <View className="items-center justify-center">
              <TextLabelBox
                label="Enter card number"
                placeholder="Enter card number"
                number
                onChangeText={(value: any) =>
                  onChangeSchedule("cardnumber", value)
                }
              />
            </View>
            {/* </TouchableOpacity> */}
            <View className="items-start justify-center mb-3">
              <TextLabelBox
                reduce="reduce"
                label="Expiry date"
                placeholder="Enter expiry date"
                number
                onChangeText={(value: any) =>
                  onChangeSchedule("expirydate", value)
                }
              />
            </View>
            <BlueSignInButton title="Ok" onPress={() => handleCloseModal7()} />
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default BlockSavings;
