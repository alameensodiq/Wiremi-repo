import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const WhiteSignInButton = ({ title, onPress, color1 }: LongButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{ height: height * 0.055, width: width * 0.9, opacity: 0.2 }}
      className='bg-buttonprimary rounded-ten items-center justify-center'
    >
        <Text
        style={{color:'#1E1B39'}}
          className='font-bold text-[16px]'
        >
          {title}
        </Text>
    </View>
    </TouchableOpacity>
  );
};

export default WhiteSignInButton;
