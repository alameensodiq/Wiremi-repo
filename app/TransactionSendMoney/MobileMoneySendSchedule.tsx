import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
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
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Royal from "../../assets/royalbank.svg";
import Chase from "../../assets/chase.svg";
import BankAmerica from "../../assets/bankamerica.svg";
import Barclays from "../../assets/barclays.svg";
import HSBC from "../../assets/hsbc.svg";
import TDBANK from "../../assets/tdbank.svg";
import Scotia from "../../assets/scotiabank.svg";
import BMO from "../../assets/bmo.svg";
import SearchLabelBox from "@/components/SearchLabelBox";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MobileMoneySendSchedule = () => {
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
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#ffffff" }} className="flex-1">
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
            onPress={() => router.push("/TransactionSendMoney/ListSendMoney")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Mobile money</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            placeholder="Enter amount $0.00"
          />
        </View>
        <View className="items-center justify-center">
          <TransparentSelectButton
            label="Country"
            placeholder="Select Country"
          />
        </View>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <View className="items-center justify-center">
            <TransparentSelectButton
              label="Institute"
              placeholder="Select institute"
            />
          </View>
        </TouchableOpacity>
        <View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Account number"
              placeholder="Enter account number"
            />
          </View>
          <View className="justify-end flex-row items-center pr-2">
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={"checkbox-blank-outline"}
            />
            <Text style={{ color: "#105CE2" }}>Sheidu Susan</Text>
          </View>
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
            label="Narration"
            placeholder="Enter narration (optional)"
          />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() =>
              router.push("/TransactionSendMoney/MobileMoneySummarySchedule")
            }
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
                Linked bank accounts
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default MobileMoneySendSchedule;
