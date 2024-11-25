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
  Pressable
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import Crownblue from "../../assets/crownblue.svg";
import CrownWhite from "../../assets/crownwhite.svg";
import Down from "../../assets/caratdown.svg";
import Confirm from "../../assets/Confirm.svg";
import Calendar from "../../assets/cakecalendar.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const UpgradeDuration = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = useState(true);
  const [selectedIndex, setIndex] = useState<number>(0);
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Upgrade account</Text>
          <Text></Text>
        </View>
        <View className="flex-col items-center gap-3">
          <View
            className="flex-row justify-between items-center"
            style={{ width: width * 0.9 }}
          >
            <View
              style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
              className="flex-row justify-start items-center gap-2 py-3"
            >
              <Crownblue />
              <Text className="text-buttonprimary text-[14px]">
                Wiremi lite plan
              </Text>
            </View>
            <Pressable onPress={() => ref?.current?.open()}>
              <View
                className="flex-row justify-center items-center"
                style={{
                  width: width * 0.25,
                  height: 40,
                  borderColor: "#EBEBEB",
                  borderWidth: 1
                }}
              >
                <Text className="text-buttonprimary text-[16px]">3 months</Text>
                <Down />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              height: height * 0.7,
              width: width * 0.9,
              borderColor: "#105CE2",
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
              gap: 20
            }}
          >
            <View>
              <Text style={{ color: "#606162", fontSize: 12 }}>Plan fee</Text>
              <Text className="text-[16px] text-buttonprimary font-bold">
                $12 per year
              </Text>
            </View>
            <View>
              <View className="flex-row justify-start">
                <Crownblue />
                <Text className="text-buttonprimary text-[14px]">
                  Wiremi lite plan
                </Text>
              </View>
              <Text style={{ color: "#606162", fontSize: 12 }}>
                A text about wiremi lite plan shows here
              </Text>
            </View>
            <View className="flex-row justify-center items-center">
              <Pressable onPress={() => router.push('/Profiles/UpgradeSuccess')} className="bg-buttonprimary w-[90%] h-[40px] rounded-[10px] justify-center items-center">
                <Text className="text-white text-[16px]">Upgrade</Text>
              </Pressable>
            </View>
            <View>
              <Text style={{ color: "#606162", fontSize: 12 }}>
                Plan benefits
              </Text>
            </View>
            <View className="flex-col gap-1">
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Maximum escrow transaction of $1,200</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Minimum of 5 saving instances</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Maximum of $5000 crypto transactions daily</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Minimum of 1 multi-currency wallet</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Can perform cross border transactions</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Access to use virtual cards</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>No access to crowdfunding feature</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>No access to payment processing</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>No access to business loans</Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>No access o payment API</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet height={350} ref={ref}>
        <View style={{ padding: 20, gap: 15 }}>
          {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Subscription plan
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
              Select subscription plan
            </Text>
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                  3 months 
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>6 months </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                  12 months 
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default UpgradeDuration;
