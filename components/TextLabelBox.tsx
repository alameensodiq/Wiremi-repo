import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
  reduce?:string;
  onChangeText?: (text: string) => void;
  disabled?:boolean;
  value?: string;
}

const TextLabelBox = ({ label, placeholder, reduce, onChangeText, disabled, value }: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      className="flex-col items-start gap-2"
      style={{
        shadowColor: "#101828",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{ width: reduce ? width * 0.4   : width * 0.9, borderWidth: 1, height: height * 0.06}}
        className="text-textinputtext text-[14px] rounded-ten border-customgray  p-2"
        placeholder={placeholder}
        editable={!disabled}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextLabelBox;
