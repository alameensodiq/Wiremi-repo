import {
  View,
  Text,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import SendMoneyAccount from "../../assets/sendmoneyaccount.svg";
import SendMoneyWiremi from "../../assets/sendmoneywiremi.svg";
import Scheduletransfer from "../../assets/scheduletransfer.svg";
import Rightcarat from "../../assets/rightcarat.svg";
import MobileMoney from "../../assets/mobilemoney.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import Wire from "../../assets/wire.svg";
import DirectTransfer from "../../assets/directtransfer.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ListSendMoney = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref = useRef<BottomSheetRef>(null);



  const handleCloseModal = () => {
    ref.current?.close();
  };

  return (
    <View style={{backgroundColor:"#ffffff"}} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.01,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/(PersonalAccount)/Dashboard")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Send money</Text>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <SendMoneyAccount />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Bank account{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Transfer funds anytime from your bank account
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/InteracDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <SendMoneyWiremi />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Wiremi{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Seamless transfer to wiremi user
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/InteracDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <MobileMoney />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Mobile money{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Easily transfer your funds anytime
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/InteracDetails")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Scheduletransfer />
              </View>
              <View className="items-start">
                <Text className="text-[14px] font-bold text-black">
                  Schedule transfer{" "}
                </Text>
                <Text className="text-[10px] text-deposistsub">
                  Send money automatically with ease
                </Text>
              </View>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        {/* <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "#000000"
          }}
        > */}
        <BottomSheet height={400} ref={ref}>
          <View style={{ padding: 20, gap: 15 }}>
            {/* <Text>Bottom Sheet Content</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text>Close</Text>
            </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Schedule transfer
              </Text>
            </View>
            <View className="flex-row justify-between">
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
              <TouchableOpacity onPress={() => {
                router.push('/TransactionSendMoney/DirectTransferDetails')
                handleCloseModal
              }}>
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
            </View>
          </View>
        </BottomSheet>
        {/* </BottomSheetModal> */}
      </SafeAreaView>
    </View>
  );
};

export default ListSendMoney;
