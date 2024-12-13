import {
    View,
    Text,
    StatusBar as RNStatusBar,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import { useRouter } from "expo-router";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import Redrightcarat from "../../assets/redrightcarat.svg";
  import Fingerprint from "../../assets/fingerprint.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import { BottomSheet } from "@/components/Bottom";
  import { useRef } from "react";
  import FourDigits from "@/components/FourDigits";
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const WiremiSummarySchedule = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
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
          className="gap-4"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() =>
                router.push("/TransactionSendMoney/WiremiDetailsSchedule")
              }
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">
              Transaction Summary
            </Text>
            <Text></Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Transfer type</Text>
            <Text className="text-darktext font-bold">Wiremi user</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Amount</Text>
            <Text className="text-darktext font-bold">$500</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Fees</Text>
            <Text className="text-darktext font-bold">$0.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Rate</Text>
            <Text className="text-darktext font-bold">$1=₦1,650.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Recipient gets</Text>
            <Text className="text-darktext font-bold">₦806,320.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Recipient account
            </Text>
            <Text className="text-darktext font-bold">2391028711</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Recipient name</Text>
            <Text className="text-darktext font-bold">Susan Sheidu</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Total</Text>
            <Text className="text-buttonprimary  font-bold">$501</Text>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => ref.current?.open()}
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                        router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
                      router.push("/TransactionSendMoney/WiremiSuccessSchedule");
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
      </ScrollView>
    );
  };
  
  export default WiremiSummarySchedule;
  