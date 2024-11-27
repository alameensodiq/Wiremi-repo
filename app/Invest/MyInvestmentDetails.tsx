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
    Modal
  } from "react-native";
  import React, { useRef, useState } from "react";
  import { useRouter } from "expo-router";
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
  import { SafeAreaView } from "react-native-safe-area-context";
  import { BarChart } from "react-native-gifted-charts";
  import { BottomSheet } from "@/components/Bottom";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import WhiteSignInButton from "@/components/WhiteSignInButton";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const MyInvestmentDetails = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const [isVisible, setIsVisible] = useState<boolean>(false);
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
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
  
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
          //   onPress={() => setIsVisible(false)}
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
                      ref.current?.open()
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
                      setColor(false)
                    }}
                  >
                    <Text>View analytics</Text>
                  </Pressable>
                </View>
              </View>
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
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/Invest/MyInvestment")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Tech revolution</Text>
            <Text></Text>
          </View>
            <View className="mt-20">
              <View className="flex-col items-center gap-3 mb-4">
                <Text style={{ color: "#00A85A", fontSize: 9 }}>Active</Text>
                <View className="flex-col items-center">
                  <Text className="text-buttonprimary text-[12px]">Balance</Text>
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
              <View className="flex-row justify-center gap-4">
                <Pressable onPress={() => router.push("/Invest/WithdrawPage")}>
                  <View className="flex-col gap-1 items-center">
                    <SaveWithdraw />
                    <Text
                      style={{ color: "#292D32" }}
                      className="text-[14px] font-bold"
                    >
                      Withdraw
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => router.push("/Invest/InvestmentHistory")}>
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
                    Plan created on
                    </Text>
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    26-04-2023
                    </Text>
                  </View>
                  <View
                    className="flex-row justify-between pb-4"
                    style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                  >
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Expected daily return
                    </Text>
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $10.00
                    </Text>
                  </View>
                  <View
                    className="flex-row justify-between pb-4"
                    style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                  >
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Total earnings
                    </Text>
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    $10.00
                    </Text>
                  </View>
                  <View
                    className="flex-row justify-between pb-4"
                    style={{ borderBottomColor: "#D2D4FF", borderBottomWidth: 1 }}
                  >
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                    Commission amount
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
                    Insurance fe
                    </Text>
                    <Text style={{ color: "#292D32" }} className="text-[14px]">
                      15%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                    router.push('/Save/Delete')
                  }}
                />
                <WhiteSignInButton title="Cancel"
                  onPress={() => {
                    handleCloseModal();
                  }} />
              </View>
            </View>
          </BottomSheet>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default MyInvestmentDetails;
  