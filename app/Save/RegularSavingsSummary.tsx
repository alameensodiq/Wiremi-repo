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
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const RegularSavingsSummary = () => {
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
          <TouchableOpacity onPress={() => router.push("/Save/SaveDashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Tuition</Text>
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
          <Pressable onPress={() => router.push('/Save/RegularEditInstance')}>
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
          <View className="flex-col gap-1 items-center">
            <SaveWithdraw />
            <Text
              style={{ color: "#292D32" }}
              className="text-[14px] font-bold"
            >
              Withdraw
            </Text>
          </View>
          <View className="flex-col gap-1 items-center">
            <SaveHistory />
            <Text
              style={{ color: "#292D32" }}
              className="text-[14px] font-bold"
            >
              History
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center pt-4 gap-4">
          <Text style={{ color: "#1E1B39" }} className="text-[14px] font-bold">
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegularSavingsSummary;
