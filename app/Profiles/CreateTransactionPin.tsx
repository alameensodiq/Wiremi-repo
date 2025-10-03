import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
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
import SixDigits from "@/components/SixDigits";
import { clearStatetransactionchange } from "@/Store/Reducers/TransactionChange";
import { TransactionChange } from "@/Store/Apis/TransactionChange";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import { CreateTransactionPins } from "@/Store/Apis/CreateTransactionPin";
import { clearStatecreatetransactionpin } from "@/Store/Reducers/CreateTransactionPin";
import { useAppContext } from "@/Context/useAppContext";

const CreateTransactionPin = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [show3, setShow3] = useState("");
  const [isVisible4, setIsVisible4] = useState<boolean>(false);
  const [pin, setPin] = useState("");
  const dispatch = useAppDispatch();
  const { theme } = useAppContext();

  const {
    createtransactionpin,
    authenticatingcreatetransactionpin,
    errorscreatetransactionpin
  } = useAppSelector((state) => state.createtransactionpin);

  console.log(createtransactionpin);
  console.log(errorscreatetransactionpin);

  useEffect(() => {
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible3,
        setShow: setShow3
      })
    );
  }, []);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  useEffect(() => {
    if (createtransactionpin?.status) {
      router.push("/Profiles/CreateTransactionPinSuccess");
    }
    return () => {
      dispatch(clearStatecreatetransactionpin());
    };
  }, [createtransactionpin?.status]);

  const onChangepin = (value: string) => {
    setPin(value);
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
                  {errorscreatetransactionpin?.error &&
                    typeof errorscreatetransactionpin?.error === "object" &&
                    !Array.isArray(errorscreatetransactionpin?.error) &&
                    Object.keys(errorscreatetransactionpin?.error).map(
                      (key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(errorscreatetransactionpin?.error[key])
                            ? errorscreatetransactionpin?.error[key].join(", ") // Handle arrays by joining the elements
                            : errorscreatetransactionpin?.error[key]}{" "}
                        </Text>
                      )
                    )}
                  {errorscreatetransactionpin?.error &&
                    typeof errorscreatetransactionpin?.error !== "object" && (
                      <Text className="mb-3">
                        {errorscreatetransactionpin?.error}
                      </Text>
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
                  <Text className="mb-3">Pin is not up to required length</Text>

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
                      ? "text-[18px]  font-bold text-[#ffffff]"
                      : "text-[18px] text-textblack font-bold"
                  }`}
                >
                  Create pincode
                </Text>
                <Text></Text>
              </View>
              <View className="flex-col items-start justify-center gap-2">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[16px]  font-bold text-[#ffffff]"
                      : "text-[16px] text-textblack font-bold"
                  }`}
                >
                  create your pin for transaction
                </Text>
              </View>
              <View
                style={{ paddingLeft: width * 0.02 }}
                className="flex-col items-start"
              >
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[12px]  font-bold text-[#ffffff]"
                      : "text-[12px] text-textblack font-bold"
                  }`}
                  style={{ marginBottom: height * 0.01 }}
                >
                  Enter pin
                </Text>
                {/* <FourDigits
              left
              onChangeText={(value: string) => onChangepin(value)}
            /> */}
                <SixDigits
                  onChangeText={(value: string) => onChangepin(value)}
                />
              </View>

              <View className="items-center">
                {authenticatingcreatetransactionpin ? (
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
                      if (pin?.length === 6) {
                        dispatch(
                          CreateTransactionPins({
                            router: router.push,
                            setIsVisible: setIsVisible,
                            setShow: setShow,
                            pin: pin
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

export default CreateTransactionPin;
