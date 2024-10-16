import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface ShortBlueButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const ShortBlueButton = ({ title, onPress, color1 }: ShortBlueButtonProps) => {
  return (
    <View
      style={{ height: height * 0.05, width: width * 0.4 }}
      className="bg-buttonprimary rounded-ten items-center justify-center"
    >
      <TouchableOpacity onPress={onPress}>
        <Text className="font-bold text-[14px] text-white">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortBlueButton;
