import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

interface CvvLabelProps {
  label: string;
  placeholder: string;
}

const CvvLabel = ({ label, placeholder }: CvvLabelProps) => {
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
          width: width * 0.40,
          height: height * 0.05,
          backgroundColor: "#EDE8E8",
          borderWidth: 1,
          borderColor: "#F1F2F4"
        }}
        className="text-textinputtext text-[14px] rounded-ten  pl-6"
        placeholder={placeholder}
      />
    </View>
  );
};

export default CvvLabel;
