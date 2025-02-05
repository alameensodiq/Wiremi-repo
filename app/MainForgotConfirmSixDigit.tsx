import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import SixDigits from "@/components/SixDigits";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStateverification } from "@/Store/Reducers/VerificationCode";
import { ForgetPin } from "@/Store/Apis/ForgetPin";
import { clearStateforgetpin } from "@/Store/Reducers/ForgetPin";

const MainForgotConfirmSixDigit = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [pin, setPin] = useState("");
  const [pintwo, setPintwo] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { phone, otp } = useLocalSearchParams();
  const formattedPhone = phone as string;
  const formattedOtp = otp as string;

  useEffect(() => {
    dispatch(clearStateverification());
  }, [phone]);

  const onChangepin = (value: string) => {
    setPin(value);
  };

  const onChangepintwo = (value: string) => {
    setPintwo(value);
  };

  const { forgetpin, authenticatingforgetpin } = useAppSelector(
    (state) => state.forgetpin
  );

  useEffect(() => {
    if (forgetpin?.status) {
      router.push("/ForgetSuccess");
    }
    return () => {
      dispatch(clearStateforgetpin());
    };
  }, [forgetpin]);

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
        <View
          style={{ paddingHorizontal: 8 }}
          className="flex-1  justify-start gap-6"
        >
          <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => router.push("/MainForgotSixDigitPinCode")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[16px] font-bold">
              Confirm your pincode in order to login again
            </Text>
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Enter pincode
            </Text>
            <SixDigits onChangeText={(value: string) => onChangepin(value)} />
          </View>
          <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
            <Text
              className="text-textblack text-[12px]"
              style={{ marginBottom: height * 0.01 }}
            >
              Confirm pincode
            </Text>
            <SixDigits
              onChangeText={(value: string) => onChangepintwo(value)}
            />
          </View>

          {authenticatingforgetpin ? (
            <View className="flex-row justify-center items-center">
              <ActivityIndicator
                color={"#105CE2"}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ) : (
            <View className="items-center">
              <BlueSignInButton
                title="Proceed"
                onPress={() => {
                  if (pin === pintwo) {
                    dispatch(
                      ForgetPin({
                        telephone: formattedPhone,
                        pin,
                        otp: formattedOtp
                      })
                    );
                  } else {
                    Alert.alert("Confirm Pin codes are the same");
                  }
                }}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainForgotConfirmSixDigit;
