import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
}

const TextLabelBox = ({ label, placeholder }: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View className="flex-col items-start gap-2">
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{ width: width * 0.9, borderWidth: 1 }}
        className="text-textinputtext text-[14px] rounded-ten border-custom-gray  p-2"
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextLabelBox;
