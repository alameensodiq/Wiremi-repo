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
  
  const LoanDashboard = () => {
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
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingHorizontal: width * 0.03
          }}
          // className="gap-3"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/Dashboard")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Loan</Text>
            <Text></Text>
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
                Loan apply
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
                Loan history
              </Text>
            </Pressable>
          </View>
          {color ? (
            <View>
             
            </View>
          ) : (
            <View className="flex-col gap-6">
             
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
  
  export default LoanDashboard;
  