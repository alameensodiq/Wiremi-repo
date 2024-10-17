import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React from "react";
import LandingPageImage from "../assets/LandingScreen.png";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../assets/Back.svg";
import Logo from "../assets/Logo.svg";
import BusOne from "../assets/busframeone.svg";
import BusTwo from "../assets/busframetwo.svg";
import BusThree from "../assets/busframethree.svg";
import TextLabelBox from "@/components/TextLabelBox";
import BlueSignInButton from "@/components/BlueSignInButton";
import SelectAndText from "@/components/SelectAndText";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import SixDigits from "@/components/SixDigits";

const BusinessAccountFirstStep = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [process, setProcess] = React.useState(1);
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
                gap: 8
              }}
            >
              <View className="flex-row justify-between items-center">
                {process === 1 ? (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Back />
                  </TouchableOpacity>
                ) : process === 2 ? (
                  <TouchableOpacity onPress={() => setProcess(1)}>
                    <Back />
                  </TouchableOpacity>
                ) : process === 3 ? (
                  <TouchableOpacity onPress={() => setProcess(2)}>
                    <Back />
                  </TouchableOpacity>
                ) : (
                  ""
                )}
                {process === 1 ? (
                  <BusOne />
                ) : process === 2 ? (
                  <BusTwo />
                ) : process === 3 ? (
                  <BusThree />
                ) : (
                  ""
                )}
                <Text></Text>
              </View>
              <View className="flex-row items-center justify-center">
                <Logo />
              </View>
              {process === 1 ? (
                <View className="flex-col items-center justify-center gap-2">
                  <Text className="text-textblack text-[18px] font-bold">
                    Business account registeration
                  </Text>
                  <Text className="text-lighttextblack">Glad to have you!</Text>
                </View>
              ) : process === 2 ? (
                <View className="flex-col items-center justify-center gap-2">
                  <Text className="text-textblack text-[18px] font-bold">
                    Business information
                  </Text>
                </View>
              ) : process === 3 ? (
                <View className="flex-col items-center justify-center gap-2">
                  <Text className="text-textblack text-[18px] font-bold">
                    Create Pin
                  </Text>
                  <Text className="text-lighttextblack">
                    Enter your 6 digit pin to help sign in always!
                  </Text>
                </View>
              ) : (
                ""
              )}
              {process === 1 ? (
                <View
                  style={{
                    width: width,
                    paddingTop: height * 0.03,
                    paddingHorizontal: width * 0.04,
                    gap: 6
                  }}
                  className="flex-col gap-2"
                >
                  <TextLabelBox
                    label="First name"
                    placeholder="Enter your first name"
                  />
                  <TextLabelBox
                    label="Last name"
                    placeholder="Enter your last name"
                  />
                  <TextLabelBox
                    label="Email address"
                    placeholder="Enter your email address"
                  />

                  <SelectAndText title="Phone number" />
                  <TextLabelBox
                    label="Referral code"
                    placeholder="Enter your referral code (optional)"
                  />
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => setProcess(2)}
                  />
                  <View className="flex-row items-center justify-center">
                    <Text className="text-textinputtext">
                      Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/SignInPage")}
                    >
                      <Text className="text-buttonprimary">Sign in</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : process === 2 ? (
                <View
                  style={{
                    width: width,
                    paddingTop: height * 0.03,
                    paddingHorizontal: width * 0.04,
                    gap: 6
                  }}
                  className="flex-col gap-2"
                >
                  <TextLabelBox
                    label="Legal entity name"
                    placeholder="Enter registered business  name"
                  />
                  <TextLabelBox
                    label="Business name"
                    placeholder="Enter your business name"
                  />
                  <TransparentSelectButton
                    label="Business type"
                    placeholder="Enter your email address"
                  />
                  <TransparentSelectButton
                    label="Industry"
                    placeholder="Enter your email address"
                  />
                  <TextLabelBox
                    label="Country"
                    placeholder="Enter country of incorporation"
                  />
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => setProcess(3)}
                  />
                  <View className="flex-row items-center justify-center">
                    <Text className="text-textinputtext">
                      Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/SignInPage")}
                    >
                      <Text className="text-buttonprimary">Sign in</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    width: width,
                    paddingTop: height * 0.03,
                    paddingHorizontal: width * 0.03,
                    gap: 6
                  }}
                  className="flex-col gap-2"
                >
                  <View
                    className="flex-col"
                  >
                    <Text
                      className="text-textblack text-[13px]"
                      style={{ marginBottom: height * 0.01 }}
                    >
                      Enter pin code
                    </Text>
                    <SixDigits />
                  </View>
                  <View
                    className="flex-col"
                  >
                    <Text
                      className="text-textblack text-[13px]"
                      style={{ marginBottom: height * 0.01 }}
                    >
                      Re-enter pin code
                    </Text>
                    <SixDigits />
                  </View>
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => router.push('/BusinessSuccess')}
                  />
                  <View className="flex-row items-center justify-center">
                    <Text className="text-textinputtext">
                      Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/SignInPage")}
                    >
                      <Text className="text-buttonprimary">Sign in</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BusinessAccountFirstStep;
