import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface ShortWhiteButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const ShortWhiteButton = ({ title, onPress, color1 }: ShortWhiteButtonProps) => {
  return (
    <View
      style={{ height: height * 0.05, width: width * 0.4,borderWidth: 1, borderColor: "#105CE2" }}
      className="text-white rounded-ten items-center justify-center"
    >
      <TouchableOpacity onPress={onPress}>
        <Text className="font-bold text-[14px] text-buttonprimary">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortWhiteButton;
