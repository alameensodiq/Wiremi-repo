import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

interface TransactionTextLabelProps {
  label: string;
  placeholder: string;
}

const TransactionTextLabel = ({
  label,
  placeholder
}: TransactionTextLabelProps) => {
  const { height, width } = Dimensions.get("window");
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
        style={{
          width: width * 0.9,
          borderWidth: 1,
          height: height * 0.06,
          position: "relative",
          shadowColor: "#101828",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2, 
          borderColor: "#d1d5db"
        }}
        className="text-textinputtext text-[14px] rounded-ten border-customgray  p-2"
        placeholder={placeholder}
      />
      <Text
        style={{ position: "absolute", bottom: 5, right: 15 }}
        className="text-buttonprimary font-[8px]"
      >
        $146,950.00
      </Text>
    </View>
  );
};

export default TransactionTextLabel;
