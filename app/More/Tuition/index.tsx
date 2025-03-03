import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import { SafeAreaView } from "react-native-safe-area-context";
import TuitionProfile from "../../../assets/tuitionprofile.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const TuitionDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const router = useRouter();

  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);


  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

  const handleCloseModal4 = () => {
    ref4.current?.close();
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
          <TouchableOpacity onPress={() => router.push("/More/MoreList")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Tuition</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="School name"
              placeholder="Select your school name"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ref3.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Level"
              placeholder="Select your level"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ref4.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Transaction type"
              placeholder="Select transaction type"
            />
          </View>
        </TouchableOpacity>

        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/More/Tuition/TuitionFaculty")}
          />
        </View>
        <BottomSheet height={750} ref={ref2}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Schools
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select your school
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
                      University of Buea
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
                      University of Buea
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
        <BottomSheet height={750} ref={ref3}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Level
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select your level
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
                    100 Level
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
                    200 Level
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
                    300 Level
                    </Text>
                  </View>
                  <CheckBox
                  checked={selectedIndex === 3}
                  onPress={() => setIndex(3)}
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
                    400 Level
                    </Text>
                  </View>
                  <CheckBox
                  checked={selectedIndex === 4}
                  onPress={() => setIndex(4)}
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
                    500 Level
                    </Text>
                  </View>
                  <CheckBox
                  checked={selectedIndex === 5}
                  onPress={() => setIndex(5)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={290} ref={ref4}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Transaction type
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
                  handleCloseModal4();
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
                    School fees
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
                  handleCloseModal4();
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
                    Medicals
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

export default TuitionDashboard;
