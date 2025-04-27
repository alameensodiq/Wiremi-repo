import { View, Text, Dimensions, TextInput } from "react-native";
import React, { useRef, useState } from "react";


interface FourDigitsProps {
  left?: boolean;
  onChangeText?: (text: string) => void;
}

const FourDigits = ({left,onChangeText } : FourDigitsProps) => {
  const { height, width } = Dimensions.get("window");
    const inputRefs = Array.from({ length: 4 }, () => useRef<TextInput>(null));
    const [inputs, setInputs] = useState<string[]>(Array(6).fill(""));
  
    const onChangepin = (value: string) => {
      if (onChangeText) onChangeText(value); // Pass the PIN value back to the parent if needed
    };
  
    const handleTextChange = (index: number, text: string) => {
      const updatedInputs = [...inputs];
      updatedInputs[index] = text; // Update the specific index with the new value
      setInputs(updatedInputs);
  
      // Concatenate the input values into a single PIN
      const newPin = updatedInputs.join("");
      onChangepin(newPin);
  
      // Move to the next input field if text is entered and not at the last field
      if (text.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      }
    };
  
    const handleKeyPress = (index: number, key: string) => {
      // If the user presses backspace and the field is empty, move to the previous field
      if (key === "Backspace" && inputs[index] === "" && index > 0) {
        inputRefs[index - 1]?.current?.focus();
      }
    };
  return (
    <View className={`flex-row  ${left ? "justify-start" : "justify-center" } items-center gap-2`} style={{width: width}}>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12,borderWidth: 2, height: height * 0.06}}
        className="border-landingdrop rounded-six"
      ></TextInput>
      <TextInput
        style={{ width: width * 0.12, borderWidth: 2, height: height * 0.06 }}
        className="border-landingdrop rounded-six"
      ></TextInput>
    </View>
  );
};

export default FourDigits;
