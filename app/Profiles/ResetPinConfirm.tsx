import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import React, { useEffect, useState } from "react";
import SixDigits from "@/components/SixDigits";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import FourDigits from "@/components/FourDigits";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import ShortBlueButton from "@/components/ShortBlueButton";
import { Resetingpin } from "@/Store/Apis/ResetingPin";
import { useAppContext } from "@/Context/useAppContext";

const ResetPinConfirm = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [confirmpin, setConfirmpin] = useState("");
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const { theme } = useAppContext();

  const onChangepin = (value: string) => {
    setPin(value);
  };

  const onChangeconfirmpin = (value: string) => {
    setConfirmpin(value);
  };

  const { resetingpin, authenticatingresetingpin, errorsresetingpin } =
    useAppSelector((state) => state.resetingpin);
  console.log(resetingpin, authenticatingresetingpin, "resetingpin");

  useEffect(() => {
    if (resetingpin?.status) {
      router.push("/Profiles/ResetPinSuccess");
    }
  }, [resetingpin?.status]);
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
                  {errorsresetingpin?.error &&
                    typeof errorsresetingpin?.error === "object" &&
                    !Array.isArray(errorsresetingpin?.error) &&
                    Object.keys(errorsresetingpin?.error).map((key, index) => (
                      <Text key={index}>
                        {key}:{" "}
                        {Array.isArray(errorsresetingpin?.error[key])
                          ? errorsresetingpin?.error[key].join(", ") // Handle arrays by joining the elements
                          : errorsresetingpin?.error[key]}{" "}
                      </Text>
                    ))}
                  {errorsresetingpin?.error &&
                    typeof errorsresetingpin?.error !== "object" && (
                      <Text className="mb-3">{errorsresetingpin?.error}</Text>
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
                    Either of the two pin is not correct/Incomplete
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
                <TouchableOpacity
                  onPress={() => router.push("/Profiles/ResetPin")}
                >
                  <Back
                    style={{
                      backgroundColor: theme === "dark" ? "#ffffff" : ""
                    }}
                  />
                </TouchableOpacity>
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[18px] text-[#ffffff] font-bold"
                      : "text-[18px] text-textblack font-bold"
                  }`}
                >
                  Reset pin
                </Text>
                <Text></Text>
              </View>
              <View className="flex-col items-start justify-center gap-2">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[16px] text-[#ffffff] font-bold"
                      : "text-[16px] text-textblack font-bold"
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
                      : "text-[12px] text-textblack"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  Old pin.
                </Text>
                {/* <FourDigits left/> */}
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
                      : "text-[12px] text-textblack"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  New pin.
                </Text>
                <SixDigits
                  onChangeText={(value: string) => onChangeconfirmpin(value)}
                />
                {/* <FourDigits left/> */}
              </View>

              <View className="items-center">
                {authenticatingresetingpin ? (
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
                        confirmpin?.length === 6
                        //  &&
                        // confirmpin === pin
                      ) {
                        dispatch(
                          Resetingpin({
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
                    // onPress={() => router.push("/Profiles/ResetPinSuccess")}
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

export default ResetPinConfirm;
