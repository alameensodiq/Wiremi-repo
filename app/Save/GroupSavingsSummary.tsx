import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Actions from "../../assets/actions.svg";
import Decrease from "../../assets/Arrowdown.svg";
import EditInstance from "../../assets/editinstance.svg";
import SaveWithdraw from "../../assets/savewithdraw.svg";
import SaveHistory from "../../assets/savehistory.svg";
import Drop from "../../assets/calendardrop.svg";
import Cakecalendar from "../../assets/cakecalendar.svg";
import Rightdrop from "../../assets/rightdrop.svg";
import Leftdrop from "../../assets/leftdrop.svg";
import Rightcarat from "../../assets/bluerightcarat.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-gifted-charts";
import BlueSignInButton from "@/components/BlueSignInButton";
import WhiteSignInButton from "@/components/WhiteSignInButton";
import { BottomSheet } from "@/components/Bottom";
import { GetGroupSaving } from "@/Store/Apis/GetGroupSaving";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStategetgroupsaving } from "@/Store/Reducers/GetGroupSaving";
import ShortBlueButton from "@/components/ShortBlueButton";
import { SavingActive } from "@/Store/Apis/SavingActive";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const GroupSavingsSummary = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [color, setColor] = useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const ref6 = useRef<BottomSheetRef>(null);
  const ref7 = useRef<BottomSheetRef>(null);
  const router = useRouter();
  const data = [
    { value: 150 },
    { value: 880 },
    { value: 590 },
    { value: 700 },
    { value: 80 },
    { value: 190 },
    { value: 450 }
  ];
  const { id } = useLocalSearchParams();
  const ids = +id;

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const dispatch = useAppDispatch();

  const { getgroupsaving, authenticatinggetgroupsaving, errors } =
    useAppSelector((state) => state.getgroupsaving);

  console.log(getgroupsaving);

  useEffect(() => {
    dispatch(clearStatesaveactive());
    dispatch(GetGroupSaving({ id: ids, router: router.push }));
    return () => {
      // dispatch(clearStategetgroupsaving());
    };
  }, [id]);

  return (
    <ScrollView
      style={{ backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            paddingTop: height * 0.03,
            alignItems: "flex-end"
          }}
          onPress={() => setIsVisible(false)}
        >
          <View
            style={{
              width: "40%",
              backgroundColor: "white",
              borderRadius: 10
            }}
          >
            <View>
              <View
                style={{
                  borderBottomColor: "#8080808C",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                <Pressable
                  onPress={() => {
                    // router.push("/Cards/ChangeCardPin");
                    setIsVisible(!isVisible);
                    ref.current?.open();
                  }}
                >
                  <Text>Delete</Text>
                </Pressable>
              </View>
              <View style={{ borderBottomColor: "#8080808C", padding: 10 }}>
                <Pressable
                  onPress={() => {
                    // router.push("/Cards/DeactivateCard");
                    setIsVisible(!isVisible);
                    setColor(false);
                  }}
                >
                  <Text>View analytics</Text>
                </Pressable>
              </View>
            </View>
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
              onPress={() => setIsVisible2(false)}
            />
          </View>
        </Pressable>
      </Modal>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        // className="gap-3"
      >
        {!getgroupsaving?.data && (
          <View
            style={{ height: height, width: width, flex: 1 }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Save")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">House rent</Text>
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
              console.log("sodiq");
            }}
          >
            <Actions />
          </Pressable>
        </View>
        <View
          className="flex-row mb-4 mt-4"
          style={{
            backgroundColor: "#F2F4F7",
            height: height * 0.05,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Pressable
            className="flex-row items-center"
            onPress={() => setColor(true)}
            style={{
              width: width * 0.45,
              height: height * 0.047,
              borderRadius: 6,
              backgroundColor: color ? "#FFFFFF" : "#F2F4F7",
              borderColor: color ? "#105CE2" : "#F2F4F7",
              borderWidth: color ? 2 : 0,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: color ? "#105CE2" : "#98A2B3" }}>
              Overview
            </Text>
          </Pressable>
          <Pressable
            className="flex-row items-center"
            onPress={() => setColor(false)}
            style={{
              width: width * 0.45,
              height: height * 0.047,
              borderRadius: 6,
              backgroundColor: !color ? "#FFFFFF" : "#F2F4F7",
              borderColor: !color ? "#105CE2" : "#F2F4F7",
              borderWidth: !color ? 2 : 0,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: !color ? "#105CE2" : "#98A2B3" }}>
              Analytics
            </Text>
          </Pressable>
        </View>
        {color ? (
          <View>
            <View className="flex-col items-center gap-3 mb-4">
              <Text style={{ color: "#00A85A", fontSize: 9 }}>Active</Text>
              <View className="flex-col items-center">
                <Text className="text-buttonprimary text-[12px]">
                  Group Savings Balance
                </Text>
                <Text className="text-buttonprimary text-[24px] font-bold">
                  $2,112.23
                </Text>
                <View className="flex-row gap-3 items-center">
                  <View className="flex-row justify-center items-center">
                    <Text style={{ color: "#DE1E04" }} className="text-[10px]">
                      2.3%
                    </Text>
                    <Decrease />
                  </View>
                  <View className="flex-row items-center">
                    <View
                      style={{
                        width: 6,
                        height: 6,
                        backgroundColor: "#6E6E6E",
                        borderRadius: 50,
                        marginRight: 5
                      }}
                    ></View>
                    <Text style={{ color: "#6E6E6E", fontSize: 8 }}>
                      Lost in 1 month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{ height: height * 0.15 }}
              className="flex-row justify-center pt-4 gap-4"
            >
              <View className="flex-col gap-1">
                <Text style={{ color: "#505050" }} className="text-[14px]">
                  My Contribution
                </Text>
                <Text className="text-buttonprimary text-[16px] font-bold">
                  $2,112.23
                </Text>
                <Text style={{ color: "#505050" }} className="text-[10px]">
                  Last saved 11/09
                </Text>
              </View>
              <View className="flex-col gap-1">
                <Text style={{ color: "#505050" }} className="text-[14px]">
                  Accumulated fine
                </Text>
                <Text className="text-buttonprimary text-[16px] font-bold">
                  $112.23
                </Text>
              </View>
            </View>
            <View
              style={{
                height: height * 0.15,
                backgroundColor: "#fff",
                borderRadius: 6,
                shadowColor: "#0A0A0A",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5
              }}
              className="flex-column justify-center p-2"
            >
              <Pressable onPress={() => router.push("/Save/GroupMembers")}>
                <View className="flex-row justify-between items-center">
                  <Text className="text-[14px] text-buttonprimary font-bold">
                    See all group members
                  </Text>
                  <Rightcarat />
                </View>
              </Pressable>
              <Pressable
                onPress={() => router.push("/Save/NonContributionMember")}
              >
                <View className="flex-row justify-between items-center mt-4">
                  <Text className="text-[14px] text-buttonprimary font-bold">
                    Members yet to contribute
                  </Text>
                  <Rightcarat />
                </View>
              </Pressable>
            </View>
            <View className="flex-row justify-center gap-4 pt-4">
              <Pressable onPress={() => router.push("/Save/GroupEditInstance")}>
                <View className="flex-col gap-1 items-center">
                  <EditInstance />
                  <Text
                    style={{ color: "#292D32" }}
                    className="text-[14px] font-bold"
                  >
                    Edit Instance
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Save/GroupHistory")}>
                <View className="flex-col gap-1 items-center">
                  <SaveHistory />
                  <Text
                    style={{ color: "#292D32" }}
                    className="text-[14px] font-bold"
                  >
                    History
                  </Text>
                </View>
              </Pressable>
            </View>
            <View className="flex-col justify-center pt-4 gap-4">
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[14px] font-bold"
              >
                Summary
              </Text>
              <View className="flex-col justify-center gap-2">
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Name
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Tuition
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Expected amount
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $2,900.00
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Saved amount
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $0.00
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Interest earned
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $0.00
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Amount
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $2,112.23
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Start date
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    23/09/2024
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    End date
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    23/11/20124
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Duration
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    2 months
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Saving type
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Regular
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Interval
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $0.00
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Schedule ID
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    WI2356718268
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Interest rate
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    0.00%
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Emergency fund %
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    0.00%
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Emergency fund amount
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $1
                  </Text>
                </View>
                <View
                  className="flex-row justify-between pb-4"
                  style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                >
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Next saving schedule
                  </Text>
                  <Text style={{ color: "#292D32" }} className="text-[14px]">
                    30/09/2024
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View className="flex-col gap-6">
            <View className="flex-col gap-1">
              <Text style={{ color: "#344054" }} className="text-[12px]">
                Show data in
              </Text>
              <View
                style={{
                  borderColor: "#D0D5DD",
                  width: width * 0.94,
                  height: height * 0.05,
                  borderRadius: 6,
                  backgroundColor: "#ffffff",
                  borderWidth: 1
                }}
                className="flex-row"
              >
                <View
                  className="flex-row items-center pl-9 pr-5"
                  style={{
                    borderColor: "#D0D5DD",
                    borderRightWidth: 1,
                    height: height * 0.05
                  }}
                >
                  <Text>Aug 2024</Text>
                  <Drop />
                </View>
                <View
                  style={{ width: width * 0.54 }}
                  className="flex-row items-center pl-3 justify-between"
                >
                  <View className="flex-row gap-2">
                    <Cakecalendar />
                    <Text>14 Aug</Text>
                    <Text>-</Text>
                    <Text>20 Aug</Text>
                  </View>
                  <Drop />
                </View>
              </View>
            </View>
            <View
              className="pt-3 pl-1 pb-0"
              style={{
                backgroundColor: "#F1F2F4",
                height: height * 0.48,
                borderRadius: 6
              }}
            >
              <View className="flex-col gap-1">
                <Text
                  style={{ color: "#00091E", fontSize: 14 }}
                  className="font-bold"
                >
                  $2112.23
                </Text>
                <Text style={{ color: "#98A2B3", fontSize: 12 }}>
                  Total interest ($367.00)
                </Text>
              </View>
              <BarChart
                height={height * 0.4}
                width={width * 0.78}
                data={data}
                backgroundColor={"#F1F2F4"}
                spacing={15}
                frontColor={"#105CE2"}
                barBorderTopRightRadius={6}
                barBorderTopLeftRadius={6}
                rulesType="solid"
                barWidth={30}
                maxValue={1000}
                yAxisLabelPrefix="$"
                xAxisLabelTexts={[
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fr",
                  "Sat"
                ]}
                xAxisLabelTextStyle={{
                  color: "#6B6B83",
                  fontSize: 14
                }}
                // xAxisTextNumberOfLines={2}
                trimYAxisAtTop
              />
            </View>
            <View className="flex-row justify-between items-center">
              <Leftdrop />
              <View className="flex-col items-center">
                <Text style={{ color: "#858D9D" }}>14 Aug - 20 Aug</Text>
                <Text className="text-buttonprimary">16 days left to view</Text>
              </View>
              <Rightdrop />
            </View>
          </View>
        )}
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Delete Plan
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>Terminating this plan permanently comes with a 5%</Text>
              <Text>charge. We charge this amount to help discipline you</Text>
              <Text>financially.</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Continue"
                onPress={() => {
                  handleCloseModal();
                  router.push("/Save/Delete");
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GroupSavingsSummary;
