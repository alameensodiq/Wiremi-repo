import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
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
import Rotary from "../../assets/rotarysavings.svg";
import Warning from "../../assets/warningsavings.svg";
import Request from "../../assets/requestsavings.svg";
import Max from "../../assets/maxsavings.svg";
import { Modal } from "react-native";
import GroupSavingsParticipant from "@/components/GroupSavingsParticipant";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const router = useRouter();

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const data = [
    {
      id: "1",
      name: "Daily",
      image: <Calendar />
    },
    {
      id: "2",
      name: "Weekly",
      image: <Calendar />
    },
    {
      id: "3",
      name: "Monthly",
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
      name: "On request",
      image: <Request />
    },
    {
      id: "3",
      name: "Max sum",
      image: <Max />
    }
  ];
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => setIsVisible(false)}
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
                <Text style={{color:'#606162'}} className="text-[13px]">By accepting this invitation, you acknowledge that</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">Wiremi is not liable for any losses incurred in group</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">savings, whether with or without the insurance policy.</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">These savings payout types are based on trust among</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">group members outside Wiremi. Wiremi strongly</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">encourage anyone who does not have trust in their </Text>
                <Text style={{color:'#606162'}} className="text-[13px]">group members to use our insurance policy or stay away</Text>
                <Text style={{color:'#606162'}} className="text-[13px]">from group savings with Rotatory Payout among those </Text>
                <Text style={{color:'#606162'}} className="text-[13px]">they don’t know.</Text>
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
        className="gap-3"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save/CreateSavingsList")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Group Savings</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Name" placeholder="Enter savings name" />
        </View>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Interval"
              placeholder="Select Interval"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TextLabelBox label="Duration" placeholder="Enter duration(months)" />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Late payment fee"
            placeholder="Enter late payment fee"
          />
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Payout type"
              placeholder="Select payout type"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TransparentSelectButton
            label="Payout duration"
            placeholder="Select payout duration"
          />
        </View>
        <View className="items-center justify-center">
          <GroupSavingsParticipant
            label="Participants Wiremi ID"
            placeholder="Add participants"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Admin Wiremi ID"
            placeholder="Enter Admin wiremi ID"
          />
        </View>
        <View
          style={{ height: height * 0.2, gap: 10 }}
          className="justify-center"
        >
          <View className="flex-row justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push('/Save/GroupSavingsSummary')}
            />
          </View>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <View className="flex-row items-start pl-3">
              <Warning />
              <Text className="text-[14px] text-buttonprimary font-bold">
                Disclaimer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
                  <TouchableOpacity
                    onPress={() => {
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
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
                          checked={selectedIndex === index}
                          onPress={() => setIndex(index)}
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
        <BottomSheet height={300} ref={ref2}>
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
                      //   router.push("/More/Crypto/CryptoReceiveBarcode");
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
                          onPress={() => setIndex(index)}
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default GroupSavings;
