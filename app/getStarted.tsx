import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar as RNStatusBar,
  TextInput,
  FlatList,
  Image
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import LandingPageImage from "../assets/LandingScreen.png";
import LandingGroup from "../assets/LandGroup.png";
import downcarat from "../assets/downcarat.png";
import eng from "../assets/eng.png";
import LongButton from "@/components/LongButton";
import SignInLongButton from "@/components/SignInLongButton";
import { useRouter } from "expo-router";

const options = ["Option 1", "Option 2", "Option 3"];
const optionSelect = ["Option 1"];

const GetStarted = () => {
  const { height, width } = Dimensions.get("window");
  const dynamicHeight = height * 0.93;
  const router = useRouter();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (value: any) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };
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
          <View style={{ paddingHorizontal: height * 0.03 }}>
            <View
              style={{ height: height * 0.05 }}
              className="flex-row-reverse  items-center"
            >
              {/* <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)}>
              <TextInput
                className=" text-white p-2 rounded-six border-borderwith border-landingdrop"
                placeholder="Select an option"
                value={selectedValue}
                editable={false} // Make it non-editable
              />
            </TouchableOpacity> */}
              <FlatList
                data={optionSelect}
                keyExtractor={(item) => item}
                className="absolute rounded shadow-lg"
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setDropdownVisible(!isDropdownVisible)}
                  >
                    <Text
                      style={{
                        height: height * 0.05,
                        width: width * 0.25,
                        textAlign: "center",
                        lineHeight: height * 0.04
                      }}
                      className="justify-center items-center rounded-six border-landingdrop border-borderwith text-white"
                    >
                      <Image source={eng} /> Eng <Image source={downcarat} />
                    </Text>
                  </TouchableOpacity>
                )}
              />
              {isDropdownVisible && (
                <View
                  className="flex-row-reverse z-30"
                  style={{
                    paddingHorizontal: width * 0.13,
                    marginTop: height * 0.07
                  }}
                >
                  <FlatList
                    data={options}
                    keyExtractor={(item) => item}
                    className="absolute rounded shadow-lg bg-primary"
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleSelect(item)}>
                        <Text
                          style={{
                            height: height * 0.05,
                            width: width * 0.25,
                            textAlign: "center",
                            lineHeight: height * 0.04
                          }}
                          className="justify-center items-center rounded-six border-landingdrop border-borderwith text-white"
                        >
                          <Image source={eng} /> Eng{" "}
                          {/* <Image source={downcarat} /> */}
                        </Text>
                      </TouchableOpacity>
                    )}
                    style={{ maxHeight: 150 }} // Limit the height of the dropdown
                  />
                </View>
              )}
            </View>
          </View>
          <View
            className="items-center"
            style={{ height: dynamicHeight, paddingTop: height * 0.03 }}
          >
            <ImageBackground
              resizeMode="cover"
              style={{ height: height * 0.48, width: width }}
              source={LandingGroup}
            ></ImageBackground>
            <View
              className="bg-white flex-col"
              style={{ height: height * 0.45, width: width, paddingTop: height * 0.02 }}
            >
              <View
                style={{ height: height * 0.07, width: width }}
                className="flex justify-center items-center bg-white"
              >
                <Text className="text-primary text-[20px] font-bold">
                  Discover the freedom of banking
                </Text>
                <Text className="text-primary text-[20px] font-bold">
                  on your terms
                </Text>
              </View>
              <View
                style={{ height: height * 0.07, width: width}}
                className="flex-col justify-center items-center bg-white gap-1"
              >
                <View className="flex-row gap-2">
                  <Text className="text-dark  text-[14px]">Wiremi</Text>
                  <Text className="text-lighttextdark text-[14px]">
                    simplifies transactions and payments by
                  </Text>
                </View>
                <Text className="text-lighttextdark text-[14px]">making everything seamless just for you</Text>
              </View>
              <View style={{height: height * 0.07, paddingTop: height * 0.02}} className="bg-white items-center justify-center">
                <LongButton title='Get Started' onPress={() => console.log('Ebuka')}/>
              </View>
              <View style={{height: height * 0.07}} className="bg-white items-center justify-center">
                <SignInLongButton title='Sign in' onPress={() => router.push('/SignInPage')}/>
              </View>
              <View  style={{height: height * 0.06}}className="flex-col justify-center items-center">
                <Text className="text-creataccount">By creating an account, you agree to our </Text>
                <Text className="text-buttonprimary">Privacy Terms and Policy</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
