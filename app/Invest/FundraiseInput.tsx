import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import TuitionProfile from "../../assets/tuitionprofile.svg";
import TextLabelUploadFile from "@/components/TextLabelUploadFile";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const FundraiseInput = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const toggleCheckbox = () => setChecked(!checked);
  const router = useRouter();
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

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
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Invest/InvestDashboard")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Apply for fund raise
          </Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Full name" placeholder="Enter your full name" />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Project name"
            placeholder="Enter your project name"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Amount" placeholder="Enter amount" />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Brief description"
            placeholder="Enter brief description"
          />
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Funding type"
              placeholder="Select funding type"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TextLabelUploadFile
            label="Funding type"
            placeholder="Select funding type"
          />
        </View>

        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Apply-{$50.00 fees}"
            onPress={() => router.push("/Invest/FundraiseSuccess")}
          />
        </View>
        <BottomSheet height={350} ref={ref2}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Funding type
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select funding type
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
                  handleCloseModal2();
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
                      <TuitionProfile />
                    </View>
                    <Text style={{ color: "#413D43", fontSize: 16 }}>
                      Investment
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
                  handleCloseModal2();
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
                      <TuitionProfile />
                    </View>
                    <Text style={{ color: "#413D43", fontSize: 16 }}>
                      Donation
                    </Text>
                  </View>
                  <CheckBox
                    checked={selectedIndex === 1}
                    onPress={() => setIndex(1)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={290} ref={ref3}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Student type
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select an option
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
                  handleCloseModal3();
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
                      <TuitionProfile />
                    </View>
                    <Text style={{ color: "#413D43", fontSize: 16 }}>
                      National
                    </Text>
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
                  handleCloseModal3();
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
                      <TuitionProfile />
                    </View>
                    <Text style={{ color: "#413D43", fontSize: 16 }}>
                      Foreign
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
      </SafeAreaView>
    </View>
  );
};

export default FundraiseInput;
