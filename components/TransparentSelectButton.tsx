import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import CaratDown from "../assets/caratdown.svg";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
  onPress?: () => void;
  payload?: string;
}

const TransparentSelectButton = ({ label, placeholder, onPress, payload }: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View className="flex-col items-start gap-2">
      <Text className="text-textblack">{label}</Text>
      <TouchableOpacity
        style={{ width: width * 0.9, borderWidth: 1 }}
        onPress={onPress}
        className="flex-row text-textinputtext text-[14px] rounded-ten border-customgray  p-2 justify-between items-center"
      >
        <Text className="text-textinputtext text-[14px]  p-2 justify-between items-center">
          {payload ? payload : placeholder}
        </Text>
        <CaratDown />
      </TouchableOpacity>
    </View>
  );
};

export default TransparentSelectButton;
