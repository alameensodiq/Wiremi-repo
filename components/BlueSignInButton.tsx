import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
  reduce?: boolean;
  black?: boolean;
  disabled?:boolean;
}

const { height, width } = Dimensions.get("window");

const BlueSignInButton = ({
  title,
  onPress,
  color1,
  reduce,
  black,
  disabled
}: LongButtonProps) => {
  return (
    <TouchableOpacity onPress={disabled ? undefined : onPress} // Disable click event
    disabled={disabled} >
    <View
      style={{
        height: height * 0.055,
        width: reduce ? width * 0.82 : width * 0.9
      }}
      className={`${
        color1 ? "bg-white" : black  ? "bg-black" : "bg-buttonprimary"
      } rounded-ten items-center justify-center`}
    >
        <Text
          className={`font-bold text-[14px] ${
            color1 ? "text-primary" : "text-white"
          }`}
        >
          {title}
        </Text>
    </View>
    </TouchableOpacity>
  );
};

export default BlueSignInButton;
