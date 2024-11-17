import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import CaratDown from "../assets/caratdown.svg";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
}

const EscrowRequest = ({ label, placeholder }: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View className="flex-col items-start gap-2">
      <Text className="text-textblack">{label}</Text>
      <View
        style={{ width: width * 0.9, borderWidth: 1 }}
        className="flex-row text-textinputtext text-[14px] rounded-ten border-customgray  p-2 justify-between items-center"
      >
        <TextInput placeholder={placeholder} className="text-textinputtext text-[14px]  p-2 justify-between items-center" />
        <View
          style={{ width: width * 0.25, height: height * 0.03, backgroundColor:'#2A94F4' }}
          className="flex-row justify-center items-center"
        >
          <Text className="text-white text-[12px]">Send request</Text>
        </View>
      </View>
    </View>
  );
};

export default EscrowRequest;
