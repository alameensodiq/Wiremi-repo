import {
    View,
    Text,
    StatusBar as RNStatusBar,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import React, { useRef } from "react";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import TransactionTextLabel from "@/components/TransactionTextLabel";
  import TransparentSelectButton from "@/components/TransparentSelectButton";
  import TextLabelBox from "@/components/TextLabelBox";
  import { SafeAreaView } from "react-native-safe-area-context";

  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const BankWireDetails = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    const [selectedIndex, setIndex] = React.useState<number>(0);
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const ref = useRef<BottomSheetRef>(null);
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
    return (
      <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
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
              onPress={() => router.push("/TransactionSendMoney/ListSendMoney")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Bank wire</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount $0.00"
            />
          </View>
          <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Country"
              placeholder="Select Country"
            />
          </View>
          </TouchableOpacity>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Beneficiary bank"
              placeholder="Enter beneficiary bank"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Schedule time"
              placeholder="Enter schedule time"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Schedule date"
              placeholder="Enter schedule date"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Beneficiary bank address"
              placeholder="Enter beneficiary bank address"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="IBAN/Account number"
              placeholder="Enter account number/IBAN"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Bank routing number (US Banks only)"
              placeholder="Enter bank routing number"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Receiving bank swift code"
              placeholder="Enter receiving bank swift code"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Branch code"
              placeholder="Enter branch code"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Sort codes (UK banks only)"
              placeholder="Enter sort code"
            />
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="BSB number (Australian banks only)"
              placeholder="Enter BSB number"
            />
          </View>
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton
              title="Proceed"
              onPress={() =>
                router.push("/TransactionSendMoney/BankWireSummarySchedule")
              }
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default BankWireDetails;
  