import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Calendar from "../../assets/calendar.svg";
import { FlatList } from "react-native";
import Rotary from "../../assets/rotarysavings.svg";
import Warning from "../../assets/warningsavings.svg";
import Request from "../../assets/requestsavings.svg";
import Max from "../../assets/maxsavings.svg";
import { Modal } from "react-native";
import GroupSavingsParticipant from "@/components/GroupSavingsParticipant";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { CreateGroupSavings } from "@/Store/Apis/CreateGroupSavings";
import ShortBlueButton from "@/components/ShortBlueButton";
import { SavingDashboard } from "@/Store/Apis/SavingDashboard";
import { SavingActive } from "@/Store/Apis/SavingActive";
import { clearStatesavedashboard } from "@/Store/Reducers/SavingDashboard";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const GroupSavings = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [selectedIndex, setIndex] = useState(0);
  const [selectedIndex2, setIndex2] = useState(0);
  const [selectedIndex3, setIndex3] = useState(0);
  const [selectedIndex4, setIndex4] = useState(1000);
  const [selectedIndex5, setIndex5] = useState(1000);
  const [admin, setAdmin] = useState("");
  const [participant, setParticipant] = useState("");

  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [savingcreate, setSavingscreate] = useState({
    goal_name: "",
    saving_interval: "",
    amount_per_interval: 0,
    duration: 0,
    penalty_percentage: 0,
    Payout_type: "",
    number_of_members: 0,
    status: "active",
    saving_type: "group",
    type: "group",
    Payout_duration: "",
    adminParticipants: [],
    participants: []
  });

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

  const data3 = [
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
      name: "Rotatory",
      image: <Rotary />
    },
    {
      id: "2",
      name: "On-Request",
      image: <Request />
    },
    {
      id: "3",
      name: "Max-sum",
      image: <Max />
    }
  ];

  const { creategroupsavings, authenticatingcreategroupsavings, errors } =
    useAppSelector((state) => state.creategroupsavings);

  useEffect(() => {
    dispatch(clearStatesavedashboard());
    dispatch(clearStatesaveactive());
    if (creategroupsavings?.status) {
      router.push("/Save");
    }
    if (creategroupsavings?.status === false) {
      setIsVisible(true);
    }
    return () => {
      dispatch(SavingDashboard({ router: router.push }));
      dispatch(SavingActive({ router: router.push }));
    };
  }, [creategroupsavings]);

  useEffect(() => {
    // Logs the updated participant to verify changes
    console.log("Participant updated to:", participant);
  }, [participant]);

  // useEffect(() => {
  //   setSavingscreate((prev: any) => ({
  //     ...prev,
  //     adminParticipants: [...(prev.adminParticipants || []), admin]
  //   }));
  //   setSavingscreate((prev: any) => ({
  //     ...prev,
  //     participants: [...(prev.participants || []), participant]
  //   }));
  // }, [admin, participant]);

  const onChangeAdmin = (name: string, value: any) => {
    console.log(value);
    setAdmin(value);
  };

  const onChangePart = (name: string, value: any) => {
    console.log(value);
    setParticipant(value);
  };

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

    const { theme } = useAppContext();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // style={{ backgroundColor: "#ffffff" }}
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar hidden={false} style={`${theme === "dark" ? "light" : "dark"}`}/>
      <Modal animationType="slide" transparent={true} visible={isVisible2}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => setIsVisible2(false)}
        >
          <View
            style={{
              width: "85%",
              height: height * 0.37,
              backgroundColor: "white",
              borderRadius: 10
            }}
          >
            <View className="flex-col gap-2">
              <View className="flex-row items-center justify-center pt-3 gap-2">
                <Warning />
                <Text className="text-[14px] text-buttonprimary font-bold">
                  Disclaimer
                </Text>
              </View>
              <View className="flex-col gap-1 items-center">
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  By accepting this invitation, you acknowledge that
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  Wiremi is not liable for any losses incurred in group
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  savings, whether with or without the insurance policy.
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  These savings payout types are based on trust among
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  group members outside Wiremi. Wiremi strongly
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  encourage anyone who does not have trust in their{" "}
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  group members to use our insurance policy or stay away
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  from group savings with Rotatory Payout among those{" "}
                </Text>
                <Text style={{ color: "#606162" }} className="text-[13px]">
                  they don’t know.
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
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
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.05
        }}
        className="gap-3"
      >
        <KeyboardAvoidingView className="gap-3">
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Save/CreateSavingsList")}
            >
              <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Group Savings</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Name"
              both
              placeholder={
                savingcreate?.goal_name
                  ? savingcreate?.goal_name
                  : "Enter savings name"
              }
              onChangeText={(value: any) => onChange("goal_name", value)}
            />
          </View>
          {/* <View className="items-center justify-center">
            <TextLabelBox
              label="Payout Type"
              placeholder="Enter Name of Payout Type"
              onChangeText={(value: any) => onChange("Payout_type", value)}
            />
          </View> */}
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              onChangeText={(value: number) =>
                onChange("amount_per_interval", value)
              }
              placeholder="Enter amount 0.00"
            />
          </View>
          <TouchableOpacity onPress={() => ref.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                onPress={() => ref.current?.open()}
                label="Interval"
                placeholder={
                  savingcreate?.saving_interval
                    ? savingcreate?.saving_interval
                    : "Select Interval"
                }
              />
            </View>
          </TouchableOpacity>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Duration"
              number
              onChangeText={(value: any) => onChange("duration", value)}
              placeholder="Enter duration(months)"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Late payment fee"
              placeholder="Enter late payment fee"
              number
              onChangeText={(value: any) =>
                onChange("penalty_percentage", value)
              }
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Number of Members"
              placeholder="Enter number of members"
              number
              onChangeText={(value: any) =>
                onChange("number_of_members", value)
              }
            />
          </View>
          <TouchableOpacity onPress={() => ref2.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                onPress={() => ref2.current?.open()}
                label="Payout type"
                placeholder={
                  savingcreate?.Payout_type
                    ? savingcreate?.Payout_type
                    : "Select payout type"
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ref3.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                label="Payout duration"
                placeholder={
                  savingcreate?.Payout_duration
                    ? savingcreate?.Payout_duration
                    : "Select payout duration"
                }
                onPress={() => ref3.current?.open()}
              />
            </View>
          </TouchableOpacity>
          {/* <View className="items-center justify-center">
          <GroupSavingsParticipant
            label="Participants Wiremi ID"
            placeholder="Add participants"
          />
        </View> */}
          <TouchableOpacity onPress={() => ref5.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                label="Participants Wiremi ID"
                placeholder={
                  savingcreate?.participants[0]
                    ? savingcreate?.participants[0]
                    : "Add participants"
                }
                onPress={() => ref5.current?.open()}
              />
            </View>
          </TouchableOpacity>
          {/* <View className="items-center justify-center">
          <TextLabelBox
            label="Admin Wiremi ID"
            placeholder="Enter Admin wiremi ID"
          />
        </View> */}
          <TouchableOpacity onPress={() => ref4.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                label="Admin Wiremi ID"
                placeholder={
                  savingcreate?.adminParticipants[0]
                    ? savingcreate?.adminParticipants[0]
                    : "Enter Admin wiremi ID"
                }
                onPress={() => ref4.current?.open()}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{ height: height * 0.2, gap: 10 }}
            className="justify-center"
          >
            {/* <View className="flex-row justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push("/Save/GroupSavingsSummary")}
            />
          </View> */}
            {authenticatingcreategroupsavings ? (
              <View className="flex-row justify-center items-center">
                <ActivityIndicator
                  color={"#105CE2"}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            ) : (
              <View style={{ height: height * 0.1 }} className="justify-center">
                <View
                  style={{ height: height * 0.1 }}
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
                        penalty_percentage,
                        status,
                        saving_type,
                        Payout_duration,
                        adminParticipants,
                        participants,
                        Payout_type,
                        number_of_members,
                        type
                      } = savingcreate || {};
                      console.log(savingcreate);
                      const parsedAmountPerInterval =
                        Number(amount_per_interval);
                      const parsedDuration = Number(duration);
                      const parsedNumber_of_members = Number(number_of_members);
                      const parsedPenaltyPercentage =
                        Number(penalty_percentage);
                      const isNumber = (value: any) =>
                        !isNaN(value) && typeof value === "number";
                      if (
                        goal_name &&
                        saving_interval &&
                        isNumber(parsedAmountPerInterval) &&
                        isNumber(parsedDuration) &&
                        Payout_type &&
                        isNumber(parsedPenaltyPercentage) &&
                        isNumber(parsedNumber_of_members) &&
                        status &&
                        saving_type &&
                        Payout_duration &&
                        participants?.length > 0 &&
                        type
                      ) {
                        dispatch(
                          CreateGroupSavings({
                            goal_name,
                            saving_interval,
                            amount_per_interval: parsedAmountPerInterval,
                            duration: parsedDuration,
                            Payout_type: Payout_type,
                            number_of_members: parsedNumber_of_members,
                            penalty_percentage: parsedPenaltyPercentage,
                            status,
                            saving_type,
                            Payout_duration,
                            adminParticipants,
                            participants,
                            type,
                            router: router.push,
                            setIsVisible: setIsVisible
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
                <TouchableOpacity onPress={() => setIsVisible2(!isVisible2)}>
                  <View className="flex-row items-start w-[100%]">
                    <Warning />
                    <Text className="text-[14px] text-buttonprimary font-bold">
                      Disclaimer
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {/* <TouchableOpacity onPress={() => setIsVisible2(!isVisible)}>
              <View className="flex-row items-start pl-3">
                <Warning />
                <Text className="text-[14px] text-buttonprimary font-bold">
                  Disclaimer
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </KeyboardAvoidingView>
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
        <BottomSheet height={350} ref={ref3}>
          <View style={{ padding: 20, gap: 10 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Payout Duration
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select Payout Duration</Text>
              <CheckBox
                checked={selectedIndex2 === 20}
                onPress={() => setIndex2(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data3}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {
                      setSavingscreate((prev) => ({
                        ...prev, // Spread the previous state correctly
                        Payout_duration: item?.name // Update the "country" property
                      }));
                      setIndex2(index);
                      handleCloseModal3();
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
                            selectedIndex2 === index ||
                            item?.name === savingcreate?.Payout_duration
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
        <BottomSheet height={340} ref={ref2}>
          <View style={{ padding: 20, gap: 10 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                pay out type
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select payout type</Text>
              <CheckBox
                checked={selectedIndex3 === 20}
                onPress={() => setIndex3(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
            <View style={{ height: height * 0.5 }}>
              <FlatList
                data={data2}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {
                      setSavingscreate((prev) => ({
                        ...prev, // Spread the previous state correctly
                        Payout_type: item?.name // Update the "country" property
                      }));
                      setIndex3(index);
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
                          checked={
                            selectedIndex3 === index ||
                            item?.name === savingcreate?.Payout_type
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
        <BottomSheet height={540} ref={ref4}>
          <View style={{ padding: 20, gap: 10 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Admin Participants
              </Text>
            </View>
            <View style={{ height: height * 0.2 }} className="flex-col">
              <View className="items-center justify-center mb-3">
                <TextLabelBox
                  label="Wiremi ID"
                  both
                  onChangeText={(value: any) =>
                    onChangeAdmin("schedule", value)
                  }
                  value={admin !== "" ? admin : ""}
                  placeholder={"Enter Wiremi ID of Admin Participant"}
                />
              </View>
              <ShortBlueButton
                title="Add"
                onPress={() => {
                  setSavingscreate((prev: any) => ({
                    ...prev,
                    adminParticipants: [...prev.adminParticipants, admin]
                  }));
                  setAdmin("");
                }}
              />
            </View>
            <View style={{ height: height * 0.2 }}>
              <FlatList
                data={savingcreate?.adminParticipants}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {
                      setSavingscreate((prev) => ({
                        ...prev,
                        adminParticipants: prev.adminParticipants.filter(
                          (participant) => participant !== item
                        )
                      }));
                      setIndex4(index);
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <View className="flex-row items-center gap-2">
                        <Text> {item}</Text>
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={selectedIndex4 === index}
                          onPress={() => {
                            setSavingscreate((prev) => ({
                              ...prev,
                              adminParticipants: prev.adminParticipants.filter(
                                (participant) => participant !== item
                              )
                            }));
                            setIndex4(index);
                          }}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                        />
                      </View>
                    </View>
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                  gap: 5
                }}
              />
            </View>
            <View className="flex-col">
              <BlueSignInButton
                title="Ok"
                onPress={() => handleCloseModal4()}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={540} ref={ref5}>
          <View style={{ padding: 20, gap: 3 }}>
            {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Participants
              </Text>
            </View>
            <View style={{ height: height * 0.2 }} className="flex-col">
              <View className="items-center justify-center mb-3">
                <TextLabelBox
                  label="Wiremi ID"
                  both
                  value={participant !== "" ? participant : ""}
                  onChangeText={(value: any) => onChangePart("schedule", value)}
                  placeholder={"Enter Wiremi ID of Participant"}
                />
              </View>
              <ShortBlueButton
                title="Add"
                onPress={() => {
                  setSavingscreate((prev: any) => ({
                    ...prev,
                    participants: [...prev.participants, participant]
                  }));
                  setParticipant("");
                }}
              />
            </View>
            <View style={{ height: height * 0.2 }}>
              <FlatList
                data={savingcreate?.participants}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {
                      setSavingscreate((prev) => ({
                        ...prev,
                        participants: prev.participants.filter(
                          (participant) => participant !== item
                        )
                      }));
                      setIndex5(index);
                    }}
                  >
                    <View className="flex-row justify-between gap-3">
                      <View className="flex-row items-center gap-2">
                        <Text> {item}</Text>
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={selectedIndex5 === index}
                          onPress={() => {
                            setSavingscreate((prev) => ({
                              ...prev,
                              participants: prev.participants.filter(
                                (participant) => participant !== item
                              )
                            }));
                            setIndex5(index);
                          }}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                        />
                      </View>
                    </View>
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                  gap: 5
                }}
              />
            </View>
            <View className="flex-col">
              <BlueSignInButton
                title="Ok"
                onPress={() => handleCloseModal5()}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GroupSavings;
