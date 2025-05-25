import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  ActivityIndicator,
  ScrollView,
  Platform
} from "react-native";
import React, { useEffect, useState } from "react";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import FourDigits from "@/components/FourDigits";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import ShortBlueButton from "@/components/ShortBlueButton";
import { Changepin } from "@/Store/Apis/Changepin";
import SixDigits from "@/components/SixDigits";
import { clearStatechangepin } from "@/Store/Reducers/Changepin";
import { KeyboardAvoidingView } from "react-native";
import { useAppContext } from "@/Context/useAppContext";

const ChangePin = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [pin, setPin] = useState("");
  const [confirmpin, setConfirmpin] = useState("");
  const [confirmpin2, setConfirmpin2] = useState("");
  const dispatch = useAppDispatch();
  const { theme } = useAppContext();

  const { changepin, authenticatingchangepin, errorschangepin } =
    useAppSelector((state) => state.changepin);

  console.log(changepin);

  useEffect(() => {
    if (changepin?.status) {
      router.push("/Profiles/ChangePinSuccess");
    }
    return () => {
      dispatch(clearStatechangepin());
    };
  }, [changepin?.status]);

  const onChangepin = (value: string) => {
    setPin(value);
  };

  const onChangeconfirmpin = (value: string) => {
    setConfirmpin(value);
  };

  const onChangeconfirmpin2 = (value: string) => {
    setConfirmpin2(value);
  };

  return (
    <View
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar
        hidden={false}
        style={`${theme === "dark" ? "light" : "dark"}`}
      />
      <SafeAreaView
        className="justify-between"
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02
        }}
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
                  {errorschangepin?.error &&
                    typeof errorschangepin?.error === "object" &&
                    !Array.isArray(errorschangepin?.error) &&
                    Object.keys(errorschangepin?.error).map((key, index) => (
                      <Text key={index}>
                        {key}:{" "}
                        {Array.isArray(errorschangepin?.error[key])
                          ? errorschangepin?.error[key].join(", ") // Handle arrays by joining the elements
                          : errorschangepin?.error[key]}{" "}
                      </Text>
                    ))}
                  {errorschangepin?.error &&
                    typeof errorschangepin?.error !== "object" && (
                      <Text className="mb-3">{errorschangepin?.error}</Text>
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
                  <Text className="mb-3">
                    Either of the two pin is not correct
                  </Text>

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
            <View
              style={{ paddingHorizontal: 8 }}
              className="flex-1  justify-start gap-6"
            >
              <View className="flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.push("/Profile")}>
                  <Back
                    style={{
                      backgroundColor: theme === "dark" ? "#ffffff" : ""
                    }}
                  />
                </TouchableOpacity>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[18px]font-bold text-[#ffffff]"
                      : "text-[18px] text-textblack font-bold"
                  }`}
                >
                  Change pincode
                </Text>
                <Text></Text>
              </View>
              <View className="flex-col items-start justify-center gap-2">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[16px] font-bold text-[#ffffff]"
                      : "text-textblack text-[16px] font-bold"
                  }`}
                >
                  Reset your pin for transaction
                </Text>
              </View>
              <View
                style={{ paddingLeft: width * 0.02 }}
                className="flex-col items-start"
              >
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[12px] text-[#ffffff]"
                      : "text-textblack text-[12px]"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  Old pincode
                </Text>
                {/* <FourDigits
              left
              onChangeText={(value: string) => onChangepin(value)}
            /> */}
                <SixDigits
                  onChangeText={(value: string) => onChangepin(value)}
                />
              </View>
              <View
                style={{ paddingLeft: width * 0.02 }}
                className="flex-col items-start"
              >
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[12px] text-[#ffffff]"
                      : "text-textblack text-[12px]"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  New pincode
                </Text>
                {/* <FourDigits
              left
              onChangeText={(value: string) => onChangeconfirmpin(value)}
            /> */}
                <SixDigits
                  onChangeText={(value: string) => onChangeconfirmpin(value)}
                />
              </View>
              <View
                style={{ paddingLeft: width * 0.02 }}
                className="flex-col items-start"
              >
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[12px] text-[#ffffff]"
                      : "text-textblack text-[12px]"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  Confirm pincode.
                </Text>
                <SixDigits
                  onChangeText={(value: string) => onChangeconfirmpin2(value)}
                />
                {/* <FourDigits left /> */}
              </View>

              <View className="items-center">
                {authenticatingchangepin ? (
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
                      if (
                        pin?.length === 6 &&
                        confirmpin?.length === 6 &&
                        confirmpin2?.length === 6 &&
                        confirmpin2 === confirmpin
                      ) {
                        dispatch(
                          Changepin({
                            router: router.push,
                            setIsVisible: setIsVisible,
                            setShow: setShow,
                            oldpin: pin,
                            pin: confirmpin
                          })
                        );
                      } else {
                        setIsVisible2(true);
                      }
                    }}
                    // onPress={() => router.push("/Profiles/ChangePinSuccess")}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default ChangePin;
