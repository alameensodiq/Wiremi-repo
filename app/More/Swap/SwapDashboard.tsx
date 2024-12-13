import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Royal from "../../../assets/royalbank.svg";
import Chase from "../../../assets/chase.svg";
import BankAmerica from "../../../assets/bankamerica.svg";
import Barclays from "../../../assets/barclays.svg";
import HSBC from "../../../assets/hsbc.svg";
import TDBANK from "../../../assets/tdbank.svg";
import Scotia from "../../../assets/scotiabank.svg";
import BMO from "../../../assets/bmo.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import Wire from "../../../assets/wire.svg";
import DirectTransfer from "../../../assets/directtransfer.svg";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const SwapDashboard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const router = useRouter();

  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
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
          <Text className="text-[20px] text-pagetitle">Swap</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Swap type"
              placeholder="Select swap type"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Wallet"
              placeholder="Select wallet"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            placeholder="Enter amount $0.00"
          />
        </View>
        <View className="flex-row pl-2">
          <Text>Exchange rate-$0.00 = ₦0.00</Text>
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/More/Swap/SwapSuccess")}
          />
        </View>
        <BottomSheet height={750} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Select your bank
              </Text>
            </View>
            <View>
              <SearchLabelBox placeholder="Search" />
            </View>
            <View className="gap-4">
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <Royal />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Royal Bank of Canada
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <Chase />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>Chase</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <BankAmerica />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Bank of America
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <Barclays />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Barclays
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <HSBC />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>HSBC</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <TDBANK />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    TD Bank
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <Scotia />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Scotia Bank
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <View className="items-center flex-row gap-4 mb-4">
                  {/* <View
                      style={{
                        backgroundColor: "#2A94F40D",
                        borderRadius: 100,
                        width: width * 0.1,
                        height: height * 0.05
                      }}
                      className="justify-center items-center"
                    > */}
                  <BMO />
                  {/* </View> */}
                  <Text style={{ color: "#413D43", fontSize: 16 }}>BMO</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={290} ref={ref2}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Transfer type
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                Select transfer type
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
                    <DirectTransfer />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Direct transfer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  //   router.push("/TransactionSendMoney/BankWireDetails");
                  handleCloseModal2();
                }}
              >
                <View className="items-center flex-row gap-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Wire />
                  </View>
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Bank Wire
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default SwapDashboard;
