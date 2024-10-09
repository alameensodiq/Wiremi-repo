import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean
}

const { height, width } = Dimensions.get("window");

const BlueSignInButton = ({ title, onPress, color1}: LongButtonProps) => {
    return (
        <View
          style={{ height: height * 0.055, width: width * 0.9}}
          className={`${color1 ? "bg-white"  : "bg-buttonprimary"} rounded-ten items-center justify-center`}
        >
          <TouchableOpacity onPress={onPress}>
            <Text className={`font-bold text-[14px] ${color1 ? "text-primary"  : "text-white"}`}>{title}</Text>
          </TouchableOpacity>
        </View>
      );
}

export default BlueSignInButton