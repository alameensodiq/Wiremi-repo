import { View, Text, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";

interface TransactionTextLabelProps {
  label: string;
  placeholder: string;
  onChangeText?: (text: any) => void;
  value?: string;
}

const TransactionTextLabel = ({
  label,
  placeholder,
  onChangeText,
  value
}: TransactionTextLabelProps) => {
  const { height, width } = Dimensions.get("window");
  const [internalValue, setInternalValue] = useState(value || ""); // Internal state for input value

  const handleChangeText = (text: string) => {
    // Allow only numbers and a single decimal point
    let sanitizedText = text.replace(/[^0-9.]/g, "");
  
    // Prevent multiple leading zeros (e.g., "00" -> "0")
    sanitizedText = sanitizedText.replace(/^0{2,}/, "0");
  
    // Prevent multiple decimal points
    const decimalCount = (sanitizedText.match(/\./g) || []).length;
    if (decimalCount > 1) {
      sanitizedText = sanitizedText.slice(0, -1); // Remove the last entered `.`
    }
  
    setInternalValue(sanitizedText); // Update the internal state
    onChangeText?.(sanitizedText); // Notify the parent component
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
        value={internalValue}
        onChangeText={handleChangeText}
        keyboardType="numeric"
      />
      {/* <Text
        style={{ position: "absolute", bottom: 5, right: 15 }}
        className="text-buttonprimary font-[8px]"
      >
        $146,950.00
      </Text> */}
    </View>
  );
};

export default TransactionTextLabel;
