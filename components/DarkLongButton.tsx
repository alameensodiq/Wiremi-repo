import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Pay from "../assets/pay.svg";

interface DarkLongButtonProps {
  onPress: () => void;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const DarkLongButton = ({ onPress, color1 }: DarkLongButtonProps) => {
  return (
    <View
      style={{ height: height * 0.055, width: width * 0.9, opacity: 0.2 }}
      className={`${
        color1 ? "bg-white" : "bg-black"
      } rounded-ten items-center justify-center`}
    >
      <TouchableOpacity onPress={onPress}>
         <Pay />
      </TouchableOpacity>
    </View>
  );
};

export default DarkLongButton;
