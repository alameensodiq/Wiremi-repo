import { View, Text, TextInput, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

interface TextLabelBoxProps {
  label: string;
  placeholder: string;
  reduce?: string;
  onChangeText?: (text: string | number) => void;
  disabled?: boolean;
  value?: string;
  number?: boolean;
  both?: boolean;
  max?: boolean;
}

const TextLabelBox = ({
  label,
  placeholder,
  reduce,
  onChangeText,
  disabled,
  value= "",
  number,
  max,
  both
}: TextLabelBoxProps) => {
  const { height, width } = Dimensions.get("window");
  const [internalValue, setInternalValue] = useState(value || ""); // Internal state for input value

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChangeText = (text: string) => {
    let sanitizedText = text;

    if (number) {
      sanitizedText = text.replace(/[^0-9]/g, ""); // Allow only numbers
      if (max && sanitizedText.length > 6) {
        sanitizedText = sanitizedText.slice(0, 6);
      }
    } else if (both) {
      if (max && text.length > 6) {
        sanitizedText = text.slice(0, 6); // Limit input if max is true
      }
    } else {
      sanitizedText = text.replace(/[^a-zA-Z\s!@#$%^&*(),.?":{}|<>-]/g, ""); // Allow letters and special characters
    }

    setInternalValue(sanitizedText); // Update internal state
    onChangeText?.(sanitizedText); // Notify parent component
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
          width: reduce ? width * 0.4 : width * 0.9,
          borderWidth: 1,
          height: height * 0.06
        }}
        className="text-textinputtext text-[14px] rounded-ten border-customgray  p-2"
        placeholder={placeholder}
        editable={!disabled}
        value={internalValue}
        onChangeText={handleChangeText}
        keyboardType={number ? "numeric" : "default"}
      />
    </View>
  );
};

export default TextLabelBox;
