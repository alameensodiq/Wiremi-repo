import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";

const CardDigits = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View className="flex-row justify-start items-center gap-2" style={{width: width}}>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12,borderWidth: 2, height: height * 0.06}}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
    </View>
  );
};

export default CardDigits;
