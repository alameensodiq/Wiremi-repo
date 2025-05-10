import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import TextBarcode from "../assets/textbarcode.svg";
import { Pressable } from "react-native-gesture-handler";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
  onChangeText?: (text: any) => void;
  value?: string;
  onPress?: () => void;
}

const TextLabelBoxBarcode = ({
  label,
  placeholder,
  onChangeText,
  value,
  onPress
}: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");
  const handleChangeText = (text: string) => {
    onChangeText?.(text); // Notify the parent component
  };

  return (
    <View
      className="flex-col items-start gap-2"
      style={{
        shadowColor: "#101828",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3
      }}
    >
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{ width: width * 0.9, borderWidth: 1, height: height * 0.06 }}
        className="text-textinputtext text-[14px] rounded-ten border-customgray p-2 relative"
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
      />
      <View className="absolute top-10 right-2">
        {/* <Pressable onPress={onPress}> */}
          <TextBarcode />
        {/* </Pressable> */}
      </View>
    </View>
  );
};

export default TextLabelBoxBarcode;
