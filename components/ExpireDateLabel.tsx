import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

interface ExpireDateLabelProps {
  label: string;
  placeholder: string;
}

const ExpireDateLabel = ({ label, placeholder }: ExpireDateLabelProps) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      className="flex-col items-start gap-2"
      style={{
        elevation: 3
      }}
    >
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{
          width: width * 0.45,
          height: height * 0.05,
          backgroundColor: "#EDE8E8",
          borderWidth: 1,
          borderColor: "#F1F2F4"
        }}
        className="text-textinputtext text-[14px] rounded-ten  pl-4"
        placeholder={placeholder}
      />
    </View>
  );
};

export default ExpireDateLabel;
