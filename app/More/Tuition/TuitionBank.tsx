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
  import { SafeAreaView } from "react-native-safe-area-context";
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

  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const TuitionBank = () => {
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
      <View // style={{ backgroundColor: "#ffffff" }} 
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
            <TouchableOpacity onPress={() => router.push("/More")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Tuition</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TextLabelBox
              label="Amount"
              placeholder="Enter amount 0.00"
            />
          </View>
         <View>
         <TouchableOpacity onPress={() => ref2.current?.open()}>
            <View className="items-center justify-center">
              <TransparentSelectButton
                label="Bank name"
                placeholder="Select bank name"
              />
            </View>
          </TouchableOpacity>
          <View className="justify-end flex-row items-center pr-2">
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={"checkbox-blank-outline"}
            />
            <Text style={{ color: "#105CE2" }}>University of Buea {2458829299}</Text>
          </View>
         </View>
  
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push("/More/Tuition/TuitionTransactionSummary")}
            />
          </View>
          <BottomSheet height={750} ref={ref2}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
                <TouchableOpacity onPress={() => handleCloseModal2()}>
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
      </View>
    );
  };
  
  export default TuitionBank;
  