import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface LongButtonProps {
  onPress: () => void;
  title: string;
}

const { height, width } = Dimensions.get("window");

const BlueSignInButton = ({ title, onPress }: LongButtonProps) => {
    return (
        <View
          style={{ height: height * 0.055, width: width * 0.9}}
          className="bg-buttonprimary rounded-ten items-center justify-center"
        >
          <TouchableOpacity onPress={onPress}>
            <Text className="font-bold text-[14px] text-white">{title}</Text>
          </TouchableOpacity>
        </View>
      );
}

export default BlueSignInButton