import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import CaratDown from "../assets/caratdown.svg";

interface TextLabelBoxProps {
    label: string;
    placeholder: string;
  }
  

const TransparentSelectButton = ({ label, placeholder }: TextLabelBoxProps) => {
    const { height, width } = Dimensions.get("window");
  return (
    <View className="flex-col items-start gap-2">
      <Text className="text-textblack">{label}</Text>
      <View
        style={{ width: width * 0.9, borderWidth: 1 }}
        className="flex-row text-textinputtext text-[14px] rounded-ten border-customgray  p-2 justify-between items-center"
      ><Text className="text-textinputtext text-[14px]  p-2 justify-between items-center">{placeholder}</Text><CaratDown /></View>
    </View>
  )
}

export default TransparentSelectButton