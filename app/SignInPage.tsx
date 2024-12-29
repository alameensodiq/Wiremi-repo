import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPageImage from "../assets/LandingScreen.png";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Wiremi from "../assets/splash.svg";
import Back from "../assets/Back.svg";
import Logo from "../assets/Logo.svg";
import Face from "../assets/Face.svg";
import Finger from "../assets/Finger.svg";
import TextLabelBox from "@/components/TextLabelBox";
import BlueSignInButton from "@/components/BlueSignInButton";
import { CheckBox } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { Login } from "@/Store/Apis/Login";
import { useAppContext } from "@/Context/useAppContext";
import { clearStatelogin } from "@/Store/Reducers/Login";

const SignInPage = () => {
  const { isAuthenticated, checkUser } = useAppContext();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useAppDispatch();
  const [wiremiId, setWiremiId] = useState<string>(""); //thumb & sigin(if sign in before, use it for account_id saved)
  const [NotsavedwiremiId, setNotsavedwiremiId] = useState<string>(""); //if not sigin before , use it for account_id
  const [wiremiIdpin, setWiremiIdpin] = useState<string>(""); //sigin
  const [pincode, setPincode] = useState<string>(""); //thumb
  NotsavedwiremiId;

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const wiremiIds = await AsyncStorage.getItem("Wiremi_Id");
        const pincodes = await AsyncStorage.getItem("Pin_code");
        console.log(wiremiIds);
        console.log(pincodes);
        if (wiremiIds) setWiremiId(wiremiIds);
        if (pincodes) setPincode(pincodes);
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };
    fetchStoredData();
    return() => {
      dispatch(clearStatelogin())
    }
  }, []);

  const onChangepin = (value: string) => {
    setNotsavedwiremiId(value);
  };

  const onChangeIdpin = (value: string) => {
    setWiremiIdpin(value);
  };

  const { logins, authenticatinglogin } = useAppSelector(
    (state) => state.logins
  );
  console.log(logins, authenticatinglogin, "account");
  console.log(logins);

  useEffect(() => {
    if (logins?.access_token) {
      AsyncStorage.setItem("token", logins?.access_token);
      router.push("/(PersonalAccount)/Dashboard");
    }
  }, [logins?.access_token]);

  console.log();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={LandingPageImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar hidden={false} style="light" />
        <SafeAreaView
          className="justify-between"
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingTop: height * 0.02
          }}
        >
          <View className="flex-1 relative items-center justify-end">
            <View
              className="bg-white absolute"
              style={{
                height: height * 0.92,
                width: width * 0.91,
                borderTopLeftRadius: 40, // Directly apply top-left radius
                borderTopRightRadius: 40,
                opacity: 0.2
              }}
            ></View>
            <View
              className="bg-creamwhite"
              style={{
                height: height * 0.9,
                zIndex: 1000,
                width: width,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingTop: height * 0.04,
                paddingHorizontal: width * 0.04,
                gap: 15
              }}
            >
              <View className="flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.push("/getStarted")}>
                  <Back />
                </TouchableOpacity>
                <Wiremi height={30} />
                <Text></Text>
              </View>
              <View className="flex-row items-center justify-center">
                <Logo />
              </View>
              <View className="flex-col items-center justify-center gap-2">
                <Text className="text-textblack text-[18px]">Sign in</Text>
                <Text className="text-lighttextblack text-[13px]">
                  Welcome back! Please sign in to continue
                </Text>
              </View>
              <KeyboardAvoidingView style={{ gap: 15 }}>
                <TextLabelBox
                  label="Wiremi ID"
                  placeholder="Enter your Wiremi ID"
                  disabled={!!wiremiId}
                  value={wiremiId}
                  onChangeText={
                    wiremiId
                      ? (value: string) => onChangepin(value)
                      : (value: string) => onChangepin(value)
                  }
                />
                <View>
                  <TextLabelBox
                    label="Pin"
                    placeholder="Enter your 6 digit Pin"
                    onChangeText={(value: string) => onChangeIdpin(value)}
                  />
                  <View
                    style={{ paddingRight: width * 0.02 }}
                    className="flex-row justify-between items-center"
                  >
                    <View
                      style={{ marginLeft: -width * 0.03 }}
                      className="flex-row justify-start items-center"
                    >
                      <CheckBox
                        checked={checked}
                        size={15}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={"checkbox-blank-outline"}
                      />
                      <Text>Remember Me</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => router.push("/MainForgotPinCode")}
                      >
                        <Text className="text-buttonprimary text-[14px]">
                          Forgot Pincode
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {authenticatinglogin ? (
                  <View className="flex-row justify-center items-center">
                    <ActivityIndicator
                      color={"#105CE2"}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                ) : (
                  <BlueSignInButton
                    title="Sign in"
                    onPress={() => {
                      // if (
                      //   (wiremiId || NotsavedwiremiId) &&
                      //   wiremiIdpin.length === 6
                      // ) {
                        dispatch(
                          Login({
                            pin: wiremiIdpin,
                            account_id: wiremiId ? wiremiId : NotsavedwiremiId
                          })
                        );
                      // }
                    }}
                  />
                )}
                <View className="flex-row items-center justify-center">
                  <Text className="text-textinputtext">
                    Don’t have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/ChooseAccountType")}
                  >
                    <Text className="text-buttonprimary">Sign up</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
              <View className="flex-col justify-end items-center">
                {Platform.OS === "ios" && pincode && wiremiId ? (
                  <View className="items-center gap-2">
                    <Face />
                    <Text>Scan Face ID to Login</Text>
                  </View>
                ) : Platform.OS === "android" && pincode && wiremiId ? (
                  <View className="items-center gap-2">
                    <Finger />
                    <Text>Scan Fingerprint to Login</Text>
                  </View>
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignInPage;
