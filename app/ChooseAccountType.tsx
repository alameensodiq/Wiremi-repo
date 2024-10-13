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
import Wiremi from "../assets/splash.svg";
import Back from "../assets/Back.svg";
import Logo from "../assets/Logo.svg";
import Person from "../assets/person.svg";
import Business from "../assets/business.svg";
import RightCarat from "../assets/rightcarat.svg";

const ChooseAccountType = () => {
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
                gap: 19
              }}
            >
              <View className="flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.back()}>
                  <Back />
                </TouchableOpacity>
                <Wiremi height={30} />
                <Text></Text>
              </View>
              <View className="flex-row items-center justify-center">
                <Logo />
              </View>
              <View className="flex-col items-center justify-center gap-2">
                <Text className="text-textblack text-[18px] font-bold">
                  Choose your account type
                </Text>
              </View>
              <TouchableOpacity onPress={() => router.push("/PersonalAccountReg")}>
                <View
                  style={{ paddingHorizontal: height * 0.03 }}
                  className="flex-row items-center justify-between"
                >
                  <View className="flex-row items-center gap-2">
                    <Person />
                    <Text className="text-chooseaccounttext text-[13px]">
                      Personal account
                    </Text>
                  </View>
                  <View>
                    <RightCarat />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/BusinessAccountFirstStep")}
              >
                <View
                  style={{ paddingHorizontal: height * 0.03 }}
                  className="flex-row items-center justify-between"
                >
                  <View className="flex-row items-center gap-2">
                    <Business />
                    <Text className="text-chooseaccounttext text-[13px]">
                      Business account
                    </Text>
                  </View>
                  <View>
                    <RightCarat />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ChooseAccountType;
