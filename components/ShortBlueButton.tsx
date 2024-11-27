import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface ShortBlueButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
  black?: boolean;
}

const { height, width } = Dimensions.get("window");

const ShortBlueButton = ({ title, onPress, color1, black }: ShortBlueButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{ height: height * 0.05, width: width * 0.4 }}
      className={`${ black ? "bg-black" : 'bg-buttonprimary'} rounded-ten items-center justify-center`}
    >
        <Text className="font-bold text-[14px] text-white">
          {title}
        </Text>
    </View>
    </TouchableOpacity>
  );
};

export default ShortBlueButton;
