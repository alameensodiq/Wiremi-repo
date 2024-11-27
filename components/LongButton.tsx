import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
}

const { height, width } = Dimensions.get("window");

const LongButton = ({ title, onPress }: LongButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{ height: height * 0.05, width: width * 0.8 }}
      className="bg-buttonprimary rounded-ten items-center justify-center"
    >
        <Text className="font-bold text-[14px] text-white">{title}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default LongButton;
