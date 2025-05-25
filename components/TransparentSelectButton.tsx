import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import CaratDown from "../assets/caratdown.svg";
import { useAppContext } from "@/Context/useAppContext";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
  onPress?: () => void;
  payload?: string;
}

const TransparentSelectButton = ({
  label,
  placeholder,
  onPress,
  payload
}: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");
  const { theme } = useAppContext();
  return (
    <View className="flex-col items-start gap-2">
      <Text
        className={`${theme === "dark" ? "text-[#ffffff]" : "text-textblack"}`}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={{ width: width * 0.9, borderWidth: 1,   backgroundColor: theme === "dark" ? "#ffffff" : "" }}
        onPress={onPress}
        
        className="flex-row text-textinputtext text-[14px] rounded-ten border-customgray  p-2 justify-between items-center"
      >
        <Text
          className={`t text-[14px]  p-2 justify-between items-center${
            theme === "dark" ? "text-textinputtext" : "text-textinputtext"
          }`}
        >
          {payload ? payload : placeholder}
        </Text>
        <CaratDown />
      </TouchableOpacity>
    </View>
  );
};

export default TransparentSelectButton;
