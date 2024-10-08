import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
}

const { height, width } = Dimensions.get("window");

const LongButton = ({ title, onPress }: LongButtonProps) => {
  return (
    <View
      style={{ height: height * 0.05, width: width * 0.8 }}
      className="bg-buttonprimary rounded-ten items-center justify-center"
    >
      <TouchableOpacity onPress={onPress}>
        <Text className="font-bold text-[14px] text-white">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LongButton;
