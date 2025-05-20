import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import TuitionProfile from "../../assets/tuitionprofile.svg";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import ShortBlueButton from "@/components/ShortBlueButton";
import { KycAddress } from "@/Store/Apis/KycAddress";
import { clearStatekycaddress } from "@/Store/Reducers/KycAddress";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ProfileKycAddress = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const router = useRouter();
  const { theme } = useAppContext();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    address: "",
    postalCode: null,
    country: "",
    state: "",
    city: ""
  });

  const [selectedIndex, setIndex] = React.useState<number>(0);
  const ref2 = useRef<BottomSheetRef>(null);
  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

  const onChange = (name: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    dispatch(clearStatekycaddress());
    return () => {
      dispatch(clearStatekycaddress());
    };
  }, []);

  const { kycaddress, authenticatingkycaddress, errorskycaddress } =
    useAppSelector((state) => state.kycaddress);

  useEffect(() => {
    if (kycaddress?.status) {
      router.push("/Profiles/KycCertificates");
    }
  }, [kycaddress?.status]);

  return (
    <View
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`} // style={{ backgroundColor: "#ffffff" }}
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-3"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            // keyboardShouldPersistTaps="handled"
          >
            <Modal animationType="slide" transparent={true} visible={isVisible}>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  setIsVisible(false);
                  // ref?.current?.close();
                }}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  {/* <View className="flex-col">
                              {errors?.error?.map((item: any) => {
                                <Text>{item}</Text>
                              })}
                              </View> */}
                  {errorskycaddress?.error &&
                    typeof errorskycaddress?.error === "object" &&
                    !Array.isArray(errorskycaddress?.error) &&
                    Object.keys(errorskycaddress?.error).map((key, index) => (
                      <Text key={index}>
                        {key}:{" "}
                        {Array.isArray(errorskycaddress?.error[key])
                          ? errorskycaddress?.error[key].join(", ") // Handle arrays by joining the elements
                          : errorskycaddress?.error[key]}{" "}
                      </Text>
                    ))}
                  {errorskycaddress?.error &&
                    typeof errorskycaddress?.error !== "object" && (
                      <Text className="mb-3">{errorskycaddress?.error}</Text>
                    )}
                  <ShortBlueButton
                    title="Close"
                    onPress={() => {
                      setIsVisible(false);
                      // ref?.current?.close();
                    }}
                  />
                </View>
              </Pressable>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isVisible2}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "#8080808C",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  setIsVisible2(false);
                  // ref?.current?.close();
                }}
              >
                <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
                  <Text className="mb-3">One of the inputs is empty</Text>

                  <ShortBlueButton
                    title="Close"
                    onPress={() => {
                      setIsVisible2(false);
                      // ref?.current?.close();
                    }}
                  />
                </View>
              </Pressable>
            </Modal>
            <View className="gap-3">
              <View className="flex-row justify-between items-center mb-1">
                {/* <TouchableOpacity onPress={() => router.push("/Profiles/ConfirmKycInfo")}>
              <Back />
            </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => router.push("/Profiles/ProfileKyc")}
                >
                  <Back style={{ backgroundColor: theme ? "#ffffff" : "" }} />
                </TouchableOpacity>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[20px] text-[#ffffff]"
                      : "text-[20px] text-pagetitle"
                  }`}
                >
                  Update KYC info
                </Text>
                <Text></Text>
              </View>
              <View className="mb-4">
                <Text
                  style={{ color: theme === "dark" ? "#ffffff" : "#413D43" }}
                  className="text-[14px]"
                >
                  We need your basic information
                </Text>
              </View>
              <View className="items-center justify-center">
                <TextLabelBox
                  both
                  label="Address"
                  placeholder="Enter your address"
                  onChangeText={(value: any) => onChange("address", value)}
                />
              </View>
              <View className="items-center justify-center">
                <TextLabelBox
                  label="City"
                  placeholder="Enter your city"
                  onChangeText={(value: any) => onChange("city", value)}
                />
              </View>
              {/* <TouchableOpacity onPress={() => ref3.current?.open()}> */}
              <View className="items-center justify-center">
                {/* <TransparentSelectButton
              label="State"
              placeholder="Select your state"
            /> */}
                <TextLabelBox
                  label="State"
                  placeholder="Select your state"
                  onChangeText={(value: any) => onChange("state", value)}
                />
              </View>
              {/* </TouchableOpacity> */}
              <View className="items-center justify-center">
                <TextLabelBox
                  number
                  label="Postal code"
                  placeholder="Enter your postal code"
                  onChangeText={(value: any) => onChange("postalCode", value)}
                />
              </View>
              <View className="items-center justify-center">
                <TextLabelBox
                  label="Country"
                  placeholder="Enter your Country"
                  onChangeText={(value: any) => onChange("country", value)}
                />
              </View>
              {/* <View className="items-center justify-center">
                <TextLabelBox label="Date of birth" placeholder="DD-MM-YY" />
              </View> */}

              <View
                style={{ height: height * 0.2 }}
                className="items-center justify-center"
              >
                {authenticatingkycaddress ? (
                  <View className="flex-row justify-center items-center">
                    <ActivityIndicator
                      color={"#105CE2"}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                ) : (
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => {
                      const { address, postalCode, country, city, state } =
                        formData;
                      if (address && postalCode && country && city && state) {
                        dispatch(
                          KycAddress({
                            router: router.push,
                            setIsVisible: setIsVisible,
                            setShow: setShow,
                            address,
                            postalCode: String(postalCode),
                            country,
                            city,
                            state
                          })
                        );
                      } else {
                        setIsVisible2(true);
                      }
                    }}
                    // onPress={() => router.push("/Profiles/KycCertificates")}
                  />
                )}
              </View>
            </View>
            <BottomSheet height={350} ref={ref2}>
              <View style={{ padding: 20, gap: 15 }}>
                {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
                <View className="items-center">
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#2A94F4",
                      fontWeight: "bold"
                    }}
                  >
                    Faculty
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
                    Select your faculty
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
                          Science
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
                          Art
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
                          Social science
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
            <BottomSheet height={290} ref={ref3}>
              <View style={{ padding: 20, gap: 15 }}>
                {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
                <View className="items-center">
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#2A94F4",
                      fontWeight: "bold"
                    }}
                  >
                    States
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
                          Lagos
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
                          Abuja
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default ProfileKycAddress;
