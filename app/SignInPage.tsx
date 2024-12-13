import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React from "react";
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

const SignInPage = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
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
                height: height * 0.90,
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
              <TextLabelBox
                label="Wiremi ID"
                placeholder="Enter your Wiremi ID"
              />
              <View>
                <TextLabelBox
                  label="Pin"
                  placeholder="Enter your 6 digit Pin"
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
              <BlueSignInButton
                title="Sign in"
                onPress={() => console.log("sign")}
              />
              <View className="flex-row items-center justify-center">
                <Text className="text-textinputtext">
                  Don’t have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push('/ChooseAccountType')}>
                <Text className="text-buttonprimary">Sign up</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-col justify-end items-center">
                {Platform.OS === "ios" ? (
                  <View className="items-center gap-2">
                    <Face />
                    <Text>Scan Face ID to Login</Text>
                  </View>
                ) : (
                  <View className="items-center gap-2">
                    <Finger />
                    <Text>Scan Fingerprint to Login</Text>
                  </View>
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
