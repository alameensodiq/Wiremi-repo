import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  ActivityIndicator
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

const TransactionChangePin = () => {
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
  const [confirmpin, setConfirmpin] = useState("");
  const [confirmpin2, setConfirmpin2] = useState("");
  const dispatch = useAppDispatch();

  const {
    transactionchange,
    authenticatingtransactionchange,
    errorstransactionchange
  } = useAppSelector((state) => state.transactionchange);

  console.log(transactionchange);
  console.log(errorstransactionchange);

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
    if (transactionchange?.status) {
      router.push("/Profiles/TransactionChangepinSuccess");
    }
    return () => {
      dispatch(clearStatetransactionchange());
    };
  }, [transactionchange?.status]);

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
    <View className="flex-1 ">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        className="justify-between"
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02
        }}
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
              {errorstransactionchange?.error &&
                typeof transactionchange?.error === "object" &&
                !Array.isArray(transactionchange?.error) &&
                Object.keys(transactionchange?.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(transactionchange?.error[key])
                      ? transactionchange?.error[key].join(", ") // Handle arrays by joining the elements
                      : transactionchange?.error[key]}{" "}
                  </Text>
                ))}
              {transactionchange?.error &&
                typeof transactionchange?.error !== "object" && (
                  <Text className="mb-3">{transactionchange?.error}</Text>
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
        <Modal animationType="slide" transparent={true} visible={isVisible2}>
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
              <Text className="mb-3">Either of the two pin is not correct</Text>

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
        <Modal animationType="slide" transparent={true} visible={isVisible4}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible4(false);
              // ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              <Text className="mb-3">Transaction pin hasn't be created</Text>

              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible4(false);
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
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Change pincode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[16px] font-bold">
              change your pin for transaction
            </Text>
          </View>
          <View
            style={{ paddingLeft: width * 0.02 }}
            className="flex-col items-start"
          >
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Old pin
            </Text>
            {/* <FourDigits
              left
              onChangeText={(value: string) => onChangepin(value)}
            /> */}
            <SixDigits onChangeText={(value: string) => onChangepin(value)} />
          </View>
          <View
            style={{ paddingLeft: width * 0.02 }}
            className="flex-col items-start"
          >
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              New pin
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
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Confirm pin
            </Text>
            <SixDigits
              onChangeText={(value: string) => onChangeconfirmpin2(value)}
            />
            {/* <FourDigits left /> */}
          </View>

          <View className="items-center">
            {authenticatingtransactionchange ? (
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
                  if(accountdetails?.is_pin?.is_transaction_pin){
                    if (
                      pin?.length === 6 &&
                      confirmpin?.length === 6 &&
                      confirmpin2?.length === 6 &&
                      confirmpin2 === confirmpin
                    ) {
                      dispatch(
                        TransactionChange({
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

                  } else {
                    setIsVisible4(true)
                  }
                  
                }}
                // onPress={() => router.push("/Profiles/ChangePinSuccess")}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TransactionChangePin;
