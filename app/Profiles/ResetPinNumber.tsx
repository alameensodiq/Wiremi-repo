import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SixDigits from "@/components/SixDigits";
import BlueSignInButton from "@/components/BlueSignInButton";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { EmailVerifyCode } from "@/Store/Apis/Emailverifycode";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";

const ResetPinNumber = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [confirmpin, setConfirmpin] = useState("");
  const onChangeconfirmpin = (value: string) => {
    setConfirmpin(value);
  };
  const { email } = useLocalSearchParams();
  const realEmail = Array.isArray(email) ? email[0] : email;

  const {
    emailverifycode,
    authenticatingemailverifycode,
    errorsemailverifycode
  } = useAppSelector((state) => state.emailverifycode);
  console.log(
    emailverifycode,
    authenticatingemailverifycode,
    "emailverifycode"
  );
  console.log(emailverifycode);

  useEffect(() => {
    if (emailverifycode?.status) {
      router.push("/Profiles/ResetPinConfirm");
    }
  }, [emailverifycode?.status]);
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            // keyboardShouldPersistTaps="handled"
          >
            <View
              style={{ paddingHorizontal: 8 }}
              className="flex-1  justify-start gap-6"
            >
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => router.push("/Profiles/ResetPin")}
                >
                  <Back />
                </TouchableOpacity>
                <Text className="text-[18px] text-textblack font-bold">
                  Reset pin
                </Text>
                <Text></Text>
              </View>
              <View className="flex-col items-start justify-center gap-2">
                <Text className="text-textblack text-[16px] font-bold">
                  Email Verification
                </Text>
                <Text style={{ color: "#6E7073" }} className="text-[12px]">
                  Verify your email
                </Text>
              </View>
              <View style={{ paddingLeft: width * 0.02 }} className="flex-col">
                <Text
                  className="text-textblack text-[12px]"
                  style={{ marginBottom: height * 0.01 }}
                >
                  Enter the 6 (Six) digit OTP code sent to your email
                </Text>
                <SixDigits
                  onChangeText={(value: string) => onChangeconfirmpin(value)}
                />
              </View>

              <View className="items-center">
                {authenticatingemailverifycode ? (
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
                      dispatch(
                        EmailVerifyCode({
                          otp: confirmpin,
                          email: realEmail
                        })
                      );
                    }}
                    // onPress={() => router.push("/Profiles/ResetPinConfirm")}
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

export default ResetPinNumber;
