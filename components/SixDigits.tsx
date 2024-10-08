import { View, Text, Dimensions } from "react-native";
import React from "react";

const SixDigits = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View className="flex-row justify-start items-center gap-2" style={{width: width}}>
      <View
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.08 }}
        className="border-landingdrop rounded-six"
      ></View>
      <View
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.08 }}
        className="border-landingdrop rounded-six"
      ></View>
      <View
        style={{ width: width * 0.12,borderWidth: 2, height: height * 0.08}}
        className="border-landingdrop rounded-six"
      ></View>
      <View
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.08 }}
        className="border-landingdrop rounded-six"
      ></View>
      <View
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.08}}
        className="border-landingdrop rounded-six"
      ></View>
      <View
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.08 }}
        className="border-landingdrop rounded-six"
      ></View>
    </View>
  );
};

export default SixDigits;
