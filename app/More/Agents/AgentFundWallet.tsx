import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
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
  import TransactionTextLabel from "@/components/TransactionTextLabel";
  import Redrightcarat from "../../../assets/redrightcarat.svg";
import Fingerprint from "../../../assets/fingerprint.svg";
import FourDigits from "@/components/FourDigits";
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
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const AgentFundWallet = () => {
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
            <TouchableOpacity onPress={() => router.push("/More/Agents/AgentDashboard")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Fund wallet</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount $0.00"
            />
          </View>
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton
              title="Proceed"
              onPress={() => ref?.current?.open()}
            />
          </View>
          <BottomSheet height={450} ref={ref}>
          <View style={{ padding: 20, gap: 5 }}>
            {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
            <View className="items-center justify-center gap-2 flex-col">
              <Text className="mb-2" style={{ fontSize: 13, color: "#606162" }}>
                Enter a transactin pin
              </Text>
              <FourDigits />
            </View>
            <View className="flex-col gap-8 px-8 mt-2">
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      1
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      2
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      3
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      4
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      5
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      6
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      7
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      8
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      9
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between items-center">
                <View>
                  <Fingerprint />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/More/Agents/AgentFundSuccess");
                    handleCloseModal();
                  }}
                >
                  <View>
                    <Text
                      className="font-bold"
                      style={{ color: "#00091E", fontSize: 20 }}
                    >
                      0
                    </Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Redrightcarat />
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
        </SafeAreaView>
      </View>
    );
  };
  
  export default AgentFundWallet;
  