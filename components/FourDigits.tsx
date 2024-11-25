import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";


interface FourDigitsProps {
  left?: boolean
}

const FourDigits = ({left} : FourDigitsProps) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View className={`flex-row  ${left ? "justify-start" : "justify-center" } items-center gap-2`} style={{width: width}}>
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

export default FourDigits;
