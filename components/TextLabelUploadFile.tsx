import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import TextBarcode from '../assets/uploadfile.svg'

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
}

const TextLabelUploadFile = ({ label, placeholder }: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      className="flex-col items-start gap-2"
      style={{
        shadowColor: "#101828",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{ width: width * 0.9, borderWidth: 1, height: height * 0.06 }}
        className="text-textinputtext text-[14px] rounded-ten border-customgray p-2 relative"
        placeholder={placeholder}
      />
      <View className="absolute top-10 right-2">
        <TextBarcode/>
      </View>
    </View>
  );
};

export default TextLabelUploadFile;
