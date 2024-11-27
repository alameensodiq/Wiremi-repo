import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import InvestNows from '../assets/investnow.svg';

interface InvestNowProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const InvestNow = ({ title, onPress, color1 }: InvestNowProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center">
    <View
      style={{ height: height * 0.05, width: width * 0.4,borderWidth: 1, borderColor: "#105CE2" }}
      className="text-white rounded-ten items-center justify-center flex-row"
    >
        <InvestNows />
        <Text className="font-bold text-[14px] text-buttonprimary ml-2">
          {title}
        </Text>
    </View>
    </TouchableOpacity>
  );
};

export default InvestNow;
