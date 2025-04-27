import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
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
import EscrowRequest from "@/components/EscrowRequest";
import Cards from "../../../assets/savingscard.svg";
import Bank from "../../../assets/savingsbank.svg";
import Momo from "../../../assets/savingsmomo.svg";
import Wiremi from "../../../assets/savingswiremi.svg";
import { FlatList } from "react-native";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NormalTransactions = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);
  const ref4 = useRef<BottomSheetRef>(null);
  const ref5 = useRef<BottomSheetRef>(null);
  const ref6 = useRef<BottomSheetRef>(null);
  const ref7 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
  const handleCloseModal3 = () => {
    ref3.current?.close();
  };
  const handleCloseModal4 = () => {
    ref4.current?.close();
  };
  const handleCloseModal5 = () => {
    ref5.current?.close();
  };
  const handleCloseModal6 = () => {
    ref6.current?.close();
  };
  const handleCloseModal7 = () => {
    ref7.current?.close();
  };

  const data2 = [
    {
      id: "1",
      name: "Wiremi",
      image: <Wiremi />
    },
    {
      id: "2",
      name: "Momo",
      image: <Momo />
    },
    {
      id: "3",
      name: "Bank",
      image: <Bank />
    },
    {
      id: "4",
      name: "Cards",
      image: <Cards />
    }
  ];
  return (
    <ScrollView // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
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
            onPress={() => router.push("/More/Escrow/EscrowTypes")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Normal Escrow</Text>
          <Text></Text>
        </View>
        <View className="flex -col items-start justify-center">
          <Text style={{ color: "#606162" }}>
            Please fill out these details in order to use the escrow
          </Text>
          <Text style={{ color: "#606162" }}>module</Text>
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Amount" placeholder="Enter amount" />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Counterpart contact"
            placeholder="Enter phone number/email"
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox label="Days" placeholder="Enter no of days" />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Payment purpose"
            placeholder="Enter payment purpose"
          />
        </View>
        <TouchableOpacity onPress={() => ref2.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Payout method"
              placeholder="Select payout method"
            />
          </View>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <EscrowRequest
            label="Wiremi ID"
            placeholder="Enter client wiremi ID"
          />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() =>
              router.push("/More/Escrow/NormalSuccess")
            }
          />
        </View>
        <BottomSheet height={400} ref={ref2}>
            <View style={{ padding: 20, gap: 10 }}>
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
                  data={data2}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (index === 0) {
                          ref3.current?.open();
                        }
                        if (index === 1) {
                          ref4.current?.open();
                        }
                        if (index === 2) {
                          ref5.current?.open();
                        }
                        if (index === 3) {
                          ref7.current?.open();
                        }
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
          <BottomSheet height={240} ref={ref3}>
            <View style={{ padding: 20, gap: 10 }}>
              {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Wiremi ID
                </Text>
              </View>
              <View style={{ height: height * 0.5 }} className="flex-col">
                <View className="items-center justify-center mb-3">
                  <TextLabelBox label="Wiremi ID" placeholder="Enter Wiremi ID" />
                </View>
                <BlueSignInButton
                  title="Ok"
                  onPress={() => handleCloseModal3()}
                />
              </View>
            </View>
          </BottomSheet>
          <BottomSheet height={240} ref={ref4}>
            <View style={{ padding: 20, gap: 10 }}>
              {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Momo
                </Text>
              </View>
              <View style={{ height: height * 0.5 }} className="flex-col">
                <View className="items-center justify-center mb-3">
                  <TextLabelBox
                    label="Momo number"
                    placeholder="Enter Momo number"
                  />
                </View>
                <BlueSignInButton
                  title="Ok"
                  onPress={() => handleCloseModal4()}
                />
              </View>
            </View>
          </BottomSheet>
          <BottomSheet height={340} ref={ref5}>
            <View style={{ padding: 20, gap: 10 }}>
              {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Bank
                </Text>
              </View>
              <View style={{ height: height * 0.5 }} className="flex-col gap-2">
                <TouchableOpacity onPress={() => ref6.current?.open()}>
                  <View className="items-center justify-center">
                    <TransparentSelectButton
                      label="Bank name"
                      placeholder="Select bank name"
                    />
                  </View>
                </TouchableOpacity>
                <View className="items-center justify-center mb-3">
                  <TextLabelBox
                    label="Account number"
                    placeholder="Enter account number"
                  />
                </View>
                <BlueSignInButton
                  title="Ok"
                  onPress={() => handleCloseModal5()}
                />
              </View>
            </View>
          </BottomSheet>
          <BottomSheet height={750} ref={ref6}>
            <View style={{ padding: 20, gap: 30 }}>
              {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Select bank accounts
                </Text>
              </View>
              <View>
                <SearchLabelBox placeholder="Search" />
              </View>
              <View className="gap-4">
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
                <TouchableOpacity onPress={() => handleCloseModal6()}>
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
          <BottomSheet height={340} ref={ref7}>
            <View style={{ padding: 20, gap: 10 }}>
              {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Cards
                </Text>
              </View>
              <View style={{ height: height * 0.5 }} className="flex-col gap-2">
                <TouchableOpacity onPress={() => ref7.current?.open()}>
                  <View className="items-center justify-center">
                    <TextLabelBox
                      label="Enter card number"
                      placeholder="Enter card number"
                    />
                  </View>
                </TouchableOpacity>
                <View className="items-start justify-center mb-3">
                  <TextLabelBox
                    reduce="reduce"
                    label="Expiry date"
                    placeholder="Enter expiry date"
                  />
                </View>
                <BlueSignInButton
                  title="Ok"
                  onPress={() => handleCloseModal7()}
                />
              </View>
            </View>
          </BottomSheet>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NormalTransactions;
